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
    font-weight: 700;
    text-decoration: none;

    &.active {
        color: #f55050f0;
    }

    &:hover {
        text-decoration: underline;
    }
`