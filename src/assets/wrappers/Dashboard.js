import styled from "styled-components";

const Wrapper = styled.div`
  .chart-wrapper {
    margin-top: 2em;
    display: grid;
    gap: 1em;
  }

  .content-wrapper {
    margin: 0 7px;
  }

  @media (min-width: 700px) {
    .user-wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1em;
    }
  }
`

export default Wrapper;