import { styled } from 'styled-components';

export const GreetCont = styled('div')(() => {
  return {
    // position: 'relative',
    zIndex: 1,
    '& a': {
      textDecoration: 'underline',
      color: '#0000EE',
    },
  };
});