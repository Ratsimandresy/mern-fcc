import dotenv from "dotenv"

import express from "express"

import cors from "cors"

dotenv.config()

const app = express()

app.use(express.json())

app.use(cors())

app.get("/", (req,res) => {
	res.json({message: "working"})
})

app.listen(process.env.PORT, ()=> {
	console.log(`server running on: http://localhost:${process.env.PORT}`)
})
