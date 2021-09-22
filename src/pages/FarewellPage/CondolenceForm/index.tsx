import React from 'react';

import useStyles from './style';
import { Button, TextField } from '@material-ui/core';
import { LoginFormType } from '../../LoginPage/LoginForm/interface';
import { Alert } from '@material-ui/lab';

const CondolenceForm = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/*<form className={classes.form} onSubmit={handleSubmit(submitForm)} onReset={resetForm}>*/}
      {/*  <TextField label={nameLabel} {...register('username')} />*/}
      {/*  <TextField type="password" label={passwordLabel} {...register('password')} />*/}
      {/*  {selectedTab === LoginFormType.Guest && <TextField type="email" label="Email" {...register('email')} />}*/}
      {/*  {selectedTab === LoginFormType.Guest && (*/}
      {/*    <TextField label={requestDescriptionLabel} multiline={true} minRows={4} {...register('requestDescription')} />*/}
      {/*  )}*/}

      {/*  {errorMessage !== null && (*/}
      {/*    <Alert className={classes.alert} severity="error">*/}
      {/*      {errorMessage}*/}
      {/*    </Alert>*/}
      {/*  )}*/}

      {/*  <div className={classes.buttons}>*/}
      {/*    <Button color="primary" type="submit" variant="outlined">*/}
      {/*      {selectedTab === LoginFormType.Default ? 'Войти' : 'Отправить'}*/}
      {/*    </Button>*/}
      {/*    <Button type="reset" variant="outlined">*/}
      {/*      {clearButtonText}*/}
      {/*    </Button>*/}
      {/*  </div>*/}
      {/*</form>*/}
    </div>
  );
};

export default CondolenceForm;
