import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  ::-webkit-scrollbar {
    width: 12px; /* Width of the scrollbar track */
  }

  ::-webkit-scrollbar-thumb {
    background-color: #888; /* Color of the scrollbar thumb */
    border-radius: 6px; /* Rounded corners for the thumb */
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #555; /* Color of the scrollbar thumb on hover */
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1; /* Color of the scrollbar track */
  }

  ::-webkit-scrollbar-track:hover {
    background: #ddd; /* Color of the scrollbar track on hover */
  }
`;

export default GlobalStyle;
