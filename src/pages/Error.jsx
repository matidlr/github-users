import styled from "styled-components"
import { Link } from "react-router-dom"
import Wrapper from "../assets/wrappers/Error";
const Error = () => {
  return (
    <Wrapper>
      <div className="error-page">
        <h1 className="title">404</h1>
        <p className="text">Sorry, The page you tried can not be found.</p>
        <Link to="/">
          <button className="btn btn-back">back home</button>
        </Link>
      </div>
    </Wrapper>
  )
};

export default Error;