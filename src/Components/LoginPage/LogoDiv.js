import styled from 'styled-components';

export default function LogoDiv(){
    return(
        <DesktopDiv>
            <div>
                <h1>linktr</h1>
                <p>save, share and discover</p>
                <p>the best links on the web</p>
            </div>
        </DesktopDiv>
    )
}

const DesktopDiv = styled.div`
    background-color: #151515;
    box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25);
    width: 100%;
    height:100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    h1{
        font-weight:700;
        font-size:106px;
        color:#FFFFFF;
        font-family: 'Oswald';
        font-style: normal;
        margin-bottom: 20px;
    }

    p{
        font-weight: 700;
        font-size: 43px;
        color: #FFFFFF;
        margin-bottom: 20px;
    }
`