import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

class Login extends Component {

  render() {
    return (
    <div className="main">  	
		<input id="chk" aria-hidden="true" />

        {/* <div class="signup">
            <form className='my-form'>
                <label for="chk" aria-hidden="true">Sign up</label>
                <input type="text" name="txt" placeholder="User name" required="" />
                <input type="email" name="email" placeholder="Email" required="" />
                <input type="password" name="pswd" placeholder="Password" required="" />
                <button>Sign up</button>
            </form>
        </div> */}

        <div class="login">
            <form className='my-form'>
                <h5 className='title'>Login</h5>
                {/* <label for="chk" aria-hidden="true">Login</label> */}
                <input type="email" name="email" placeholder="Email" required="" />
                <input type="password" name="pswd" placeholder="Password" required="" />
                <Link to='/'><button className='btnn'>Login</button></Link>
            </form>
        </div>
	</div>
    );
  }
}

export default Login;