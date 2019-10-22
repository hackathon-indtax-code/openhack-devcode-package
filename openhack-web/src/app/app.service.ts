import { Filemetadata } from './filemetadata';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  readonly apiUrl: string = 'http://localhost:8080';
  constructor(private http: HttpClient) {}

  getValidatedFilesData(): Observable<Filemetadata[]> {
    return this.http.get<Filemetadata[]>(
      this.apiUrl + '/api/getAllFileValidateData'
    );
  }

  getUpdateDataById(validateId) {
    return this.http.get( this.apiUrl + '/api/getFileValidateDataById/' + validateId);
  }

  uploadFileData(selectedFilesData: any) {
    const formData = new FormData();

    for (const fileData of selectedFilesData) {
      formData.append('files', fileData);
    }

    return this.http.post(this.apiUrl + '/api/uploadMultipleFiles', formData);
  }

  deleteValidateFileData(validateFileObj) {
    const validateFileId = validateFileObj.id;
    return this.http.delete(this.apiUrl + '/api/deleteValidateFielData/' + validateFileId);
  }

  deleteAllValidateFielData() {
    return this.http.delete(this.apiUrl + '/api/deleteAllValidateFielData');
  }
}
