import React, { useState } from 'react';

import { Button, ButtonGroup, Modal, Paper } from '@material-ui/core';

import useStyles from './style';
import sergeyPhoto from '../../assets/IMG-20200626-WA0050.jpg';
import LoginForm from './LoginForm';
import { LoginFormType } from './LoginForm/interface';

const WelcomePage = () => {
  const classes = useStyles();

  const [isModalOpened, setIsModalOpened] = useState(false);
  const [loginType, setLoginType] = useState<LoginFormType>(LoginFormType.Default);

  function openClosePeopleLogin(): void {
    setIsModalOpened(true);
    setLoginType(LoginFormType.Default);
  }

  function openGuestsLogin(): void {
    setIsModalOpened(true);
    setLoginType(LoginFormType.NoPassword);
  }

  function closeModal(): void {
    setIsModalOpened(false);
  }

  const titleText = 'Памяти Сергея - сына, брата, и друга...';
  const longReadText =
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';
  const loginButtonForClosePeopleText = 'Я знал Сергея и/или его близких';
  const loginButtonForGuestsText = 'Я не знал Сергея, но хочу посетить его мемориальную страницу';

  return (
    <div className={classes.root}>
      <div className={classes.title}>{titleText}</div>
      <div className={classes.photoAndText}>
        <img className={classes.photo} src={sergeyPhoto} alt="Sergey" />
        <div className={classes.longReadText}>{longReadText}</div>
      </div>
      <ButtonGroup className={classes.loginButtons} variant="text">
        <Button onClick={openClosePeopleLogin}>{loginButtonForClosePeopleText}</Button>
        <Button onClick={openGuestsLogin}>{loginButtonForGuestsText}</Button>
      </ButtonGroup>
      <Modal className={classes.modal} open={isModalOpened} onClose={closeModal}>
        <Paper className={classes.formWrapper}>
          <LoginForm type={loginType} />
        </Paper>
      </Modal>
    </div>
  );
};

export default WelcomePage;
