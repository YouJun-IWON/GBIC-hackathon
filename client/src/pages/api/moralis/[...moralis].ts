import { MoralisNextApi } from '@moralisweb3/next';

export default MoralisNextApi({
  apiKey: process.env.MORALIS_API_KEY!,
  authentication: {
    domain: 'https://gbic-hackathon-incheon.vercel.app/'
      ? new URL('https://gbic-hackathon-incheon.vercel.app/').host
      : '',
    uri: 'https://gbic-hackathon-incheon.vercel.app/'!,
    timeout: 120,
  },
});
