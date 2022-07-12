import styled from 'styled-components'

export const Card = styled.div`
  min-width: 12rem;
  min-height: 16rem;
  background-color: white;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
`

export const CardHeader = styled.div`
  width: 100%;
  height: 2rem;
  border-bottom: 2px solid black;
  background-color: lightgray;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const CardFooter = styled.div`
  width: 100%;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const CardBody = styled.div`
  flex: 1 1 0;
`
