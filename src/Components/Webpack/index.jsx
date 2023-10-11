import React from "react";
import { LOGO } from "../Logo"
import * as SC from "./styles"

export const Webpack = () => (
        <>
            <SC.TitleH2>Webpack</SC.TitleH2>
            <SC.Image src={LOGO.Webpack} />
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
            <SC.Button to={'/webpack'}>Подробнее...</SC.Button>
        </>
)
