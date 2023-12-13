interface SanityBody {
    _createdAt: string;
    _updatedAt: string;
    _id: string;
    _rev: string;
}

interface Image {
    _type: 'image';
    asset: {
        _ref: string;
        _type: 'reference';
    }
}
interface PageInfo extends SanityBody {
    _type: 'pageInfo';
    email: string;
    role: string;
    phoneNumber: string;
    address: string;
    alternativePhoneNumber: string;
    profileImage: Image;
    backgroundInfo: string;
    heroImage: Image;
    name: string;   
}


interface Skill extends SanityBody {
    _type: 'skill';
    image: Image;
    title: string;
}
interface Project extends SanityBody {
    _type: 'project';
    title: string;
    summary: string;
    image: Image;
    projectUrl: string;
    githubUrl: string;
    technologies: Skill[];
}

export interface Social extends SanityBody {
    _type: "social";
    title: string;
    url: string;
}

export interface Experience extends SanityBody {
    _type: "experience";
    companyName: string;
    companyImage: Image;
    isCurrent: boolean;
    dateStarted: string;
    dateEnded: string
    technologies: Skill[]
    jobTitle: string;
    description: string;
    


}

