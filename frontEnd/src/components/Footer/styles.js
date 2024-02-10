import styled from 'styled-components'

export const Container = styled.footer `
    background: ${({ theme }) => theme.COLORS.BG_FOOTER};
    padding: 24px 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    
    h1 {
        font-size: 15px;
        color: ${({ theme }) => theme.COLORS.TEXT_FOOTER};

        img {
            width: 22px;
            filter: grayscale(100%);
        }
    }

    p {
        font-size: 12px;
        font-weight: 400;
    }
`