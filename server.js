const http = require("http")
const url = require("url")
const fs = require("fs")
const fsAsync = require("fs").promises

const fileMain = fs.readFileSync("./love-letter.txt", "utf-8")
console.log(fileMain)

// Express = Framework 3rd party untuk memudahkan HTTP
const server = http.createServer((req, res) => {
    console.log(req.url)
    const pathUrl = req.url

    // Default Web Server
    // localhost:3000/ = Health check, melakukan check apakah aplikasi berjalan/aktif
    // 404 = Handle URL tidak ada, salah, atau miss, HTTP status code = 404

    if (pathUrl === "/yoga") {
        res.end("INI ADALAH BAGIAN YOGA")
    } else if (pathUrl === "/") {
        res.end("Hello - Tim 3")
    } else if (pathUrl === "/rafif") {
        console.log("Original data dari love-letter.txt = " + fileMain)
        async function rewriteFromRafif(filepath, content) {
            try {
                await fsAsync.writeFile(filepath, content)
                console.log("Sukses menulis ulang file")
                const resultRewrite = await fsAsync.readFile(filepath, "utf-8")
                res.end(resultRewrite)
            } catch (error) {
                console.log(error)
            }
        }
        rewriteFromRafif("./love-letter.txt", "INI ADALAH BAGIAN RAFIF")
    } else {
        res.end("TIDAK ADA DATA YANG TERSEDIA | Status Code : 404")
    }
})

server.listen(3000, '127.0.0.1', () => {
    console.log('Aplikasi ini run di dalam port 3000 (local host)')
})