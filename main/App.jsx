import React , { Suspense, useState } from 'react'

import { BrowserRouter, Routes, Route} from 'react-router-dom'


 //import { Dashboard } from './components/Dashboard'
//import { Landing } from './components/Landing'
//new importing methods using lazy loading
const Dashboard = React.lazy(() => import('./components/Dashboard'))
import Landing  from './components/Landing'
//can use import { lazy } from 'react' instead of React.lazy


import { Navbar } from './components/Navbar'
import { useNavigate } from 'react-router-dom'

function App() {
   

  return (
    <div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      {/*<Route path="/Dashboard" element={<Dashboard />}/>
      <Route path="/" element={<Landing/>}/>*/}
      <Route path="/Dashboard" element={<Suspense fallback={"Loading ....."}><Dashboard /></Suspense> }/>
      <Route path="/" element={<Landing/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
