import React from 'react';
import './styles.css';

export default function Title({
  callbackClear,
  callbackConversion,
  callbackTable,
}) {
  return (
    <>
      <div className="buttons">
        <button
          type="button"
          className="buttonConversion"
          onClick={callbackConversion}
          style={{ outline: 'none' }}
        >
          Converter
        </button>
        <button
          type="button"
          className="buttonClean"
          onClick={callbackClear}
          style={{ outline: 'none' }}
        >
          Limpar
        </button>
        <button
          type="button"
          className="buttonTable"
          onClick={callbackTable}
          style={{ outline: 'none' }}
        >
          Tabela
        </button>
      </div>
      <div className="footer">
        Ícones feitos por
        <a href="https://www.flaticon.com/br/autores/catkuro" title="catkuro">
          catkuro
        </a>
        from
        <a href="https://www.flaticon.com/br/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </>
  );
}
