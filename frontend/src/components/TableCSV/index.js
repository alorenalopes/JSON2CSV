import React from 'react';
import Table from 'react-bootstrap/Table';
import './styles.css';

export default function TableCSV({ codeCSV }) {
  const keys = codeCSV.split('\n', 1);
  const keysSeparate = keys[0].split(',');

  const informations = codeCSV.split('\n');
  informations.splice(0, 1);
  informations.splice(informations.length - 1, 1);

  const informationsSeparate = [];
  for (let i = 0; i < informations.length; i += 1) {
    informationsSeparate.push(informations[i].split(','));
  }

  return (
    <div className="tableCSV">
      <Table>
        <thead>
          <tr>
            {keysSeparate.map((key, index) => {
              return (
                <th key={index.toString()} className="colorText">
                  {key}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {informationsSeparate.map((information, index) => {
            return (
              <tr key={index.toString()}>
                {information.map((item, position) => {
                  return (
                    <td key={position.toString()} className="colorText">
                      {item}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
