import styled from 'styled-components';
import { variables, mixins } from '@splunk/themes';

const StyledContainer = styled.div `
    ${mixins.reset('inline-block')};
    font-size: ${variables.fontSizeLarge};
    line-height: 200%;
    margin-bottom : ${variables.spacing};
    padding: ${variables.spacing} calc(${variables.spacing} * 2);
    padding-bottom: 0.1em;
    border-radius: ${variables.borderRadius};
    background: white;
    border: 1;
    border-style: solid;
    border-color: rgb(229 231 235);
  `;

const StyledGreeting = styled.div `
    font-weight: bold;
    color: ${variables.brandColor};
    font-size: ${variables.fontSizeXXLarge};
`;

const StyledButton = styled.div `
    font-weight: bold;
    color: ${variables.brandColor};
    font-size: ${variables.fontSizeXXLarge};
`;

const StyledSliderContainer = styled.div `
    opacity: 0.5
    border: 1px solid black;
`;



export { StyledContainer, StyledGreeting, StyledButton, StyledSliderContainer };