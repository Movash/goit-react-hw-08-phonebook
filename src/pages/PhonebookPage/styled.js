import { styled } from 'styled-components';
import 'modern-normalize'

export const ContPageBox = styled('div')(() => {
  return {
    marginTop: 90,
    marginBottom: 40,
    '& h1': {
      textAlign: 'center',
    },
    '& h2': {
      textAlign: 'center',
    },
  };
});
