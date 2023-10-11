import { styled } from "styled-components";

export const Title = styled.h1`
    text-align: center;
    font-size: 44px;
    margin: 50px 0;
`

export const Wrapper = styled.div`
    display: ${(props) => (props.block ? "block" : "flex")};
    flex-direction: ${(props) => (props.row ? 'row' : 'column')};
    justify-content: space-between;
    gap: 10px;
    width: 100%;
    padding: 15px;
    text-align: center;
    border-bottom: 1px solid rgba(118, 112, 112, 0.5);
`

export const Image = styled.img`
    width: 300px;
    height: 300px;
    float: left;
    margin-right: 30px;
`

export const TitleH3 = styled.h3`
    font-size: 26px;
    align-items: center;
`

export const Text = styled.p`
    font-size: 18px;
    word-wrap: break-word;
    text-align: left;
    margin-bottom: 7px;
`

export const FeaturesContainer = styled.div`
    width: 100%;
    text-align: center;
`

export const FeaturesList = styled.li`
    text-align: left;
    word-wrap: break-word;
`