import Card from '../components/Card';
import Followers from '../components/Followers';
import UserInfo from '../components/UserInfo';
import Wrapper from '../assets/wrappers/Dashboard';
import SearchBar from '../components/SearchBar';
import Repos from '../components/Repos';
import Navbar from '../components/Navbar';
const Dashboard = () => {
  return (
    <main className='section'>
      <Wrapper className='section-center'>
          <Navbar/>
          <SearchBar/>
          <UserInfo/>
          <Repos/>
      </Wrapper>
        
    </main>
  )
}

export default Dashboard