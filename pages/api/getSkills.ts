import type { NextApiRequest, NextApiResponse, NextPageContext } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from '../../sanity'
import { Skill } from '../../typings'


const query = groq`
    *[_type == "skill"]
`

type resData = {
    skills: Skill[]
}


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<resData>,
    next: NextPageContext
) {
    const skills: Skill[] = await sanityClient.fetch(query);
    return res.status(200).json({
        skills
    })



}