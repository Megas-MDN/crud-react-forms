import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "./components/Button";
import FormContext from "./context/FormContext";
import './DisplayForms.css';

const DisplayForms = ({ history }) => {
  const { forms, deleteForm } = useContext(FormContext);
  useEffect(() => {
    console.log(forms);
  }, [forms]);
  return (
    <div className="display-container">
      <h3>Display Forms</h3>
      <ul className="list-container">
        {forms.map((el, i) => (
          <li key={i + "-" + el?.id} className="form-item">
            <p>
              Nome <span>{el?.name}</span>
            </p>
            <p>
              Idade <span>{el?.age}</span>
            </p>
            <p>
              Cidade <span>{el?.city}</span>
            </p>
            <p>
              Módulo <span>{el?.module}</span>
            </p>
            <Link to={`/edit/${el.id}`}>Editar</Link>
            {/* <Button label="Excluir" onCLick={ () => deleteForm(el) }/> */}
            <button type="button" onClick={() => deleteForm(el)}>Excluir</button>
          </li>
        ))}
      </ul>
      <Button label="Retornar ao Forms" onClick={() => history.push("/")} />
    </div>
  );
};

export default DisplayForms;
