import fs from "fs/promises";
export const readFile = async (path) => {
    try {
        const data = await fs.readFile(path, "utf-8");
        return JSON.parse(data);
    } catch (error) {
        return "unable to read file";
    }
}
readFile("./students.json")
    .then((data) => console.log( data))
    .catch((error) => console.log("Error",error))