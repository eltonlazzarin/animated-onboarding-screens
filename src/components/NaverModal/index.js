import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { FaTrash, FaPen } from 'react-icons/fa';

import api from '../../services/api';
import { Context } from '../../store';

import parseDate from '../../utils/parseDate';
import parseDateToYearMonth from '../../utils/parseDateToYearMonth';

import Container from './styles';

export default function NaverModal({ id }) {
  const [state, dispatch] = useContext(Context);

  useEffect(() => {
    async function getNaverData() {
      const token = localStorage.getItem('@Navedex:Token');

      const response = await api.get(`navers/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      dispatch({ type: 'SET_SINGLE_NAVER', payload: response.data });
    }

    if (!id) {
      dispatch({ type: 'SET_SHOW_MODAL', payload: false });
    }

    getNaverData();
  }, [state.naver, id]);

  function handleOnpenDeleteDialog() {
    dispatch({ type: 'SET_DELETE_NAVER_DIALOG', payload: true });
  }

  function handleCloseModal() {
    dispatch({ type: 'SET_SHOW_MODAL', payload: false });
  }

  return (
    <Container>
      <div>
        <img src={state.naver.url} alt={state.naver.name} />

        <section>
          <span>
            <AiOutlineClose
              onClick={handleCloseModal}
              size={24}
              color="#212121"
            />
          </span>

          <main>
            <h2>{state.naver.name}</h2>
            <p>{state.naver.job_role}</p>
            <strong>Idade</strong>
            <p>{parseDateToYearMonth(parseDate(state.naver.birthdate))}</p>
            <strong>Tempo de empresa</strong>
            <p>{parseDateToYearMonth(parseDate(state.naver.admission_date))}</p>
            <strong>Projetos que participou</strong>
            <p>{state.naver.project}</p>

            <footer>
              <FaTrash
                onClick={handleOnpenDeleteDialog}
                size={18}
                color="#212121"
              />
              <Link to={`/editnaver/${state.naver.id}`}>
                <FaPen size={18} color="#212121" />
              </Link>
            </footer>
          </main>
        </section>
      </div>
    </Container>
  );
}
