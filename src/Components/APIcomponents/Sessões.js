import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";



export default function Sessões ({setFooterStatus, footerStatus}){
    const { idFilme } = useParams();
    const [sessões, setSessões] = useState([]);

    useEffect(() => {

        setFooterStatus({...footerStatus, weekday: '', date: '', time: '', show: true});

        const promise= axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`);

        promise.then(obj => {
            setSessões(obj.data);

        })


    }, [])

    if (sessões.length === 0){
        return(<Carregando>Carregando...</Carregando>)
    }


    function Sessão ({name, sessãoId, weekday, date}) {
        return(
            <Link to={`/assentos/${sessãoId}`} style={{textDecoration:'none'}}>
                <Button onClick={() => {
                    footerStatus.weekday = weekday;
                    footerStatus.date = date;
                    footerStatus.time = name
                }}>
                 <p style={{textDecoration:'none'}}>{name}</p> 
                </Button>
            </Link>
        )  

    }

    function Data({showtimes, date, weekday}){
        return(
            <div>
                <h2>{`${weekday} - ${date}`}</h2>
                <ShowtimeStyled>
                    {showtimes.map((showtime => <Sessão 
                        sessãoId={showtime.id}
                        name={showtime.name}
                        weekday={weekday}
                        date={date}/>
                    ))}
                </ShowtimeStyled>
            </div>
        )
    }

    return (
        <Container>
            <h1>Selecione o horário</h1>
            {sessões.days.map(day => <Data showtimes={day.showtimes} date={day.date} weekday={day.weekday}/>)}
        </Container>
    )

}





const Container= styled.div`
width: 100%;
padding: 0 30px;
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
h2 {
    width: 100%;
    font-size: 20px;
    line-height: 23px;
    color: #293845;
}
`

const Carregando = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Button = styled.div`
    width: 83px;
    height: 43px;
    margin-right: 10px;
    background: #E8833A;
    border: none;
    border-radius: 3px;
    font-size: 18px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover {
        background-color: #b3632a;
    }
`

const ShowtimeStyled = styled.div`
margin: 30px 0;
display: flex;
`