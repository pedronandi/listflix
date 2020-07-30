import React from 'react';

function FormField({ label, type, name, value, onChange }) {
    /*props like this: "dummy components"*/
    return (
        <div>
            <label>
            {label}:
            <input
                type={type}
                value={value}
                name={name}
                onChange={onChange}
            />
            </label>
        </div>
    )
  }
  
  export default FormField;

