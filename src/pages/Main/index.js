import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import { Context } from '../../store';

import Loading from '../../components/Loading';
import Button from '../../components/Button/styles';
import Header from '../../components/Header';
import NaverModal from '../../components/NaverModal';
import DeleteDialog from '../../components/DeleteDialog';
import ConfirmationDialog from '../../components/ConfirmationDialog';
import NaverList from '../../components/NaverList';

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
        dispatch({ type: 'SET_IS_LOADING', payload: false });
      });
  }, [state.navers]);

  return (
    <>
      {state.loading ? (
        <Loading />
      ) : (
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

            <NaverList setNaverID={setNaverID} />
          </Container>
        </>
      )}
    </>
  );
}
