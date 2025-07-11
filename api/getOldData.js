const axios = require('axios');

export default async function handler(req, res) {
  const { userId, key } = req.query;

  // 🔒 Replace with your secret key to secure this endpoint
  if (key !== 'APIKEY') {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  // 🔧 Replace with your actual info:
  const universeId = '7141208084';
  const apiKey = 'FcEJ1VIOX0iAOeDWj6G84i3KNJbMJWyKUV0VNjaaqXFWBfjdZXlKaGJHY2lPaUpTVXpJMU5pSXNJbXRwWkNJNkluTnBaeTB5TURJeExUQTNMVEV6VkRFNE9qVXhPalE1V2lJc0luUjVjQ0k2SWtwWFZDSjkuZXlKaVlYTmxRWEJwUzJWNUlqb2lSbU5GU2pGV1NVOVlNR2xCVDJWRVYybzJSemcwYVROTFRrcGlUVXBYZVV0VlZqQldUbXBoWVhGWVJsZENabXBrSWl3aWIzZHVaWEpKWkNJNklqUTNOalF5TmpjNE5ESWlMQ0poZFdRaU9pSlNiMkpzYjNoSmJuUmxjbTVoYkNJc0ltbHpjeUk2SWtOc2IzVmtRWFYwYUdWdWRHbGpZWFJwYjI1VFpYSjJhV05sSWl3aVpYaHdJam94TnpVeE9UTTNNamN3TENKcFlYUWlPakUzTlRFNU16TTJOekFzSW01aVppSTZNVGMxTVRrek16WTNNSDAubW11RUxFQVl2SlpaM2hJWUJOZC0xNEVEaU9sMEFLT0kxSEd4QnNYdVg5OHJ6U21LQjVWT0pPZjV3THhZVTNmang0Yzhnel9odFlFM0t4al9uY21iOUktd0t2aGk3YVZJQjJpSUhaZXJRVGV6cGh2Vl96dW0yZ0NSemx6WENTa0FSdFlMeGdoUmVma0VsMzM2NURhbXhyZ0R3SnBQLUh3cGY3TzU3N2pvSGJvaXBoTkdobDV1TGxHRWFnVTJzUzBsYWlKYnU4SXZJSFF2MElLeXhVRVFLelVqTkJER1ExYjNvbV85Q3Q0X1VUQVFKMFpNd1ZZbElVQ3hWUll1MGtVSXU1WF9kVHBxS29aU3pnLTN3cEVlQ3ZTcHlLX3hYZ1FmaHdhTkRqWFNLMl9vZFVISFN5OWh6UTZGQ3VsZkhTaGJCRUQ2b1gtY1MyLVA0RXE5SXZQMV93';
  const entryKey = `Player_${userId}`;
  const url = `https://apis.roproxy.com/datastores/v1/universes/${universeId}/standard-datastores/datastore/entries/entry?datastoreName=DataStore&entryKey=${entryKey}`;

  try {
    const response = await axios.get(url, {
      headers: {
        'x-api-key': apiKey,
      },
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error('Failed to fetch data:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to fetch old data' });
  }
}
