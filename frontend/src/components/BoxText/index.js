import React from 'react';
import './styles.css';
import jsonLogo from '../../assets/json.png';
import csvLogo from '../../assets/csv.png';

export default function Title({ json, callbackJSON, codeCSV }) {
  return (
    <>
      {json && (
        <div className="boxSize">
          <img src={jsonLogo} alt="" className="boxImage" />
          <textarea
            type="text"
            required
            className="boxText"
            placeholder="Digite o código JSON para conversão"
            onChange={e => {
              callbackJSON(e.target.value);
            }}
          />
        </div>
      )}
      {!json && (
        <div className="boxSize">
          <img src={csvLogo} alt="" className="boxImage" />
          <textarea
            disabled
            className="boxText"
            value={codeCSV}
            placeholder="CSV convertido"
          />
        </div>
      )}
    </>
  );
}
