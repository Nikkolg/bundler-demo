import React from "react";
import { Container } from "../../Components/Container"
import { LOGO } from "../../Components/Logo"
import * as SC from "./styles"

export const VitePage = () => (
    <Container>
        <SC.Title>Vite</SC.Title>

        <SC.Wrapper block={true} >
            <SC.Image src={LOGO.Vite}/>
            <div>
                <SC.TitleH3>Описание</SC.TitleH3>
                <SC.Text>
                    Vite - это инновационный сборщик JavaScript и TypeScript, предназначенный для разработки современных веб-приложений. Он отличается невероятной скоростью и молниеносной пересборкой благодаря своей архитектуре, основанной на ES-модулях. Vite разделяет код на мелкие модули, что позволяет быстро реагировать на изменения и ускоряет разработку. Сборка происходит на лету, без необходимости предварительной компиляции, что делает разработку более эффективной                
                </SC.Text>
                <SC.Text>
                    Vite поддерживает горячую перезагрузку, что упрощает отладку и тестирование. Имеет простую конфигурацию и интеграцию с различными фреймворками, такими как Vue.js и React.
                </SC.Text>
                <SC.Text>
                    Vite предоставляет разработчикам богатый экосистемный набор инструментов, включая поддержку современных JavaScript и TypeScript, а также плагины для обработки файлов, оптимизации ресурсов и дополнительных возможностей. Он также поддерживает сборку для различных сред, включая браузеры и Node.js, и обеспечивает гибкую настройку с помощью конфигурационных файлов. Vite интегрируется с популярными фреймворками, что делает его универсальным инструментом для разработчиков, ищущих эффективное и производительное решение в веб-разработке.
                </SC.Text>
            </div>
        </SC.Wrapper>

        <SC.Wrapper row={true} >
            <SC.FeaturesContainer>
                <SC.TitleH3>Плюсы</SC.TitleH3>
                <ul>
                    <SC.FeaturesList>Быстрая сборка – Благодаря использованию ESM производится быстрая загрузка модулей в браузере и улучшает производительность</SC.FeaturesList>
                    <SC.FeaturesList>Легкая настройка – Конфигурация Vite кратка и легка для понимания</SC.FeaturesList>
                    <SC.FeaturesList>Поддержка плагинов – благодаря поддержки плагинов, Vite становится более гибким для расширения</SC.FeaturesList>
                    <SC.FeaturesList>Поддержка для фреймворков – Vite предоставляет интеграцию с популярными фреймворками (встроенная конфигурация, быстрая горячая перезагрузка, минимальные зависимости)</SC.FeaturesList>
                </ul>
            </SC.FeaturesContainer>
            <SC.FeaturesContainer>
                <SC.TitleH3>Минусы</SC.TitleH3>
                <ul>
                <SC.FeaturesList>Менее расширяемый – Выбор плагинов для Vite может быть ограничен, по сравнению с другими сборщиками</SC.FeaturesList>
                <SC.FeaturesList>Ограниченное сообщество – Меньшее сообещство, по сравнению с Webpack, что может повлиять на доступность ресурсов и поддержку</SC.FeaturesList>
                </ul>
            </SC.FeaturesContainer>
        </SC.Wrapper>

        <SC.Wrapper>
            <SC.TitleH3>Основные команды</SC.TitleH3>
            <SC.FeaturesList><b style={{color: '#4f87b9'}}>vite.config.js</b> - Файл с основными настройками Vite</SC.FeaturesList>
            <SC.FeaturesList><b style={{color: '#c35656'}}>npm create vite@latest</b> - Создание проекта, используя Vite</SC.FeaturesList>
            <SC.FeaturesList><b style={{color: '#c35656'}}>npm run dev</b> - Запустить сервер</SC.FeaturesList>
            <SC.FeaturesList><b style={{color: '#c35656'}}>npm run build</b> - Собрать проект</SC.FeaturesList>
        </SC.Wrapper>

    </Container>
)