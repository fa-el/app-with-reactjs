import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import UsingClassComponent from './pages/UsingClassComponent';
import UsingFunctionComponent from './pages/UsingFunctionComponent';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}>
          <Route index element={<Home/>}/>
          <Route path='/class' element={<UsingClassComponent/>}/>
          <Route path='/function' element={<UsingFunctionComponent/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Home () {
  const menu = [
    {
        "name": "Class Component",
        "desc": "This page using a Class component",
        "link": "/class"
    },
    {
        "name": "Function Component",
        "desc": "This page using a Function component",
        "link": "/function"
    }
];

  return <div className='home flex flex-column justify-center align-center' style={{
    backgroundColor: 'Window'
  }}>
    <h1 className='title'>NATIVE REACTJS HOME PAGE HERE</h1>
      <div className='grid grid-cols-2'>
        {menu.map((v, index) => <div key={index} className='flex flex-column' style={{
          padding: 16
        }}>
          <Link to={v.link} style={{
            padding: 16,
            border: 1,
            borderStyle: 'solid',
            borderWidth: 1,
            borderColor: 'blue',
            borderRadius: 8,
          }}>
            <h1>{v.name}</h1>
            <p>{v.desc}</p>
            <p>Let's check this out</p>
          </Link>
        </div>)}
      </div>
  </div>
}

export default App;
