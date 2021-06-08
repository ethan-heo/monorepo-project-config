/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { Button } from "ui-components";

function App() {
    return (
        <div css={fontSize}>
            hello world
            <br /> <Button>hello ui components</Button>
        </div>
    );
}

export default App;

const fontSize = css`
    font-size: 2rem;
`;
