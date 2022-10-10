import React from "react";
import { Link } from "react-router-dom";
import { Image, Container, Text } from './Thumb.styles'

const Thumb = ({image, id, clickable, titel, artist}) => {

    return (
        <div>
            {clickable ? (
                <Link to={`/${id}`} Style={"text-decoration: none"}>
                    <Container>
                        <Image src={image} alt='lp-thumbnail' />
                        <Text> <p>{artist}</p> <p> - {titel}</p></Text>

                    </Container>

                </Link>
                ) : (
                    <Container >
                        <Image src={image} alt='lp-thumbnail' /> 
                        <Text> <p>{artist}</p> <p> - {titel}</p></Text>
                    </Container>
                )
            }
        </div>
    )
}

export default Thumb