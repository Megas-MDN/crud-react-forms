import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import FormContext from './context/FormContext';
import Formulario from './Formulario';

function EditForm() {
  const { id } = useParams();
  const { forms, editForm } = useContext(FormContext);
  // const { match: { params: { id } } } = props;
  // console.log(id)
  return (
    <Formulario { ...forms[id] } func={ editForm } editMode={ true }/>
  )
}

export default EditForm;