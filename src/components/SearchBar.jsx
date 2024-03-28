import { useState } from "react";
import Wrapper from "../assets/wrappers/SearchBar";
import { MdSearch } from 'react-icons/md';
import { GithubContext } from "../context";


const SearchBar = () => {
    const [user,setUser] = useState('')

    const handleSubmit = (e) =>{
      e.preventDefault();
    }
  return (
    <section className="section">
        <Wrapper className="section-center">
            <form onSubmit={handleSubmit}>
               <div className="form-control">
                  <MdSearch />
                  <input type='text' placeholder="enter hithub user"
                  value={user} onChange={()=> setUser(e.target.value)} />
                  <button type='submit'>search</button>
               </div>
            </form>
            <h3>requests : 60 / 60</h3>
        </Wrapper>
    </section>
  )
}

export default SearchBar