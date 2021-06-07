import "@emotion/react";

declare module "@emotion/react" {
    export interface Theme {
        color: {
            primary: string;
            secondary: string;
            warning: string;
            error: string;
        };
        font: [number, number, number, number, number, number];
        fontWeight: {
            light: string;
            normal: string;
            hard: string;
        };
    }
}
