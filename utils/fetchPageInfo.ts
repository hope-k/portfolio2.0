import axios from "axios";
import { PageInfo } from "../typings";

export const fetchPageInfo = async () => {
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/getPageInfo`)
    const pageInfo: PageInfo = data?.pageInfo
    return pageInfo;
}

