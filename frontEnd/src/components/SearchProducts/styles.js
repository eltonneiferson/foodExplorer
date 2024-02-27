import styled from 'styled-components'

export const Container = styled.div `
    position: relative;
`

export const Results = styled.div `
    background: ${( { theme } ) => theme.COLORS.BG_INPUT};
    padding: .5rem;
    
    border-bottom-right-radius: .2rem;
    border-bottom-left-radius: .2rem;
    
    display: flex;
    flex-direction: column;
    gap: .5rem;
    overflow-y: scroll;
    
    position: absolute;
    width: 100%;
    max-height: 50vh;
    top: 3.4rem;
    
    > p.not-found {
        padding: 3rem;
        text-align: center;
    }
    
    > div.results {
        border-radius: .2rem;
        padding: 1rem;
        display: flex;
        gap: 1rem;
        align-items: center;
        background: ${({ theme }) => theme.COLORS.BG_CARD_ITEM};

            > img {
                border-radius: 100%;
                width: 60px;
                height: 60px;
            }
        
            > div.product {
                display: flex;
                flex-direction: column;
                gap: .3rem;
        
                > a {
                    font-family: 'Poppins', sans-serif;
                    font-weight: bold;
                }
        
                > p {
                    color: ${({ theme }) => theme.COLORS.PRICE};
                }
        
                > div.ingredients {
                    display: flex;
                    flex-wrap: wrap;
                    gap: .5rem;
        
                    > span {
                        background: ${({ theme }) => theme.COLORS.BG_TAG};
                        border-radius: 0.3rem;
                        padding: 0.25rem 0.5rem;
                        font-size: 0.875rem;
                        font-weight: 500;
                    }
                }
            }
    }

    &::-webkit-scrollbar {
        width: 3px;
    }
    
    &::-webkit-scrollbar-thumb {
        background: ${( { theme } ) => theme.COLORS.TEXT};
        border-radius: 1rem;
    }
`