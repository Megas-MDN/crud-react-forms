import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Button from './components/Button';
import Input from './components/Input';
import RadioButton from './components/RadioButton';
// import FormContext from './context/FormContext';

const Formulario = (props) => {
  const [name, setName] = useState(props.name || '');
  const [age, setAge] = useState(props.age || '');
  const [city, setCity] = useState(props.city || '');
  const [modul, setModul] = useState(props.module || '');
  const [isDisabled, setDisabled] = useState(true);
  const [edited, setEdited] = useState(false);
  // const { createNewForm, forms } = useContext(FormContext);
  // console.log(props);

  useEffect(() => {
    // console.log(props)
    if(name && age && city && modul && isDisabled) {
      setDisabled(false);
    } else if((!name || !age || !city || !modul) && !isDisabled) {
      setDisabled(true);
    }
  }, [name, age, city, modul, isDisabled]);


  const handleClick = () => {
    const newForm = {
      id: props.editMode ? props.id : props.tam,
      name,
      age,
      city,
      module: modul,
    };
    props.func(newForm);
    setName('');
    setAge(0);
    setCity('');
    setModul('');
    setEdited(true);
  }

  return (
    <div className="App">
      {
        edited && <h3>Cadastro editado com sucesso</h3>
      }
      <p>
      {name || "Nome digitado"}
      </p>
      <Input 
      type="text" 
      name="nome" 
      label="Digite o seu nome" 
      value={ name }
      onChange={ ({target: {value}}) => setName(value)}
      />
      <p>
        {age || "Sua idade"}
      </p>
      <Input
      type="number" 
      name="idade" 
      label="Digite a sua idade" 
      value={age}
      onChange={ ({target: {value}}) => setAge(value)}
      />
      <p>
      {city || "Cidade digitado"}
      </p>
      <Input 
      type="text" 
      name="nome" 
      label="Digite a sua cidade" 
      value={city}
      onChange={ ({target: {value}}) => setCity(value)}
      />
      <p>
      {modul || "Modulo escolhido"}
      </p>
      <RadioButton
      name="Modulo"
      values={['Fundamentos', 'Front-end', 'Back-end','Ciência da Computação']}
      onChange={ (ev) => setModul(ev.target.value)}
      value={modul}
      />
      <Button
      label={props.editMode ? "Editar" : "Submeter"}
      type="button"
      onClick={ handleClick }
      disabled={isDisabled}
      />
      <Link to='/lidos'>Ler resultados</Link>
    </div>
  );
}

export default Formulario;