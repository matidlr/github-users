import { useContext } from "react"
import { GithubContext } from "../context"

const UserInfo = () => {
  const data = useContext(GithubContext);
  console.log(data)
  return (
    <div>UserInfo</div>
  )
}

export default UserInfo