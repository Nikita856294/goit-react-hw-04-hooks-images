import { createGlobalStyle } from 'styled-components';

const GlobalStyled = createGlobalStyle`
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
}

.list {
  list-style: none;
}
ul,
ol {
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
}
img {
  display: block;
  width: 100%;
  height: auto;
}

body {
  font-family: Roboto, sans-serif;
}
*,
*::before,
*::after {
  box-sizing: border-box;
}

`;

export { GlobalStyled };
