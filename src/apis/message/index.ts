import axios, { Method } from 'axios';
import REQUEST_URL from '../../constants/requestUrl';

export const postSlackMessage = async (text: string) => {
  const headers = {
    'Content-Type': 'application/json',
  };
  const { data } = await axios({
    method: 'POST' as Method,
    url: REQUEST_URL.WEBHOOK_URL,
    headers,
    data: {
      blocks: [
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text,
          },
        },
      ],
    },
  });
  return data;
};
