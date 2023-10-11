import React from "react";
import { Container } from "../../Components/Container"
import { LOGO } from "../../Components/Logo"
import * as SC from "./styles"

export const EsbuildPage = () => (
    <Container>
        <SC.Title>Esbuild</SC.Title>

        <SC.Wrapper block={true} >
            <SC.Image src={LOGO.Esbuild}/>
            <div>
                <SC.TitleH3>Описание</SC.TitleH3>
                <SC.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit facere aliquam voluptates ipsum nam ea illo numquam culpa perspiciatis saepe architecto atque, qui assumenda! Repellat fugit voluptatem minus officia consectetur quasi nostrum! Quis quidem maiores distinctio odio ea sunt odit quas magni minima quia sed hic accusamus officia, suscipit aperiam inventore nulla perspiciatis nobis dolores! Ducimus aliquam soluta ipsum corporis saepe esse dolore vel beatae nemo rem dolores ipsam explicabo quaerat, quod animi quae inventore optio corrupti exercitationem eaque nulla officiis! Quam ipsam aspernatur consectetur, corporis sed corrupti eius doloribus ea quas similique rerum neque alias quis consequatur illum quae sunt id enim totam eum doloremque aperiam? Qui, vero! A esse sint veniam illum doloribus optio harum distinctio. Omnis laboriosam sit quos vel quod possimus rerum sint temporibus, iusto maxime corporis. Quo officiis rerum facilis nam incidunt molestias, voluptate possimus facere saepe, omnis reiciendis corrupti eveniet iste accusantium? Eligendi sit quos sapiente ullam, optio aliquid vero nisi modi voluptatem eum ex eius cum saepe dolorum cumque. Odit explicabo sapiente tempora ex voluptates saepe ratione illo dolorem, iusto repudiandae laboriosam! Minima omnis maiores repellat est quasi ab, laudantium fuga molestiae voluptas, cupiditate libero assumenda amet tempore magnam. Inventore nihil nesciunt suscipit.
                </SC.Text>
            </div>
        </SC.Wrapper>

        <SC.Wrapper row={true} >
            <SC.FeaturesContainer>
                <SC.TitleH3>Плюсы</SC.TitleH3>
                <ul>
                    <SC.FeaturesList>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, animi!</SC.FeaturesList>
                    <SC.FeaturesList>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, animi!</SC.FeaturesList>
                    <SC.FeaturesList>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, animi!</SC.FeaturesList>
                </ul>
            </SC.FeaturesContainer>
            <SC.FeaturesContainer>
                <SC.TitleH3>Минусы</SC.TitleH3>
                <ul>
                <SC.FeaturesList>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, animi!</SC.FeaturesList>
                <SC.FeaturesList>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, animi!</SC.FeaturesList>
                <SC.FeaturesList>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, animi!</SC.FeaturesList>
                </ul>
            </SC.FeaturesContainer>
        </SC.Wrapper>

        <SC.Wrapper>
            <SC.TitleH3>Основные команды</SC.TitleH3>
            <SC.FeaturesList>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae harum, veniam dignissimos esse dolorem mollitia iure odit excepturi error quasi magnam, eum, rem perspiciatis iste illum suscipit quod illo praesentium.</SC.FeaturesList>
            <SC.FeaturesList>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae harum, veniam dignissimos esse dolorem mollitia iure odit excepturi error quasi magnam, eum, rem perspiciatis iste illum suscipit quod illo praesentium.</SC.FeaturesList>
            <SC.FeaturesList>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae harum, veniam dignissimos esse dolorem mollitia iure odit excepturi error quasi magnam, eum, rem perspiciatis iste illum suscipit quod illo praesentium.</SC.FeaturesList>
            <SC.FeaturesList>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae harum, veniam dignissimos esse dolorem mollitia iure odit excepturi error quasi magnam, eum, rem perspiciatis iste illum suscipit quod illo praesentium.</SC.FeaturesList>
        </SC.Wrapper>

    </Container>
)