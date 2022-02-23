import { ThemeProvider } from 'styled-components';
import Counter from './components/counter/Counter';
import { useState } from 'react';

const App = () => {
  const DefaultTheme = {
    main: 'yellow',
    buttonColor: '#8e44ad',
  };

  const SecondaryTheme = {
    main: 'mediumseagreen',
    buttonColor: '#7f8c8d',
  };

  const [valueState, setValueState] = useState(DefaultTheme);

  const handler = (e) => {
    let value;
    if (e.target.value === 'Default') {
      value = DefaultTheme;
    } else if (e.target.value === 'Secondary') {
      value = SecondaryTheme;
    }
    setValueState(value);
  };

  return (
    <ThemeProvider theme={valueState}>
      <div className='App'>
        <select onChange={handler}>
          <option value={'Default'}>Default</option>
          <option value={'Secondary'}>Secondary</option>
        </select>

        <Counter />
      </div>
    </ThemeProvider>
  );
};

export default App;
