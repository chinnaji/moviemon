import type { NextApiRequest, NextApiResponse } from "next";



export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        const response = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.API_KEY}`)
        const data = await response.json()
        // console.log()
        // const fullRes = data.results

        res.status(200).json(data.results)
    }
    res.status(200).json("ERROR")

}