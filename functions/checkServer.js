export async function handler(event, context) {
  try {
    const serverStatus = { server: 'legend147-Lilyvia.store', status: 'online', timestamp: Date.now() };
    return {
      statusCode: 200,
      body: JSON.stringify(serverStatus),
    };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
}
