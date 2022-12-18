import axios from "axios";
import { Project } from "../typings";

export const fetchProjects = async () => {
    const {data} = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/getProjects`);
    const projects: Project[] = data?.projects
    return projects;
}

