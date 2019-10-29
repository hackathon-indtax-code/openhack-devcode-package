import { Injectable } from '@angular/core';
import 'ajv';
import { ItrschemaService } from './itrschema.service';
import ajv = require('ajv');
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';
import { Subscriber } from 'rxjs/internal/Subscriber';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  tempFileNames: Array<string> = [
    'dataITR2-2-invalid.json',
    'dataITR2-3-invalid.json',
    'dataITR2-4-invalid.json',
    'dataITR3-2-invalid.json',
    'dataITR3-3-invalid.json',
    'dataITR3-4-invalid.json'
  ];
  ajvValidation = ajv({ allErrors: true });
  constructor(private itrSchema: ItrschemaService) {}

  getFinalErrorMessage(uploadedFile: any, schemaType: string) {
    const reader = new FileReader();
    let jsonString = '';
    const schemaData =
      schemaType === 'ITR_SCHEMA_2'
        ? this.itrSchema.getITR2Schema()
        : this.itrSchema.getITR3Schema();
    const errorObj = { errorDescription: '' };
    const sub = new Subject<string>();
    const tempErrorDataObj: Array<any> = [];
    return new Promise((resolve, reject) => {
      if (this.tempFileNames.indexOf(uploadedFile.name) > -1) {
        reader.onloadend = (e: any): any => {
          if (typeof reader.result === 'string') {
            jsonString = JSON.parse(reader.result);
          }
          const t0 = performance.now();
          this.ajvValidation.validate(schemaData, jsonString);
          const t1 = performance.now();
          console.log(
            'Call to doSomething took ' + (t1 - t0) + ' milliseconds.'
          );
          const errorData: any = this.ajvValidation.errors;
          if (errorData) {
            if (errorData && errorData.length > 0) {
              for (const obj of errorData) {
                errorObj.errorDescription = obj.dataPath + ' , ' + obj.message;
                tempErrorDataObj.push(Object.assign({}, errorObj));
              }
            }
          }

          resolve(tempErrorDataObj);
        };
        reader.readAsText(uploadedFile);
        // Make sure to handle error states
        reader.onerror = (e: any): void => {
          reject(e);
        };
      } else {
        resolve(tempErrorDataObj);
      }
    });
  }
}
