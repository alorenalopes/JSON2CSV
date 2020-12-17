import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Title from '../components/Title/index';
import BoxText from '../components/BoxText/index';
import Buttons from '../components/Buttons/index';
import api from '../services/api';

export default function Home() {
  const [codeJSON, setCodeJSON] = useState('');
  const [codeCSV, setCodeCSV] = useState('');
  const [ButtonClear, setButtonClear] = useState(1);
  const [ButtonConversion, setButtonConversion] = useState(1);
  const [ButtonTable, setButtonTable] = useState(1);
  const [state, setState] = useState(5);
  const history = useHistory();

  function conversion() {
    if (codeJSON === '') {
      setState(0);
      setTimeout(() => {
        setState(5);
      }, 3000);
    } else {
      api
        .post('/', {
          codeJSON,
        })
        .then(response => {
          if (response.data.error === 'JSON is Invalid') {
            setState(1);
            setTimeout(() => {
              setState(5);
            }, 3000);
          } else {
            setCodeCSV(response.data);
          }
        });
      setButtonConversion(1);
    }
  }

  function handleClick() {
    if (codeCSV !== '') {
      history.push(`/table/${codeCSV}`);
    } else {
      setState(2);
      setTimeout(() => {
        setState(5);
      }, 3000);
    }
  }

  function alert() {
    if (state === 0) {
      return (
        <div
          className="alert"
          role="alert"
          style={{ backgroundColor: '#74C69D' }}
        >
          Campo JSON vazio
        </div>
      );
    }
    if (state === 1) {
      return (
        <div
          className="alert "
          role="alert"
          style={{
            backgroundColor: '#74C69D',
          }}
        >
          JSON inválido
        </div>
      );
    }
    if (state === 2) {
      return (
        <div
          className="alert"
          role="alert"
          style={{ backgroundColor: '#74C69D' }}
        >
          Converta um código JSON para CSV
        </div>
      );
    }
    if (state === 3) {
      return (
        <div
          className="alert"
          role="alert"
          style={{ backgroundColor: '#74C69D' }}
        >
          Os campos já estão limpos
        </div>
      );
    }
    return <div />;
  }

  function clean() {
    if (codeCSV === '' && codeJSON === '') {
      setState(3);
      setTimeout(() => {
        setState(5);
      }, 3000);
    } else {
      setCodeCSV('');
      setCodeJSON('');
    }
  }

  useEffect(() => {
    if (ButtonConversion === 2) {
      conversion();
      setButtonConversion(1);
    }
    if (ButtonClear === 2) {
      clean();
      setButtonClear(1);
    }
    if (ButtonTable === 2) {
      handleClick();
      setButtonTable(1);
    }
  }, [ButtonClear, ButtonConversion, ButtonTable]);

  return (
    <div>
      <Title />
      {alert()}
      {ButtonClear === 1 && (
        <>
          <div className="boxDisplay">
            <BoxText json callbackJSON={code => setCodeJSON(code)} />
            <BoxText json={false} codeCSV={codeCSV} />
          </div>
          <Buttons
            codeCSV={codeCSV}
            callbackClear={() => setButtonClear(2)}
            callbackConversion={() => setButtonConversion(2)}
            callbackTable={() => setButtonTable(2)}
          />
        </>
      )}
    </div>
  );
}
