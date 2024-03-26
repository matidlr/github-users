import Wrapper from '../assets/wrappers/Loading'
import loadingGif from "../assets/loading.gif"
const Loading = () => {
  return (
    <Wrapper>
      <img src={loadingGif} alt="loading" />
    </Wrapper>
  )
}
export default Loading

