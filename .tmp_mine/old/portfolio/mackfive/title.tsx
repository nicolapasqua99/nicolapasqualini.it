import React from 'react'
import styled from 'styled-components'
import { primary, secondary, tertiary } from './(portfolio_configs)/colors'
import { ColorProp } from '../../../src/models/styled.props.models'

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
    color: ${props => props.color || 'white'};
    text-align: center;
    font-weight: 600;
`

class Title extends React.Component {
    state: ColorProp

    constructor(props: any) {
        super(props)
        this.state = {
            primary: primary,
            secondary: secondary,
            tertiary: tertiary
        }
    }

    render() {
        return <StyledTitle color={this.state.tertiary}>NICOLA PASQUALINI</StyledTitle>
    }
}

export default Title
