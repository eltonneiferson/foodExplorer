import styled from 'styled-components'

export const Carousel = styled.div `   
    width: clamp(400px, 90vw, 1122px);
    margin: 0 auto;
    
    h1 {
        font-family: 'Poppins', sans-serif;
        font-size: clamp(18px, 3vw, 32px);
        font-weight: 500;
        margin-bottom: 1.5rem;
    }

    .swiper-button-prev, .swiper-button-next {
        display: none;
    }

    @media (min-width: 768px) {
        
        .swiper-button-prev, .swiper-button-next {
            display: flex;
            top: 0;
            height: 100%;
            color: ${({ theme }) => theme.COLORS.TEXT};
        }
        
        .swiper-button-prev {
            width: 290px;
            background: linear-gradient(-90deg, rgba(0, 10, 15, 0.37) 0%, #000A0F 100%);
            justify-content: start;
            left: 0;
        }

        .swiper-button-next {
            width: 140px;
            background: linear-gradient(90deg, rgba(0, 10, 15, 0.27) 0%, #000A0F 100%);
            right: 0;
            justify-content: end;
        }
    }
`