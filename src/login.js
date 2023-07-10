import React, { useState } from "react";
import "../src/Logins.css";
// const Login=()=>{
//     return(
//         <div id='content'>
//             <h6>Get Started For Free</h6>
//             <ul>
//                 <li>Full Name<input type='text' className='form-control'></input></li>

//                <li>email<input type='text' className='form-control'></input></li>

//                 <li>password<input type='password' className='form-control'></input></li>
//                 <li><input type='checkbox' ></input><span>I Accept GetShortLink</span><a href='Terms & Conditions'>Terms & Conditions</a>
//                 </li>

//                     <button type="button" className="btn btn-primary w-100">Sign Up</button>

//             </ul>
//             console.log(<div>{Login}</div>)
//         </div>
//     )
// }
// export default Login;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [fullname, setfullname] = useState("");

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangefullname = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Fullname:", fullname);
    console.log("Password:", password);
    // You can add your login logic here
  };

  return (
    <div class="logincomponent">
      <h3>Get Started for free</h3>
      <form onSubmit={handleSubmit}>
        <ul>
          Full Name:
          <div>
            <input type="text" value={fullname} onChange={handleChangeEmail} />
          </div>
          <br />
          Email:
          <div>
            <input type="email" value={email} onChange={handleChangeEmail} />
          </div>
          <br />
          Password:
          <div>
            <input
              type="password"
              value={password}
              onChange={handleChangePassword}
            />
          </div>
          <br />
          <div>
            <input class="box"type="checkbox"></input>
            <p>
              I Accept GetShortLink
              <a href="Terms & Conditions">Terms & Conditions</a>
            </p>
          </div>
          <div>
            <button type="submit" id="loginbtn">
              Signup
            </button>
          </div>
        </ul>
      </form>
    </div>
  );
};
// Render the login form component
console.log(<Login />);
export default Login;
