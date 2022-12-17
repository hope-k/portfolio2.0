import { PageInfo } from "../typings";

export const fetchPageInfo = async () => {
    const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getPageInfo`).then((res) => res.json());
    const pageInfo: PageInfo = data.pageInfo
    return pageInfo;
}

