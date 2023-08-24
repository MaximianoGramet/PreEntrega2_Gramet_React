import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navegacion from './components/Navbar'
import Body from './components/Body'


function App() {
  return (
    <>
      <Navegacion/>
      <Body saludos={"Bienvenido a Mefcafe"}/>
    </>
  )
}

export default App
