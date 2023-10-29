import { MoralisNextApi } from '@moralisweb3/next';

export default MoralisNextApi({
  apiKey: process.env.MORALIS_API_KEY!,
  authentication: {
    domain: 'https://gbic-hackathon.vercel.app',
    uri: 'https://gbic-hackathon.vercel.app',
    timeout: 120,
  },
});
