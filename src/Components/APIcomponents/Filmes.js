import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";


export default function Filmes ({footerStatus, setFooterStatus}) {

    const [filmes, setFilmes]= useState([]);


    useEffect(() => {

        setFooterStatus({show: false, title: '', posterURL: '', weekday: '', date: '', time: ''});
        

        const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies`);
        

        promise.then(obj => {
            setFilmes(obj.data);
        })

    }, [])


    function Filme ({filmeId, posterURL, titulo}){
        return(
            <Link to={`/sessoes/${filmeId}`}>
                <Banner onClick={() => {
                    footerStatus.title = titulo;
                    footerStatus.posterURL = posterURL
                }}>
                    <img src={posterURL} alt={titulo}/>
                </Banner>         
            </Link>
        )
    }

    if (filmes.length === 0){
        return(<Carregando>Carregando...</Carregando>)
    };


    return(
        <Container>
            <h1>Selecione o filme</h1>
            <div>
                {filmes.map(filme => <Filme data-test="movie" filmeId={filme.id} titulo={filme.title} posterURL={filme.posterURL}/>)}
            </div>
        </Container>
    )
}






const Carregando = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Container = styled.div`
    width: 100%;
    padding: 0 30px;
    div {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    h1 {
        height: 110px;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        color: #293845;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
    }
`

const Banner = styled.div`
    width: 145px;
    height: 209px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    margin: 10px;
    cursor: pointer;
    &:hover{
        background-color: #c9c9c9;
        opacity: 60%;
    }
   
    img {
        width: 129px;
        height: 193px;
        margin: auto;
    }
`