import React, { useState, useEffect } from 'react'; /* useState = Verbal object to notify components about other component's changes of state */
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function RegisterCategory() {
  /* Object */
  const initialValues = {
    name: '',
    description: '',
    color: '',
  };

  /*
  categories = Array of categories registered
  setCategory = function to add new category at the array
  this semantics means that...
  test
  */
  const [categories, setCategory] = useState([]);

  /*
  values = <key, value> data structure
  state is initialized whith initialValues (the object)
  */
  const [values, setValues] = useState(initialValues);

  /* Functions */
  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value, /* name: 'value' */
    });
  }

  function handleChange(eventInfo) {
    setValue(
      /* eventInfo is the whole form's input (name, value, label, etc) */
      eventInfo.target.getAttribute('name'),
      eventInfo.target.value,
    );
  }

  useEffect(() => {
    /* const URL = 'http://localhost:8080/categorias'; */
    const URLProd = 'https://listflix.herokuapp.com/';

    fetch(URLProd) /* Return a promisse */
      .then(async (serverReponse) => {
        const response = await serverReponse.json();
        setCategory([
          ...response,
        ]);
      })
      // eslint-disable-next-line no-console
      .then((serverResponseObject) => console.log(serverResponseObject));

    /* setTimeout(() => {
      setCategory([
        ...categories,
        {
          name: 'Front End',
          color: '#6BD1FF',
          description: 'Formação de Front End na Alura',
        },
        {
          name: 'Back End',
          color: '#6BD1FF',
          description: 'Formação de Back End na Alura',
        },
      ]);
    }, 1 * 1000); */
  }, []);

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

        setValues(initialValues);
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

      {categories.length === 0 && (
        <div>
          Loading...
        </div>
      )}

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
