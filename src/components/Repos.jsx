import { Pie3D, Column3D, Bar3D, Doughnut2D } from './Charts'
import Wrapper from '../assets/wrappers/Repos';
import { useContext } from 'react';
import { GithubContext } from '../context';
const Repos = () => {
  const {repos} = useContext(GithubContext);
  return (
    <div>Repos</div>
  )
}

export default Repos;