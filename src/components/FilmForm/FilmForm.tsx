import { Button, TextField } from '@mui/material';
import styled from 'styled-components';
import React, { FC } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { IFilm } from '../../models/IFilm';
import { filmApi } from '../../services/FilmService';

const Container = styled.div`
  display: block;
  margin: 20px 0;
  text-align: center;
`;

const FormContainer = styled.div`
  width: 350px;
`;
interface FilmFormProps {
  film?: IFilm;
  OnCloseDialog?: () => void;
}

const FilmForm: FC<FilmFormProps> = ({ film, OnCloseDialog }) => {
  const [addFilm] = filmApi.useAddFilmMutation();
  const [updateFilm] = filmApi.useUpdateFilmMutation();
  const { reset, control, handleSubmit } = useForm<IFilm>({
    defaultValues: {
      brand: film?.brand || '',
      model: film?.model || '',
      format: film?.format || 135,
      frames: film?.frames || 36,
      iso: film?.iso || 200,
      url: film?.url || '',
      price: film?.price || 0,
    },
  });

  const onSubmit = async (newFilm: IFilm) => {
    if (film?._id) {
      await updateFilm({ ...film, ...newFilm });
    } else {
      await addFilm(newFilm);
    }
    reset();
  };

  return (
    <Container>
      {film?._id ? 'Update film' : 'Add film'}
      <FormContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="brand"
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                sx={{ margin: '20px 0 10px 0' }}
                label="brand name"
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
            rules={{ required: 'brand name required' }}
          />
          <Controller
            name="model"
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                sx={{ margin: '10px 0' }}
                label="model name"
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
            rules={{ required: 'model name required' }}
          />
          <Controller
            name="format"
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                sx={{ margin: '10px 0' }}
                label="format number"
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
            rules={{ required: 'format number required' }}
          />

          <Controller
            name="frames"
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                sx={{ margin: '10px 0' }}
                label="frames number"
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
            rules={{ required: 'frames number required' }}
          />
          <Controller
            name="iso"
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                sx={{ margin: '10px 0' }}
                label="iso number"
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
            rules={{ required: 'iso number required' }}
          />
          <Controller
            name="url"
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                sx={{ margin: '10px 0' }}
                label="url"
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
            rules={{ required: 'url required' }}
          />
          <Controller
            name="price"
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                sx={{ margin: '10px 0' }}
                label="price"
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
            rules={{ required: 'price required' }}
          />

          {film?._id ? (
            <Button
              sx={{ display: 'block', margin: 'auto' }}
              color="primary"
              variant="contained"
              type="submit"
              onClick={OnCloseDialog}
            >
              Update
            </Button>
          ) : (
            <Button
              sx={{ display: 'block', margin: 'auto' }}
              color="primary"
              variant="contained"
              type="submit"
            >
              Submit
            </Button>
          )}
        </form>
      </FormContainer>
    </Container>
  );
};
FilmForm.defaultProps = {
  film: {
    brand: '',
    model: '',
    format: 135,
    iso: 100,
    frames: 36,
    url: '',
    price: 0,
  },
  OnCloseDialog: () => {},
};
export default FilmForm;
