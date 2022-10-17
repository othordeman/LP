import React from "react";
import { Wrapper } from './Button.styles'

const Button = ({ text, callback, style }) => (
    
    <Wrapper onClick={callback}>
        { text }
    </Wrapper>
);

export default Button