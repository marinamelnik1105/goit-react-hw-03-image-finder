import { Formik } from 'formik';
import { BtnLabel, FormBtn, Header } from './Searchbar.styled';
import { Form, Field } from './Searchbar.styled';

let initialValues = { value: '' };

export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = values => {
    initialValues = values;
    return onSubmit(values);
  };
  return (
    <Header>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <FormBtn type="submit">
            <BtnLabel>Search</BtnLabel>
          </FormBtn>
          <Field
            name="value"
            type="text"
            placeholder="Search images and photos"
          />
        </Form>
      </Formik>
    </Header>
  );
};
