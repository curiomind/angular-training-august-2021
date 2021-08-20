import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class GlobalErrorHandlerService implements ErrorHandler {
  constructor() {}

  handleError(error: Error) {
    if (error instanceof Error) {
      alert(`An Error occured: ${error.message}`);
    }
  }
}
