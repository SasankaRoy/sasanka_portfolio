import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId:'ewi7fthw',
    dataset:'production',
    apiVersion:'2022-05-23',
    useCdn:true,
    token:'sk8ohTtxqeABTbC2JR8Dyotq6p9MpriJvF8OXABsbcIeRFDZ5f08Bc1avBnkhoZsoyjXH4apHF2ULbCLRpGMZdRd0PpCPWCWtfUhD92FPbo7LXid83nc7bxkhFpuhEwcTwQM7Zaw5DHLeyY2Y0J98MIZv773966GJSebDSHUXq2DbeWaN4eJ',
    ignoreBrowserTokenWarning: true,
});

const builder = imageUrlBuilder(client);
export const urlFor = (source)=>builder.image(source);