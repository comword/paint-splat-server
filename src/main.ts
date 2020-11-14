import { Server, ServerCredentials } from '@grpc/grpc-js';
import { logger } from './utils';

import { Greeter, GreeterService } from './services/Greeter';

let port = 9090;
// if (process.env.NODE_APP_INSTANCE) {
//   port += Number(process.env.NODE_APP_INSTANCE);
// }

const server: Server = new Server({
  'grpc.max_receive_message_length': -1,
  'grpc.max_send_message_length': -1,
});

// @ts-ignore
server.addService(GreeterService, new Greeter());

server.bindAsync(`[::]:${port}`, ServerCredentials.createInsecure(), (err, port) => {
  if (err) {
      throw err;
  }
  server.start();
  logger.info('gRPC:Server', new Date().toLocaleString());
});
