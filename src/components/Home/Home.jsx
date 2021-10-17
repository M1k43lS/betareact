import {NavLink} from 'react-router-dom';
import style from './Home.module.css';
import axios from 'axios';
const api = axios.get("https://rickandmortyapi.com/api/character")
console.log(api.data);
function Home() {
    return (
      <div className = {style.background}>
          <nav className={StyleSheet.nav}>
                <NavLink to ='/' className={style.navLink}>
                     <p className = {style.btn}>
                          HOME-
                     </p>
                </NavLink>
                <input type='text'/>
            </nav>
            <div className={StyleSheet.cards}>
            </div>
      </div>
    );
  }
  
  export default Home;
  