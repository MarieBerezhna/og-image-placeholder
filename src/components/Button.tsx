import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #4CAF50;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #3e8e41;
  }
`;

export default function Button({ children, ...props }: { children: React.ReactNode; [props: string]: unknown }) {
  return <StyledButton {...props}>{children}</StyledButton>;
}