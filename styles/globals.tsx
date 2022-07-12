import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    --charcoal: #2F4858;
    --queen-blue: #33658A;
    --dark-side-blue: #86BBD8;
    --brink-pink: #F7567C;
    --background-main: #F5F5F5;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`

