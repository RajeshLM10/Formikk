import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './AuthorForm.css';

const AuthorForm = ({ onSubmit, initialValues }) => {
  const validationSchema = Yup.object().shape({
    authorName: Yup.string().required('Author name is required'),
    birthDate: Yup.date().nullable().required('Birth Date is required'),
    biography: Yup.string().required('Biography is required'),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      // You can perform any async operations here, such as sending data to a server

      // Simulating an async operation with a delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      onSubmit(values);
      resetForm();
      alert('Author submitted successfully!');
    } catch (error) {
      // Handle errors, if any
      console.error('Error submitting author:', error);
      alert('Error submitting author. Please try again.');
    }
  };

  // Provide default values for initialValues
  const defaultValues = {
    authorName: '',
    birthDate: '',
    biography: '',
  };

  return (
    <Formik
      initialValues={initialValues || defaultValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="FormContainer">
        <div>
          <label htmlFor="authorName">Author Name:</label>
          <Field type="text" id="authorName" name="authorName" />
          <ErrorMessage name="authorName" component="div" />
        </div>
        <div>
          <label htmlFor="birthDate">Birth Date:</label>
          <Field type="date" id="birthDate" name="birthDate" />
          <ErrorMessage name="birthDate" component="div" />
        </div>
        <div>
          <label htmlFor="biography">Biography:</label>
          <Field as="textarea" id="biography" name="biography" />
          <ErrorMessage name="biography" component="div" />
        </div>
        <div>
          <button type="submit">Add Author</button>
        </div>
      </Form>
    </Formik>
  );
};

export default AuthorForm;
