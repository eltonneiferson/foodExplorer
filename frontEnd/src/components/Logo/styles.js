import styled from 'styled-components'

export const Container = styled.h1 `
    display: flex;
    align-items: center;
    gap: 0.6rem;
    font-size: clamp(2rem, 3vw, 2.7rem);
    font-weight: 700;
    line-height: normal;
    color: ${({ theme }) => theme.COLORS.TITLE};
    user-select: none;

    img {
        width: clamp(2.6rem, 3vw, 3.0rem);
    }

    span {
        font-size: 0.75rem;
        color: ${({ theme }) => theme.COLORS.PRICE};
        font-weight: normal;
    }
`