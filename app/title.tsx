import React from 'react';
import styled from 'styled-components';
import { primary, secondary, tertiary } from './configs/colors';

const StyledTitle = styled.h1`
    position: absolute;
    z-index: 22;
    top: 47vh;
    left: 0;
    width: 100vw;
    height: 6vh;
    font-size: 6vh;
    line-height: 6vh;
    cursor: default;
    color: ${props => props.color || 'white'};;
    text-align: center;
    font-weight: 600;
    font:;
`

class Title extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            primaryColor: primary,
            secondaryColor: secondary,
            tertiaryColor: tertiary,
        };
    }

    render() {
        return(
            <StyledTitle color={this.state.tertiaryColor}>
                NICOLA PASQUALINI
            </StyledTitle>
        );
    }
}

export default Title;
    