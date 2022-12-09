import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Input from "./Input";
import styled from "styled-components";

export default function Assentos ({setFooterStatus, footerStatus, selecionado, setSelecionado}) {

    const { sessãoId } = useParams();

    const[assento, setAssento] = useState([]);

    const legenda = [    {class:<Selecionado />, title:'Selecionado'},
    {class:<Disponivel />, title:'Disponível'}, 
    {class:<Indisponivel />, title:'Indisponível'}
];

    useEffect(() => {
        setSelecionado({ids: [], seats:[], name:'', cpf:''})
        const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${sessãoId}/seats`);

        promise.then(obj => {
            setFooterStatus({...footerStatus, show: true});
            setAssento(obj.data);
        })
        promise.catch(err => console.log(err.response.data))
    }, []);


    if (assento.length === 0){
        return(<Carregando>Carregando...</Carregando>)
    }


    function Cadeira({ isAvailable, name, id }) {

        switch (isAvailable) {
            case true:
                return (<Disponivel onClick={() => Reservado(name, id, true)}>{name}</Disponivel>);
            case false:
                return (<Indisponivel onClick={() => alert('Assento indisponível!!')}>{name}</Indisponivel>);
            case 'selecionado':
                return (<Selecionado onClick={() => Reservado(name, id, 'selecionado')}>{name}</Selecionado>);
            default:
                return(<>Erro!</>);
        }
    }


    function Reservado(name, id, status){
 
        const iArray = Number(name) - 1;

        let novaSeleção = {...selecionado}

        if (status === true){

            assento.seats[iArray].isAvailable = 'selecionado';

            selecionado.ids.push(id);
            selecionado.seats.push(name);

        } else {

            assento.seats[iArray].isAvailable = true;

            novaSeleção.ids = selecionado.ids.filter(value => value !== id);
            novaSeleção.seats = selecionado.seats.filter(value => value !== name);
        } 

        setAssento({...assento});
        setSelecionado(novaSeleção);
    }





    return(
        <Container>
            <h1>Selecione o(s) assento(s)</h1>

            <AssentosStyled>
                
                {assento.seats.map(ass => <Cadeira key={ass.id} id={ass.id} name={ass.name} isAvailable={ass.isAvailable}/>)}

            </AssentosStyled>

            <Legenda>

                {legenda.map((value, index) => 
                    <div key={index}>
                        {value.class}
                        <h6>{value.title}</h6>
                    </div>
                )}

            </Legenda>

            <Input selecionado={selecionado} setSelected={setSelecionado} footerStatus={footerStatus} setFooterStatus={setFooterStatus}/>
            
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

const Container= styled.div`
width: 100%;
padding: 0 30px;
h1 {
    height: 110px;
    font-weight: 400;
    font-size: 25px;
    line-height: 28px;
    color: #293845;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}`

const AssentosStyled= styled.div`
width: 100%;
    display: grid;
    grid-template-columns: repeat(10, auto);
    div {
        width: 26px;
        height: 26px;
        margin-top: 18px;
        border-width: 1px;
        border-style: solid;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 11px;
        line-height: 13px;
        color: #000000;
    }

`
const Selecionado = styled.div`
    background: #C3CFD9;
    border-color: #7B8B99;
    cursor: pointer;
    &:hover {
        background: #97a0a8;
    }
    
`

const Disponivel = styled.div`
    background: #FBE192;
    border-color: #F7C52B;
`

const Indisponivel = styled.div`
    background: #8DD7CF;
    border-color: #1AAE9E;
    cursor: pointer;
    &:hover {
        background: #67a19c;
    }
`

const Legenda = styled.div `
    margin: 20px 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        cursor: auto;
        pointer-events: none;
    }
    div div {
        width: 26px;
        height: 26px;
        margin-top: 18px;
        border-width: 1px;
        border-style: solid;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 11px;
        line-height: 13px;
        color: #000000;
    }
    h6 {
        margin-top: 7px;
        font-size: 13px;
        line-height: 15px;
        color: #4E5A65;
    }
`