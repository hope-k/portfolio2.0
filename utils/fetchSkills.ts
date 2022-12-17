import { Skill } from "../typings";

export const fetchSkills = async () => {
    const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getSkills`).then((res) => res.json());
    const skills: Skill[] = data.skills
    return skills;
}

