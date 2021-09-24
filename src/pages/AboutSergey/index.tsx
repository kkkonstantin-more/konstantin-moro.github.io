import React, { useEffect, useState } from 'react';

import useStyles from './style';
import { observer } from 'mobx-react-lite';
import useStores from '../../stores';
import { Button, CircularProgress, Modal, Paper } from '@material-ui/core';
import ShareForm from './ShareForm';
import { useHistory } from 'react-router-dom';

const AboutSergeyPage = () => {
  const classes = useStyles();

  const { mainStore } = useStores();
  const { aboutSergeyPageText, fetchAboutSergeyPageText } = mainStore;
  const history = useHistory();

  const [isModalOpened, setIsModalOpened] = useState(false);

  function openModal() {
    setIsModalOpened(true);
  }

  function closeModal() {
    setIsModalOpened(false);
  }

  useEffect(() => {
    (async () => {
      if (!aboutSergeyPageText) {
        try {
          await fetchAboutSergeyPageText();
        } catch (e: any) {
          if (e.response?.data?.statusCode === 401 || e.response?.data?.statusCode === 403) {
            localStorage.clear();
            alert('Ваш аккаунт должен быть подтвержден администратором, чтобы вы получили доступ к этой странице');
            history.push('/');
          }
        }
      }
    })();
  }, []);

  if (!aboutSergeyPageText) {
    return <CircularProgress />;
  }

  const { textAboutSergey } = aboutSergeyPageText;

  return (
    <div className={classes.root}>
      <div>{textAboutSergey}</div>
      <div style={{ marginTop: '4rem' }}>
        <div>Если у вас есть чем поделиться, то нажмите на кнопку ниже</div>
        <Button color="primary" variant="outlined" onClick={openModal} style={{ margin: '2rem 0 4rem 0' }}>
          Поделиться
        </Button>

        <Modal className={classes.modal} open={isModalOpened} onClose={closeModal}>
          <Paper className={classes.formWrapper}>
            <ShareForm />
          </Paper>
        </Modal>
      </div>
    </div>
  );
};

export default observer(AboutSergeyPage);
