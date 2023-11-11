import { styled } from 'styled-components';

export const FilterCont = styled('div')(() => {
  return {
    marginTop: 20,
    marginBottom: 20,
    display: 'flex',
    flexDirection: 'column',
    '& label': {
      marginBottom: 5,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    '& input': {
      width: 300,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    '& input::placeholder': {
      opacity: 0.5,
    },
  };
});
