import React from "react";
import { Container } from "../Container";
import { Outlet } from "react-router-dom";
import * as SC from "./styles"

export const Root = () => (
    <>
        <Container>
            <SC.Menu>
                <SC.MenuItem to={'/'}>Главная</SC.MenuItem>
                <SC.MenuItem to={'/webpack'}>Webpack</SC.MenuItem>
                <SC.MenuItem to={'/esbuild'}>Esbuild</SC.MenuItem>
                <SC.MenuItem to={'/vite'}>Vite</SC.MenuItem>
            </SC.Menu>
            
        </Container>
        <Outlet />    
    </>
)
 