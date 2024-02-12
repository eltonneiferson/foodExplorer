import styled from 'styled-components'

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-size: 1rem;
    
    label {
        color: ${( { theme } ) => theme.COLORS.LABEL};
    }

    div {
        background-color: ${( { theme } ) => theme.COLORS.BG_INPUT};
        display: flex;
        align-items: center;
        gap: 0.875rem;
        border-radius: 8px;
        padding-left: 14px;
        
        > input {
            width: 100%;
            font-family: 'Roboto', sans-serif;
            border: none;
            outline: none;
            background: none;
            padding: 1rem 0.9rem 1rem 0;
        }
        
        > input:-webkit-autofill {
            -webkit-box-shadow: 0 0 0px 1000px ${({ theme }) => theme.COLORS.BG_INPUT} inset;
            -webkit-text-fill-color: ${({ theme }) => theme.COLORS.TEXT};
            border-radius: 0 8px 8px 0;
        }
        
        &:focus-within {
            border: ${({ theme }) => theme.COLORS.TEXT} 1px solid;
        }
    }
`