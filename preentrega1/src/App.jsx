import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navegacion from './components/Navbar'
import Body from './components/Body'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailCointainer';


function App() {
  return (
    <>
      

      <BrowserRouter>
        <Navegacion/>
        <Body saludos={"Bienvenido a Mefcafe"}/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:cid' element={<ItemListContainer/>}/>
          <Route path='/detalles/:pid' element={<ItemDetailContainer/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
