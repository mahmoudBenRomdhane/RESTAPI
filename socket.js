let io;
module.exports = {
  init: (httpserveur) => {
    io = require('socket.io')(httpserveur, {
      cors: {
        origin: '*',
        methods: ['GET', 'POST'],
      },
    });
    return io;
  },
  getio: () => {
    if (!io) {
      throw new Error('socket err');
    }
    return io;
  },
};
