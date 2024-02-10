import styled from 'styled-components'

export const Container = styled.div `
    min-height: 100vh;
    display: grid;
    grid-template-rows: max-content 1fr max-content;
`

export const Content = styled.main `
        width: clamp(316px, 73vw, 1122px);
        margin: 2.25rem auto;
        display: grid;
        grid-template-rows: max-content 1fr;
        gap: 1rem;

        > a {
            font-family: 'Poppins', sans-serif;
            font-size: 1.5rem;
            font-weight: 500;
            display: flex;
            align-items: center;

            >svg {
                width: 32px;
                height: 32px;
            }
        }

        @media (min-width: 768px) {
            margin: 1.5rem auto;
        }
`