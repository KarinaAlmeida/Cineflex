import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";



import Header from "./Header";
import Filmes from "./APIcomponents/Filmes";
import Sessões from "./APIcomponents/Sessões";
import Assentos from "./APIcomponents/Assentos";
import Sucesso from "./APIcomponents/Sucesso";
import Footer from "./Footer";
import GlobalStyle from '../styles/GlobalStyle';




export default function App() {


  const [footerStatus, setFooterStatus] = useState({show: false, title: '', posterURL: '', weekday: '', date: '', time: ''});
  const [selecionado, setSelecionado] = useState({ids: [], seats:[], name:'', cpf:''});

 
 
  return(
    <Container>
      <BrowserRouter>
      <GlobalStyle/>

      <Header  setFooterStatus={setFooterStatus} setSelecionado={setSelecionado} footerStatus={footerStatus}/>

      <Routes>

        <Route path="/" element={<Filmes footerStatus={footerStatus} setFooterStatus={setFooterStatus} />} />

        <Route path="/sessoes/:idFilme" element={<Sessões setFooterStatus={setFooterStatus} footerStatus={footerStatus}
                                                                selecionado={selecionado} setSelecionado={setSelecionado} />} />

        <Route path="/assentos/:idSessao" element={<Assentos setFooterStatus={setFooterStatus} footerStatus={footerStatus}
                                                                selecionado={selecionado} setSelecionado={setSelecionado} />} />
                                                                
        {/* <Route path="/sucesso" element={<Sucesso setFooterStatus={setFooterStatus} footerStatus={footerStatus}
                                                        selecionado={selecionado}setSelecionado={setSelecionado} />} /> */}

      </Routes>



      <Footer footerStatus={footerStatus}/>


      </BrowserRouter>
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