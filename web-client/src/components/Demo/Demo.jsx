import React from 'react'
import logo from './logo.svg'
import Counter from '../Counter'
import './Demo.css'

const Demo = () => (
  <div className="Demo">
    <header className="Demo-header">
      <img src={logo} className="Demo-logo" alt="logo" />
      <Counter />
      <p>
        Edit code and save to reload.
      </p>
      <span>
        <span>Learn </span>
        <a
          className="Demo-link"
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer">
          React
        </a>
        <span>, </span>
        <a
          className="Demo-link"
          href="https://redux.js.org/"
          target="_blank"
          rel="noopener noreferrer">
          Redux
        </a>
        <span>, </span>
        <a
          className="Demo-link"
          href="https://redux-toolkit.js.org/"
          target="_blank"
          rel="noopener noreferrer">
          Redux Toolkit
        </a>
        ,<span> and </span>
        <a
          className="Demo-link"
          href="https://react-redux.js.org/"
          target="_blank"
          rel="noopener noreferrer">
          React Redux
        </a>
      </span>
    </header>
  </div>
)

export default Demo