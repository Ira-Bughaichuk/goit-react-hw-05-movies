import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLi = styled.li`
  list-style: none;
  padding: 5px 10px;
width: 300px;
 margin: 0 auto;

  box-shadow:
       inset 0 -3em 3em rgba(0,0,0,0.1),
             0 0  0 2px rgb(255,255,255),
             0.3em 0.3em 1em rgba(0,0,0,0.3);
    margin-top:10px;
    cursor:pointer;
}
`;

export const StyledLink = styled(Link)`
  color: black;
  font-size: 18px;
  text-decoration: none;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: rgb(115, 90, 230);
  }
`;
