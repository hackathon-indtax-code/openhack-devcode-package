import { AppService } from './../../app.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit, ViewChild, Input, ElementRef } from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  @ViewChild('fileUpload', { static: false })
  fileUpload: ElementRef;
  @Input()
  files: File[] = [];
  @Input()
  multiple = true;
  @Input()
  accept = 'application/JSON';
  inputFileName: string;

  constructor(
    private sanitizer: DomSanitizer,
    private appService: AppService,
    public dialogRef: MatDialogRef<UploadComponent>
  ) {}

  ngOnInit() {}

  onClick(event) {
    if (this.fileUpload) {
    }
    this.fileUpload.nativeElement.click();
  }

  onInput(event) {}

  onFileSelected(event) {
    const files = event.dataTransfer
      ? event.dataTransfer.files
      : event.target.files;
    console.log('event::::::', event);
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      // if(!this.isFileSelected(file)){
      if (this.validate(file)) {
        //      if(this.isImage(file)) {
        file.objectURL = this.sanitizer.bypassSecurityTrustUrl(
          window.URL.createObjectURL(files[i])
        );
        //      }
        if (!this.isMultiple()) {
          this.files = [];
        }
        this.files.push(files[i]);
        //  }
      }
      // }
    }
  }

  removeFile(event, file) {
    let ix;
    // tslint:disable-next-line: no-conditional-assignment
    if (this.files && -1 !== (ix = this.files.indexOf(file))) {
      this.files.splice(ix, 1);
      this.clearInputElement();
    }
  }

  removeSelectedFiles(){
    this.files = [];
  }

  clearInputElement() {
    this.fileUpload.nativeElement.value = '';
  }

  validate(file: File) {
    for (const f of this.files) {
      if (
        f.name === file.name &&
        f.lastModified === file.lastModified &&
        f.size === f.size &&
        f.type === f.type
      ) {
        return false;
      }
    }
    return true;
  }

  isMultiple(): boolean {
    return this.multiple;
  }

  uploadFiles(filesData) {
    this.appService.uploadFileData(filesData).subscribe(
      response => {
        console.log(response);
        this.dialogRef.close(response);
      },
      error => console.log(error),
      () => console.log('completed')
    );
  }
}
