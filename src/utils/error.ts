import { Metadata, ServiceError as grpcServiceError, status } from '@grpc/grpc-js';

/**
 * https://grpc.io/grpc/node/grpc.html#~ServiceError__anchor
 */
export class ServiceError implements grpcServiceError {
  public name: string = 'ServiceError';

  constructor(public code: status, public message: string) {}
  details: string;
  metadata: Metadata;
  stack?: string | undefined;
}
