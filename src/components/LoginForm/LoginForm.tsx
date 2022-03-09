import React, { FC } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import styled from 'styled-components';
import { TextField, Button, Container } from '@mui/material';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { IUserLogin } from '../../models/IUser';
import { login } from '../../store/reducers/Auth/AuthActionCreators';

const FormContainer = styled.div`
  width: 350px;
`;

interface LoginFormProps {
  OnCloseDialog: () => void;
}

const loginSchema = yup.object({
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

const LoginForm: FC<LoginFormProps> = ({ OnCloseDialog }) => {
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: (user: IUserLogin, { resetForm }) => {
      dispatch(login(user));
      OnCloseDialog();
      resetForm();
    },
  });

  return (
    <Container sx={{ textAlign: 'center', padding: '20px' }}>
      Login
      <FormContainer>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            sx={{ margin: '20px auto 10px auto' }}
            id="email"
            name="email"
            label="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            sx={{ margin: '20px auto ' }}
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
            Login
          </Button>
        </form>
      </FormContainer>
    </Container>
  );
};

export default LoginForm;
