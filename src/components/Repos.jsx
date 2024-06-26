import React from 'react';
import styled from 'styled-components';
import { GithubContext } from '../context/context';
import { Pie3D, Column3D, Bar3D, Doughnut2D } from './Charts';
const Repos = () => {
  const { repos } = React.useContext(GithubContext)

  let languages = repos.reduce((total, item) => {
    const { language, stargazers_count } = item;
    if (!language) return total;
    if (!total[language]) {
      total[language] = { label: language, value: 1, stars: stargazers_count };
    } else {
      total[language] = { ...total[language], value: total[language].value + 1, stars: total[language].stars + stargazers_count };
    }
    return total;
  }, {})

  const mostUsed = Object.values(languages).sort((a, b) => {
    return b.value - a.value
  }).slice(0, 5);

  //Most Stars per Language
  const mostPopular = Object.values(languages).sort((a, b) => {
    return b.stars - a.stars
  }).slice(0, 5).map((item) => {
    return { label: item.label, value: item.stars }
  }).slice(0, 5);

  //Stars and Forks
  let { stars, forks } = repos.reduce((total, item) => {
    const { stargazers_count, name, forks } = item
    total.stars[stargazers_count] = { label: name, value: stargazers_count }

    total.forks[forks] = { label: name, value: forks }

    return total
  }, { stars: {}, forks: {} })

  stars = Object.values(stars).slice(-5).reverse()
  forks = Object.values(forks).slice(-5).reverse()


  const chartData = [
    {
      label: "HTML",
      value: "13"
    },
    {
      label: "CSS",
      value: "203"
    },
    {
      label: "Javascript",
      value: "45"
    },
  ];

  return <section className='section'>
    <Wrapper className='section-center'>
      {/* <ExampleChart data={chartData}></ExampleChart> */}
      <Pie3D data={mostUsed}></Pie3D>
      <Column3D data={stars}></Column3D>
      <Doughnut2D data={mostPopular}></Doughnut2D>
      <Bar3D data={forks}></Bar3D>
    </Wrapper>
  </section>;
};

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;

export default Repos;