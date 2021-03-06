import React, { useState } from 'react';
import { GlobalStyle } from './utils/GlobalStyles';
import { darkTheme, defaultTheme } from './utils/themes';
import styled, { ThemeProvider } from 'styled-components';
import { SignUpModal } from './components/Modal';

const Wrapper = styled.div`
  background: ${(props) =>
    props.useDarkTheme ? defaultTheme.primaryColor : darkTheme.primaryColor};
  width: 100vh;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

function App() {
  const [useDarkTheme, setUseDarkTheme] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
      <div style={{ padding: 30 }}>
        <button onClick={() => setUseDarkTheme(!useDarkTheme)}>
          {useDarkTheme ? 'Default Theme' : 'Dark Theme'}
        </button>
        <button onClick={() => setShowModal(!showModal)}>Log In</button>
      </div>
      <Wrapper useDarkTheme={useDarkTheme}>
        <SignUpModal showModal={showModal} setShowModal={setShowModal} />
      </Wrapper>
      <GlobalStyle />
    </ThemeProvider>
  );
}
export default App;
