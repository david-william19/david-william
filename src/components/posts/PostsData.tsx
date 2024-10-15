import { useQuery, UseQueryResult } from "react-query";
import styled from "styled-components";
import { getPosts } from "../../services/posts";
import { slideLeft } from "../../styles/main.styles";
import { Posts } from "../../types/posts";
import Card from "../card";
import Lottie from "lottie-react";
import AnimationLoading from "../../lotties/animation-loading.json";

export const PostData = () => {
  const { data, status }: UseQueryResult<Posts[], Error> = useQuery<Posts[], Error>("posts", getPosts);

  if(status === 'loading'){
    return(
      <Lottie animationData={AnimationLoading} loop={true}  />
    )
  }
  else{
    return (
      <CardContainer>
      {data?.map((post: Posts, index: number) => {
        return (
          <Card
            id={post.id}
            name={post.title}
            description={post.description}
            techStack={post.tag_list}
            image={post.cover_image}
            url={post.url}
          />
        );
      })}
    </CardContainer>
  )
  }
}

const CardContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-gap: 30px;
  margin-top: 20px;
  padding: 3px;

  div {
    opacity: 0;
  }

  div:nth-child(1) {
    animation: ${slideLeft} 0.7s ease-in-out;
    animation-delay: 0.7s;
    animation-fill-mode: forwards;
  }

  div:nth-child(2) {
    animation: ${slideLeft} 0.7s ease-in-out;
    animation-delay: 0.9s;
    animation-fill-mode: forwards;
  }

  div:nth-child(3) {
    animation: ${slideLeft} 0.7s ease-in-out;
    animation-delay: 1s;
    animation-fill-mode: forwards;
  }

  @media only screen and (min-width: 700px) {
    grid-gap: 15px;
    padding: 0 30px;
    grid-template-columns: repeat(3, 1fr);
  }
`;