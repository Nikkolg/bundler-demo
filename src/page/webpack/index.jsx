import React from "react";
import { Container } from "../../Components/Container"
import { LOGO } from "../../Components/Logo"
import * as SC from "./styles"

export const WebpackPage = () => (
    <Container>
        <SC.Title>Webpack</SC.Title>

        <SC.Wrapper block={true} >
            <SC.Image src={LOGO.Webpack}/>
            <div>
                <SC.TitleH3>Описание</SC.TitleH3>
                <SC.Text>
                    Webpack - это инструмент сборки для веб-приложений, который позволяет разработчикам эффективно управлять зависимостями, ресурсами и кодом в проектах, разрабатываемых с использованием JavaScript. Он является одним из наиболее популярных инструментов сборки в экосистеме JavaScript и широко используется для сборки современных веб-приложений.    
                </SC.Text>
                <SC.Text>
                    Webpack основывается на концепции модульности, позволяя разработчикам организовывать код в небольшие, независимые модули (JavaScript, стили CSS, изображения, шрифты и другие ресурсы). Webpack анализирует зависимости между этими модулями и строит граф зависимостей.
                </SC.Text>
                <SC.Text>
                    Webpack известен своей способностью "code splitting", что позволяет разбивать код на более мелкие части и загружать их по мере необходимости, улучшая производительность веб-приложения
                </SC.Text>
                <SC.Text>
                    Webpack имеет широкую экосистему и активное сообщество, что делает его мощным и популярным инструментом для сборки веб-приложений. Он помогает разработчикам создавать оптимизированные и быстро работающие веб-приложения, что является ключевым аспектом успешной веб-разработки в современном мире.
                </SC.Text>

            </div>
        </SC.Wrapper>

        <SC.Wrapper row={true} >
            <SC.FeaturesContainer>
                <SC.TitleH3>Плюсы</SC.TitleH3>
                <ul>
                    <SC.FeaturesList>Мощный и гибкий – Webpack предоставляет широкие возможности для настройки проекта, что позволяет адаптировать его под различные потребности</SC.FeaturesList>
                    <SC.FeaturesList>Большое сообщество – Webpack обладает большим сообществом пользователей, что делает его документацию и помощь легкодоступной</SC.FeaturesList>
                    <SC.FeaturesList>Большое количество плагинов – Существует большое количество сторонних плагинов для Webpack, что позволяет расширить его функциональность</SC.FeaturesList>
                </ul>
            </SC.FeaturesContainer>
            <SC.FeaturesContainer>
                <SC.TitleH3>Минусы</SC.TitleH3>
                <ul>
                    <SC.FeaturesList>Долгое время сборки – для большинства проектов сборка занимает очень много времени из-за множества зависимостей</SC.FeaturesList>
                    <SC.FeaturesList>Сложная настройка – Из-за гибкости настройка Webpack может быть очень сложной и требовательной</SC.FeaturesList>
                </ul>
            </SC.FeaturesContainer>
        </SC.Wrapper>

        <SC.Wrapper>
            <SC.TitleH3>Основные команды и файлы настройки</SC.TitleH3>
            <SC.FeaturesList><b style={{color: '#4f87b9'}}>webpack.config.js</b> - Файл с основными настройками Webpack</SC.FeaturesList>
            
            <SC.FeaturesList><b style={{color: '#c35656'}}>npm i -D webpack webpack-cli</b> - Установка webpack и webpack-cli (предоставляет дополнительные возможности для работы с webpack)</SC.FeaturesList>
            <SC.FeaturesList><b style={{color: '#c35656'}}>npx webpack init --force</b> - Инициализация нового вебпак-проекта, с автоматическим созданием всех необходимых файлов и конфигураций</SC.FeaturesList>
            <SC.FeaturesList><b style={{color: '#c35656'}}>npx webpack serve</b> - Запустить сервер для разработки</SC.FeaturesList>
            <SC.FeaturesList><b style={{color: '#c35656'}}>npx webpack serve</b> - Запуск Webpack</SC.FeaturesList>
            <SC.FeaturesList><b style={{color: '#c35656'}}>webpack --mode</b> - Позволяет указать режим сборки, который может быть "development" или "production"</SC.FeaturesList>
            <SC.FeaturesList><b style={{color: '#c35656'}}>npm i svg-inline-loader -D</b> - Установка SVG loader</SC.FeaturesList>
            <SC.FeaturesList><b style={{color: '#c35656'}}>npm i css-loader -D</b> - Установка CSS loader</SC.FeaturesList>
            <SC.FeaturesList><b style={{color: '#c35656'}}>npm i style-loader -D </b> - Возможность импортировать CSS файлы и включать в &lt;style&gt;</SC.FeaturesList>
            <SC.FeaturesList><b style={{color: '#c35656'}}>npm i babel-loader -D</b> - Установка Babel</SC.FeaturesList>

            <SC.FeaturesList><b style={{color: '#5da359'}}>rules: [ test: /\.svg$/, use: 'svg-inline-loader']</b> - Добавляется в webpack.config.js, для возможности использования SVG в проекте</SC.FeaturesList>
            <SC.FeaturesList><b style={{color: '#5da359'}}>test: /\.css$/, use: 'css-loader'</b> - Добавляется в webpack.config.js, подключение CSS</SC.FeaturesList>
            <SC.FeaturesList><b style={{color: '#5da359'}}>test: /\.css$/, use: [ 'style-loader', 'css-loader' ]</b> - Добавляется в webpack.config.js, подключение CSS</SC.FeaturesList>
            <SC.FeaturesList><b style={{color: '#5da359'}}>test: /\.(js)$/, use: 'babel-loader'</b> - Добавляется в webpack.config.js, Подключение Babel</SC.FeaturesList>
            <SC.FeaturesList><b style={{color: '#5da359'}}>output: path: path.resolve(__dirname, 'dist'), filename: 'index_bundle.js'</b> - Точка выхода. Название папки куда производится сборка - dist, и название файла</SC.FeaturesList>

        </SC.Wrapper>

    </Container>
)