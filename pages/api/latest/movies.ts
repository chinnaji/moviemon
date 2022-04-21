import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.API_KEY}&language=en-US`)
        // https://api.themoviedb.org/3/movie/latest?api_key=<<api_key>>&language=en-US

        const data = await response.json()
        // const fullRes = data.results
        // console.log()

        res.status(200).json(data.results)
    }
    else {
        res.status(400).json("ERROR 404")

    }
}