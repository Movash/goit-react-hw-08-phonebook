import { styled } from 'styled-components';

export const Nav = styled('nav')(() => {
  return {
    // zIndex: 99999,
    // position: 'fixed',
    // top: 0,
    // left: 0,
    // right: 0,
    paddingTop: 15,
    paddingBottom: 15,
    borderBottom: '1px solid gray',
    boxShadow: '0px 5px 5px gray',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& div': {
      '& a': {
        fontWeight: 700,
        fontSize: 20,
        lineHeight: 1.5,
        letterSpacing: '0.02em',
        marginLeft: 40,
        '&.active': {
          color: 'orange',
        },
      },
    },
  };
});