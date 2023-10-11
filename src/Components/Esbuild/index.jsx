import React from "react";
import { LOGO } from "../Logo";
import * as SC from "./styles"

export const Esbuild = () => (
    <>
        <SC.TitleH2>Esbuild</SC.TitleH2>
        <SC.Image src={LOGO.Esbuild} />
        <h3>Плюсы</h3>
        <ul>
            <li>Быстрое время сборки</li>
            <li>Легкая настройка</li>
            <li>Минимум зависимостей</li>
        </ul>
        <h3>Минусы</h3>
        <ul>
            <li>Меньшая функциональность</li>
            <li>Менее расширяемый</li>
        </ul>
        <SC.Button to={'/esbuild'}>Подробнее...</SC.Button>
    </>
)