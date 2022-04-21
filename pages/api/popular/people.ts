import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        const response = await fetch(` https://api.themoviedb.org/3/person/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`)


        const data = await response.json()
        // console.log()

        res.status(200).json({ latest: data.results })
    }
    res.status(400).json("error")

}