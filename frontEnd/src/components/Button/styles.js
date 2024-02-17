import styled from 'styled-components'

export const Container = styled.button `
    width: 100%;
    background-color: ${( { theme } ) => theme.COLORS.BG_BUTTON};
    color: ${( { theme } ) => theme.COLORS.TEXT};
    border: none;
    padding: 0.75rem 2rem;
    border-radius: 5px;
    font-family: 'Poppins', sans-serif;
    cursor: pointer;
    
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    opacity: .9;
    
    &:disabled {
        background-color: ${( { theme } ) => theme.COLORS.BG_BUTTON_DISABLED};
    }

    &:hover {
        opacity: 1;
    }
`