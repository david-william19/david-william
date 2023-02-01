import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 15px 20px;
  position: relative;
`;

export const floating = keyframes`
    0% {
        transform: translatey(0px);
    }

    50% {
        transform: translatey(15px);
    }

    100% {
        transform: translatey(0px);
    }
`;

export const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

export const slideUp = keyframes`
    from {
        opacity: 0;
        transform: translate(0, 10px)
    }
    to {
        opacity: 1;
        bottom: 0;
    }
`;

export const slideLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(10px);
  }
  to {
    opacity: 1;
    bottom: 0;
  }
`