import axios from 'axios';
/* import type { NextApiRequest, NextApiResponse } from 'next'; */

function getRequestParams(email: string) {
  // get env variables
  const API_KEY = process.env.MAILCHIMP_API_KEY;
  const LIST_ID = process.env.MAILCHIMP_LIST_ID;
  const DATACENTER = process.env.MAILCHIMP_API_SERVER;

  const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`;

  // Add additional params here. See full list of available params:
  // https://mailchimp.com/developer/reference/lists/list-members/
  const data = {
    email_address: email,
    status: 'subscribed',
  };

  // Api key needs to be encoded in base 64 format
  const base64ApiKey = Buffer.from(`anystring:${API_KEY}`).toString('base64');
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Basic ${base64ApiKey}`,
  };

  return {
    url,
    data,
    headers,
  };
}

export async function POST(req: Request) {
  if (req.method === 'POST') {
    try {
      const body = await req.json();
      const { email } = body;
      /*       const { email } = await req.body; */

      if (!email || !email.length) {
        /*  return res.status(400).send('Forgot to add your email?'); */
        return new Response();
      }

      const { url, data, headers } = getRequestParams(email);

      await axios.post(url, data, { headers });

      /*  return res.status(201).send('Subscribed'); */
      return new Response();
    } catch (error) {
      /* return res
        .status(400)
        .send(
          'Oops, something went wrong... Send us an email at info@vanguardproperty.com and we will add you to the list.'
        ); */
      return new Response();
      // Report error to Sentry or whatever
    }
  } else {
    /*  return res.status(405).send('Method not allowed'); */
    return new Response();
  }
}
