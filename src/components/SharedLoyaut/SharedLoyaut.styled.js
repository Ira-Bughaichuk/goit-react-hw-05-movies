import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: #42f2f5;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  box-shadow: 5px 5px 15px 5px rgb(120, 115, 117);
  margin-bottom: 40px;
`;
export const Styledul = styled.ul`
  display: flex;
  column-gap: 30px;
  list-style: none;
`;


export const LayoutLi = styled.li`
  cursor: pointer;
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  text-decoration: none;
  font-size: 24px;
  font-weight: 600;
  color: #5533f2;
  &.active {
    color: orange;
  }
`;
