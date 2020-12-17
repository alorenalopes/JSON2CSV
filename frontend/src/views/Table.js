import React from 'react';
import { useParams } from 'react-router-dom';
import Title from '../components/Title/index';
import TableCSV from '../components/TableCSV/index';

export default function Table() {
  const { codeCSV } = useParams();

  return (
    <div>
      <Title />
      <TableCSV codeCSV={codeCSV} />
    </div>
  );
}
