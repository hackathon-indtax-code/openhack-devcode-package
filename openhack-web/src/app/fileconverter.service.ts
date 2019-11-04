import { AppService } from './app.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileconverterService {
  baseUrl = 'http://localhost:8080';
  constructor(private appService: AppService, private http: HttpClient) {}

  convertExcelToJosn(fileData: any) {
    const formData = new FormData();
    formData.append('file', fileData);
    return this.http.post(this.baseUrl + '/files/convertToJson', formData);
  }

  saveJsonSchemaData(jsonSchemaList: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    });
    return this.http.post(
      this.baseUrl + '/files/saveJsonSchemaData',
      JSON.stringify(jsonSchemaList),
      { headers }
    );
  }

  saveDroolsRule(fileData: any) {
    const formData = new FormData();
    formData.append('file', fileData);
    return this.http.post(this.baseUrl + '/api/uploadDroolsFile', formData);
  }
}
