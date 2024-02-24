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

        > div.description {
            display: flex;
            flex-direction: column;
            gap: clamp(1rem, 3vw, 47px);
            align-items: center;

            > img {
                width: 264px;
                height: 264px;
                border-radius: 100%;
            }

            div.about {
                font-family: 'Poppins', sans-serif;
                display: flex;
                flex-direction: column;
                gap: 1.5rem;
                align-items: center;
                text-align: center;
                
                > h2 {
                    font-family: 'Poppins', sans-serif;
                    font-size: clamp(27px, 4vw, 40px);
                    font-weight: 500;
                }
                
                > p {
                    text-align: center;
                    font-size: clamp(16px, 3vw, 24px);
                    font-weight: 300;
                }
                
                > div.tags {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    gap: 1.5rem;
    
                    > span {
                        background: ${({ theme }) => theme.COLORS.BG_TAG};
                        border-radius: 0.3125rem;
                        padding: 0.25rem 0.5rem;
                        font-size: 0.875rem;
                        font-weight: 500;
                    }
                }
                
                > div.buttons {
                    display: flex;
                    gap: 1rem;
                    align-items: center;
                    font-size: 1.4141rem;
                    font-weight: 700;
                }
            }
        }

        @media (min-width: 800px) {
            margin: 1.5rem auto;
            
            div.description {
                flex-direction: row;

                > img {
                    width: clamp(264px, 45vw, 390px);
                    height: clamp(264px, 45vw, 390px);
                }

                div.about {
                    align-items: start;

                    h2 {
                        text-align: start;
                    }

                    p {
                        text-align: justify;
                    }

                    div.tags {
                        justify-content: start;
                        gap: 0.75rem;
                    }
                }
            }
        }
`