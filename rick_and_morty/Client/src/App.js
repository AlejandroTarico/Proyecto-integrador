import style from './App.module.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Vav/Nav.jsx';
import { useState, useEffect} from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Detail from './components/Reviews/Detail';
import About from './components/Reviews/About';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites'

function App() {
   const [characters, setCharacters] = useState([]);
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const EMAIL = '';
   const PASSWORD = '';

   //Con express
   // function login(userData) {
   //    const { email, password } = userData;
   //    const URL = 'http://localhost:3001/rickandmorty/login/';
   //    axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
   //       const { access } = data;
   //       setAccess(data);
   //       access && navigate('/home');
   //    });
   // }

      //cons ASync
      async function login (userData) {
         try {
            const { email, password } = userData;
            const URL = 'http://localhost:3001/rickandmorty/login';
            const {data} = await axios(URL + `?email=${email}&password=${password}`)
            const { access } = data;
            setAccess(data);
            access && navigate('/home');
         } catch (error) {
            console.log(error);
         }
      }



   //Antes de express
   // function login(userData) {
   //    if (userData.password === PASSWORD && userData.email === EMAIL) {
   //       setAccess(true);
   //       navigate('/home');
   //    }
   // }
   useEffect(() => {
      !access && navigate('/');
   }, [access]);
   // Con promesas
   // const onSearch = (id) => {
   //    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
   //       if (data.name) {
   //          setCharacters((oldChars) => [...oldChars, data]);
   //       } else {
   //          window.alert('¡No hay personajes con este ID!');
   //       }
   //    });
   // };

   const onSearch = async (id) => {
      try {
         const {data} = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      } catch (error) {
         // console.log(error);
         window.alert('¡No hay personajes con este ID!');

      }
   }

   // const [isLoggedIn, setIsLoggedIn] = useState(false);

   // const handleLogout = () => {
   //    setIsLoggedIn(false);
   // };


   const onClose = (id) => {
      setCharacters(characters.filter((char) => {
         return char.id !== id;
      }));
   };
   const location = useLocation();  // Con esto controlo que el nav no se vea cuando estoy en la pagina del login
   const isLoginPage = location.pathname === '/';
   return (
      <div className={style.imageApp}>
      {/* {isLoggedIn ?  */}
         {!isLoginPage && <Nav onSearch={onSearch} />}
          {/* : ( */}
         <Routes>
            <Route path='/'element={<Form login = {login} />} />
            <Route path="/home" element={<Cards characters={characters} onClose= {onClose} />} />
            <Route path="/about" element={<About />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/favorites" element={<Favorites />} />
         </Routes>
      {/* )} */}
         {/* <Cards characters={characters} onClose= {onClose} /> */}
      </div>
   );
}

export default App;
