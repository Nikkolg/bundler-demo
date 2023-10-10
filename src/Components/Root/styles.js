import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    margin: 0 auto;
`

export const MenuItem = styled(NavLink)`
    font-size: 24px;
    text-decoration: none;
    color: white;

    &.active {
        color: darkred;
    }

    &:hover {
        text-decoration: underline;
    }
`