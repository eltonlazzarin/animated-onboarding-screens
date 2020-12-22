import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';

import Button from '../../components/Button/styles';
import Header from '../../components/Header';
import ConfirmationDialog from '../../components/ConfirmationDialog';
import Input from '../../components/Input/styles';

import { Container } from './styles';

export default function NewNaver() {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [age, setAge] = useState('');
  const [companyTime, setCompanyTime] = useState('');
  const [projects, setProjects] = useState('');
  const [photo, setPhoto] = useState('');
  const [confirmation, setConfirmation] = useState(true);

  return (
    <>
      <Header />

      {confirmation && (
        <ConfirmationDialog action="criado" setConfirmation={setConfirmation} />
      )}
      <Container>
        <header>
          <Link to="/navers">
            <FaChevronLeft size={19} color="#212121" />
          </Link>
          <h2>Adicionar Naver</h2>
        </header>

        <form onSubmit={() => {}}>
          <section>
            <div>
              <label htmlFor="name">Nome</label>
              <Input
                id="name"
                placeholder="Nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                small
              />
            </div>

            <div>
              <label htmlFor="position">Cargo</label>
              <Input
                id="position"
                placeholder="Cargo"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                small
              />
            </div>

            <div>
              <label htmlFor="age">Idade</label>
              <Input
                id="age"
                placeholder="Idade"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                small
              />
            </div>

            <div>
              <label htmlFor="companyTime">Tempo de empresa</label>
              <Input
                id="companyTime"
                placeholder="Tempo de empresa"
                value={companyTime}
                onChange={(e) => setCompanyTime(e.target.value)}
                small
              />
            </div>

            <div>
              <label htmlFor="projects">Projetos que participou</label>
              <Input
                id="projects"
                placeholder="Projetos que participou"
                value={projects}
                onChange={(e) => setProjects(e.target.value)}
                small
              />
            </div>

            <div>
              <label htmlFor="photo">URL da foto do Naver</label>
              <Input
                id="photo"
                placeholder="URL da foto do Naver"
                value={photo}
                onChange={(e) => setPhoto(e.target.value)}
                small
              />
            </div>
          </section>

          <footer>
            <Button>Salvar</Button>
          </footer>
        </form>
      </Container>
    </>
  );
}
