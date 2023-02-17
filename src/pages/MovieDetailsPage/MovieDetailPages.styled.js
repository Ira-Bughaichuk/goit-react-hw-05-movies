import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const Cart = styled.div`
  padding: 30px 0;
  display: flex;
  gap: 100px;
`;
export const CartImg = styled.img`
  display: block;
  max-width: 500px;
  height: auto;
`;
export const CartContent = styled.div`
  display: block;
`;
export const CartContentOverview = styled.p`
  max-width: 800px;
  width: 100%;
  color: black;
  font-size: 18px;
  padding: 10px 0;
`;
export const CartSpan = styled.span`
  font-weight: 700;
`;
export const StyledliBtns = styled.li`
  list-style: none;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
export const LinkButton = styled(Link)`
  text-decoration: none;
  background-color: #42f2f5;
  padding: 5px 10px;
  border-radius: 5px;
  color: black;
  font-weight: 600;
  font-size: 18px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  display: block;

  max-width: 120px;
  width: 100%;

  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  &:hover,
  :focus {
    scale: 1.1;
    color: #5533f2;
  }
`;
