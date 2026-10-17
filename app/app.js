const express = require('express');
const client = require('prom-client');
const app = express();

const requests = new client.Counter({
  name: 'http_requests_total',
  help: 'Total HTTP requests',
  labelNames: ['status'],
});

app.get('/', (req, res) => {
  requests.inc({ status: 200 });
  res.send('Hello from the DevOps pipeline v2');
});

app.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.end(await client.register.metrics());
});

if (require.main === module) {
  client.collectDefaultMetrics();
  app.listen(3000, () => console.log('App listening on port 3000'));
}

module.exports = app;
