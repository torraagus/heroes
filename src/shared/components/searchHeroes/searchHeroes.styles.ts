import styled from "styled-components";
import { colors } from "../../../browser/styles/colors";

export const HomeBtn = styled.button`
    border-radius: 10px;
    border: none;
    background-color: #eee;
    color: ${colors.primary};
    font-weight: bold;
    text-transform: uppercase;
    padding: .5rem 1rem;
    font-size: 11px;
    outline: none;

    :hover {
        cursor: pointer;
        opacity: 75%;
    }

    :active {
        cursor: pointer;
        opacity: 90%;
    }
`;