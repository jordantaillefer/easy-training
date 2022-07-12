import styled from "styled-components";

interface ButtonProps {
  primary?: boolean
}

export const Button = styled.button<ButtonProps>`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? props.theme.colors.primary : props.theme.colors.secondary};
  color: ${props => props.primary ? props.theme.colors.secondary : props.theme.colors.primary};
  border: 2px solid ${props => props.primary ? props.theme.colors.primary : props.theme.colors.secondary};
  border-radius: 3px;
  margin: 0;
`;
