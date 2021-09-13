import React from 'react';

import useStyles from './style';

import { Button, TextField } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { DefaultInputs, GuestInputs, LoginFormProps, LoginFormType, NoPasswordInputs } from './interface';

const LoginForm = ({ type }: LoginFormProps) => {
  const classes = useStyles();

  const { register, handleSubmit } = useForm();

  const nameLabel = 'Имя Фамилия';
  const passwordLabel = 'Пароль';
  const submitButtonText = 'Войти';

  function submitDefault(data: DefaultInputs): void {
    console.log(data);
  }

  function submitNoPassword(data: NoPasswordInputs): void {
    console.log(data);
  }

  function submitGuest(data: GuestInputs): void {
    console.log(data);
  }

  function submit(data: DefaultInputs | NoPasswordInputs | GuestInputs): void {
    switch (type) {
      case LoginFormType.Default:
        submitDefault(data as DefaultInputs);
        break;
      case LoginFormType.NoPassword:
        submitNoPassword(data as NoPasswordInputs);
        break;
      case LoginFormType.Guest:
        submitGuest(data as GuestInputs);
        break;
    }
  }

  return (
    <form onSubmit={handleSubmit(submit)} className={classes.root}>
      <TextField label={nameLabel} {...register('name')} />
      <TextField label={passwordLabel} {...register('password')} />
      <Button type="submit" variant="outlined">
        {submitButtonText}
      </Button>
    </form>
  );
};

export default LoginForm;
