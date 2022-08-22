import * as React from 'react'
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset';

export const NanalilStyle = {
    font : {
        xsmall: '14px',
        small: '16px',
        mainText: '18px',
        subTitle: '22px',
        title: '70px',
        title_inner: '56px',

        lineHeight: {
            mainText: '32px',
            subTitle: '36px',
            title: '70px'
        }
    },
    margin: {
        mg_4: '4px',
        mg_8: '8px',
        mg_12: '12px',
        mg_16: '16px',
        mg_20: '20px',
        mg_24: '24px'
    },
    color: {
        gray: {
            g_100: '#F8F9FF',
            g_200: '#E9EDF0',
            g_300: '#C8D2E2',
            g_400: '#B9C4D6',
            g_600: '#8E8E9B',
            g_700: '#5D606C',
            g_800: '#3D4153',
            g_900: '#1D1D1D'
        },
        blue: '#44bbff',
    },
    whiteSpace: {
        ws_300: '300px',
        ws_160: '160px',
        ws_80: '80px',
        ws_40: '40px'
    }
}

export const GlobalStyle = createGlobalStyle`
    ${reset}

    @font-face {
        font-family: 'Pretendard-Regular';
        font-style: default;
        font-weight: 500;
        src: url("styles/fonts/Pretendard-Regular.woff2") format('woff2'),
        url("styles/fonts/Pretendard-Regular.woff") format('woff'),
        url("styles/fonts/Pretendard-Regular.otf") format('truetype')
    };

    @font-face {
        font-family: 'Pretendard-Medium';
        font-style: medium;
        font-weight: 600;
        src: url("styles/fonts/Pretendard-Medium.woff2") format('woff2'),
        url("styles/fonts/Pretendard-Medium.woff") format('woff'),
        url("styles/fonts/Pretendard-Medium.otf") format('truetype')
    };

    @font-face {
        font-family: 'Pretendard-Bold';
        font-style: bold;
        font-weight: 700;
        src: url("styles/fonts/Pretendard-Bold.woff2") format('woff2'),
        url("styles/fonts/Pretendard-Bold.woff") format('woff'),
        url("styles/fonts/Pretendard-Bold.otf") format('truetype')
    };

    @font-face {
        font-family: 'Pretendard-ExtraBold';
        font-style: bold;
        font-weight: 800;
        src: url("styles/fonts/Pretendard-ExtraBold.woff2") format('woff2'),
        url("styles/fonts/Pretendard-ExtraBold.woff") format('woff'),
        url("styles/fonts/Pretendard-ExtraBold.otf") format('truetype')
    };

    @font-face {
        font-family: 'GmarketSansLight';
        font-style: default;
        font-weight: 400;
        src: url("styles/fonts/GmarketSansLight.otf") format('truetype')
    };

    @font-face {
        font-family: 'GmarketSansMedium';
        font-style: medium;
        font-weight: 800;
        src: url("styles/fonts/GmarketSansMedium.otf") format('truetype')
    };

    @font-face {
        font-family: 'GmarketSansBold';
        font-style: bold;
        font-weight: 800;
        src: url("styles/fonts/GmarketSansBold.otf") format('truetype')
    };

    /* other styles */
    body {
        font-size: ${NanalilStyle.font.mainText};
        font-family: 'Pretendard-Regular';
        color: ${NanalilStyle.color.gray.g_600};
        line-height: ${NanalilStyle.font.lineHeight.mainText};
    }

    a {
        color: inherit;
        text-decoration: none;
    }
`

