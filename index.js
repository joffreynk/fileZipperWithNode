import fs, { opendirSync } from "fs";
import JSZip  from 'jszip';

const dir = opendirSync("./files");
const zip = new JSZip();

try {
  for await (const entry of dir) {
    zip.file(entry.name, fs.readFileSync('./files/' + entry.name));
  }
  
  zip.generateNodeStream({ type: 'nodebuffer', streamFiles: true })
  .pipe(fs.createWriteStream('files.zip'))
  .on('finish', function () {
      console.log("files.zip written.");
  });
} catch (error) {
  console.log(error);
}