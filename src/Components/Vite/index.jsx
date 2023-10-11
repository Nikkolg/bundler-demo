import React from "react";
import { LOGO } from "../Logo";
import * as SC from "./styles"

export const Vite = () => (
    <>
        <SC.TitleH2>Vite</SC.TitleH2>
        <SC.Image src={LOGO.Vite} />
        <h3>Плюсы</h3>
        <ul>
            <li>фывфвф</li>
            <li>фывфвф</li>
            <li>фывфвф</li>
        </ul>
        <h3>Минусы</h3>
        <ul>
            <li>фывфвф</li>
            <li>фывфвф</li>
            <li>фывфвф</li>
        </ul>
        <SC.Button to={'/vite'}>Подробнее...</SC.Button>
    </>
)