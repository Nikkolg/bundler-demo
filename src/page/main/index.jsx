import React from "react";
import { Container } from "../../Components/Container";
import { Webpack } from "../../Components/Webpack"
import { Esbuild } from "../../Components/Esbuild"
import { Vite } from "../../Components/Vite"
import * as SC from "./styles"

const LOGO  = {
    Webpack: 'https://raw.githubusercontent.com/webpack/media/master/logo/icon-square-big.png',
    Esbuild: 'https://seeklogo.com/images/E/esbuild-logo-21E74350B7-seeklogo.com.png',
    Vite: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1039px-Vitejs-logo.svg.png' ,
}

export const MainPage = () => (
    <Container>
        <SC.Title>Сравнение сборщиков проектов</SC.Title>
        <SC.Wrapper>
            <Webpack logo={LOGO.Webpack} />
            <Esbuild logo={LOGO.Esbuild} />
            <Vite logo={LOGO.Vite} />
        </SC.Wrapper>
    </Container>
)