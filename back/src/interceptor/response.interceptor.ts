import { Injectable, NestInterceptor, CallHandler, ExecutionContext } from '@nestjs/common';
import { map, Observable } from 'rxjs';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(
      map((data) => ({
        data: data || {},
        resStatus: {
          code: '0000',
          message: '',
        },
      })),
    );
  }
}
