"use client"

import { useState } from "react";
import styled from "styled-components";

const PersonContainer = styled.p`
  width: calc(10vw - 12px);
  height: 32px;
  line-height: 32px;
  text-align: center;
  margin: 0 4px 0 4px;
  border: 2px solid black;
  cursor: pointer;
  transition: .2s ease all;
  background-color: ${props => props.talks === 'true' ? 'white' : 'black'};
  color: ${props => props.talks === 'true' ? 'black' : 'white'};
  ::selection{
    background-color: ${props => props.talks === 'true' ? 'white' : 'black'};
    color: ${props => props.talks === 'true' ? 'black' : 'white'};
  }
`;

export default function Person(props) {
  const [talked, setTalked] = useState(false);
  return <PersonContainer talks={talked.toString()} onClick={() => setTalked(!talked)}>{props.person}</PersonContainer>;
}
