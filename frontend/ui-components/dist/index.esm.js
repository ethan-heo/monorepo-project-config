import { jsx, css } from '@emotion/react';

/** @jsx jsx */
function Button({ children }) {
    return (jsx("button", { css: fontStyle, type: "button" }, children));
}
const fontStyle = css `
    font-size: 2rem;
`;

export { Button };
//# sourceMappingURL=index.esm.js.map
