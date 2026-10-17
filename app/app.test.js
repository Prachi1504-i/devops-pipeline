const test = require('node:test');
const assert = require('node:assert');
const app = require('./app');

test('GET / returns hello', async () => {
  const server = app.listen(0);
  const { port } = server.address();
  const res = await fetch(`http://localhost:${port}/`);
  assert.match(await res.text(), /Hello/);
  server.close();
});
