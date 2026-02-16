import {readFile} from "./readandwritefile.js"

const readfiledata = async (path) => {
    try {
        const filedata = await readFile(path);
        console.log(filedata);
    } catch (error) {
        console.log("Error", error);
    }
}
readfiledata("./students.json");