import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import './styles.css';

export default function Title() {
  return (
    <>
      <Navbar className="nav">
        <div className="letterTitle">JSON2CSV</div>
      </Navbar>
    </>
  );
}
