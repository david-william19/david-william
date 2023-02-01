import { Container, slideLeft } from "../styles/main.styles";
import styled from "styled-components";
import { slideUp } from "../styles/main.styles";
import { PostData } from "../components/posts/PostsData";

function PostsPage() {

  return (
    <Container>
      <AboutWrapper>
        <Heading1>Posts</Heading1>
        <DescriptionText>
          Here i will post all the things I learned and i always use dev.to .
          (but maybe i'm not post everyday
          <span role="img" aria-label="sheep">
            {" "}
            😅)
          </span>
        </DescriptionText>
        {/* list of posts */}
        <PostData />
      </AboutWrapper>
    </Container>
  );
}

const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Heading1 = styled.h1`
  font-size: ${(props) => props.theme.fontSize["5xl"]};
  font-weight: 800;
  margin-bottom: 8px;
  opacity: 0;
  animation: ${slideUp} 0.4s ease-out;
  animation-fill-mode: forwards;
`;

const DescriptionText = styled.p`
  font-size: "1.2rem";
  text-align: center;
  animation-delay: 0.8s;
  animation: ${slideUp} 0.4s ease-out;
  animation-fill-mode: forwards;
`;

export default PostsPage;
