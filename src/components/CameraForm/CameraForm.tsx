import Button from '@mui/material/Button/Button';
import TextField from '@mui/material/TextField/TextField';
import styled from 'styled-components';
import { useFormik } from 'formik';
import React, { FC } from 'react';
import * as yup from 'yup';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { ICamera } from '../../models/ICamera';
import {
  addCameraFetch,
  updateCameraFetch,
} from '../../store/reducers/CameraActionCreators';

const Container = styled.div`
  display: block;
  margin: 20px 0;
  text-align: center;
`;

const FormContainer = styled.div`
  width: 350px;
`;

interface CameraFormProps {
  camera?: ICamera;
  OnCloseDialog?: () => void;
}

const cameraSchema = yup.object({
  brand: yup.string().required('Enter brand'),
  model: yup.string().required('Enter model'),
  format: yup.number().required('Enter format'),
  type: yup.string().required('Enter type'),
  url: yup.string().required('Enter url'),
  price: yup.number().required('Enter price'),
});

const CameraForm: FC<CameraFormProps> = ({ camera, OnCloseDialog }) => {
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      brand: camera?.brand || '',
      model: camera?.model || '',
      format: camera?.format || 35,
      type: camera?.type || '',
      url: camera?.url || '',
      price: camera?.price || 0,
    },
    validationSchema: cameraSchema,
    onSubmit: (newCamera, { resetForm }) => {
      if (camera?._id) {
        dispatch(updateCameraFetch({ ...camera, ...newCamera }));
      } else {
        dispatch(addCameraFetch(newCamera));
      }

      resetForm();
    },
  });
  return (
    <Container>
      {camera?._id ? 'Update' : 'Add'}
      <FormContainer>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            sx={{ margin: '20px 0 10px 0' }}
            id="brand"
            name="brand"
            label="brand"
            value={formik.values.brand}
            onChange={formik.handleChange}
            error={formik.touched.brand && Boolean(formik.errors.brand)}
            helperText={formik.touched.brand && formik.errors.brand}
          />
          <TextField
            sx={{ margin: '10px 0' }}
            id="model"
            name="model"
            label="model"
            value={formik.values.model}
            onChange={formik.handleChange}
            error={formik.touched.model && Boolean(formik.errors.model)}
            helperText={formik.touched.model && formik.errors.model}
          />
          <TextField
            sx={{ margin: '10px 0' }}
            id="format"
            name="format"
            label="format"
            value={formik.values.format}
            onChange={formik.handleChange}
            error={formik.touched.format && Boolean(formik.errors.format)}
            helperText={formik.touched.format && formik.errors.format}
          />
          <TextField
            sx={{ margin: '10px 0' }}
            id="type"
            name="type"
            label="type"
            value={formik.values.type}
            onChange={formik.handleChange}
            error={formik.touched.type && Boolean(formik.errors.type)}
            helperText={formik.touched.type && formik.errors.type}
          />
          <TextField
            sx={{ margin: '10px 0' }}
            id="url"
            name="url"
            label="url"
            value={formik.values.url}
            onChange={formik.handleChange}
            error={formik.touched.price && Boolean(formik.errors.url)}
            helperText={formik.touched.url && formik.errors.url}
          />
          <TextField
            sx={{ margin: '10px 0 20px 0' }}
            id="price"
            name="price"
            label="price"
            value={formik.values.price}
            onChange={formik.handleChange}
            error={formik.touched.price && Boolean(formik.errors.price)}
            helperText={formik.touched.price && formik.errors.price}
          />
          {camera?._id ? (
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
              Create
            </Button>
          )}
        </form>
      </FormContainer>
    </Container>
  );
};
CameraForm.defaultProps = {
  camera: {
    brand: '',
    model: '',
    format: 35,
    type: '',
    url: '',
    price: 0,
  },
  OnCloseDialog: () => {},
};
export default CameraForm;
