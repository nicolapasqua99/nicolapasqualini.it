import styled from 'styled-components'

export const ButtonStyledComponent = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translate(0, 0);
    height: auto;
    width: auto;
    padding: 1.5rem 2rem;
    margin: 1rem;
    border: 2px solid var(--primary);
    outline: none;
    box-shadow: none;
    font-size: 2rem;
    font-weight: 600;
    transition: all 0.4s ease;
    border-radius: 2rem;
    background-color: var(--surface-container);
    color: var(--on-surface-variant);
    &::after {
        content: '';
        height: 0.5rem;
        width: 0%;
        position: absolute;
        margin-left: calc(50% - 4rem);
        margin-top: 2.5rem;
        background-color: var(--on-primary);
        border-radius: 0.5rem;
        transition: all 0.4s ease;
        pointer-events: none;
    }
    &:not(:disabled) {
        cursor: pointer;
    }
    &.selected {
        border-radius: 1rem;
        background-color: var(--primary);
        color: var(--on-primary);
        &::after {
            width: 70%;
            margin-left: calc(15% - 1.5rem);
        }
    }
    &:hover:not(:disabled):not(.selected) {
        border-radius: 1rem;
        background-color: var(--primary);
        color: var(--on-primary);
    }
    &:disabled {
        opacity: 0.3;
    }
`
