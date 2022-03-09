import React, { FC } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import styled from 'styled-components';
import { TextField, Button, Container } from '@mui/material';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { IUserRegister } from '../../models/IUser';
import { register } from '../../store/reducers/Auth/AuthActionCreators';

const FormContainer = styled.div`
  width: 350px;
`;

interface RegisterFormProps {
  OnCloseDialog: () => void;
}

const registerSchema = yup.object({
  username: yup.string().required('Enter username'),
  email: yup
    .string()
    .email()
    .required('Enter email'),
  password: yup
    .string()
    .min(4, 'пароль должен быть длинее 4 символов')
    .max(10, 'пароль должен быть короче 10 символов')
    .required('Enter password'),
});

const RegisterForm: FC<RegisterFormProps> = ({ OnCloseDialog }) => {
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    validationSchema: registerSchema,
    onSubmit: (user: IUserRegister, { resetForm }) => {
      dispatch(register(user));
      OnCloseDialog();
      resetForm();
    },
  });

  return (
    <Container sx={{ textAlign: 'center', padding: '20px' }}>
      Register
      <FormContainer>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            sx={{ margin: '20px auto 10px auto' }}
            id="username"
            name="username"
            label="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
          />
          <TextField
            sx={{ margin: '20px auto' }}
            id="email"
            name="email"
            label="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            sx={{ margin: '20px auto' }}
            id="password"
            name="password"
            label="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Button
            sx={{ display: 'block', margin: 'auto' }}
            color="primary"
            variant="contained"
            type="submit"
          >
            Register
          </Button>
        </form>
      </FormContainer>
    </Container>
  );
};

export default RegisterForm;
