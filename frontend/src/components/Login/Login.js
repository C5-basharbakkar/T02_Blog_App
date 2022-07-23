import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../redux/reducers/userReducer";
import { getUser } from "../../redux/reducers/userReducer";
import { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import { setLogin } from "../../redux/LoginReducer";
function Login() {
  const [email, setEmail] = useState("");
  const[users,setUsers]=useState("")
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const { login } = useSelector((state) => {
    return {
      login: state.login.login,
    };
  });

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((result) => {
setUsers(result.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSubmit = () => {
    users.map((user) => {
      if (user.username === userName && user.email === email) {
        console.log(user);
        dispatch(
          setLogin({
            userName,
            email,
          })
        );
      } else setMessage("user is not found");
    });
  };
  return (
    <div className="log">
      <form onSubmit={handleSubmit}>
        <div className="email">
          <input
            className="inputLogin"
            placeholder="UserName"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <input placeholder="email" onChange={(e) => {
              setEmail(e.target.value);
            }} />
        </div>
        <button className="loginButton">login</button>
      </form>
    </div>
  );
}

export default Login;
