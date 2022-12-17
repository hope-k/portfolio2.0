import type { NextApiRequest, NextApiResponse, NextPageContext } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from '../../sanity'
import { PageInfo } from '../../typings'


const query = groq`
    *[_type == "pageInfo"][0]
`

type resData = {
    pageInfo: PageInfo
} 


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<resData>,
    next: NextPageContext
) {
    try {
        const pageInfo: PageInfo = await sanityClient.fetch(query);
        return res.status(200).json({
            pageInfo
        })
        
    } catch (error) {
        console.log(error)
    }



}