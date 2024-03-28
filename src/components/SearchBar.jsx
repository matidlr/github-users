import { useContext, useState } from "react";
import Wrapper from "../assets/wrappers/SearchBar";
import { MdSearch } from 'react-icons/md';
import { GithubContext } from "../context";


const SearchBar = () => {
    const [user,setUser] = useState('');
    const {requests} = useContext(GithubContext);

    const handleSubmit = (e) =>{
      e.preventDefault();
      if (user) {

      }
    }
  return (
    <section className="section">
        <Wrapper className="section-center">
            <form onSubmit={handleSubmit}>
               <div className="form-control">
                  <MdSearch />
                  <input 
                      type='text' 
                      placeholder="enter hithub user"
                      value={user} 
                      onChange={()=> setUser(e.target.value)} 
                  />
                  {requests > 0 &&  <button type='submit'>search</button>}
                 
               </div>
            </form>
            <h3>requests : {requests} / 60</h3>
        </Wrapper>
    </section>
  )
}

export default SearchBar