import './login.css';
import './index'

function login() {
  return (
    <div className='login'>
      <div className='login-image'></div>
      <div className='login-container'>
        <div className='login-wapper'>

          <h1>Login</h1>

          <form action='' method='GET' id='login-form'>
            <div className='username'>
              <label htmlFor=''></label>
              <input type='username' id='username' placeholder='Username'/>
            </div>

            <div className='password'>
              <label htmlFor='password' ></label>
              <input type='text' id='password' placeholder='Password'/>
            </div>

            <button type='submit' id='login-btn'>Login</button>
          </form>
        </div>
      </div>
    </div>
  );


}

export default login;
