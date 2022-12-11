import { Link } from "react-router-dom";
import styled from "styled-components"



export default function Sucesso ({setFooterStatus, footerStatus,
    selecionado, setSelecionado}) {

        return(
            <Container>
                <h1>Pedido feito com sucesso!</h1>
    
                <div data-test="movie-info">
                    <h2>Filme e Sessão</h2>
                    <h3>{footerStatus.title}</h3>
                    <p>{`${footerStatus.date} ${footerStatus.time}`}</p>
                </div>
    
                <div data-test="seats-info">
                    <h2>Ingressos</h2>
                    {selecionado.seats.map((seat, index) => <p key={index}>Assento {seat}</p>)}
                </div>
    
                <div data-test="client-info">
                    <h2>Comprador</h2>
                    <p>Nome: {selecionado.name}</p>
                    <p>CPF: {selecionado.cpf}</p>
                </div>
    
                <Link data-test="go-home-btn" to="/" style={{textDecoration:'none'}}>
                    <button onClick={() => {
                        setFooterStatus({show: false, title: '', posterURL: '', weekday: '', date: '', time: ''})
                        setSelecionado({ids: [], seats:[], name:'', cpf:''})
                    }}>
                        Voltar para Home
                    </button>    
                </Link>
    
            </Container>
        )

}


const Container = styled.div`
    h1{
        margin-top: 40px;
        width: 60%;
        height: 110px;
        font-weight: 700;
        font-size: 24px;
        line-height: 30px;
        text-align: center;
        color: #247A6B;
        margin-left: 70px
    }
    h2{
        margin-top: 40px;
        font-weight: 700;
        font-size: 24px;
        line-height: 30px;
        color: #293845;
    }
    p{
        font-weight: 400;
        font-size: 20px;
        line-height: 30px;
        color: #293845;
    }
    button{
        width: 80%;
        height: 43px;
        margin: 100px auto 0 auto;
        background: #E8833A;
        border: none;
        border-radius: 3px;
        font-size: 18px;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
    button:hover {
    background-color: #b3632a;
    }
    
`