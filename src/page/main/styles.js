import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const Title = styled.h1`
    text-align: center;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 30px;
    justify-content: space-between;
    margin-top: 30px;
`

export const WrapperCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 320px;
    width: 100%;
    border: 1px solid white;
    border-radius: 20px;
    padding: 10px;
    margin: 30px 0;
`