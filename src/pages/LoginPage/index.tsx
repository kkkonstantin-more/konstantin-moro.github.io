import React, { useEffect, useState } from 'react';

import { observer } from 'mobx-react-lite';

import { Button, CircularProgress, Modal, Paper } from '@material-ui/core';

import useStyles from './style';
import sergeyPhoto from '../../assets/img.png';
import LoginForm from './LoginForm';
import { LoginFormType } from './LoginForm/interface';
import useStores from '../../stores';
import { MusicNote, MusicOff } from '@material-ui/icons';
import { LoginPageText } from '../../stores/main/interface';
import { RouteComponentProps, useHistory } from 'react-router-dom';

const songUrl = require('../../assets/molitva.mp3').default;

const LoginPage = () => {
  const classes = useStyles();

  const { mainStore } = useStores();
  const { fetchLoginPageText, loginPageText } = mainStore;
  const history: RouteComponentProps['history'] = useHistory();

  const [isModalOpened, setIsModalOpened] = useState(false);
  const [loginType, setLoginType] = useState<LoginFormType>(LoginFormType.Default);
  const [song, setSong] = useState<null | HTMLAudioElement>(null);
  const [songIsPlaying, setSongIsPlaying] = useState(false);

  useEffect(() => {
    (async () => {
      await fetchLoginPageText();
    })();
  }, []);

  function toggleSong(): void {
    if (song) {
      if (songIsPlaying) {
        song.pause();
        setSongIsPlaying(false);
      } else {
        song.play();
        setSongIsPlaying(true);
      }
    } else {
      const newSong = new Audio(songUrl);
      setSong(newSong);
      newSong.play();
      setSongIsPlaying(true);
    }
  }

  function openClosePeopleLogin(): void {
    if (localStorage.getItem('isAuthenticated') === 'true') {
      history.push('/about');
      return;
    }

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

  // if (loginPageText === null) {
  //   return <CircularProgress />;
  // }

  const loginPageTextDemo: LoginPageText = {
    textInfo: 'В память о нежно любимом сыне, младшем брате, верном друге и бесконечно добром человеке….',
    textLoginButton: 'Войти',
    textPhotoDescription: 'Сергей Варакин 07.06.1993 – 24.09.2021',
    textRequestPasswordButton: 'Запросить пароль',
    textTitle: 'Этот сайт создан для тех, кто знал и любил Сергея, кто хранит о нём добрую память и тепло в сердце.',
  };

  const { textTitle, textLoginButton, textInfo, textRequestPasswordButton } = loginPageTextDemo;

  return (
    <div className={classes.root}>
      <div className={classes.songContainer} onClick={toggleSong}>
        {songIsPlaying ? <MusicOff fontSize="large" color="primary" /> : <MusicNote fontSize="large" color="primary" />}
        <div>Включить звук</div>
      </div>
      <div className={classes.leftSection}>
        <img className={classes.photo} src={sergeyPhoto} alt="Sergey" />
      </div>

      <div className={classes.rightSection}>
        <div className={classes.title}>{textTitle}</div>
        <div className={classes.info}>{textInfo}</div>
        <div className={classes.loginButtons}>
          <Button color="primary" onClick={openClosePeopleLogin} variant="outlined">
            {textLoginButton}
          </Button>
          {/* <Button color="primary" onClick={openGuestsLogin} variant="outlined">
            {textRequestPasswordButton}
          </Button> */}
        </div>
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
