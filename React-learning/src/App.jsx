// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// import Header from "./Header"
// import Footer from "./Footer"
// import Food from "./Food"

import Header from "./Header"
import Footer from "./Footer"
import Food from "./Food"
import Card from "./Card"
import Student from "./Student"
import Greeting from "./Greeting"
import Buttons from "./Buttons"
import Input from "./Input"


function App() {
  return(
    <>
      <Greeting isLoggedIn={true} username="Aliane" />
      <Buttons />
      <br>
      </br>
      <Input />
      <Header />
      <Card />
      <Food />
      <Student name="SpongeBob" age={30} isStudent={true}/>
      <Student name="Patrick" age={42} isStudent={false} />
      <Student name ="Squidward" age={50} isStudent={false}/>
      <Student name="Sandy" age={27} isStudent={true}/>
      <Footer />
    </>
    
  );
  
}

export default App

// <>

// </>
// const [count, setCount] = useState(0)

// return (
//   <>
//     <div>
//       <a href="https://vite.dev" target="_blank">
//         <img src={viteLogo} className="logo" alt="Vite logo" />
//       </a>
//       <a href="https://react.dev" target="_blank">
//         <img src={reactLogo} className="logo react" alt="React logo" />
//       </a>
//     </div>
//     <h1>Vite + React</h1>
//     <div className="card">
//       <button onClick={() => setCount((count) => count + 1)}>
//         count is {count}
//       </button>
//       <p>
//         Edit <code>src/App.jsx</code> and save to test HMR
//       </p>
//     </div>
//     <p className="read-the-docs">
//       Click on the Vite and React logos to learn more
//     </p>
//   </>