import React, { useState } from 'react';

import { useForm } from 'react-hook-form';
import useStyles from './style';
import { useHistory, RouteComponentProps } from 'react-router-dom';

import { Button, Tab, Tabs, TextField } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { LoginFormProps, LoginFormType, LoginInputs } from './interface';
import useStores from '../../../stores';
import axios from 'axios';

const LoginForm = ({ type }: LoginFormProps) => {
  const classes = useStyles();

  const { mainStore } = useStores();
  const { registerUser, loginUser } = mainStore;

  const history: RouteComponentProps['history'] = useHistory();

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
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const nameLabel = 'Имя Фамилия';
  const passwordLabel = 'Пароль';
  const requestDescriptionLabel = 'Сопроводительное письмо';
  const clearButtonText = 'Очистить';

  async function submitForm(data: LoginInputs): Promise<void> {
    if (selectedTab === LoginFormType.Guest) {
      try {
        await registerUser(data);
        await axios({
          url: `${process.env.REACT_APP_API_URL}/send-email-user-registered`,
          method: 'post',
          data: {
            username: data.username,
            email: data.email,
          },
        });
        setErrorMessage(null);
        setSuccessMessage('Запрос успешно отправлен! Ожидайте подтверждения администратора');
        setTimeout(() => {
          setSuccessMessage(null);
        }, 10000);
        reset();
      } catch (e: any) {
        if (e.statusCode === 400) {
          setErrorMessage('Такой email или имя уже существует');
        } else {
          setErrorMessage('Что-то пошло не так, проверьте введенные данные и попробуйте еще раз');
        }
      }
    } else {
      try {
        await loginUser(
          {
            password: data.password as string,
            identifier: data.username,
          },
          history
        );
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
        indicatorColor="secondary"
        textColor="secondary"
        variant="fullWidth"
      >
        <Tab value={LoginFormType.Default} label="Войти" />
        <Tab value={LoginFormType.Guest} label="Запросить пароль" />
      </Tabs>

      <form className={classes.form} onSubmit={handleSubmit(submitForm)} onReset={resetForm}>
        <TextField color="secondary" label={nameLabel} {...register('username')} />
        <TextField color="secondary" type="password" label={passwordLabel} {...register('password')} />
        {selectedTab === LoginFormType.Guest && (
          <TextField color="secondary" type="email" label="Email" {...register('email')} />
        )}
        {selectedTab === LoginFormType.Guest && (
          <TextField
            color="secondary"
            label={requestDescriptionLabel}
            multiline={true}
            minRows={4}
            {...register('requestDescription')}
          />
        )}

        {successMessage !== null && (
          <Alert className={classes.alert} severity="success">
            {successMessage}
          </Alert>
        )}

        {errorMessage !== null && (
          <Alert className={classes.alert} severity="error">
            {errorMessage}
          </Alert>
        )}

        <div className={classes.buttons}>
          <Button color="secondary" type="submit" variant="outlined">
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
