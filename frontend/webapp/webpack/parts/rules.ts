import { Configuration } from "webpack";

export const babel = {
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: [
                        "@babel/preset-env",
                        "@babel/preset-typescript",
                        "@babel/preset-react",
                    ],
                },
            },
        ],
    },
} as Configuration;
