import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { FaTrash, FaPen } from 'react-icons/fa';

import api from '../../services/api';
import { Context } from '../../store';

import parseDate from '../../utils/parseDate';

import Container from './styles';

export default function NaverModal({ id }) {
  const [naver, setNaver] = useState({});

  const [, dispatch] = useContext(Context);

  useEffect(() => {
    async function getNaverData() {
      const token = localStorage.getItem('@Navedex:Token');

      const response = await api.get(`navers/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setNaver(response.data);
    }

    if (!id) {
      dispatch({ type: 'SET_SHOW_MODAL', payload: false });
    }

    getNaverData();
  }, [naver, id]);

  function handleOnpenDeleteDialog() {
    dispatch({ type: 'SET_DELETE_NAVER_DIALOG', payload: true });
  }

  function handleCloseModal() {
    dispatch({ type: 'SET_SHOW_MODAL', payload: false });
  }

  return (
    <Container>
      <div>
        <img src={naver.url} alt={naver.name} />

        <section>
          <span>
            <AiOutlineClose
              onClick={handleCloseModal}
              size={24}
              color="#212121"
            />
          </span>

          <main>
            <h2>{naver.name}</h2>
            <p>{naver.job_role}</p>
            <strong>Idade</strong>
            <p>{parseDate(naver.birthdate)}</p>
            <strong>Tempo de empresa</strong>
            <p>{parseDate(naver.admission_date)}</p>
            <strong>Projetos que participou</strong>
            <p>{naver.project}</p>

            <footer>
              <FaTrash
                onClick={handleOnpenDeleteDialog}
                size={18}
                color="#212121"
              />
              <Link to={`/editnaver/${naver.id}`}>
                <FaPen size={18} color="#212121" />
              </Link>
            </footer>
          </main>
        </section>
      </div>
    </Container>
  );
}
