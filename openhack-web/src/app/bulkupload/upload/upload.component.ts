import { AppService } from './../../app.service';
import { DomSanitizer } from '@angular/platform-browser';
import {
  Component,
  OnInit,
  ViewChild,
  Input,
  ElementRef,
  Inject
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ValidationService } from '../validation.service';
import { GenerateschemaService } from 'src/app/dashboard/schema/generateschema.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  mainSchema: any;
  isServerValidation = false;
  @ViewChild('fileUpload', { static: false })
  fileUpload: ElementRef;
  @Input()
  files: File[] = [];
  @Input()
  multiple = false;
  @Input()
  accept = 'application/JSON';
  inputFileName: string;

  constructor(
    private sanitizer: DomSanitizer,
    private appService: AppService,
    private generateSchemaService: GenerateschemaService,
    public dialogRef: MatDialogRef<UploadComponent>,
    private validateService: ValidationService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    this.generateSchemaService.getMainSchema().subscribe(
      data => {
        const mainSchemaData: any = data;
        if (data && mainSchemaData.jsonSchema) {
          this.mainSchema = JSON.parse(mainSchemaData.jsonSchema);
        }
        console.log('schema generated : ' + data);
      },
      error => {
        console.log('error in retrieveing data');
      }
    );
  }

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

  removeSelectedFiles() {
    this.fileUpload.nativeElement.value = '';
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
    let errordata: any = [];
    for (const fileData of filesData) {
      this.validateService
        .getFinalErrorMessage(
          fileData,
          this.data.schemaType,
          this.mainSchema,
          this.isServerValidation
        )
        .then(
          data => {
            errordata = data;
            this.appService
              .uploadFileData(fileData, errordata, this.isServerValidation)
              .subscribe(
                response => {
                  console.log(response);
                  this.dialogRef.close(response);
                },
                error => console.log(error),
                () => console.log('completed')
              );
          },
          error => {
            console.log('error in validating the json files');
          }
        );
    }
  }
}
