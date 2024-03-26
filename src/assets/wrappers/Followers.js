import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 3em;

  .label {
    background-color: white;
    padding: 0.5em 1em;
    border-radius: 5px 5px 0 0;
    color: var(--clr-gray);
  }

  .followers-div {
    display: flex;
    flex-direction: column;
    gap: 1.5em;
    background-color: white;
    padding: 2em;
    // margin-top: 4em;
    position: relative;
    max-height: 242px;
    overflow: auto;
  }

  .follower-img {
    width: 50px;
    border-radius: 50%;
  }

  article {
    display: flex;
    align-items: center;
    gap: 1em;
  }

  .name,
  .link {
    margin: 0;
  }

  .link {
    color: var(--clr-gray);
  }

  // .followers-div::before {
  //   content: "Followers";
  //   position: absolute;
  //   left: 0;
  //   top: 0;
  //   transform: translate(0, -100%);
  //   background-color: white;
  //   padding: 0.5em 1em;
  //   color: var(--clr-gray);
  //   border-radius: 5px 5px 0 0;
  // }
`
export default Wrapper;