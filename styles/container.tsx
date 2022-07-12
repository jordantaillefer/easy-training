import styled from "styled-components";

export const MainContainer = styled.div`
  padding: 0 2rem;
  background-color: ${props => props.theme.colors.backgroundMain};
`


export const Container = styled.div`

`

export const ContainerCenter = styled(MainContainer)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
