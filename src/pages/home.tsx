import styled from "styled-components";
import { TfiLinkedin, TfiInstagram, TfiFacebook } from "react-icons/tfi";
import { ImWhatsapp } from "react-icons/im";
import IconButton from "../components/Button/IconButton";
import { Container, fadeIn, floating, slideUp } from "../styles/main.styles";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const IconData = [
  {
    id: 1,
    icon: <TfiLinkedin />,
    name: "linkedin",
    link: 'https://www.linkedin.com/in/davidwilliamdacosta/'
  },
  {
    id: 2,
    icon: <TfiInstagram />,
    name: "instagram",
    link: 'https://www.instagram.com/davdwilliam_/?hl=id'
  },
  {
    id: 4,
    icon: <ImWhatsapp />,
    name: "whatsapp",
    link: 'https://wa.me/082248772038'
  },
  {
    id: 5,
    icon: <TfiFacebook />,
    name: "facebook",
    link: 'https://www.facebook.com/david.w.ii.73/'
  },
];

function HomePage() {
  return (
    <Container>
      <HomeWrapper>
      <Header>
        <ImageWrapper>
          <ImageAvatar
            alt="Descriptive text"
            effect="blur" // This adds the blur effect
            src="images/dapundo.webp" // High-resolution image
            width={1000}
            height={300}
          />
        </ImageWrapper>
      </Header>
      <Heading1>Hello World !</Heading1>
      <DescriptionText>
        Hi, I'm David. I'm Software Engineer, and i actually majored in
        Information System at college last year.
        <br />
        Ever since, I've been pursuing my dream of becoming an software engineer
        so i can really work in an area
        <br />
        i know a great deal about.
        <br />
        <br />
        If you want work with me, just contact me in :
      </DescriptionText>

      <SocialMediaContainer>
        <SocialMediaWrapper>
          {IconData.map((data) => {
            return (
              <>
                <IconButton Link={data.link} Icon={data.icon} key={data.id} />
              </>
            );
          })}
        </SocialMediaWrapper>
      </SocialMediaContainer>
      </HomeWrapper>
    </Container>
  );
}

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DescriptionText = styled.p`
  font-size: ${(props) => props.theme.fontSize.lg};
  text-align: center;
  animation-delay: 0.35s;
  animation: ${slideUp} 0.4s ease-out;
  animation-fill-mode: forwards;
`;

const Heading1 = styled.h1`
  font-size: ${(props) => props.theme.fontSize["5xl"]};
  font-weight: 800;
  margin-bottom: 8px;
  opacity: 0;
  animation-delay: 0.35s;
  animation: ${slideUp} 0.4s ease-out;
  animation-fill-mode: forwards;
`;

const ImageAvatar = styled(LazyLoadImage)`
  width: 200px;
  object-fit: cover;
  object-position: center -60px;
  margin: 0 auto;
`;

const ImageWrapper = styled.div`
  border-radius: 100%;
  /* margin: 20px 0; */
  width: 200px;
  height: 200px;
  position: relative;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.4);
  overflow: hidden;
  animation: ${fadeIn} 0.3s ease-in-out, ${floating} 2.5s ease-in-out infinite;
`;

const Header = styled.div`
  margin: 25px 0;
  padding-top: 15px;
`;

const SocialMediaContainer = styled.div`
  margin-top: 20px;
  min-width: 300px;
`;

const SocialMediaWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  max-width: 300px;
  margin: 0 auto;

  button {
    opacity: 0;
  }

  /* animate button social media */
  button:nth-child(1){
    animation: ${slideUp} 0.4s ease-in-out;
    animation-delay: .4s;
    animation-fill-mode: forwards;
  }

  button:nth-child(2){
    animation: ${slideUp} 0.4s ease-in-out;
    animation-delay: .44s;
    animation-fill-mode: forwards;
  }

  button:nth-child(3){
    animation: ${slideUp} 0.4s ease-in-out;
    animation-delay: .48s;
    animation-fill-mode: forwards;
  }

  button:nth-child(4){
    animation: ${slideUp} 0.4s ease-in-out;
    animation-delay: .52s;
    animation-fill-mode: forwards;
  }
`;

export default HomePage;
