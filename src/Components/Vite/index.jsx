import React from "react";
import { LOGO } from "../Logo";
import * as SC from "./styles"

export const Vite = () => (
    <>
        <SC.TitleH2>Vite</SC.TitleH2>
        <SC.Image src={LOGO.Vite} />
        <h3>Плюсы</h3>
        <ul>
            <li>Быстрая сборка</li>
            <li>Легкая настройка</li>
            <li>Поддержка для фреймворков</li>
        </ul>
        <h3>Минусы</h3>
        <ul>
            <li>Менее расширяемый</li>
            <li>Ограниченное сообщество</li>
        </ul>
        <SC.Button to={'/vite'}>Подробнее...</SC.Button>
    </>
)