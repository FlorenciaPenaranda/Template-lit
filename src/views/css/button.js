/** @format */

import { css } from "lit";

export const button = css`
    button[btn1] {
        display: grid;
        grid-auto-flow: column;
        align-items: center;
        grid-gap: 0.3rem;
        cursor: pointer;
        color: var(--light-application-color);
        fill: var(--secondary-color);
        stroke: var(--secondary-color);
        background-color: var(--primary-color);
        font-size: var(--font-bajada-size);
        font-weight: var(--font-bajada-weight);
        border-radius: 0.4rem;
        padding: 0.5rem;
        box-shadow: 0 3px 6px 0 var(--orange-5);
        transition-duration: 0.4s;
        text-decoration: none;
        border: none;
        outline: none;
    }
    button:not([disabled])[btn1]:hover {
        background-color: var(--secondary-color);
    }
    button[btn1]:active {
        background-color: var(--secondary-color);
        box-shadow: 0.2rem var(--secondary-color);
        transform: translateY(0.2rem);
    }
    button[btn1][disabled] {
        opacity: 0.8;
        background-color: var(--primary-color);
        cursor: not-allowed;
        pointer-events: none;
    }

    button[btn2] {
        display: grid;
        grid-auto-flow: column;
        align-items: center;
        grid-gap: 0.3rem;
        cursor: pointer;
        color: var(--secondary-color);
        fill: var(--secondary-color);
        stroke: var(--secondary-color);
        background-color: transparent;
        font-size: var(--font-bajada-size);
        font-weight: var(--font-bajada-weight);
        border-radius: 0.4rem;
        padding: 0.5rem;
        box-shadow: 0 3px 6px 0 var(--orange-5);
        transition-duration: 0.4s;
        text-decoration-line: underline;
        text-decoration-style: solid;
        border: none;
        outline: none;
    }
    button:not([disabled])[btn2]:hover {
        color: var(--secondary-color);
    }
    button[btn2]:active {
        color: var(--secondary-color);
        transform: translateY(0.2rem);
    }
    button[btn2][disabled] {
        opacity: 0.8;
        color: var(--color-gris);
        cursor: not-allowed;
        pointer-events: none;
    }

    button[btn3] {
        display: grid;
        grid-auto-flow: column;
        align-items: center;
        grid-gap: 0.3rem;
        cursor: pointer;
        color: var(--secondary-color);
        background-color: transparent;
        font-size: var(--font-bajada-size);
        font-weight: var(--font-bajada-weight);
        border-radius: 0.4rem;
        border: 1px solid var(--secondary-color);
        padding: 0.5rem;
        box-shadow: 0 3px 6px 0 var(--orange-5);
        transition-duration: 0.4s;
        text-decoration: none;
        outline: none;
    }
    button:not([disabled])[btn3]:hover {
        background-color: var(--secondary-color);
        color: var(--white-application-color);
        fill: var(--white-application-color);
        stroke: var(--white-application-color);
    }
    button[btn3]:active {
        background-color: var(--dark-text-color);
        box-shadow: 0.2rem var(--secondary-color);
        transform: translateY(0.2rem);
    }
    button[btn3][disabled] {
        opacity: 0.8;
        background-color: var(--color-gris);
        cursor: not-allowed;
        pointer-events: none;
    }
    button[btn4] {
        display: grid;
        grid-auto-flow: column;
        align-items: center;
        grid-gap: 0.1rem;
        cursor: pointer;
        color: var(--secondary-color);
        fill: var(--secondary-color);
        stroke: var(--secondary-color);
        background-color: transparent;
        font-size: var(--font-bajada-size);
        font-weight: var(--font-bajada-weight);
        border-radius: 50%;
        padding: 0.1rem;
        box-shadow: 0 3px 6px 0 var(--orange-5);
        transition-duration: 0.4s;
        text-decoration-line: underline;
        text-decoration-style: solid;
        border: none;
        outline: none;
    }
`;

/*export const button = css`
    button[btn1] {
        display: grid;
        grid-auto-flow: column;
        align-items: center;
        grid-gap: 0.3rem;
        cursor: pointer;
        color: var(--light-text-color);
        fill: var(--primary-color);
        stroke: var(--primary-color);
        background-color: var(--primary-color);
        font-size: var(--font-bajada-size);
        font-weight: var(--font-bajada-weight);
        border-radius: 0.4rem;
        padding: 0.5rem;
        box-shadow: 0 3px 6px 0 var(--primary-color);
        transition-duration: 0.4s;
        text-decoration: none;
        border: none;
        outline: none;
    }
    button:not([disabled])[btn1]:hover {
        background-color: var(--secondary-color);
    }
    button[btn1]:active {
        background-color: var(--primary-color);
        box-shadow: 0.2rem var(--secondary-color);
        transform: translateY(0.2rem);
    }
    button[btn1][disabled] {
        opacity: 0.8;
        background-color: var(--ligth-border-color);
        color: var(--dark-application-color);
        cursor: not-allowed;
        pointer-events: none;
    }

    button[btn2] {
        display: grid;
        grid-auto-flow: column;
        align-items: center;
        grid-gap: 0.3rem;
        cursor: pointer;
        color: var(--primary-color);
        fill: var(--primary-color);
        stroke: var(--primary-color);
        background-color: transparent;
        font-size: var(--font-bajada-size);
        font-weight: var(--font-bajada-weight);
        border-radius: 0.4rem;
        padding: 0.5rem;
        box-shadow: 0 3px 6px 0 var(--primary-color);
        transition-duration: 0.4s;
        text-decoration-line: underline;
        text-decoration-style: solid;
        border: none;
        outline: none;
    }
    button:not([disabled])[btn2]:hover {
        color: var(--primary-color);
    }
    button[btn2]:active {
        color: var(--primary-color);
        transform: translateY(0.2rem);
    }
    button[btn2][disabled] {
        opacity: 0.8;
        color: var(--ligth-border-color);
        cursor: not-allowed;
        pointer-events: none;
    }

    button[btn3] {
        display: grid;
        grid-auto-flow: column;
        align-items: center;
        grid-gap: 0.3rem;
        cursor: pointer;
        color: var(--primary-color);
        background-color: transparent;
        font-size: var(--font-bajada-size);
        font-weight: var(--font-bajada-weight);
        border-radius: 0.4rem;
        border: 1px solid var(--primary-color);
        padding: 0.5rem;
        box-shadow: 0 3px 6px 0 var(--primary-color);
        transition-duration: 0.4s;
        text-decoration: none;
        outline: none;
    }
    button:not([disabled])[btn3]:hover {
        background-color: var(--ligth-border-color);
    }
    button[btn3]:active {
        background-color: var(--color-negro);
        box-shadow: 0.2rem var(--ligth-border-color);
        transform: translateY(0.2rem);
    }
    button[btn3][disabled] {
        opacity: 0.8;
        background-color: var(--ligth-border-color);
        cursor: not-allowed;
        pointer-events: none;
    }
    button[btn4] {
        display: grid;
        grid-auto-flow: column;
        align-items: center;
        grid-gap: 0.1rem;
        cursor: pointer;
        color: var(--primary-color);
        fill: var(--primary-color);
        stroke: var(--primary-color);
        background-color: transparent;
        font-size: var(--font-bajada-size);
        font-weight: var(--font-bajada-weight);
        border-radius: 50%;
        padding: 0.1rem;
        box-shadow: 0 3px 6px 0 var(--primary-color);
        transition-duration: 0.4s;
        text-decoration-line: underline;
        text-decoration-style: solid;
        border: none;
        outline: none;
    }
`;*/
