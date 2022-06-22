import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body, html {
        margin: 0;
        padding: 0;
        font-family: 'Work Sans', sans-serif;
        background: #eee;
    }

    * {
        box-sizing: border-box;
    }

    .login-header {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 0;

        p {
            font-size: 2.2rem;
            font-weight: 600;
            margin-bottom: 0;
            margin-left: -8rem;
            color: #333;

            span {
                color: #59bb42;
                font-size: 2.5rem;
                font-weight: 700;
            }
        }
    }

    .login-form {
        padding: 0 20px;

        .button {
            width: 100%;
            margin-top: 1rem;
        }

        .forgot {
            font-size: 0.8rem;
            font-weight: 500;
            text-align: center;
            margin-top: 2rem;
        }
    }
`;

export default GlobalStyle;
