import styled from 'styled-components/macro'
import { Subheading, Paragraph } from 'GlobalStyles';

export const AboutHeading = styled(Subheading)`
    color: var(--color-white);
    /* border-bottom: 4px solid var(--color-white); */
`

export const AboutSubheading = styled(Subheading)`
    color: var(--color-white);
    font-size: 1.3rem;
    /* border-bottom: 2px solid var(--color-white); */
`

export const AboutParagraph = styled(Paragraph)`
    color: var(--color-white);
    padding-bottom: 1rem;
    text-align: justify;
    line-height: 1.4rem;
`

export const Link = styled.a`
    /* text-decoration: none; */
    color: var(--color-white);
`
