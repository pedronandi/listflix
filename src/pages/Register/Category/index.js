import React, { useState} from 'react'; /*useState = Verbal object to notify components about other component's changes of state*/
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function RegisterCategory() {
  /*Object*/
  const initialValues = {
    name: '',
    description: '',
    color: '',
  }

  /*
  categories = Array of categories registered
  setCategory = function to add new category at the array
  this semantics means that... 
  */
  const [categories, setCategory] = useState([]);
  
  /*
  values = <key, value> data structure
  state is initialized whith initialValues (the object)
  */
  const [values, setValues] = useState(initialValues);

  /*Functions*/
  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value, /*name: 'value'*/
    })
  }

  function handleChange(eventInfo) {
    console.log('[CategoryName]', values.name);
    console.log(eventInfo.target.value);
    
    setValue(
      /*eventInfo is the whole form's input (name, value, label, etc)*/
      eventInfo.target.getAttribute('name'),
      eventInfo.target.value
    );
  }

  return (
    <PageDefault>
      <h1>Register New Category: {values.name}</h1>

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
          values
        ]);

        setValues(initialValues);
      }}>
      
        <FormField
          label="Category's Name"
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />

        <div>
          <label>
            Description:
            <textarea
              type="text"
              name="description"
              value={values.description}
              onChange={handleChange}
            />
          </label>
        </div>

        <FormField
          label="Color"
          type="color"
          name="color"
          value={values.color}
          onChange={handleChange}
        />
        
        <button>
          Register
        </button>
      </form>

      <ul>
        {categories.map((category, index) => {
          /*
          key={} is the unique value of <li>
          key={`${category}${index}`} is a concatenation??
          */
          return (
            <li key={`${category}${index}`}>
              {category.name}
            </li>
          )
        })}
      </ul>


      <Link to="/">
          Go to Home
      </Link>
    </PageDefault>
  )
}

export default RegisterCategory;