import { useRef, useState } from "react"
import { Container } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { userLogin } from "../../redux/User/UserAction"
import "./login.scss"

const initialState = {
  username: "",
  password: "",
}

const Login = () => {
  const dispatch = useDispatch()
  const uRef = useRef()
  const passRef = useRef()
  const { isLoading, isLoggedIn, error } = useSelector((state) => state.user)
  const [loginInfo, setLoginInfo] = useState()

  const handleOnClick = async (e) => {
    e.preventDefault()

    const username = uRef.current?.value
    const password = passRef.current?.value

    dispatch(userLogin({ username, password }))
  }

  return (
    <div className="login">
      <Container className="login-container">
        <div className="circle circle-one"></div>

        <div className="form-container">
          <img
            src="/images/illustration.png"
            className="illustration"
            alt="illustration"
          />

          <h1>LOGIN</h1>
          <div className="login-form">
            <input
              type="text"
              placeholder="USERNAME"
              id="username"
              className="login-input"
              ref={uRef}
            />
            <input
              type="password"
              placeholder="PASSWORD"
              id="password"
              className="login-input"
              ref={passRef}
            />
            <button className="login-btn" onClick={handleOnClick}>
              SUBMIT
            </button>
            <span className="toggle">--</span>
            <span className="ripple"></span>
          </div>

          <div className="links">
            <Link to="/register">REGHISTER</Link>
            <Link to="/forgot-password">FORGOT PASSWORD</Link>
          </div>
        </div>
        <div className="circle circle-two"></div>

        {error && <span>{error.message}</span>}
      </Container>
    </div>
  )
}

export default Login
