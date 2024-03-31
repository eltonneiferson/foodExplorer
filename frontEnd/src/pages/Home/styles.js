import styled from 'styled-components'

export const Container = styled.div `
    min-height: 100vh;
    display: grid;
    grid-template-rows: max-content 1fr max-content;
`

export const Content = styled.main `
    padding-left: 1.5rem;
`

export const PresentationCard = styled.div `
    width: clamp(376px, 87vw, 1120px);
    height: 120px;
    margin: 2.75rem auto 3.875rem;
    border-radius: 2.917px;
    background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
    display: grid;
    grid-template-columns: 9.375rem 1fr;
    
    img {
        margin: -1.5625rem 0 0 -1.875rem;
        width: 191px;
    }
    
    div {
        font-family: 'Poppins', sans-serif;
        align-self: center;
        padding: 1rem;

        > h1 {
            font-size: 1.125rem;
            font-weight: 400;
        }

        > p {
            font-size: 0.75rem;
        }
    }

    @media (min-width:768px) {
        height: 260px;
        margin-top: 164px;
        grid-template-columns: 380px 1fr;
        
        img {
            width: 490px;
            margin: -115px 0 0 -75px;
        }

        div {
            h1 {
                font-size: 2.5rem;
                line-height: 120%;
                margin-bottom: 0.625rem;
            }

            p {
                font-size: 1rem;
            }
        }
    }
`