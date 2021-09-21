import React, { useEffect, useState } from 'react';

import { observer } from 'mobx-react-lite';

import { Button, CircularProgress, Modal, Paper } from '@material-ui/core';

import useStyles from './style';
import sergeyPhoto from '../../assets/IMG-20200626-WA0050.jpg';
import LoginForm from './LoginForm';
import { LoginFormType } from './LoginForm/interface';
import useStores from '../../stores';

const songUrl = require('../../assets/molitva.mp3').default;

const LoginPage = () => {
  const classes = useStyles();

  const { mainStore } = useStores();
  const { fetchLoginPageText, loginPageText } = mainStore;

  const [isModalOpened, setIsModalOpened] = useState(false);
  const [loginType, setLoginType] = useState<LoginFormType>(LoginFormType.Default);

  useEffect(() => {
    (async () => {
      await fetchLoginPageText();
    })();
  }, []);

  function openClosePeopleLogin(): void {
    setIsModalOpened(true);
    setLoginType(LoginFormType.Default);
  }

  function openGuestsLogin(): void {
    setIsModalOpened(true);
    setLoginType(LoginFormType.Guest);
  }

  function closeModal(): void {
    setIsModalOpened(false);
  }

  if (loginPageText === null) {
    return <CircularProgress />;
  }

  const { textTitle, textLoginButton, textInfo, textRequestPasswordButton, textPhotoDescription } = loginPageText;

  return (
    <div className={classes.root}>
      <div className={classes.leftSection}>
        <div className={classes.photoAndTextWrapper}>
          <img className={classes.photo} src={sergeyPhoto} alt="Sergey" />
          <div className={classes.infoSection}>
            <div className={classes.name}>Сергей Варакин</div>
            <div className={classes.info}>{textInfo}</div>
            <div className={classes.loginButtons}>
              <Button color="primary" onClick={openClosePeopleLogin} variant="outlined">
                {textLoginButton}
              </Button>
              <Button color="primary" onClick={openGuestsLogin} variant="outlined">
                {textRequestPasswordButton}
              </Button>
            </div>
          </div>

          <div className={classes.yearsAndAudio}>
            <div>07.06.1993 – 24.09.2021</div>
            <div>
              <audio controls src={songUrl}>
                Your browser does not support the
                <code>audio</code> element.
              </audio>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.rightSection}>
        <div className={classes.title}>{textTitle}</div>
      </div>

      <Modal className={classes.modal} open={isModalOpened} onClose={closeModal}>
        <Paper className={classes.formWrapper}>
          <LoginForm type={loginType} />
        </Paper>
      </Modal>
    </div>
  );
};

export default observer(LoginPage);
