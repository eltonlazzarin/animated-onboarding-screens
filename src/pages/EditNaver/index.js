import React, { useState, useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';

import api from '../../services/api';
import { Context } from '../../store';

import Button from '../../components/Button/styles';
import Header from '../../components/Header';
import ErrorDialog from '../../components/ErrorDialog';
import ConfirmationDialog from '../../components/ConfirmationDialog';
import Input from '../../components/Input/styles';

import dateMask from '../../utils/dateMask';
import parseDate from '../../utils/parseDate';

import { Container } from './styles';

export default function EditNaver() {
  const [state, dispatch] = useContext(Context);

  const [job_role, setJobRole] = useState('');
  const [admission_date, setAdmissionDate] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [project, setProject] = useState('');
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');

  const [naverData, setNaverData] = useState({});

  const { id } = useParams();

  const token = localStorage.getItem('@Navedex:Token');

  useEffect(() => {
    api
      .get(`navers/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setNaverData(response.data);
      });

    function initialInputNaverData() {
      setJobRole(naverData.job_role);
      setAdmissionDate(parseDate(naverData.admission_date));
      setBirthdate(parseDate(naverData.birthdate));
      setProject(naverData.project);
      setName(naverData.name);
      setUrl(naverData.url);
    }

    initialInputNaverData();
  }, [
    token,
    id,
    naverData.admission_date,
    naverData.birthdate,
    naverData.job_role,
    naverData.name,
    naverData.project,
    naverData.url,
  ]);

  const data = {
    job_role,
    admission_date,
    birthdate,
    project,
    name,
    url,
  };

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await api.put(`navers/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        dispatch({ type: 'SET_CONFIRMATION_DIALOG', payload: true });
      }
    } catch (error) {
      dispatch({ type: 'SET_ERROR_DIALOG', payload: true });
    }
  }

  return (
    <>
      <Header />

      {state.confirmation && <ConfirmationDialog action="atualizado" />}

      {state.errorMessage && <ErrorDialog action="atualizar" />}

      <Container>
        <header>
          <Link to="/navers">
            <FaChevronLeft size={19} color="#212121" />
          </Link>
          <h2>Editar Naver</h2>
        </header>

        <form onSubmit={handleSubmit}>
          <section>
            <div>
              <label htmlFor="name">Nome</label>
              <Input
                id="name"
                placeholder="Nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                small
              />
            </div>

            <div>
              <label htmlFor="job_role">Cargo</label>
              <Input
                id="job_role"
                placeholder="Cargo"
                value={job_role}
                onChange={(e) => setJobRole(e.target.value)}
                required
                small
              />
            </div>

            <div>
              <label htmlFor="birthdate">Idade</label>
              <Input
                id="birthdate"
                placeholder="Idade"
                value={dateMask(birthdate)}
                onChange={(e) => setBirthdate(e.target.value)}
                maxLength="10"
                required
                small
              />
            </div>

            <div>
              <label htmlFor="admission_date">Tempo de empresa</label>
              <Input
                id="admission_date"
                placeholder="Tempo de empresa"
                value={dateMask(admission_date)}
                onChange={(e) => setAdmissionDate(e.target.value)}
                maxLength="10"
                required
                small
              />
            </div>

            <div>
              <label htmlFor="project">Projetos que participou</label>
              <Input
                id="project"
                placeholder="Projetos que participou"
                value={project}
                onChange={(e) => setProject(e.target.value)}
                required
                small
              />
            </div>

            <div>
              <label htmlFor="url">URL da foto do Naver</label>
              <Input
                id="url"
                type="url"
                placeholder="URL da foto do Naver"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                required
                small
              />
            </div>
          </section>

          <footer>
            <Button type="submit">Salvar</Button>
          </footer>
        </form>
      </Container>
    </>
  );
}
