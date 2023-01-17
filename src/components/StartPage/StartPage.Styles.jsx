import styled from 'styled-components/macro'
import { Subheading } from 'GlobalStyles';

export const TitleImage = styled.img`
margin: 2vh 0;
width: 50vw;

    @media (max-width: 767.98px) {
        width: 90vw;
    }
`

export const StartPageSubheading = styled(Subheading)`
@media (max-width: 767.98px) {
    margin: 0 8vw;
    }
`