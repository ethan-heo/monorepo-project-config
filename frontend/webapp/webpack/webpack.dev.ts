import merge from "webpack-merge";
import common from "./webpack.common";
import * as rules from "./parts/rules";
import * as plugins from "./parts/plugins";
import devServer from "./parts/devServer";

export default merge(
    { mode: "development" },
    common,
    rules.babel,
    devServer,
    plugins.html
);
