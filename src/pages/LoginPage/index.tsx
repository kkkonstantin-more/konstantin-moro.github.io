import React, { useEffect, useState } from 'react';

import { observer } from 'mobx-react-lite';

import { Button, CircularProgress, Modal, MuiThemeProvider, Paper } from '@material-ui/core';

import useStyles from './style';
import sergeyPhoto from '../../assets/img.png';
import LoginForm from './LoginForm';
import { LoginFormType } from './LoginForm/interface';
import useStores from '../../stores';
import { createTheme } from '@material-ui/core/styles';
import { getTheme } from '../../theme';
import { MusicNote, MusicOff } from '@material-ui/icons';

const songUrl = require('../../assets/molitva.mp3').default;

const LoginPage = () => {
  const classes = useStyles();
  const localTheme = createTheme({ ...getTheme(), palette: { primary: { main: '#fff' } } });

  const { mainStore } = useStores();
  const { fetchLoginPageText, loginPageText } = mainStore;

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

  const { textTitle, textLoginButton, textInfo, textRequestPasswordButton } = loginPageText;

  return (
    <MuiThemeProvider theme={localTheme}>
      <div className={classes.root}>
        <div className={classes.songContainer} onClick={toggleSong}>
          {songIsPlaying ? (
            <MusicOff fontSize="large" color="primary" />
          ) : (
            <MusicNote fontSize="large" color="primary" />
          )}
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
            <Button color="primary" onClick={openGuestsLogin} variant="outlined">
              {textRequestPasswordButton}
            </Button>
          </div>
        </div>

        <Modal className={classes.modal} open={isModalOpened} onClose={closeModal}>
          <Paper className={classes.formWrapper}>
            <LoginForm type={loginType} />
          </Paper>
        </Modal>
      </div>
    </MuiThemeProvider>
  );
};

export default observer(LoginPage);
