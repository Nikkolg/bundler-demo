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
                    Esbuild - это современный и высокопроизводительный сборщик JavaScript и CSS. Его главное преимущество заключается в потрясающей скорости компиляции благодаря использованию языка Go, что делает процесс сборки практически мгновенным. Esbuild поддерживает самые актуальные стандарты JavaScript, включая ES6 и более новые версии, обеспечивая минификацию и оптимизацию кода без потери качества. С этим сборщиком также можно использовать разнообразные плагины для интеграции с другими инструментами.                
                </SC.Text>
                <SC.Text>
                    Esbuild также предоставляет мощные функции, такие как динамический импорт и поддержку разделения кода. С его интуитивным интерфейсом разработчики могут легко интегрировать его в свои процессы сборки и автоматизации, что способствует улучшению производительности и сокращению времени разработки.
                </SC.Text>
                <SC.Text>
                    Esbuild активно поддерживается сообществом и регулярно обновляется, чтобы соответствовать последним требованиям и стандартам веб-разработки.
                </SC.Text>
            </div>
        </SC.Wrapper>

        <SC.Wrapper row={true} >
            <SC.FeaturesContainer>
                <SC.TitleH3>Плюсы</SC.TitleH3>
                <ul>
                    <SC.FeaturesList>Быстрое время сборки – Esbuild один из самых быстрых сборщиков, благодаря компиляции на Go</SC.FeaturesList>
                    <SC.FeaturesList>Легкая настройка – конфигурация Esbuild кратка и легка для понимания</SC.FeaturesList>
                    <SC.FeaturesList>Минимум зависимостей  - Esbuild имеет небольшое количество зависимостей, что делает его легким и быстрым в установке</SC.FeaturesList>
                </ul>
            </SC.FeaturesContainer>
            <SC.FeaturesContainer>
                <SC.TitleH3>Минусы</SC.TitleH3>
                <ul>
                    <SC.FeaturesList>Меньшая функциональность – Esbuild может быть ограничен в некоторых аспектах, таких как обработка изображений или оптимизация файлов, по сравнению с более мощными сборщиками</SC.FeaturesList>
                    <SC.FeaturesList>Менее расширяемый – Esbuild имеет меньше плагинов и пакетов для расширения функциональности, по сравнению с аналогами</SC.FeaturesList>
                </ul>
            </SC.FeaturesContainer>
        </SC.Wrapper>

        <SC.Wrapper>
            <SC.TitleH3>Основные команды</SC.TitleH3>
            <SC.FeaturesList><b style={{color: '#4f87b9'}}>esbuild.config.js</b> - Файл с основными настройками Esbuild</SC.FeaturesList>

            <SC.FeaturesList><b style={{color: '#c35656'}}>npm init –y</b> - Создание NodeJs project</SC.FeaturesList>
            <SC.FeaturesList><b style={{color: '#c35656'}}>npm install esbuild</b> - Установка</SC.FeaturesList>
            <SC.FeaturesList><b style={{color: '#c35656'}}>npm install esbuild</b> - Добавление React и react-dom в проект</SC.FeaturesList>
            <SC.FeaturesList><b style={{color: '#c35656'}}>./node_modules/.bin/esbuild app.jsx — bundle — outfile=bundle.js</b> - Связать приложение с помощью Esbuild. Объедиие приложения в файлы bundle.js </SC.FeaturesList>
            <SC.FeaturesList><b style={{color: '#c35656'}}>node esbuild.config.js</b> - Запустить файл конфигурации Esbuild</SC.FeaturesList>
            <SC.FeaturesList><b style={{color: '#c35656'}}>npx lite-server</b> - Запустить веб-сервер</SC.FeaturesList>
        </SC.Wrapper>

    </Container>
)