import styled from "styled-components";

const Wrapper = styled.section`
.user-info {
display: grid;
row-gap: 1em;
margin-top: 2em;
}

.info-card {
display: grid;
grid-template-columns: 50px 1fr;
align-items: center;
column-gap: 2em;
background-color: white;
padding: 1em;
border-radius: 10px;
}

.info-card {
h3 {
margin: 0;
}
p {
margin: 0.5em 0;
text-transform: capitalize;
}
}
.icon-wrapper {
height: 50px;
grid-row: 1 / 3;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
}

@media (min-width: 600px) {
.user-info {
grid-template-columns: 1fr 1fr;
column-gap: 1em;
}

@media (min-width: 1000px) {
  .user-info {
    grid-template-columns: repeat(4, 1fr);
    column-gap: 1em;
  }
}
`
export default Wrapper;