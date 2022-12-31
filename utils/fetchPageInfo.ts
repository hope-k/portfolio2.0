import axios from "axios";
import { PageInfo } from "../typings";

export const fetchPageInfo = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getPageInfo`);
    const data = await res.json();
    const pageInfo: PageInfo = data.pageInfo;
    return pageInfo;
}

