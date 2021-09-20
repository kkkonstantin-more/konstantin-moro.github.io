import React, { useState } from 'react';

import { useForm } from 'react-hook-form';
import useStyles from './style';

import { Button, Tab, Tabs, TextField } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { LoginFormProps, LoginFormType, LoginInputs } from './interface';
import useStores from '../../../stores';

const LoginForm = ({ type }: LoginFormProps) => {
  const classes = useStyles();

  const { mainStore } = useStores();
  const { registerUser, loginUser } = mainStore;

  const { register, handleSubmit, reset } = useForm<LoginInputs>({
    defaultValues: {
      username: '',
      email: '',
      password: '',
      requestDescription: '',
    },
  });

  const [selectedTab, setSelectedTab] = useState<LoginFormType>(type);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const nameLabel = 'Имя Фамилия';
  const passwordLabel = 'Пароль';
  const requestDescriptionLabel = 'Сопроводительное письмо';
  const clearButtonText = 'Очистить';

  async function submitForm(data: LoginInputs): Promise<void> {
    if (selectedTab === LoginFormType.Guest) {
      try {
        await registerUser(data);
        setErrorMessage(null);
      } catch (e: any) {
        console.error(e, e.message);
        if (e.statusCode === 400) {
          setErrorMessage('Такой email или имя уже зарегистирован');
        } else {
          setErrorMessage('Что-то пошло не так, проверьте введенные данные и попробуйте еще раз');
        }
      }
    } else {
      try {
        await loginUser({
          password: data.password as string,
          identifier: data.username,
        });
      } catch (e: any) {
        console.error(e, e.message);
        setErrorMessage('Что-то пошло не так, проверьте введенные данные и попробуйте еще раз');
      }
    }
  }

  function resetForm(): void {
    reset();
  }

  return (
    <div className={classes.root}>
      <Tabs
        className={classes.tabs}
        onChange={(event: React.ChangeEvent<{}>, newValue: LoginFormType) => {
          setSelectedTab(newValue);
        }}
        value={selectedTab}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
      >
        <Tab value={LoginFormType.Default} label="Войти" />
        <Tab value={LoginFormType.Guest} label="Запросить пароль" />
      </Tabs>

      <form className={classes.form} onSubmit={handleSubmit(submitForm)} onReset={resetForm}>
        <TextField label={nameLabel} {...register('username')} />
        <TextField type="password" label={passwordLabel} {...register('password')} />
        {selectedTab === LoginFormType.Guest && <TextField type="email" label="Email" {...register('email')} />}
        {selectedTab === LoginFormType.Guest && (
          <TextField label={requestDescriptionLabel} multiline={true} minRows={4} {...register('requestDescription')} />
        )}

        {errorMessage !== null && (
          <Alert className={classes.alert} severity="error">
            {errorMessage}
          </Alert>
        )}

        <div className={classes.buttons}>
          <Button color="primary" type="submit" variant="outlined">
            {selectedTab === LoginFormType.Default ? 'Войти' : 'Отправить'}
          </Button>
          <Button type="reset" variant="outlined">
            {clearButtonText}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
