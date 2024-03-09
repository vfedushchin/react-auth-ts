import React, { createContext } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AppLayout } from './AppLayout/AppLayout'
import Store from "./../store/store";

interface State {
  store: Store,
}

export const store = new Store();
export const Context = createContext<State>({ store })

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Context.Provider value={{ store }}>
        <AppLayout/>
      </Context.Provider>
    </BrowserRouter>
  )
}
