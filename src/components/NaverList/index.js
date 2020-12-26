import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaTrash, FaPen } from 'react-icons/fa';

import { Context } from '../../store';

import EmptyNaverList from '../EmptyNaverList';

import { Container } from './styles';

export default function NaverList({ setNaverID }) {
  const [state, dispatch] = useContext(Context);

  function handleModalNaverData(id) {
    dispatch({ type: 'SET_SHOW_MODAL', payload: true });
    setNaverID(id);
  }

  function handleModalDeleteNaver(id) {
    dispatch({ type: 'SET_DELETE_NAVER_DIALOG', payload: true });
    setNaverID(id);
  }

  return (
    <Container>
      {state.navers.length === 0 ? (
        <EmptyNaverList />
      ) : (
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
      )}
    </Container>
  );
}
