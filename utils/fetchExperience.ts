import { Experience } from "../typings";

export const fetchExperiences = async () => {
    const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getExperiences`).then((res) => res.json());
    const experiences: Experience[] = data.experiences
    return experiences;
}

