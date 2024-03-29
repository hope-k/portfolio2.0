import Head from "next/head";
import dynamic from 'next/dynamic'
import { Social } from "../typings";
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
   
      
        </div>
    );
}

export default Layout;