import styled from 'styled-components'

export const Container = styled.header `
    background: ${({ theme }) => theme.COLORS.BG_HEADER};
    padding: 3.5rem 1.75rem 1.5rem;
    position: sticky;
    top: 0;
    z-index: 100;

    .menu-close {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        h1 {
            font-size: 1.3rem;

            img {
                width: 1.5rem;
            }
        }

        div.input, div.requests {
            display: none;
        }

        div.mobile-requests {
            position: relative;
            
            >p {
                position: absolute;
                top: -0.75rem;
                right: -6px;
                background-color: ${({ theme }) => theme.COLORS.BG_BUTTON};
                padding: 3px 7px;
                font-family: 'Poppins', sans-serif;
                font-size: 0.6rem;
                border-radius: 100%;
            }
        }
    }

    .menu-open {
        width: 100%;
        height: 100vh;
        background-color: ${({ theme }) => theme.COLORS.BG_BODY};
        position: absolute;
        top: 0;
        left: 0;
        display: grid;
        grid-template-rows: max-content 1fr max-content;

        > p {
            display: flex;
            gap: 6px;
            padding: 4rem 1.75rem 2rem;
            background-color: ${({ theme }) => theme.COLORS.BG_HEADER};
            font-size: 1.3rem;
            font-weight: 400;
            user-select: none;
        }

        > div.input {
            padding: 2.25rem 1.75rem 0;
            display: flex;
            flex-direction: column;
            gap: 2.25rem;

            > div.options{
                display: flex;
                flex-direction: column;
                
                > a {
                    font-family: 'Poppins', sans-serif;
                    padding: 0.625rem;
                    font-size: 1.5rem;
                    font-weight: 300;
                    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BG_TAG};
                }
            }
        }
    }

    @media (min-width:800px) {
        padding: 1.5rem;
        
        .menu-close {
            justify-content: center;
            gap: clamp(10px, 3vw, 2rem);

            h1 {
                font-size: clamp(0.75rem, 2.4vw, 1.5rem);

                img {
                    width: clamp(15px, 2.3vw, 30px);
                }
            }
        
            div.input {
                display: block;
                width: clamp(200px, 41vw, 581px);
            }

            div.requests {
                display: flex;
                align-items: center;
                gap: clamp(0.625rem, 2vw, 2rem);
            }
            
            svg.menu-icon, div.mobile-requests {
                display: none;
            }
        }
    }
`