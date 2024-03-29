import { useContext, useState } from "react";
import Wrapper from "../assets/wrappers/SearchBar";
import { MdSearch } from 'react-icons/md';
import { GithubContext } from "../context";
import ErrorWrapper from '../assets/wrappers/ErrorWrapper';

const SearchBar = () => {
    const [user,setUser] = useState('');
    const {requests, error, searchGithubUser, isLoading } = useContext(GithubContext);

    const handleSubmit = (e) =>{
      e.preventDefault();
      if (user) {
        searchGithubUser(user)
      }
    }
  return (
    <section className="section">
        <Wrapper className="section-center">
           {error.show && 
           <ErrorWrapper>
                <p>{error.msg}</p>
           </ErrorWrapper> }

            <form onSubmit={handleSubmit}>
               <div className="form-control">
                  <MdSearch />
                  <input 
                      type='text' 
                      placeholder="enter hithub user"
                      value={user} 
                      onChange={()=> setUser(e.target.value)} 
                  />
                  {requests > 0 && !isLoading && <button type='submit'>search</button>}
                 
               </div>
            </form>
            <h3>requests : {requests} / 60</h3>
        </Wrapper>
    </section>
  )
}

export default SearchBar