import React, { useEffect, useState } from 'react';

import useStyles from './style';
import { useForm } from 'react-hook-form';
import { DropzoneArea } from 'material-ui-dropzone';
import { Button, TextField } from '@material-ui/core';
import axios from 'axios';
import useStores from '../../../stores';
import { Alert } from '@material-ui/lab';

const ShareForm = () => {
  const classes = useStyles();
  const { mainStore } = useStores();
  const { userData } = mainStore;

  const { register, handleSubmit, reset, setValue } = useForm<{
    username: string;
    files: null | File[];
    text: string;
  }>({
    defaultValues: {
      username: userData?.username ?? '',
      files: null,
      text: '',
    },
  });

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [isDropzoneMounted, setIsDropzoneMounted] = useState(true);

  function onReset() {
    setIsDropzoneMounted(false);
    return () => reset();
  }

  useEffect(() => {
    if (!isDropzoneMounted) {
      setIsDropzoneMounted(true);
    }
  }, [isDropzoneMounted]);

  async function onSubmit(data: any) {
    let refId = null;
    const imageIds: number[] = [];
    let formDataSuccessfullyUploaded = true;

    if (Array.isArray(data.files) && data.files.length !== 0) {
      refId = 'refId';
      const formData = new FormData();

      data.files.forEach((file: File[]) => {
        // @ts-ignore
        formData.append('files', file);
      });

      formData.append('ref', 'shared-by-users');
      formData.append('refId', refId);
      formData.append('field', 'media');

      try {
        const res = await axios({
          url: `${process.env.REACT_APP_API_URL}/upload`,
          method: 'post',
          data: formData,
          headers: { Authorization: `Bearer ${userData?.token}` },
        });
        res.data.forEach((file: any) => imageIds.push(file.id));
      } catch (e) {
        formDataSuccessfullyUploaded = false;
        setErrorMessage('Что-то пошло не так, проверьте введенные данные и попробуйте еще раз');
      }
    }

    if (formDataSuccessfullyUploaded) {
      try {
        await axios({
          url: `${process.env.REACT_APP_API_URL}/shared-by-users`,
          method: 'post',
          data: {
            name: data.username,
            text: data.text,
            media: imageIds,
          },
          headers: { Authorization: `Bearer ${userData?.token}` },
        });
        setErrorMessage(null);
        setSuccessMessage('Успешно отправлено!');
        reset();
        setIsDropzoneMounted(false);
        setTimeout(() => {
          setSuccessMessage(null);
        }, 5000);
      } catch (e) {
        setErrorMessage('Что-то пошло не так, проверьте введенные данные и попробуйте еще раз');
      }
    }
  }

  return (
    <div className={classes.root}>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)} onReset={onReset}>
        <TextField color="secondary" label="Имя Фамилия" {...register('username')} />
        <TextField color="secondary" label="Послание" multiline={true} minRows={8} {...register('text')} />
        {isDropzoneMounted && (
          <DropzoneArea
            onChange={(files: File[]) => {
              setValue('files', files);
            }}
            dropzoneText="Перетащите файлы в область или нажмите"
            filesLimit={5}
            maxFileSize={10485760}
            clearOnUnmount={true}
          />
        )}
        {errorMessage !== null && <Alert severity="error">{errorMessage}</Alert>}
        {successMessage !== null && <Alert severity="success">{successMessage}</Alert>}
        <div className={classes.buttons}>
          <Button color="secondary" type="submit" variant="outlined">
            Отправить
          </Button>
          <Button type="reset" variant="outlined">
            Стереть
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ShareForm;
