import React, { useState, useEffect } from 'react';
import Nav from './Components/Nav';
import { Container } from './Components/Game Container/Container';

function App() {

  return (
    <div>
      <Nav />
      <main>
        <Container />
      </main>
    </div>
  );
}

export default App;
