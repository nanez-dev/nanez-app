import axios from 'axios';

export const sendMessage = async (text: string) => {
  const WEBHOOK_URL =
    'https://hooks.slack.com/services/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';
  const headers = {
    'Content-Type': 'application/json',
  };
  const { data } = await axios({
    method: 'POST',
    url: WEBHOOK_URL,
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
