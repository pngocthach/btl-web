import './login.css';
import './index'

function login() {
  return (
    <div className='login'>
      <div className='login-image'>
        <div className='login-image-logo'></div>
        <div className='login-title'>
          Trung tâm đăng kiểm
        </div>
      </div>
      <div className='login-container'>
        <div className='login-wapper'>

          <h1>Login</h1>

          <form action='' method='GET' id='login-form'>
            <div className='username'>
              <label htmlFor=''><i class="fa-solid fa-user"></i></label>
              <input type='username' id='username' placeholder='Username'/>
            </div>

            <div className='password'>
              <label htmlFor='password' ><i class="fa-solid fa-lock"></i></label>
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
