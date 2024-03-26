import { useContext } from "react"
import { GithubContext } from "../context"
import Wrapper from "../assets/wrappers/Card";
import { BsFillBuildingsFill } from "react-icons/bs"
import { MdLocationPin } from "react-icons/md"
import { BiLink } from "react-icons/bi";

const Card = () => {
  const {githubUser} = useContext(GithubContext);
  const {
    avatar_url,
    name,
    twitter_username,
    location,
    blog: portfolio,
    bio,
    company,
    html_url,
  } = githubUser

  return (
    <Wrapper>
    <div className="user-card section-center">
      <header>
        <img src={avatar_url} alt={name} className="user-img" />
        <div className="username-wrapper">
          <h3 className="name">{name}</h3>
          <p className="username">@{twitter_username || "john doe"}</p>
        </div>

        <button className="follow">
          <a href={html_url} target="_blank">
            Follow
          </a>
        </button>
      </header>
      <p className="bio">{bio}</p>
      <span className="company">
        <BsFillBuildingsFill /> {company || "Company name not provided."}
      </span>
      <span className="location">
        {" "}
        <MdLocationPin />
        {location || "Earth"}
      </span>
      <span className="link">
        {" "}
        <BiLink />
        {portfolio || "no link provided"}
      </span>
    </div>
  </Wrapper>
  )
}

export default Card;