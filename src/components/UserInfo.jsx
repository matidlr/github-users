import { useContext } from "react"
import { GithubContext } from "../context"
import { RiGitRepositoryFill } from "react-icons/ri"
import { FiUsers } from "react-icons/fi"
import { AiOutlineUserAdd } from "react-icons/ai"
import { VscGistSecret } from "react-icons/vsc";
import Wrapper from "../assets/wrappers/UserInfo"

const UserInfo = () => {
  const {githubUser} = useContext(GithubContext);
  const {public_repos, followers, following, public_gists} = 
  githubUser;

  const items = [
  {
    id:1,
    icon:<RiGitRepositoryFill className='icon' />,
    label:'repos',
    value:public_repos, 
    color:'pink'
  },
  {
    id:2,
    icon:<FiUsers className='icon' />,
    label:'followers',
    value: followers, 
    color:'green'
  },
  {
    id:3,
    icon:<AiOutlineUserAdd className='icon' />,
    label:'following',
    value: following, 
    color:'purple'
  },
  {
    id:4,
    icon:<VscGistSecret className='icon' />,
    label:'gists',
    value:public_gists, 
    color:'yellow'
  },
  ]
  return (
    <section className="section">
        <Wrapper className="section-center">
            {items.map(item =>{
              return <Item key={item.id} {...item}></Item>
            })}
        </Wrapper>
    </section>
  )
}

const Item = ({icon,label,value,color})=>{
  return <article className="item">
      <span className={color}>{icon}</span>
      <div>
        <h3>{value}</h3>
        <p>{label}</p>
      </div>
  </article>
};

export default UserInfo;