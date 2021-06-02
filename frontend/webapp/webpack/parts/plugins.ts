import HtmlWebpackPlugin from "html-webpack-plugin";
import { Configuration } from "webpack";
import * as path from "./path";

export const html = {
    plugins: [
        new HtmlWebpackPlugin({
            template: path.combine("src", "index.html"),
        }),
    ],
} as Configuration;
