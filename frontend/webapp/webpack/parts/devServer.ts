import * as path from "./path";
import { Configuration } from "webpack";

export default {
    devServer: {
        port: 3010,
        contentBase: path.dist,
        historyApiFallback: true,
        open: true,
        publicPath: "/",
    },
} as Configuration;
