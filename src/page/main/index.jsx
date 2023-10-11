import React from "react";
import { Container } from "../../Components/Container";
import { Webpack } from "../../Components/Webpack"
import { Esbuild } from "../../Components/Esbuild"
import { Vite } from "../../Components/Vite"
import * as SC from "./styles"

export const MainPage = () => (
    <Container>
        <SC.Title>Сравнение сборщиков проектов</SC.Title>
        <SC.Wrapper>
            <SC.WrapperCard><Webpack /></SC.WrapperCard>
            <SC.WrapperCard><Esbuild /></SC.WrapperCard>
            <SC.WrapperCard><Vite /></SC.WrapperCard>
        </SC.Wrapper>
    </Container>
)