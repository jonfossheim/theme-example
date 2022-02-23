import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 200px;
  height: 250px;
  display: grid;
  place-items: center;
  background-color: ${(props) => props.theme.main || 'coral'};
`;

export const Paragraph = styled.p`
  font-size: 2rem;
  color: ${(props) => props.theme.buttonColor || 'coral'};
`;
export const Button = styled.button`
  background-color: ${(props) => props.theme.buttonColor || 'coral'};
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`;
