import { useNavigate, useParams } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import { Container } from "../styles/main.styles";
import styled from "styled-components";

function DefaultPage() {
    const navigate = useNavigate()
    const param = useParams();

  return (
    <Container>
      <DefaultWrapper>
        <Player
          autoplay
          loop
          src="images/space-404.json"
          style={{ height: "300px", width: "300px" }}
        />
        <Title>{param['*']} not found.</Title>
        <BackButton onClick={() => navigate('/')}>Back to home</BackButton>
      </DefaultWrapper>
    </Container>
  );
}

const DefaultWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75%;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontSize['2xl']};
  font-weight: bold;
`;

const BackButton = styled.button`
    background-color: #fff;
    border: 1px solid #010101;
    padding: 10px;
    font-size: ${props => props.theme.fontSize.lg};
    margin-top: 25px;
    border-radius: 10px;
    transition: all .2s ease-in-out;

    &:hover{
        background-color: #010101;
        color: #fff;
    }
`

export default DefaultPage;
