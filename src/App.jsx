
import Home from './components/Home/Home';
import SobreMim from './components/SobreMim/SobreMim';
import MeusProjetos from './components/MeusProjetos/MeusProjetos';
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home to1={'/sobremim'} to2={'/meusprojetos'}/>
    },
    {
      path: "/sobremim",
      element: <SobreMim/>
    }, 
    {
      path: "/meusprojetos",
      element: <MeusProjetos/>
    }
  ])


  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
