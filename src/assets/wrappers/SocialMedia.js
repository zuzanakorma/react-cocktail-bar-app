import styled from 'styled-components';

const Wrapper = styled.div`
  .social-container {
   display:flex;
  flex-direction: row;
  justify-content: center;
  background: transparent;
  width:100%;
  padding-top:20%
}
h3,p{
    margin: 20px;
}
.info{
    justify-content: center;
    text-align: center;
}
.icon{
position:relative;
margin-top: 20px;
}
a.social {
  margin: 0 0.8rem;
  transition: transform 250ms;
  display: inline-block;
}

a.social:hover {
  transform: translateY(-2px);
}

a.youtube {
  color: #eb3223;
}

a.facebook {
  color: #4968ad;
}

a.twitter {
  color: #49a1eb;
}

a.instagram {
  color: #dc2743;
}
`;

export default Wrapper;