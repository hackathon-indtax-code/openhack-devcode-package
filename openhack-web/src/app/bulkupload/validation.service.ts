import { Injectable } from '@angular/core';
import { ItrschemaService } from './itrschema.service';
import ajv = require('ajv');

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
  ajvValidation = ajv({ allErrors: true, unknownFormats: 'ignore' });
  constructor(private itrSchema: ItrschemaService) {}

  getFinalErrorMessage(uploadedFile: any, schemaType: string, mainSchema: any) {
    const reader = new FileReader();
    let jsonString = '';
    let schemaData = null;
    if (mainSchema) {
      schemaData = mainSchema;
      const deletePropertyList = [
        'maximum',
        'minLength',
        'maxLength',
        'maxItems',
        'minItems',
        'minimum'
      ];
      let iterateSchemaObj: any = null;
      for (const propertyItem of deletePropertyList) {
        iterateSchemaObj = schemaData;
        schemaData = this.updateProp(iterateSchemaObj, propertyItem);
      }
    } else {
      schemaType === 'ITR_SCHEMA_2'
        ? this.itrSchema.getITR2Schema()
        : this.itrSchema.getITR3Schema();
    }
    const errorObj = { errorDescription: '' };
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

  updateProp(obj, propToDelete) {
    for (const property in obj) {
      if (obj.hasOwnProperty(property)) {
        if (typeof obj[property] === 'object') {
          this.updateProp(obj[property], propToDelete);
        } else {
          if (property === propToDelete && obj[property] === '') {
            delete obj[property];
          } else if (property === propToDelete && obj[property]) {
            obj[property] = parseInt(obj[property], 10);
          }
        }
      }
    }
    return obj;
  }
}
