import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        const response = await fetch(` https://api.themoviedb.org/3/person/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`)
        const data = await response.json()
        // console.log()
        // const fullRes = data.results

        res.status(200).json(data.results)
    }
    else {
        res.status(400).json("ERROR 404")

    }
}