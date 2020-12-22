import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaTrash, FaPen } from 'react-icons/fa';

import api from '../../services/api';

import Button from '../../components/Button/styles';
import Header from '../../components/Header';
import Modal from '../../components/Modal';
import DeleteDialog from '../../components/DeleteDialog';
import ConfirmationDialog from '../../components/ConfirmationDialog';

import { Container } from './styles';

export default function Main() {
  const [navers, setNavers] = useState([]);
  const [show, setShow] = useState(false);
  const [deleteNaver, setDeleteNaver] = useState(false);
  const [confirmation, setConfirmation] = useState(false);

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

  return (
    <>
      <Header />
      {show && <Modal show={show} setShow={setShow} />}

      {deleteNaver && (
        <DeleteDialog
          deleteNaver={deleteNaver}
          setDeleteNaver={setDeleteNaver}
        />
      )}

      {confirmation && (
        <ConfirmationDialog action="criado" setConfirmation={setConfirmation} />
      )}

      <Container>
        <div>
          <h3>Navers</h3>

          <Link to="/createnaver">
            <Button>Adicionar Naver</Button>
          </Link>
        </div>

        <main>
          {navers.map((naver) => (
            <article key={naver.id}>
              <button onClick={() => setShow(true)}>
                <img src={naver.url} alt={naver.name} />
              </button>

              <strong>{naver.name}</strong>
              <p>{naver.job_role}</p>

              <footer>
                <FaTrash
                  onClick={() => setDeleteNaver(true)}
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
