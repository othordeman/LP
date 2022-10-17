import React  from "react";
import { NavLink } from "react-router-dom";
import { Image, Container, InnerContainer, Front, Back } from './Thumb.styles'

const Thumb = ({image, lp}) => {

    return (
        <NavLink to={`/${lp._id}`} style={{textDecoration: "none"}}>
            <Container>
                    <InnerContainer>
                        <Front>
                            <Image src={image} alt='lp-thumbnail' />
                            <p>{lp.Artist}</p> <p> -{lp.Titel}</p>
                        </Front>
                        <Back>
                            <p>{lp.Artist}-{lp.Titel}</p>
                            <div>
                                <p>Anmärkning: {lp.Anm}</p>
                                <p>Pris: {lp.Pris}:-</p>
                            </div>
                        </Back>
                    </InnerContainer>
            </Container>
        </NavLink>
    )
}

export default Thumb