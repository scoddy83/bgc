const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: '65ba4794',
  dataset: 'production',
  apiVersion: '2022-03-26', // use current UTC date - see "specifying API version"!
  token: 'skZzbMwxWUGJORgo4BxLXWJQIIG2rqscmWPJiQool3f24C4eH6R1D7MB3xfFN3PYYjiDAHwo6ubCgc4uFVWCDVZROyAAjUmmOhmF3sWvne3G588L3VahRoyqLuErhyL9W1Cv9OuMkdvUIsFp3QzEhqGCZFrtWr69slzdWKNI8u7C4Y9zghfK', // or leave blank for unauthenticated usage
  useCdn: false, // `false` if you want to ensure fresh data
})

export default client