import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import FormProvider from './context/FormProvider';
import ThemeContext from './context/ThemeContext';
import DisplayForms from './DisplayForms';
import EditForm from './EditForm';
import Footer from './Footer';
import Form from './Form';
import Header from './Header';


function App() {
  const [themeColor, setThemeColor] = useState('dark');

  const toogleTheme = () => {
    setThemeColor((themeColor === 'dark') ? 'light' : 'dark');
  }

return (
  <div className={`App ${themeColor}`}>
  
  <ThemeContext.Provider value={{ color: themeColor, toogleTheme }}>
      <Header />
      <FormProvider>
        <Switch>
          <Route path='/edit/:id' component={ EditForm } />
          <Route path='/lidos' component={ DisplayForms } />
          <Route exact path='/' component={ Form }/>
        </Switch>
      </FormProvider>
      <Footer />
    </ThemeContext.Provider>

</div>
)
}

export default App;
