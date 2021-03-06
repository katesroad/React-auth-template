import styled from 'styled-components'
import { xlarge } from 'styles/media-queries'

export const Wrapper = styled.div`
  max-width: 21.25rem;
  margin-top: 3rem;
  margin-left: auto;
  margin-right: auto;
  width: 30rem;

  ${xlarge} {
    margin-top: calc(20vh);
  }

  form {
    padding: 2rem;
    border: var(--color-c6) 1px solid;

    .form-title {
      font-family: var(--title-font);
      padding-bottom: 0.5rem;
      font-size: x-large;
      font-weight: var(--weight-bolder);
      margin-top: 0.5rem;
    }

    .icon {
      color: var(--color-c2);
      font-size: 2.5rem;
    }

    .form-description {
      font-size: small;
      color: var(--color-c5);
      padding-bottom: 2rem;
      margin-top: 0.5rem;
    }

    button[type='submit'] {
      line-height: 1.5;
      width: 100%;
      text-transform: capitalize;
      color: white;
      padding: 0.5rem 0;
      font-weight: 900;
      background-color: var(--color-c2);
      border-color: var(--color-c2);
      transition: opacity 0.1s;
      margin-bottom: 2rem;

      :hover {
        opacity: 0.8;
        transition: opacity 0.1s;
      }
    }

    input {
      padding-top: 0;
      padding-bottom: 0;

      :-ms-input-placeholder {
        color: var(--color-c3);
        font-size: small;
      }

      :-ms-input-placeholder {
        color: var(--color-c3);
        font-size: small;
      }

      ::-webkit-input-placeholder {
        color: var(--color-c3);
        font-size: small;
      }

      ::-moz-placeholder {
        color: var(--color-c3);
        font-size: small;
      }

      :-moz-placeholder {
        color: var(--color-c3);
        font-size: small;
      }

      /* Mozilla Firefox 19+ */
    }

    .information {
      text-align: center;
      font-weight: var(--weight-thin);
      font-size: small;

      a {
        font-weight: var(--weight-bolder);

        :hover {
          text-decoration: underline;
        }
      }
    }

    .login-error {
      text-align: left;
      margin-top: -0.8rem;
      padding-bottom: 1rem;
    }
  }
`
