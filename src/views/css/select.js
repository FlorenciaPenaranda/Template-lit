/** @format */

import { css } from "lit";

export const select = css`
    select {
        outline: 0;
        box-shadow: none;
        border: none;
        border: 1px solid var(--ligth-border-color);
        background-image: none;
        background-color: var(--white-application-color);
    }

    select::-ms-expand {
        display: none;
    }

    .select {
        display: grid;
        grid-gap: 0.1rem;
        grid-template-rows: 1fr auto 1fr;
        font-family: inherit;
    }

    select {
        box-sizing: border-box;
        width: 100%;
        padding: 0.5rem;
        height: 2.5rem;
        color: var(--primary-color);
        cursor: pointer;
        font-size: var(--font-bajada-size);
        font-weight: var(--font-bajada-weight);
        border-radius: 5px;
    }
    .select[dark] select {
        color: var(--white-application-color);
        background-color: var(--primary-color);
    }
    .select[dark] select option {
        color: var(--white-application-color);
        background-color: var(--primary-color);
    }
    option {
        color: var(--primary-color);
        padding: 0rem;
        font-size: var(--font-bajada-size);
        font-weight: var(--font-bajada-weight);
        font-family: inherit;
    }

    .select:hover::after {
        color: var(--color-celeste);
    }

    .select label {
        font-size: var(--font-label-size);
        font-weight: var(--font-label-weight);
        color: var(--primary-color);
    }
    .select[dark] label {
        color: var(--primary-color);
    }
`;
