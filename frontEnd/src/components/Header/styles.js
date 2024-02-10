import styled from 'styled-components'

export const Container = styled.header `
    background: ${({ theme }) => theme.COLORS.BG_HEADER};
    padding: 56px 28px 24px;
    position: sticky;
    top: 0;
    z-index: 100;

    .menu-close {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        h1 {
            font-size: 22px;

            img {
                width: 24px;
            }
        }

        div.input, div.requests {
            display: none;
        }

        div.mobile-requests {
            position: relative;
            
            >p {
                position: absolute;
                top: -12px;
                right: -6px;
                background-color: ${({ theme }) => theme.COLORS.BG_BUTTON};
                padding: 3px 7px;
                font-family: 'Poppins', sans-serif;
                font-size: 10px;
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
            padding: 64px 28px 32px;
            background-color: ${({ theme }) => theme.COLORS.BG_HEADER};
            font-size: 1.3rem;
            font-weight: 400;
            user-select: none;
        }

        > div.input {
            padding: 36px 28px 0;
            display: flex;
            flex-direction: column;
            gap: 2.25rem;

            > div.options{
                display: flex;
                flex-direction: column;
                
                > a {
                    font-family: 'Poppins', sans-serif;
                    padding: 10px;
                    font-size: 1.5rem;
                    font-weight: 300;
                    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BG_TAG};
                }
            }

        }
    }

    @media (min-width:768px) {
        padding: 24px;
        
        .menu-close {
            justify-content: center;
            gap: clamp(10px, 3vw, 32px);

            h1 {
                font-size: clamp(12px, 2.4vw, 24px);

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
                gap: clamp(10px, 2vw, 32px);
            }
            
            svg.menu-icon, div.mobile-requests {
                display: none;
            }
        }
    }
`