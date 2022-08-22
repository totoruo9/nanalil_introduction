import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { NanalilStyle } from './GlobalStyle';

const NavContainer = styled.div`
    position: fixed;
    bottom: 40px;
    margin: 0 auto;
    background: ${NanalilStyle.color.gray.g_100};
    left: 50%;
    transform: translateX(-50%);
    padding: ${NanalilStyle.margin.mg_16};
    border-radius: ${(props) => props.borderRadius}px;
`;

const NavWrap = styled.ul`
    display: flex;
`;

const NavItem = styled.li`
    padding: ${NanalilStyle.margin.mg_16};
`;

export default function Navigation() {
    return (
        <NavContainer borderRadius={40}>
            <NavWrap>
                <NavItem><a href='#VisualRef'>test1</a></NavItem>
                <NavItem><a href='#TestLink'>test2</a></NavItem>
                <NavItem><a href='#'>test3</a></NavItem>
                <NavItem><a href='#'>test4</a></NavItem>
            </NavWrap>
        </NavContainer>
    )
}