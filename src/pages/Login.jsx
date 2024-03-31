import freelancingImg from "../assets/freelancing-clipart.svg"
import { useAuth0 } from "@auth0/auth0-react"
import Wrapper from "../assets/wrappers/Login";

const Login = () => {
  const { loginWithRedirect } = useAuth0()
  return (
    <Wrapper>
      <div className="login-page">
        <img
          src={freelancingImg}
          alt="worker on laptop"
          className="freelance-img"
        />
        <h1 className="title">Github User</h1>
        <button className="btn btn-login" onClick={() => 
          loginWithRedirect()}>
          Log In / Sign Up
        </button>
      </div>
    </Wrapper>
  )
};

export default Login;