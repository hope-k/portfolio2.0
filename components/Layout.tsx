import Head from "next/head";
import dynamic from 'next/dynamic'
import { Social } from "../typings";
import Link from "next/link";
import React, {useState, useEffect} from 'react'

const Header = dynamic(() => import("./Header/index"), { ssr: false }) 

type Props = {
    children: React.ReactNode;
    title?: string;
    description?: string;
    socials: Social[]

}


const Layout = ({ children, title= 'Hope-K', description = 'Hope K', socials  }: Props) => {

    return (
        <div className="">
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Head>
            <div>
                <Header socials={socials} />
                <main>{children}</main>
          
            </div>
                <Link href='#hero' className="flex justify-center items-center">
                <div className={` flex justify-center items-center fixed bottom-4 right-4 w-6 h-6 border border-teal-400 rounded-full cursor-pointer`}>^</div>
            </Link>
      
        </div>
    );
}

export default Layout;