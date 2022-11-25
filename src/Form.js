import React, { useContext, useEffect, useState } from 'react'
import Button from './components/Button';
import Input from './components/Input';
import RadioButton from './components/RadioButton';
import FormContext from './context/FormContext';

const Form = (props) => {
  const [nome, setNome] = useState('');
  const [age, setAge] = useState(0);
  const [city, setCity] = useState('');
  const [modul, setModul] = useState('');
  const [isDisabled, setDisabled] = useState(true);
  const [registred, setRegistred] = useState(false);
  const { createNewForm, forms } = useContext(FormContext);

  useEffect(() => {
    if(nome && age && city && modul && isDisabled) {
      setDisabled(false);
    } else if((!nome || !age || !city || !modul) && !isDisabled) {
      setDisabled(true);
    }
  }, [nome, age, city, modul, isDisabled]);


  const handleClick = () => {
    const newForm = {
      id: forms.length,
      name: nome,
      age,
      city,
      module: modul,
    };
    createNewForm(newForm);
    setNome('');
    setAge(0);
    setCity('');
    setModul('');
    setRegistred(true);
  }

  return (
    <div className="App">
      {
        registred && <h3>Cadastro realizado com sucesso</h3>
      }
      <p>
      {nome || "Nome digitado"}
      </p>
      <Input 
      type="text" 
      name="nome" 
      label="Digite o seu nome" 
      value={nome}
      onChange={ ({target: {value}}) => setNome(value)}
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
      label="Submeter"
      type="button"
      onClick={ handleClick }
      disabled={isDisabled}
      />
      <Button
      label="Ler resultados"
      type="button"
      onClick={ () => props.history.push('/lidos')}
      />
    </div>
  );
}

export default Form