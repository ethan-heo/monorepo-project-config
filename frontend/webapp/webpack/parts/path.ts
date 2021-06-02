import path from "path";

export const root = path.resolve(__dirname, "../../");

export const src = path.resolve(root, "src");

export const dist = path.resolve(root, "dist");

const paths = {
    root,
    src,
    dist,
};

export const combine = (target: keyof typeof paths, ...newPaths: string[]) =>
    path.resolve(paths[target], ...newPaths);
