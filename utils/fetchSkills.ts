import axios from "axios";
import { Skill } from "../typings";

export const fetchSkills = async () => {
    const {data} = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/getSkills`)
    const skills: Skill[] = data?.skills
    return skills;
}

