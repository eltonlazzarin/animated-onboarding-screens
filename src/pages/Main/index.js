import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTrash, FaPen } from 'react-icons/fa';

import Button from '../../components/Button/styles';
import Header from '../../components/Header';
import Modal from '../../components/Modal';
import DeleteDialog from '../../components/DeleteDialog';
import ConfirmationDialog from '../../components/ConfirmationDialog';

import { Container } from './styles';

export default function Main() {
  const [show, setShow] = useState(false);
  const [deleteNaver, setDeleteNaver] = useState(false);
  const [confirmation, setConfirmation] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
          <article>
            <button onClick={() => setShow(true)}>
              <img
                src="https://avatars2.githubusercontent.com/u/53025782?s=460&u=4aa2f5d075b8c3b00a77dcc0c475809f99dca504&v=4"
                alt="user"
              />
            </button>

            <strong>Juliano Reis</strong>
            <p>Front-end Developer</p>

            <footer>
              <FaTrash
                onClick={() => setDeleteNaver(true)}
                size={18}
                color="#212121"
              />
              <Link to="/editnaver/1">
                <FaPen size={18} color="#212121" />
              </Link>
            </footer>
          </article>

          <article>
            <img
              src="https://avatars2.githubusercontent.com/u/53025782?s=460&u=4aa2f5d075b8c3b00a77dcc0c475809f99dca504&v=4"
              alt="user"
            />

            <strong>Juliano Reis</strong>
            <p>Front-end Developer</p>

            <footer>
              <FaTrash size={18} color="#212121" />
              <FaPen size={18} color="#212121" />
            </footer>
          </article>

          <article>
            <img
              src="https://avatars2.githubusercontent.com/u/53025782?s=460&u=4aa2f5d075b8c3b00a77dcc0c475809f99dca504&v=4"
              alt="user"
            />

            <strong>Juliano Reis</strong>
            <p>Front-end Developer</p>

            <footer>
              <FaTrash size={18} color="#212121" />
              <FaPen size={18} color="#212121" />
            </footer>
          </article>

          <article>
            <img
              src="https://avatars2.githubusercontent.com/u/53025782?s=460&u=4aa2f5d075b8c3b00a77dcc0c475809f99dca504&v=4"
              alt="user"
            />

            <strong>Juliano Reis</strong>
            <p>Front-end Developer</p>

            <footer>
              <FaTrash size={18} color="#212121" />
              <FaPen size={18} color="#212121" />
            </footer>
          </article>

          <article>
            <img
              src="https://avatars2.githubusercontent.com/u/53025782?s=460&u=4aa2f5d075b8c3b00a77dcc0c475809f99dca504&v=4"
              alt="user"
            />

            <strong>Juliano Reis</strong>
            <p>Front-end Developer</p>

            <footer>
              <FaTrash size={18} color="#212121" />
              <FaPen size={18} color="#212121" />
            </footer>
          </article>

          <article>
            <img
              src="https://avatars2.githubusercontent.com/u/53025782?s=460&u=4aa2f5d075b8c3b00a77dcc0c475809f99dca504&v=4"
              alt="user"
            />

            <strong>Juliano Reis</strong>
            <p>Front-end Developer</p>

            <footer>
              <FaTrash size={18} color="#212121" />
              <FaPen size={18} color="#212121" />
            </footer>
          </article>
        </main>
      </Container>
    </>
  );
}
