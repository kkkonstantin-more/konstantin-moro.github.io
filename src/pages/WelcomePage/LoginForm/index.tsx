import React, { useState } from 'react';

import { useForm } from 'react-hook-form';
import useStyles from './style';

import { Button, Checkbox, FormControlLabel, TextField } from '@material-ui/core';
import { LoginInputs, LoginFormProps, LoginFormType } from './interface';

const LoginForm = ({ type }: LoginFormProps) => {
  const classes = useStyles();

  const { register, handleSubmit, reset } = useForm<LoginInputs>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      requestDescription: '',
    },
  });

  const [isNoPassword, setIsNoPassword] = useState(type !== LoginFormType.Default);

  const nameLabel = 'Имя Фамилия';
  const passwordLabel = 'Пароль';
  const requestDescriptionLabel = 'Сопроводительное письмо';
  const submitButtonEnterText = 'Войти';
  const submitButtonRequestPasswordText = 'Отправить';
  const clearButtonText = 'Очистить';
  const noPasswordCheckboxLabel = 'У меня нет пароля';
  const noPasswordGuideMessage =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
  const guestGuideMessage =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

  function toggleCheckbox(event: React.ChangeEvent<HTMLInputElement>) {
    setIsNoPassword(event.target.checked);
  }

  function submitForm(data: LoginInputs): void {
    console.log(data);
  }

  function resetForm(): void {
    reset();
  }

  return (
    <form className={classes.root} onSubmit={handleSubmit(submitForm)} onReset={resetForm}>
      {type === LoginFormType.Guest && <span>{guestGuideMessage}</span>}

      <TextField label={nameLabel} {...register('name')} />
      {!isNoPassword && <TextField type="password" label={passwordLabel} {...register('password')} />}
      {isNoPassword && <TextField type="email" label="Email" {...register('email')} />}
      {type === LoginFormType.Default && (
        <FormControlLabel
          control={<Checkbox checked={isNoPassword} onChange={toggleCheckbox} color="primary" />}
          label={noPasswordCheckboxLabel}
        />
      )}
      {type === LoginFormType.Guest && (
        <TextField label={requestDescriptionLabel} multiline={true} minRows={4} {...register('requestDescription')} />
      )}
      {isNoPassword && type === LoginFormType.Default && <span>{noPasswordGuideMessage}</span>}

      <div className={classes.buttons}>
        <Button type="submit" variant="outlined">
          {isNoPassword ? submitButtonRequestPasswordText : submitButtonEnterText}
        </Button>
        <Button type="reset" variant="outlined">
          {clearButtonText}
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
