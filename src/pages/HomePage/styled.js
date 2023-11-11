import { styled } from 'styled-components';

export const GreetCont = styled('div')(() => {
  return {
    marginTop: 110,
    '& a': {
      textDecoration: 'underline',
      color: '#0000EE',
    },
  };
});