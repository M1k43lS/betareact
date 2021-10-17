import {NavLink} from 'react-router-dom'
import style from './Landing.module.css'

function Landing() {
    return (
      <div className = {style.background}>
          <NavLink to ='/home' className={style.NavLink}>
             <p className = {style.btn}>
                JUMP TO HOME
             </p>
          </NavLink>
      </div>
    );
  }
  
  export default Landing;
  