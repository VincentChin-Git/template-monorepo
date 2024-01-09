// backend
// -- .env.backend
// -- src
// -- package.json (backend)
// packages
// -- all @packages required
// package.json (root)
// pnpm-lock.yaml
// pnpm workspace.yaml
// workflows: put all files and folders required according to the structure above

import path from "path";
import { execSync } from "child_process";
import fs from "fs";

const rootDir = path.resolve(process.cwd());
const distDir = path.resolve(rootDir, "./dist");
const backendDir = path.resolve(rootDir, "./backend");
const packageRootDir = path.resolve(rootDir, "./packages");

const backendPackageFile = fs.readFileSync(
  path.resolve(rootDir, "./backend/package.json"),
  "utf-8"
);
const packageFile = JSON.parse(backendPackageFile);
const { dependencies } = packageFile;

const packages = Object.keys(dependencies).filter((item) =>
  item.startsWith("@packages")
);

execSync(`pnpm --prod install`); // install
execSync(`cd backend && pnpm run build && cd ..`); // build
fs.copyFileSync(
  path.resolve(backendDir, "./package.json"),
  path.resolve(distDir, "./backend/package.json")
);
fs.copyFileSync(
  path.resolve(backendDir, ".env.local"),
  path.resolve(distDir, "./backend/.env.local")
);

for (const pkg of packages) {
  const pkgName = pkg.replace("@packages/", "");
  const pkgDir = path.resolve(packageRootDir, pkgName);
  execSync(`cd ${pkgDir} && pnpm run tsc`); // build each package
  fs.copyFileSync(
    path.resolve(pkgDir, "./package.json"),
    path.resolve(distDir, "packages", pkgName, "package.json")
  );
}

for (const file of ["package.json", "pnpm-lock.yaml", "pnpm-workspace.yaml"]) {
  fs.copyFileSync(path.resolve(rootDir, file), path.resolve(distDir, file));
}
