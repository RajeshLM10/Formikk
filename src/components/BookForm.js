import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const BookForm = ({ onSubmit, initialValues }) => {
  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    author: Yup.string().required('Author is required'),
    isbn: Yup.string().required('ISBN is required'),
    publicationDate: Yup.date().nullable().required('Publication Date is required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };

  const defaultValues = {
    title: '',
    author: '',
    isbn: '',
    publicationDate: '',
  };

  return (
    <Formik
      initialValues={initialValues || defaultValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="FormContainer"> 
        <div>
          <label htmlFor="title">Title:</label>
          <Field type="text" id="title" name="title" />
          <ErrorMessage name="title" component="div" />
        </div>
        <div>
          <label htmlFor="author">Author:</label>
          <Field type="text" id="author" name="author" />
          <ErrorMessage name="author" component="div" />
        </div>
        <div>
          <label htmlFor="isbn">ISBN:</label>
          <Field type="text" id="isbn" name="isbn" />
          <ErrorMessage name="isbn" component="div" />
        </div>
        <div>
          <label htmlFor="publicationDate">Publication Date:</label>
          <Field type="date" id="publicationDate" name="publicationDate" />
          <ErrorMessage name="publicationDate" component="div" />
        </div>
        <div>
          <button type="submit">Add Book</button>
        </div>
      </Form>
    </Formik>
  );
};

export default BookForm;
