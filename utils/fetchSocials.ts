import axios from "axios";
import { Social } from "../typings";

export const fetchSocials = async () => {
    const {data} = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/getSocials`)
    const socials: Social[] = data.socials
    return socials;
}

