import './App.css';
import Itemlistcontainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar';
import imagen from './components/images/fondo.png'

function App() {
  return (
    <div className='container-fluid fondo_rosa' >
       <NavBar/>
        <div className="text-center">
          <img src={imagen} alt="Luna Lingerie" className="img-fluid"/>   
        </div> 
       <Itemlistcontainer greeting="Bienvenidas"/>   
    </div>
  );   
}

export default App;
