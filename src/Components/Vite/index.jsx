import React from "react";
import { WrapperCard } from "../WrapperCard"
import * as SC from "./styles"

export const Vite = ({logo}) => (
    <WrapperCard>
        <SC.TitleH2>Vite</SC.TitleH2>
        <SC.Image src={logo} />
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
    </WrapperCard>
)