import { useContext } from 'react';
import Wrapper from '../assets/wrappers/Followers';
import { GithubContext } from '../context';

const Followers = () => {
  const {followers} = useContext(GithubContext);

  if(followers.length < 1) {
    return <h2>No Followers Found</h2>
  }
  
  return (
    <Wrapper>
    <span className="label">Followers</span>
    <div className="followers-div">
      {followers.map((c) => {
        const { avatar_url, login, html_url } = c
        return (
          <article key={c.id}>
            <img className="follower-img" src={avatar_url} alt={login} />
            <div className="content">
              <h3 className="name">{login}</h3>
              <p className="link">{html_url}</p>
            </div>
          </article>
        )
      })}
    </div>
  </Wrapper>
  )
}

export default Followers