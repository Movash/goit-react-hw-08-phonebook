import { styled } from 'styled-components';

export const Nav = styled('nav')(() => {
  return {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#7777ff',
    paddingTop: 15,
    paddingBottom: 15,
    borderBottom: '1px solid #46466e',
    boxShadow: '0px 5px 5px #46466e',
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