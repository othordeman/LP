import React, { useState, useEffect } from "react";
import { Wrapper, Content } from "./Grid.styles";

const Grid = ({header, children}) => {

    return (
        <Wrapper>
            <h1>{header} </h1>
            <Content>{children}</Content>
        </Wrapper>

    )



};

export default Grid;