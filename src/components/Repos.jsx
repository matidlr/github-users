import { Pie3D, Column3D, Bar3D, Doughnut2D } from './Charts'
import Wrapper from '../assets/wrappers/Repos';
import { useContext } from 'react';
import { GithubContext } from '../context';
const Repos = () => {
  const {repos} = useContext(GithubContext);
const languages = repos.reduce((total, item) => {
  const { language,stargazers_count } = item;
  if(!language) return total;
  if(!total[language]) {
    total[language] = {label:language,value: 1,
    stars:stargazers_count };
  } else {
    total[language] = {
       ...total[language],
       value: total[language].value + 1,
       stars: total[language].stars + stargazers_count,
      };
  }
  return total
}, {});
const mostUsed = Object.values(languages).sort((a,b)=>{
  return b.value - a.value;
}).slice(0,5);

// most stars per language

const mostPopular = Object.values(languages).sort((a,b)=>{
  return b.stars - a.stars;
}).map((item)=>{
  return {...item,value:item.stars}
}).slice(0,5);

// stars, forks

let {stars,forks} = repos.reduce((total,item)=>{
  const {stargazers_count,name,forks} = item;
  total.stars[stargazers_count] = {label:name,
  value:stargazers_count};
  total.stars[forks] = { label: name,value:forks}
  return total
},{
  stars:{},forks:{}
});

stars = Object.values(stars).slice(-5).reverse();
forks = Object.values(forks).slice(-5).reverse();


  return (
    <section className='section'>
      <Wrapper className='section-center'>
      <Pie3D data={mostUsed} />
      <Column3D data={stars}/>
      <Doughnut2D data={mostPopular}/>
      <Bar3D data={forks}/>
      </Wrapper>
    </section>
  )
}

export default Repos;