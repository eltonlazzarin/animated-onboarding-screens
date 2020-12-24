import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaTrash, FaPen } from 'react-icons/fa';

import api from '../../services/api';

import Button from '../../components/Button/styles';
import Header from '../../components/Header';
import NaverModal from '../../components/NaverModal';
import DeleteDialog from '../../components/DeleteDialog';
import ConfirmationDialog from '../../components/ConfirmationDialog';

import { Container } from './styles';

export default function Main() {
  const [navers, setNavers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [deleteNaver, setDeleteNaver] = useState(false);
  const [confirmation, setConfirmation] = useState(false);
  const [naverID, setNaverID] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('@Navedex:Token');

    api
      .get('navers', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setNavers(response.data));
  }, [navers]);

  function handleModalNaverData(id) {
    setShowModal(true);
    setNaverID(id);
  }

  function handleModalDeleteNaver(id) {
    setDeleteNaver(true);
    setNaverID(id);
  }

  return (
    <>
      <Header />
      {showModal && (
        <NaverModal
          setShowModal={setShowModal}
          setDeleteNaver={setDeleteNaver}
          id={naverID}
        />
      )}

      {deleteNaver && (
        <DeleteDialog
          setDeleteNaver={setDeleteNaver}
          setConfirmation={setConfirmation}
          setshowModal={setShowModal}
          id={naverID}
        />
      )}

      {confirmation && (
        <ConfirmationDialog
          action="excluído"
          setConfirmation={setConfirmation}
        />
      )}

      <Container>
        <header>
          <h3>Navers</h3>

          <Link to="/createnaver">
            <Button>Adicionar Naver</Button>
          </Link>
        </header>

        <main>
          {navers.map((naver) => (
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
