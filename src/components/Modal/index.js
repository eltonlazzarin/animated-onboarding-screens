import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { FaTrash, FaPen } from 'react-icons/fa';

import Container from './styles';

export default function Modal({ setShow }) {
  return (
    <Container>
      <div>
        <img
          src="https://avatars2.githubusercontent.com/u/53025782?s=460&u=4aa2f5d075b8c3b00a77dcc0c475809f99dca504&v=4"
          alt="Elton"
        />

        <section>
          <span>
            <AiOutlineClose
              onClick={() => setShow(false)}
              size={24}
              color={'#212121'}
            />
          </span>

          <main>
            <h2>Juliano Reis</h2>
            <p>Frontend Developer</p>
            <strong>Idade</strong>
            <p>Lorem Ipsum</p>
            <strong>Tempo de empresa</strong>
            <p>Lorem Ipsum</p>
            <strong>Projetos que participou</strong>
            <p>Lorem Ipsum</p>

            <footer>
              <FaTrash size={18} color="#212121" />
              <Link to="/editnaver/1">
                <FaPen size={18} color="#212121" />
              </Link>
            </footer>
          </main>
        </section>
      </div>
    </Container>
  );
}
