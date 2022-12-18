import axios from "axios";
import { Experience } from "../typings";

export const fetchExperiences = async () => {
    const {data} = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/getExperiences`)
    const experiences: Experience[] = data?.experiences
    return experiences;
}

