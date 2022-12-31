
import About from '../components/About'
import Contact from '../components/Contact'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import { Experience, PageInfo, Project, Skill, Social } from '../typings'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchSocials } from '../utils/fetchSocials'
import { fetchExperiences } from '../utils/fetchExperience'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import Link from 'next/link'
import React from 'react'


type Props = {
  pageInfo: PageInfo;
  experience: Experience[];
  projects: Project[];
  socials: Social[];
  skills: Skill[];
}

const Home = ({ pageInfo, experience, projects, socials, skills }: Props) => {
  return (
    <div className=' scrollbar-thumb-[teal]/80 scrollbar-thin scrollbar-track-gray-400/20 bg-[rgb(36,36,36)] h-screen text-white w-full snap-y snap-mandatory overflow-scroll z-0'>
      <Layout socials={socials}>
        <Hero pageInfo={pageInfo} />
        <About pageInfo={pageInfo} />
        {/*<WorkExperience experience={experience}/> */}
        <Skills skills={skills} />
        <Projects projects={projects} />
        <Contact pageInfo={pageInfo} />

        <Link href='#hero' className="flex justify-center items-center">
          <div className="flex justify-center items-center fixed bottom-2 w-7 h-8 border rounded-full cursor-pointer">^</div>
        </Link>
      </Layout>
    </div>
  )
}

export default Home

export async function getStaticProps() {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const socials: Social[] = await fetchSocials();
  const projects: Project[] = await fetchProjects();
  const skills: Skill[] = await fetchSkills();

  return {
    props: {
      pageInfo,
      experiences,
      socials,
      projects,
      skills

    },
    revalidate: 10
  }
}
