import { Social } from "../typings";

export const fetchSocials = async () => {
    const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getSocials`).then((res) => res.json());
    const socials: Social[] = data.socials
    return socials;
}

