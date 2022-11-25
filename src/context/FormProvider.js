import React, { useState } from 'react';
import FormContext from './FormContext';

function FormProvider({ children }) {
  const [forms, setForms] = useState([]);

  const createNewForm = (form) => {
    setForms([...forms, form]);
  }

  const editForm = (form) => {
    console.log('Edit :: ' + form)
    const newForm = forms.find(({ id }) => id === form.id);
    if (newForm) {
      Object.keys(form).forEach((chv) => {
        newForm[chv] = form[chv];
      });
    }
    setForms([ ...forms ]);
  }

  const deleteForm = (form) => {
    console.log('DeleteForm :: ' + form)
    const newForms = forms.filter(({ id }) => id !== form.id);
    const arrForms = newForms.map((el, i) => {
      el.id = i;
      return el;
    });
    console.log('Reconfigurado :: ' + newForms);
    setForms([ ...arrForms ]);
  }

// CRUD
  const objCotext = { 
    forms,
    createNewForm,
    editForm,
    deleteForm,
   }

  return (
    <FormContext.Provider value={ objCotext }>
      { children }
    </FormContext.Provider>
  )
}

export default FormProvider