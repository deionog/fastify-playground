import fastify from 'fastify'
import routes from './routes/routes.js';

interface IQuerystring {
  username: string;
  password: string;
}

interface IHeaders {
  'h-Custom': string;
}

interface IReply {
  200: { success: boolean };
  302: { url: string };
  '4xx': { error: string };
}


const server = fastify()
await server.register(routes);

server.get<{
  Querystring: IQuerystring;
  Headers: IHeaders;
  Reply: IReply
}>('/auth', async (request, reply) => {
  const { username, password } = request.query
  const customHeader = request.headers['h-Custom']

  reply.code(200).send({ success: true });
  // but this gives a type error
  //reply.code(200).send('uh-oh');
  // it even works for wildcards
  reply.code(404).send({ error: 'Not found' });
  return { success: true }

  /*if (username === 'admin' && password === 'secret') {
    reply.code(200)
    return { success: true }
  } else if (username === 'redirect') {
    reply.code(302)
    return { url: 'https://example.com' }
  } else {
    reply.code(400)
    return { error: 'Invalid credentials' }
  }*/
})

server.post('/convos', (request, reply) => {
  const conversations = request.body
  console.log(`Received conversations.`)
  console.log(conversations)
  reply.status(200).send({ success: true });
})

server.get('/ping', async (request, reply) => {
  return 'pong\n'
})

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})