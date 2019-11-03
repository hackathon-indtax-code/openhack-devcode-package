import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FileconverterService } from 'src/app/fileconverter.service';
import { GenerateschemaService } from '../schema/generateschema.service';
import { MatDialog, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-drools',
  templateUrl: './drools.component.html',
  styleUrls: ['./drools.component.css']
})
export class DroolsComponent implements OnInit {
  inputFileName: string;
  @ViewChild('fileUpload', { static: false })
  fileUpload: ElementRef;
  @Input()
  files: File[] = [];
  @Input()
  multiple = false;
  @Input()
  accept =
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel';
  constructor(
    private sanitizer: DomSanitizer,
    private fileService: FileconverterService,
    private generateSchema: GenerateschemaService,
    private dialog: MatDialog,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit() {}

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

  onClick(event) {
    if (this.fileUpload) {
    }
    this.fileUpload.nativeElement.click();
  }

  onInput(event) {}

  removeFile(event, file) {
    let ix;
    // tslint:disable-next-line: no-conditional-assignment
    if (this.files && -1 !== (ix = this.files.indexOf(file))) {
      this.files.splice(ix, 1);
      this.clearInputElement();
    }
  }

  clearInputElement() {
    this.fileUpload.nativeElement.value = '';
  }
}
