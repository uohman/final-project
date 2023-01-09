import styled from 'styled-components/macro'

export const ClueContainer = styled.section`
    //outline: 2px solid red;
    /* background: rgb(64, 49, 245, 0.85); */
    /* background: rgb(239,211,219,0.85); */
    background: rgb(255,255,255,0.75);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 2rem;
    margin-top: 3vh;
    width: 40vw;
    /* border-radius: 15px; */
    position: fixed;
    bottom: 7rem;
    right: 2rem;
    z-index: 2;
    border: 1px solid var(--color-secondary);
    box-shadow: 7px 7px var(--color-secondary);
`