import React from 'react';
import { FaTrash, FaPen } from 'react-icons/fa';

import Button from '../../components/Button/styles';
import Header from '../../components/Header';

import { Container } from './styles';

export default function Main() {
  return (
    <>
      <Header />

      <Container>
        <div>
          <h3>Navers</h3>
          <Button>Adicionar Naver</Button>
        </div>

        <main>
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
