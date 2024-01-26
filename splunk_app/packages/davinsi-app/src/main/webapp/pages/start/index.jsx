import React from 'react';

import layout from '@splunk/react-page';
import Davinsi from '@splunk/davinsi';
import { getUserTheme } from '@splunk/splunk-utils/themes';

import { StyledContainer, StyledGreeting } from './StartStyles';

getUserTheme()
    .then((theme) => {
        layout(
            <StyledContainer>
                <StyledGreeting>Hello, from inside DavinsiApp!</StyledGreeting>
                <div>Your component will appear below.</div>
                <Davinsi name="from inside Davinsi" />
            </StyledContainer>,
            {
                theme,
            }
        );
    })
    .catch((e) => {
        const errorEl = document.createElement('span');
        errorEl.innerHTML = e;
        document.body.appendChild(errorEl);
    });
