import Header from './Header';
import Footer from './Footer';
import styled from "styled-components";
import GlobalStyle from '../styles/GlobalStyle';


export default function App() {
 
 
  return(
    <Container>
      <GlobalStyle/>

      <Header/>
      <Footer/>

    </Container>

  )
}



const Container = styled.div`
    background-color: white;
    height: 100%;
    min-height: 100vh;
    min-width: 300px;
    max-width: 600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding-top: 67px;
    padding-bottom: 117px;
`