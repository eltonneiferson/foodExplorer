import styled from 'styled-components'

export const Container = styled.section `
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4.5625rem;

    @media (min-width: 1024px){
        flex-direction: row;
        justify-content: space-around;
    }
`

export const Form = styled.form `
    min-width: 288px;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    h2 {
        display: none;
    }

    a {
        font-family: 'Poppins', sans-serif;
        font-size: 0.875rem;
        font-weight: 500;
        text-align: center;
    }

    @media (min-width: 1024px){
        width: 412px;
        padding: 4rem;     
        background-color: ${( { theme } ) => theme.COLORS.BG_CARD_LOGIN};

        h2 {
            display: block;
            font-family: 'Poppins', sans-serif;
            text-align: center;
            font-weight: 500;
        }
    }
`