import { Project } from "../typings";

export const fetchProjects = async () => {
    const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getProjects`).then((res) => res.json());
    const projects: Project[] = data.projects
    return projects;
}

