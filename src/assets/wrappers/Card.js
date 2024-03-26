import styled from "styled-components";

const Wrapper = styled.div`
  .user-card::before {
    content: "User";
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(0, -100%);
    background-color: white;
    padding: 0.5em 1em;
    border-radius: 5px 5px 0 0;
    color: var(--clr-gray);
  }

  .user-card {
    background-color: white;
    padding: 2em;
    margin-top: 4em;
    position: relative;
  }

  header {
    display: flex;
    align-items: center;
    gap: 1em;
  }

  .user-img {
    width: 50px;
    border-radius: 50%;
  }

  .name {
    margin: 0;
  }

  .username {
    margin: 0;
    color: var(--clr-gray);
  }

  .follow {
    margin-left: auto;
    background-color: white;
    border: 1px solid var(--clr-light-green);
    color: var(--clr-light-green);
    padding: 0.5em 1em;
    border-radius: 20px;
    cursor: pointer;
  }

  span {
    display: block;
    color: var(--clr-gray);
    display: flex;
    align-items: center;
    gap: 0.5em;
    margin-bottom: 0.4em;
  }

  .link {
    color: var(--clr-light-green);
    cursor: pointer;
  }

  // .link:hover {
  //   color: var(--clr-gray);
  // }
`

export default Wrapper;