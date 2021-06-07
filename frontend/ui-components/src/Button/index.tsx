/** @jsx jsx */
import { css, jsx } from "@emotion/react";

type Props = {
    children: React.ReactNode;
};

function Button({ children }: Props) {
    return (
        <button css={fontStyle} type="button">
            {children}
        </button>
    );
}

export default Button;

const fontStyle = css`
    font-size: 2rem;
`;
