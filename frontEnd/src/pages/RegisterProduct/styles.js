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
                    gap: 8px;
                    border-radius: 8px;
    
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
                position: relative;
                
                > select {
                    background-color: ${( { theme } ) => theme.COLORS.BG_INPUT};
                    font-family: 'Roboto', sans-serif;
                    font-family: .9rem;
                    padding: 1rem;
                    border: none;
                    border-radius: 8px;
                    resize: none;
                    cursor: pointer;
                    appearance: none;
                    -webkit-appearance: none;
                    -moz-appearance: none;
                }

                > label {
                    color: ${( { theme } ) => theme.COLORS.LABEL};
                }
                
                > svg {
                    cursor: pointer;
                    position: absolute;
                    bottom: 0.75rem;
                    right: 1rem;
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
                border-radius: 8px;
                resize: none;
            }
        }

        @media (min-width: 975px) {
            margin: 1.5rem auto;

            > div.first-section {
                grid-template-columns: 1fr 1fr 1fr;
            }

            > div.second-section {
                grid-template-columns: 1fr 16rem;
            }

            > button {
                width: max-content;
                justify-self: end;
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
        padding: 8px;
        border-radius: 8px;
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;

        > button.remove {
            border: none;
            background: ${({ theme }) => theme.COLORS.BG_TAG_INPUT};
            padding: 0.2rem 1rem;
            border-radius: 8px;
            display: flex;
            align-items: center;
            gap: 5px;
            
            svg {
                cursor: pointer;
                width: 1rem;
                display: flex;
            }
        }

        > span.add {
            background: none;
            border: dashed 1px;
            border-radius: 8px;
            display: flex;
            align-items: center;
            padding: 0.2rem 1rem;
            
            > input {
                width: 5rem;
                border: none;
                background: none;
                outline: none;
            }

            svg {
                cursor: pointer;
                width: 1rem;
                display: flex;
            }
        }
        
        > span.add:focus-within {
            border: ${({ theme }) => theme.COLORS.TEXT} 1px solid;
        }
        
    }
`