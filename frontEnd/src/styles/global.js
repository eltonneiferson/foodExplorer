import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        color: ${( { theme } ) => theme.COLORS.TEXT};
    }

    .hidden {
        display: none;
    }
    
    body {
        background-color: ${( { theme } ) => theme.COLORS.BG_BODY};
        font-family: 'Roboto', sans-serif;
    }

    body::-webkit-scrollbar {
            width: 3px;
    }

    body::-webkit-scrollbar-thumb {
        background: ${( { theme } ) => theme.COLORS.PLACEHOLDER};
        border-radius: 1rem;
    }
`