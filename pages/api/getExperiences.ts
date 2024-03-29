import type { NextApiRequest, NextApiResponse, NextPageContext } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from '../../sanity'
import { Experience } from '../../typings'

//sort by date created
const query = groq`
    *[_type == "experience"]|order(_createdAt asc){
        ...,
        technologies[]->
    
    }
`

type resData = {
    experiences: Experience[]
} 

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<resData>,
    next: NextPageContext
) {
    const experiences: Experience[] = await sanityClient.fetch(query);
    return res.status(200).json({
        experiences
    })



}