import React, { useState, useEffect } from 'react'; /* useState = Verbal object to notify components about other component's changes of state */
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

function RegisterCategory() {
  /* Object */
  const initialValues = {
    name: '',
    description: '',
    color: '',
  };

  const { handleChange, values, clearForm } = useForm(initialValues);

  /*
  categories = Array of categories registered
  setCategory = function to add new category at the array
  this semantics means that...
  */
  const [categories, setCategory] = useState([]);

  useEffect(() => {
    /* 'http://localhost:8080/categorias'; */
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://listflix.herokuapp.com/categorias';

    fetch(URL) /* Return a promisse */
      .then(async (serverReponse) => {
        if (serverReponse.ok) {
          const response = await serverReponse.json();
          setCategory([...response]);
          return;
        }
        throw new Error('Could not reach data!');
      });
  }, [/* When it might run.. If it's empty, it'll run at the begining... */]);

  return (
    <PageDefault>
      <h1>
        Register New Category:
        {values.name}
      </h1>

      <form onSubmit={function handleSubmit(eventInfo) {
        /*
        event's default behavior would be update the page because it's a <form> button.
        "preventDefault" prevents the event to follow his natural course and makes him follow
        what is determined by the code bellow
        */
        eventInfo.preventDefault();

        setCategory([
          /*
          setCategory recieves a new list
          the '...' makes the new list start with all the content already inside 'categories'
          */
          ...categories,
          values,
        ]);

        clearForm(initialValues);
      }}
      >

        <FormField
          label="Category's Name"
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />

        <FormField
          label="Description"
          type="textarea"
          name="description"
          value={values.description}
          onChange={handleChange}
        />

        <FormField
          label="Color"
          type="color"
          name="color"
          value={values.color}
          onChange={handleChange}
        />

        <Button>
          Register
        </Button>
      </form>

      {/* {categories.length === 0 && (
        <div>
          Loading...
        </div>
      )} */}

      <ul>
        {categories.map((category) => (
          /*
          key={} is the unique value of <li>
          key={`${category}${index}`} is a concatenation??
          */
          <li key={`${category.name}`}>
            {category.name}
          </li>
        ))}
      </ul>

      <Link to="/">
        Go to Home
      </Link>
    </PageDefault>
  );
}

export default RegisterCategory;
