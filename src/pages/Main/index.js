import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaTrash, FaPen } from 'react-icons/fa';

import api from '../../services/api';
import { Context } from '../../store';

import Button from '../../components/Button/styles';
import Header from '../../components/Header';
import NaverModal from '../../components/NaverModal';
import DeleteDialog from '../../components/DeleteDialog';
import ConfirmationDialog from '../../components/ConfirmationDialog';

import { Container } from './styles';

export default function Main() {
  const [naverID, setNaverID] = useState('');

  const [state, dispatch] = useContext(Context);

  useEffect(() => {
    const token = localStorage.getItem('@Navedex:Token');

    api
      .get('navers', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        dispatch({ type: 'SET_NAVERS', payload: response.data });
      });
  }, [state.navers]);

  function handleModalNaverData(id) {
    dispatch({ type: 'SET_SHOW_MODAL', payload: true });
    setNaverID(id);
  }

  function handleModalDeleteNaver(id) {
    dispatch({ type: 'SET_DELETE_NAVER_DIALOG', payload: true });
    setNaverID(id);
  }

  return (
    <>
      <Header />
      {state.showModal && <NaverModal id={naverID} />}

      {state.deleteNaver && <DeleteDialog id={naverID} />}

      {state.confirmation && <ConfirmationDialog action="excluído" />}

      <Container>
        <header>
          <h3>Navers</h3>

          <Link to="/createnaver">
            <Button>Adicionar Naver</Button>
          </Link>
        </header>

        <main>
          {state.navers.map((naver) => (
            <article key={naver.id}>
              <div onClick={() => handleModalNaverData(naver.id)}>
                <img src={naver.url} alt={naver.name} />
              </div>

              <strong>{naver.name}</strong>
              <p>{naver.job_role}</p>

              <footer>
                <FaTrash
                  onClick={() => handleModalDeleteNaver(naver.id)}
                  size={18}
                  color="#212121"
                />
                <Link to={`/editnaver/${naver.id}`}>
                  <FaPen size={18} color="#212121" />
                </Link>
              </footer>
            </article>
          ))}
        </main>
      </Container>
    </>
  );
}
