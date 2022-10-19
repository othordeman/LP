import React from "react";
import styled from "styled-components";
import lp2 from '../images/lp2.jpg'
import ContactForm from "./contactForm";
import { Icon } from '@iconify/react';

const Wrapper = styled.div`

`;


const Content = styled.div`
    background: url(${lp2});
    background-size: cover;
    background-position: center;
    display: grid;
    padding: 4rem 6rem 6rem 6rem;
    grid-template-columns:  repeat(12, 1fr);
    grid-column-gap: 6rem;
    grid-template-areas:
        "b b b b b b d d d d d d"
        "b b b b b b d d d d d d"
        "b b b b b b d d d d d d"
    ;

    justify-items: center;

    h1{
        grid-area: a;
    }

    @media screen and (max-width: 1440px){
        grid-column-gap: 2rem;

    }

    @media screen and (max-width: 992px){
        grid-template-areas:
        "b b b b b b b b b b b b"
        "d d d d d d d d d d d d"
    ;
        padding: 2rem;
    }

    @media screen and (max-width: 600px){
        padding: 1rem;
        grid-column-gap: 0rem;

    }

`;


const AdressPhone = styled.div`

    grid-area: b;
    display: flex;
    flex-direction: column;
    min-width: 100%;
    background: rgba(0, 0, 0, .89);
    border-radius: 6px;
    margin: 4rem;
    padding: 2rem;
    max-height: 620px;
    box-shadow: 4px 0px 9px 0px rgba(255,235,215, 0.43);

    p{
        font-weight: 900;
    }

    .icon_address {
        font-size: 2.3rem;
        margin-top: 3rem;
    }

    .icon_phone {
        font-size: 2.3rem;

    }

    .phone {
        text-align: center;

    }
    
    .address {
        text-align: center;
    }

    .map{
        width: 100%;
        height: 100%;
        max-width: 500px;
        max-height: 200px;

        margin: 0 auto;
        margin-top: 2rem;


    }

`;

const ContactContainer = styled.div`
    grid-area: d;
    padding-top: 2rem;
    text-align: center;
    min-width: 100%;
    background: rgba(0, 0, 0, .89);
    border-radius: 6px;
    margin: 4rem;
    padding: 2rem;
    max-height: 620px;
    box-shadow: 4px 0px 9px 0px rgba(255,235,215, 0.43);


    p{
        font-weight: 900;
        margin: 1rem;
    }

    .icon_mail {
        font-size: 2.3rem;
        position: relative;
        float: center;
    }

    
    @media screen and (max-width: 600px){
        margin: 0rem;
        padding: 0rem;

    }
`;


const style = {
    width:"100%",
    height: "100%",
}



const Contact = () => {

    return (
        <Wrapper>
            <Content>
                <AdressPhone>
                    <div className="phone">
                        <Icon className="icon_phone" icon="uil:phone" />
                        <br></br>
                        <p>
                            0733 000 000
                        </p>

                        <p>
                            044-20 00 00
                        </p>
                    </div>
                    <div className="address">
                        <Icon className="icon_address" icon="uil:map-marker" />
                        <p>
                            Järnvägsgatan 1a
                        </p>
                        <p>
                            281 31 
                        </p>
                        <p>
                            Stockholm
                        </p>
                    </div>
                    <div className="map">

                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2034.830803088031!2d18.0637501!3d59.3357786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d5d80e3ce5f%3A0xbb8879bfcba1e005!2sKungsgatan%2042%2C%20111%2035%20Stockholm!5e0!3m2!1sen!2sse!4v1662382165532!5m2!1sen!2sse"
          
                            style={ style}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">

                        </iframe>
                    </div>
                  

                </AdressPhone>
                <ContactContainer>
                    <Icon className="icon_mail" icon="uil:envelope" />
                    <ContactForm>
                    </ContactForm>
                </ContactContainer>
            </Content>
        </Wrapper>
    )

}

export default Contact