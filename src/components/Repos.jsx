import { Pie3D, Column3D, Bar3D, Doughnut2D, ExampleChart } from './Charts'
import Wrapper from '../assets/wrappers/Repos';
import { useContext } from 'react';
import { GithubContext } from '../context';
const Repos = () => {
  const {repos} = useContext(GithubContext);
let languages = repos.reduce((total, item) => {
  const { language } = item;
  if(!language) return total;
  if(!total[language]) {
    total[language] = {label:language,value: 1};
  } else {
    total[language] = {
       ...total[language],
       value: total[language].value + 1,
      };
  }
  return total
}, {});
languages = Object.values(languages).sort((a,b)=>{
  return b.value - a.value;
}).slice(0,5);
  const chartData = [
    {
      label: 'HTML',
      value: '13',
    },
    {
      label: 'CSS',
      value: '23',
    },
    {
      label: 'Javascript',
      value: '80',
    },
  ];
  return (
    <section className='section'>
      <Wrapper className='section-center'>
      <Pie3D data={languages} />
      <div></div>
      <Doughnut2D data={chartData}/>
      <div></div>
      </Wrapper>
    </section>
  )
}

export default Repos;