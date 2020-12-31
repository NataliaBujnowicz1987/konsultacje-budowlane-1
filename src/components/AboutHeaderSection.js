import styled from 'styled-components';
import {StyledHeader, StyledHeaderAnimation, StyledHeaderDetails} from '../styles';

// images
import logoSVG from '../assets/logo.svg';

const AboutHeaderSection= () => {
    return(
        <StyledHeader>
            <StyledHeaderAnimation>
                <img src={logoSVG} alt='logo' />
            </StyledHeaderAnimation>
            <StyledHeaderDetailsNoFlex>
                <h1>Nasza historia</h1>
                <p>Jesteśmy trzecim pokoleniem zajmującym się budownictwem. Nasz dziadek był przedwojennym majstrem budowlanym. Po wojnie był odpowiedzialny za odbudowę naszego rodzinnego miasteczka na Mazurach. W tym okresie doświadczenie zaczął zdobywać nasz ojciec, który w 1964 roku otworzył własną firmę budowlaną.</p>
            </StyledHeaderDetailsNoFlex>
        </StyledHeader>
    )
};

const StyledHeaderDetailsNoFlex = styled(StyledHeaderDetails)`
    display: inline-block;
    h1 {
        margin-bottom: 1.6em;
    }
    p {
        line-height: 2em;
        letter-spacing: 0.07em;
    }
    @media (max-width: 800px) and (orientation: portrait) {
        h1 {
            margin-bottom: 1.2em;
        }
        p {
            font-size: 3vw;
            line-height: 1.7em;
        }
    }
`;

 export default AboutHeaderSection;