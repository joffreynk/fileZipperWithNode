import { opendirSync } from "fs";

const dir = opendirSync("./files");

console.log(dir);
for await (const entry of dir) {
    console.log("Found file:", entry.name);
}