import styled from 'styled-components';

interface LinkProps {
  primary?: boolean;
}

export const StyledLink = styled.a<LinkProps>`
  background: ${(props) =>
    props.primary ? props.theme.colors.primary : props.theme.colors.secondary};
  color: ${(props) =>
    props.primary ? props.theme.colors.secondary : props.theme.colors.primary};
  border: 2px solid
    ${(props) =>
      props.primary
        ? props.theme.colors.primary
        : props.theme.colors.secondary};
  border-radius: 3px;
  margin: 0;
`;
