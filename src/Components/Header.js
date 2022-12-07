import styled from "styled-components";


export default function Header(){

    return (
    <Container>
        
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
    h1 {
        color: #e8833a;
        font-weight: 400;
        font-size: 34px;
        line-height: 40px;
    }
`

// const Return = styled.div`
//     position: absolute;
//     width:30px;
//     height:30px;
//     border-radius: 50%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     background-color: #e8833a;
//     color: #c3cfd9;
//     font-weight: 400;
//     font-size: 30px;
//     left: 60px;
//     cursor: pointer;
//     &:hover{
//         background-color: #b3632a;
//     }
//     &:active{
//         transform: translateY(2px);
//     }
// `