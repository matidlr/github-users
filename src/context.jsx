import {createContext, useContext, useState, useEffect } from "react";
import mockUser from './mockData/mockUser';
import mockRepos from './mockData/mockRepos';
import mockFollowers from './mockData/mockFollowers';
import axios from 'axios';

const rootUrl = 'https://api.github.com';

const GithubContext = createContext();

const GithubProvider = ({children}) =>{
   const [githubUser, setGithubUser] = useState(mockUser);
   const [repos, setRepos] = useState(mockRepos);
   const [followers, setFollowers] = useState(mockFollowers);
   // request loading
   cont [requests, setRequests] = useState(0);
   const [loading, setLoading] = useState(false);

   // error
   const [error, setError] = useState({show:false,msg:''})

   const searchGithubUser = async (user) => {
    const response = (await axios(`${rootUrl}/users/${user}`)).
    catch(err => console.log(err))
    if(response){
      setGithubUser(response.data)
    } else{
      toggleError(true, 'there is no user with that user name')
    }
   }
  // check rate
  const checkRequests = () => {
    axios(`${rootUrl}/rate_limit`)
    .then(({data}) =>{
      let {rate:{remaining}} = data;
      remaining = 0;
      setRequests(remaining);
      if (remaining === 0) {
          toggleError(true, 'sorry, you have exceeded your hourly rate limit')
      }
    })
    .catch((err) => console.log(err));
  };

  function toggleError(show = false,msg = ''){
      setError({show,msg})
  }

   useEffect(checkRequests,[]);
  return (
  <GithubContext.Provider value={{githubUser, repos, followers, requests, error, searchGithubUser}}>
  {children}
  </GithubContext.Provider>
  );
};

export { GithubProvider, GithubContext };
