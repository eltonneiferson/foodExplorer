import styled from 'styled-components'

export const Container = styled.div `
    width: clamp(210px, 35vw, 304px);
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    background: ${({ theme }) => theme.COLORS.BG_CARD_ITEM};
    border: 1px solid ${({ theme }) => theme.COLORS.BORDER_CARD_ITEM};
    border-radius: 8px;
    position: relative;

    display: grid;
    place-items: center;
    gap: 0.75rem;

    .icon {
        cursor: pointer;
        position: absolute;
        right: 1rem;
        top: 1rem;
    }
    
    img {
        width: clamp(88px, 18vw, 176px);
    }

    a {
        display: flex;
        align-items: center;
        font-family: 'Poppins', sans-serif;
        font-size: clamp(14px, 2vw, 24px);
        font-weight: 500;
        text-align: center;
    }

    p {
        color: ${({ theme }) => theme.COLORS.PRICE};
        font-size: clamp(16px, 3vw, 32px);
    }

    div.buttons {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;

        > div {
            display: flex;
            align-items: center;
            gap: 14px;
        }
    }

    @media (min-width: 768px) {
        height: 462px;

        div.buttons {
            flex-direction: row;
        }
    }
`