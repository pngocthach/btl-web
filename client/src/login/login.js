import style from './login.module.css';
import Button from '../components/button/button.js'
import TextField from '../components/textField/textField';

function Login() {
  return (
    <div className={style.login}>
      <div className={style.container}>

          <form action='' method='GET'>
            
            <img className={style.image}></img>

            <TextField name='Username' width="250px" type="text"></TextField>
            <TextField name='Password' width="250px" type="password"></TextField>

            <Button text="Login"></Button>
          </form>
      </div>
    </div>
  );
}

export default Login;
