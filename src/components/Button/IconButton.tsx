import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface ButtonProps {
    Icon: ReactNode;
    Link: string;
}

function IconButton(props: ButtonProps) {

    return (
        <Button href={props.Link} target={'_blank'}>
            {props.Icon}
        </Button>
    )
}

const Button = styled.a`
  border-radius: 100%;
  border: 0;
  background-color: #fff;
  color: ${props => props.theme.colors.primary};
  box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.5);
  font-size: ${(props) => props.theme.fontSize.lg};
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.secondary};
    transition: all 0.2s ease;
  }
`;

export default IconButton