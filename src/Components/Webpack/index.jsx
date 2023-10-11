import React from "react";
import { LOGO } from "../Logo"
import * as SC from "./styles"

export const Webpack = () => (
        <>
            <SC.TitleH2>Webpack</SC.TitleH2>
            <SC.Image src={LOGO.Webpack} />
            <h3>Плюсы</h3>
            <ul>
                <li>Мощный и гибкий</li>
                <li>Большое сообщество </li>
                <li>Большое количество плагинов </li>
            </ul>
            <h3>Минусы</h3>
            <ul>
                <li>Долгое время сборки</li>
                <li>Сложная настройка</li>
            </ul>
            <SC.Button to={'/webpack'}>Подробнее...</SC.Button>
        </>
)
