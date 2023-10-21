import { styled } from 'styled-components';

export const GreetCont = styled('div')(() => {
  return {
    '& a': {
      textDecoration: 'underline',
      color: '#0000EE',
    }
  };
});