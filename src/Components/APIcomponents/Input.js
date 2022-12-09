import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";



export default function Input ({selecionado, setSelecionado, footerStatus, setFooterStatus}) {
    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const navigate = useNavigate();


    function formulario(event) {
        event.preventDefault();
        if (selecionado.seats.length === 0){
            alert('Nenhum assento selecionado!');
            return;
        }
        selecionado.name = name;
        selecionado.cpf = cpf;
        setSelecionado = {...selecionado};
        enviarForm(selecionado);
    }

    function enviarForm({ids, name, cpf}){
        const requestObj = {ids, name, cpf};
        const promise = axios.post('https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many', requestObj);
        promise.then(() => {
            setFooterStatus({...footerStatus, show: false});
            navigate('/sucesso')
        });
        promise.catch(() => alert('Tente novamente mais tarde :('))
    }

    return (
        <Inputs onSubmit={formulario}>
            <p>Nome do comprador:</p>
            <input data-test="client-name"
                type="text"
                value={name}
                name='nome'
                placeholder="Digite seu nome..."
                onChange={(event) => setName(event.target.value)}
                required
            />

            <h5>CPF do comprador:</h5>
            <input data-test="client-cpf"
                type="text"
                value={cpf}
                name='cpf'
                placeholder="Digite seu CPF..."
                onChange={(event) => {setCpf(event.target.value)}}
                required
            />

            <button data-test="book-seat-btn">Reservar assento(s)</button>
        </Inputs>
    )

}



const Inputs = styled.form`
    height: 300px;
    margin-top: 40px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    p {
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        color: #293845;
    }
    input {
        margin: 5px 0 10px 0;
        padding-left: 10px;
        width: 100%;
        height : 50px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
    }
    button {
        width: 60%;
        height: 43px;
        margin: 20px auto;
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