import { useState } from 'react';

function useForm(initialValues) {
  /*
    values = <key, value> data structure
    state is initialized whith initialValues (the object)
    */
  const [values, setValues] = useState(initialValues);

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

  function clearForm() {
    setValues(initialValues);
  }

  return {
    values,
    handleChange,
    clearForm,
  };
}

export default useForm;
