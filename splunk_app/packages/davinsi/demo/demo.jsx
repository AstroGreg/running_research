import React from 'react';
import { render } from 'react-dom';

import { SplunkThemeProvider, variables } from '@splunk/themes';
import { getUserTheme, getThemeOptions } from '@splunk/splunk-utils/themes';
import { createGlobalStyle } from 'styled-components';

// import Davinsi from '../src/Davinsi';
import Main from '../src/main/game';
import "./main.css";

const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${variables.backgroundColorPage};
    }
`;


getUserTheme()
    .then((theme) => {
        const containerEl = document.getElementById('main-component-container');
        const splunkTheme = getThemeOptions(theme);
        render(

            <SplunkThemeProvider {...splunkTheme}>
            <GlobalStyles />
                   <Main/>

            </SplunkThemeProvider>,
            containerEl
        );
    })
    .catch((e) => {
        const errorEl = document.createElement('span');
        errorEl.innerHTML = e;
        document.body.appendChild(errorEl);
    });
