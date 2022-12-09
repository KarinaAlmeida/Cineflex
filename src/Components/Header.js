import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Header({setFooterStatus, setSelecionado, footerStatus}) {


    return(
        
        <Container>
       
            <Link to="/" style={{textDecoration:'none'}}>
                <p onClick={() => {
                    setFooterStatus({show: false, title: '', posterURL: '', weekday: '', date: '', time: ''})
                    setSelecionado({ids: [], seats:[], name:'', cpf:''})
                    }}>
                    CINEFLEX
                </p>
            </Link>     
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    max-width: 600px;
    height: 67px;
    background-color: #C3CFD9;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: calc(100vw/2 - width/2);
    z-index: 1;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    p {
        color: #e8833a;
        font-weight: 300;
        font-size: 34px;
        line-height: 40px;
    }
`