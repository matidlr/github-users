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
  // check rate
  const checkRequests = () => {
    axios(`${rootUrl}/rate_limit`)
    .then(({data}) =>{
      let {rate:{remaining}} = data;
      setRequests(remaining);
      if (remaining === 0) {

      }
    })
    .catch((err) => console.log(err));
  };

   // error
   useEffect(checkRequests,[]);
  return (
  <GithubContext.Provider value={{githubUser, repos, followers, requests}}>
  {children}
  </GithubContext.Provider>
  );
};

export { GithubProvider, GithubContext };
