import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const NewItemPage = () => {
  const initialValues = { firstName: '', lastName: '', description: '', quantity: '' };

  const onSubmit = (values, { resetForm }) => {
    // Handle submission logic (e.g., API call, updating state)
    // For demo, let's just log the values
    console.log(values);
    resetForm();
  };

  const validate = (values) => {
    const errors = {};

    if (!values.lastName) {
      errors.lastName = 'Required';
    } else if (values.lastName.length > 20) {
      errors.lastName = 'Must be 20 characters or less';
    }

    if (!values.description) {
      errors.description = 'Required';
    } else if (values.description.length > 100) {
      errors.description = 'Must be 100 characters or less';
    }

    if (!values.quantity) {
      errors.quantity = 'Required';
    } else if (isNaN(values.quantity)) {
      errors.quantity = 'Must be a number';
    } else if (values.quantity < 1 || values.quantity > 20) {
      errors.quantity = 'Must be between 1 and 20';
    }

    return errors;
  };

  return (
    <div>
      <h2>New Item</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validate={validate}
        validateOnMount={true}
      >
        <Form>
          <div>
            <label htmlFor="firstName">First Name (Optional)</label>
            <Field type="text" id="firstName" name="firstName" maxLength="20" />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <Field type="text" id="lastName" name="lastName" maxLength="20" />
            <ErrorMessage name="lastName" component="div" className="error" />
          </div>
          <div>
            <label htmlFor="description">Order Description</label>
            <Field as="textarea" id="description" name="description" maxLength="100" />
            <ErrorMessage name="description" component="div" className="error" />
          </div>
          <div>
            <label htmlFor="quantity">Quantity</label>
            <Field type="number" id="quantity" name="quantity" min="1" max="20" />
            <ErrorMessage name="quantity" component="div" className="error" />
          </div>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default NewItemPage;
