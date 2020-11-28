import {serve} from "https://deno.land/std@0.77.0/http/server.ts";

const s = serve({ port: 8000 })
console.log("running on port 8000")

let student= {
    id : 123,
    name : "john",
    age : 23
}
for await (const req of s) {
    let now = Date.now()
    req.respond({ body: JSON.stringify(student)})
    console.log(req.headers)
}