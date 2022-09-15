import "./styles.css";
import React from 'react'
import Intro from './Intro'
import Features from './Features'

export default function App() {
  return (
    <div className="App">
      <h1 class="grad"> EarBuds </h1>
      <Intro />
      <Features />
    </div>
  );
}
