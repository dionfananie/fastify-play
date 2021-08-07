// Require the framework and instantiate it
// const PORT = 3000;

const fastify = require('fastify')({
    logger: true
});

fastify.register(require('./routes/items'));

export default async (req, res) => {
    await fastify.ready();
    fastify.server.emit('request', req, res);
};
