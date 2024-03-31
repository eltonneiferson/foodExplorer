import styled from 'styled-components'

export const Container = styled.div `
    width: clamp(210px, 35vw, 304px);
    min-height: 292px;
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    background: ${({ theme }) => theme.COLORS.BG_CARD_ITEM};
    border: 1px solid ${({ theme }) => theme.COLORS.BORDER_CARD_ITEM};
    border-radius: 0.5rem;
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;

    .icon {
        position: absolute;
        right: 1rem;
        top: 1rem;
        
        &:hover {
            fill: ${({ theme }) => theme.COLORS.BG_BUTTON};
            stroke: ${({ theme }) => theme.COLORS.BG_BUTTON};
        }
        
    }
    
    .favorite {
        fill: ${({ theme }) => theme.COLORS.BG_BUTTON};
        stroke: ${({ theme }) => theme.COLORS.BG_BUTTON};
    }
    
    img {
        width: clamp(88px, 18vw, 176px);
        height: clamp(88px, 18vw, 176px);
        border-radius: 100%;
    }

    a {
        display: flex;
        align-items: center;
        font-family: 'Poppins', sans-serif;
        font-size: clamp(0.875rem, 2vw, 1.5rem);
        font-weight: 500;
        text-align: center;
    }

    p.description {
        display: none;
    }

    p.price {
        color: ${({ theme }) => theme.COLORS.PRICE};
        font-size: clamp(1rem, 3vw, 2rem);
    }

    div.buttons {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }

    @media (min-width: 768px) {
        height: 462px;

        p.description {
            display: block;
            font-size: 0.875rem;
            text-align: center;
        }

        div.buttons {
            flex-direction: row;
        }
    }
`