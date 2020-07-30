import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import Styled from 'styled-components';

const Main = Styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding-top: 50px;
    padding-left: 5%;
    padding-right: 5%;
`;

/*
<> and </> are necessary because JSX needs to have a parent <tag>, wich is almost aways a <div>
but, to avoid React to render a <div> with no need, this semantics are used
*/

function PageDefault({children}) {
    return (
      <>
        <Menu />
            <Main>
                {children}
            </Main>
        <Footer />
      </>
    )
  }
  
  export default PageDefault;