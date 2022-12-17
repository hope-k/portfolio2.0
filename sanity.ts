import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url"
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

type sanityConfig = {
    projectId: string | any,
    dataset: string,
    useCdn: boolean,
    apiVersion: string
}


export const config: sanityConfig = {
    dataset : process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId : process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    useCdn : process.env.NODE_ENV === "production",
    apiVersion : "2022-12-04",
}

export const sanityClient = createClient(config);
export const urlFor = (source: SanityImageSource) => createImageUrlBuilder(config).image(source).url();