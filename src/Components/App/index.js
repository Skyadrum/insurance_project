import React from 'react'
import Menu from '../Menu'
import { BrowserRouter, Route } from 'react-router-dom'
import policyForm from '../policyForm'
import claimForm from '../claimForm'
import NamesList from '../NamesList'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Menu />
            <Route path="/" exact component={ policyForm }></Route>
            <Route path="/claimForm" component={ claimForm }></Route>
      </BrowserRouter>
    </div>
  )
}

export default App
