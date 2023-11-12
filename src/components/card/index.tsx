import styled from "styled-components";

interface CardProps {
    id: Number;
    name: String;
    description: String;
    image: string;
    techStack: Array<String>;
    url?: string;
}

function Card(props: CardProps) {
    return (
        <CardWrapper>
            <img className="card-image" src={props.image} alt='image'/>
            <Heading1>{props.name}</Heading1>
            <DescriptionText>{props.description}</DescriptionText>
            <List>
            {props.techStack.map(data => {
                return (
                    <ListItem>{data}</ListItem>
                )
            })}
            </List>
            {props.url && <ButtonLink href={props.url} target={'_blank'}>Open in Dev.to</ButtonLink>}
        </CardWrapper>
    )
}

const CardWrapper = styled.div`
    padding: 20px;
    border-radius: 10px;
    background-color: #fff;
    border: 1px solid #f1f1f1;

    .card-image {
        width: 100%;
        height: 300px;
        border-radius: 10px;
        object-fit: cover;
        object-position: center center;
    }
`

const Heading1 = styled.h1`
    font-size: ${props => props.theme.fontSize.xl};
    margin-bottom: 10px;
`

const ButtonLink = styled.a`
    background-color: #000;
    color: #fff;
    padding: 10px;
    text-decoration: none;
    border-radius: 10px;
    width: 100%;
    margin-top: 50px;

    &:hover {
        background-color: #2e2e2e;
    }
`

const DescriptionText = styled.p`
    font-size: ${props => props.theme.fontSize.md};
    text-align: left;
`

const List = styled.ul`
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    margin: 20px 0;
`

const ListItem = styled.li`
    text-decoration: none;
    list-style: none;
    font-size: ${props => props.theme.fontSize.md};
    font-weight: 500;
`


export default Card;