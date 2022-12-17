import type { NextApiRequest, NextApiResponse, NextPageContext } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from '../../sanity'
import { Social } from '../../typings'


const query = groq`
    *[_type == "social"]
`

type resData = {
    socials: Social[]
}


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<resData>,
    next: NextPageContext
) {
    const socials: Social[] = await sanityClient.fetch(query);
    return res.status(200).json({
        socials
    })



}