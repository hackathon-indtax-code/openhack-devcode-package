import { ValidationService } from './bulkupload/validation.service';
import { Filemetadata } from './filemetadata';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  readonly apiUrl: string = 'http://localhost:8080';

  constructor(
    private http: HttpClient,
    private validateService: ValidationService
  ) {}

  getValidatedFilesData(): Observable<Filemetadata[]> {
    return this.http.get<Filemetadata[]>(
      this.apiUrl + '/api/getAllFileValidateData'
    );
  }

  getUpdateDataById(validateId) {
    return this.http.get(
      this.apiUrl + '/api/getFileValidateDataById/' + validateId
    );
  }

  uploadFileData(
    selectedFilesData: any,
    errorData: any,
    isServerValidation: boolean
  ) {
    const formData = new FormData();
    let isServerValidationVal = '';
    formData.append('files', selectedFilesData);
    formData.append('errors', JSON.stringify(errorData));
    isServerValidationVal = isServerValidation ? 'true' : 'false';
    formData.append('isServerValidation', isServerValidationVal);
    return this.http.post(this.apiUrl + '/api/uploadMultipleFiles', formData);
  }

  deleteValidateFileData(validateFileObj) {
    const validateFileId = validateFileObj.id;
    return this.http.delete(
      this.apiUrl + '/api/deleteValidateFielData/' + validateFileId
    );
  }

  deleteAllValidateFielData() {
    return this.http.delete(this.apiUrl + '/api/deleteAllValidateFielData');
  }
}
