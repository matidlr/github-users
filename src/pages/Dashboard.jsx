import Card from '../components/Card';
import Followers from '../components/Followers';
import UserInfo from '../components/UserInfo';
import Wrapper from '../assets/wrappers/Dashboard';

const Dashboard = () => {
  return (
    <main className='section'>
      <Wrapper className='section-center'>
          <Card></Card>
          <Followers></Followers>
      </Wrapper>
        
    </main>
  )
}

export default Dashboard