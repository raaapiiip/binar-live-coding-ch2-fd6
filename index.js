// const test = "Hello FSW-2"

// console.log(test)

const fs = require("fs").promises;
const fsSync = require("fs");

// Membaca file dari love-letter.txt dengan const loveLetter
let loveLetter = fsSync.readFileSync("./love-letter.txt", "utf-8")

// Proses mencetak isi dari file love-letter.txt
console.log(`Ini code line 11 ${loveLetter}`)

// Membuat file baru untuk membalas surat cinta dari love-letter.txt
const replyLetter = "Aku juga sayang FSW-2!, Horeee 😂"
fsSync.writeFileSync("./reply.txt", replyLetter)

// fs.mkdir("TRY_CREATE_FOLDER", () => {})

// Rewrite isi dari file love-letter.txt
fsSync.writeFileSync("./love-letter.txt", "KETIMPA GAK CINTA KITA - PART 2?")

// Asynchronous File/Write
async function readLoveLetter() {
    try {
        const readLoveLetter = await fs.readFile("./love-letter.txt", "utf-8")
        console.log(`Ini surat cinta ${readLoveLetter}`)
    } catch (error) {
        console.log(error)
    }
}
readLoveLetter()

// Proses mencetak isi dari file reply.txt
// console.log(writeResult)

// Promises
fs.readFile("./love-letter.txt", "utf-8")
    .then((contentLoveLetter) => {
        loveLetter = contentLoveLetter
        console.log(LoveLetter)
    })
    .catch((error) => {
        console.error("Error occured: ", error)
    })

console.log(`Ini code line 30 ${loveLetter}`)