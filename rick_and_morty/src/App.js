import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Vav/Nav.jsx';
import { useState, useEffect} from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Detail from './components/Reviews/Detail';
import About from './components/Reviews/About';
import Form from './components/Form/Form';

function App() {
   const [characters, setCharacters] = useState([]);
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const EMAIL = '';
   const PASSWORD = '';

   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }
   useEffect(() => {
      !access && navigate('/');
   }, [access]);
   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   };
   const [isLoggedIn, setIsLoggedIn] = useState(false);

   const handleLogout = () => {
      setIsLoggedIn(false);
   };


   const onClose = (id) => {
      setCharacters(characters.filter((char) => {
         return char.id !== Number(id);
      }));
   };
   const location = useLocation();  // Con esto controlo que el nav no se vea cuando estoy en la pagina del login
   const isLoginPage = location.pathname === '/';
   return (
      <div className='App'>
      {/* {isLoggedIn ?  */}
         {!isLoginPage && <Nav onSearch={onSearch} />}
          {/* : ( */}
         <Routes>
            <Route path='/'element={<Form login = {login} />} />
            <Route path="/home" element={<Cards characters={characters} onClose= {onClose} />} />
            <Route path="/about" element={<About />} />
            <Route path="/detail/:id" element={<Detail />} />
         </Routes>
      {/* )} */}
         {/* <Cards characters={characters} onClose= {onClose} /> */}
      </div>
   );
}

export default App;
