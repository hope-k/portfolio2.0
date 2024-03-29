import type { NextApiRequest, NextApiResponse, NextPageContext } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from '../../sanity'
import { Project } from '../../typings'


//sort by date created
const query = groq`
    *[_type == "project"]|order(_updatedAt desc) {
        ...,
        technologies[]->
        
    }
`

type resData = {
    projects: Project[]
} 


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<resData>,
    next: NextPageContext
) {
    const projects: Project[] = await sanityClient.fetch(query);
    return res.status(200).json({
        projects
    })



}