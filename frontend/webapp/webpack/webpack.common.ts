import merge from "webpack-merge";
import { Configuration } from "webpack";
import * as path from "./parts/path";

export default merge<Configuration>({
    entry: path.src,
    output: {
        filename: "bundle.js",
        path: path.dist,
    },
    resolve: {
        extensions: [".js", ".ts", ".tsx"],
    },
});
