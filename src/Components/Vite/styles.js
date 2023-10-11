import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const TitleH2 = styled.h2`
    text-align: center;
`

export const Image = styled.img`
    width: 200px;
    height: 200px;
    margin: 0 auto;
`

export const Button = styled(NavLink)`
    border: 1px solid bisque;
    background-color:rgb(29, 26, 26);
    color: bisque;
    padding: 10px 10px;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.5s ease-out;
    text-align: center;

    &:hover {
        background: bisque;
        color: rgb(29, 26, 26);
    }
`