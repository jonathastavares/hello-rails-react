import React from "react"
import  { BrowserRouter, Routes, Route } from "react-router-dom"
import { Provider } from "react-redux"
import HelloWorld from "./HelloWorld"
import configureStore from "./ConfigureStore"
const store = configureStore();

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={("Home!")} />
            <Route path="/hello" element={<HelloWorld />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App
