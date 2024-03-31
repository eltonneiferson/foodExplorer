import styled from 'styled-components'

export const Container = styled.div `
    min-height: 100vh;
    display: grid;
    grid-template-rows: max-content 1fr max-content;
`

export const Content = styled.form `
    width: clamp(316px, 73vw, 1122px);
    margin: 0.6rem auto 4.25rem;
    display: grid;
    grid-template-rows: max-content 1fr;
    gap: 1.5rem;

    > a {
        font-family: 'Poppins', sans-serif;
        font-size: 1rem;
        font-weight: 500;
        display: flex;
        align-items: center;
        
        >svg {
            width: 22px;
            height: 22px;
        }
    }
    
    > h1 {
        font-family: 'Poppins', sans-serif;
        font-weight: normal;
    }

    > div.first-section {
        display: grid;
        gap: 1rem;

        > div.input-file {
            display: grid;
            gap: 1rem;
            
            > p {
                color: ${( { theme } ) => theme.COLORS.LABEL};
            }

            > div {
                background-color: ${( { theme } ) => theme.COLORS.BG_INPUT};
                padding: 0.8rem;
                display: flex;
                align-items: center;
                gap: 0.5rem;
                border-radius: 0.5rem;
                
                > label {
                    cursor: pointer;
                }
    
                > input {
                    display: none;
                }
            }
        }

            > div.select {
                display: flex;
                flex-direction: column;
                gap: 1rem;
                
                > label {
                    color: ${( { theme } ) => theme.COLORS.LABEL};
                }
                
                > div {
                    position: relative;

                    > select {
                        width: 100%;
                        background-color: ${( { theme } ) => theme.COLORS.BG_INPUT};
                        font-family: 'Roboto', sans-serif;
                        font-family: .9rem;
                        padding: 1rem;
                        border: none;
                        border-radius: 0.5rem;
                        resize: none;
                        cursor: pointer;
                        appearance: none;
                        -webkit-appearance: none;
                        -moz-appearance: none;
                    }

                    > svg {
                        position: absolute;
                        bottom: 0.75rem;
                        right: 1rem;
                    }
                }
            }
    }

    > div.second-section {
        display: grid;
        gap: 1rem;
    }

    > div.textarea {
        display: grid;
        gap: 1rem;
        position: relative;

        > textarea {
            background-color: ${( { theme } ) => theme.COLORS.BG_INPUT};
            font-family: 'Roboto', sans-serif;
            font-family: 1rem;
            padding: 0.8rem;
            border: none;
            border-radius: 0.5rem;
            resize: none;
        }
    }

    > div.buttons {
            display: flex;
            gap: 2rem;

            button {
                padding: 0.75rem;
            }

            button:nth-child(1){
                background: ${( { theme } ) => theme.COLORS.BG_BUTTON_DELETE};
            }
    }

    @media (min-width: 768px) {
        margin: 1.5rem auto;

        > div.first-section {
            grid-template-columns: 1fr 1fr 1fr;
        }

        > div.second-section {
            grid-template-columns: 1fr 16rem;
        }

        > div.buttons {
            justify-content: end;

            > button {
                width: max-content;
                padding: 0.75rem 2.25rem;
            }
        }
    }
`

export const Ingredients = styled.div `
    font-family: 'Roboto', sans-serif;
    font-family: 1rem;
    display: grid;
    gap: 1rem;
            
    > p {
        color: ${( { theme } ) => theme.COLORS.LABEL};
    }
    
    > div {
        background-color: ${( { theme } ) => theme.COLORS.BG_INPUT};
        padding: 0.8rem;
        border-radius: 0.5rem;
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;

        > button.remove {
            cursor: pointer;
            background: ${({ theme }) => theme.COLORS.BG_TAG_INPUT};
            border: none;
            padding: 0.375rem 1rem;
            border-radius: 0.5rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;

            svg {
                width: 1rem;
            }
        }

        > span.add {
            background: none;
            border: dashed 1px;
            border-radius: 0.5rem;
            display: flex;
            align-items: center;
            padding: 0.375rem 1rem;
            
            > input {
                width: 120px;
                border: none;
                background: none;
                outline: none;
            }

            svg {
                width: 1rem;
                cursor: pointer;
            }
        }
        
        > span.add:focus-within {
            border: ${({ theme }) => theme.COLORS.TEXT} 1px solid;
        }
        
    }
`