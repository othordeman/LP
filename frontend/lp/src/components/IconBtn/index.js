import React from "react"
import { Wrapper } from "./IconBtn.styles"
import { Icon } from '@iconify/react';

const IconBtn = ({ callback, iconName}) => {

    return(
        <Wrapper >
            <Icon onClick={callback} icon={iconName} className="iconBtn" />
        </Wrapper>
    )
}



export default IconBtn
