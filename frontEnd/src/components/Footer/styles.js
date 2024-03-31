import styled from 'styled-components'

export const Container = styled.footer `
    background: ${({ theme }) => theme.COLORS.BG_FOOTER};
    padding: 1.5rem 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    
    h1 {
        font-size: 0.9rem;
        color: ${({ theme }) => theme.COLORS.TEXT_FOOTER};

        img {
            width: 1.3rem;
            filter: grayscale(100%);
        }
    }

    p {
        font-size: 0.75rem;
        font-weight: 400;
    }
`