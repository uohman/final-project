import styled from 'styled-components/macro'
import { Paragraph } from 'GlobalStyles';

export const NavBarContainer = styled.div`
display: flex;
justify-content: space-between;
background-color: var(--color-black);
color: var(--color-white);
padding: 0.7rem;
`

export const Title = styled(Paragraph)`
font-size: 1.2rem;
`

export const AboutButton = styled.button`
border: none;
background: var(--color-black);
color: var(--color-white);
font-family: var(--font-primary);
font-size: 1rem;
text-transform: uppercase;
letter-spacing: 0.1rem;
`