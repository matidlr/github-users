import Card from '../components/Card';
import Followers from '../components/Followers';
import UserInfo from '../components/UserInfo';
import Wrapper from '../assets/wrappers/Dashboard';
import SearchBar from '../components/SearchBar';
import Repos from '../components/Repos';
import Navbar from '../components/Navbar';
import { useContext } from 'react';
import { GithubContext } from '../context';
import loadingImage from '../assets/loading.gif'

const Dashboard = () => {
  const {isLoading} = useContext(GithubContext);
  if(isLoading){
    return <main>
      <Navbar/>
      <SearchBar/>
      <img src={loadingImage} className='loading-img' alt='loading' />
    </main>
  }
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