import { FileconverterService } from './../../fileconverter.service';
import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { GenerateschemaService } from './generateschema.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { ErrorbarComponent } from 'src/app/bulkupload/errorbar/errorbar.component';
import { JsonviewComponent } from 'src/app/bulkupload/jsonview/jsonview.component';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Component({
  selector: 'app-schema',
  templateUrl: './schema.component.html',
  styleUrls: ['./schema.component.css']
})
export class SchemaComponent implements OnInit {
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = [
    'position',
    'entityName',
    'jsonschema',
    'mainSchema'
  ];
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild('fileUpload', { static: false })
  fileUpload: ElementRef;
  @Input()
  files: File[] = [];
  @Input()
  multiple = false;
  @Input()
  accept =
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel';
  inputFileName: string;
  jsonSchemaList = [];
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
      this.jsonSchemaList = [];
      this.dataSource.data = [...this.jsonSchemaList];
    }
  }

  clearInputElement() {
    this.fileUpload.nativeElement.value = '';
  }

  generateJsonSchema(fileData: any) {
    this.fileService.convertExcelToJosn(fileData[0]).subscribe(
      data => {
        console.log('data : ' + data);
        this.jsonSchemaList = this.generateSchema.generateSchema(data);
        this.dataSource.data = this.jsonSchemaList;
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error => console.log('error data : ' + error)
    );
  }

  showJsonViewer(currentElement) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.panelClass = 'mat-dialog-override';
    try {
      dialogConfig.data = { jsonData: JSON.parse(currentElement.jsonSchema) };
    } catch (error) {
      this.snackBar.openFromComponent(ErrorbarComponent, {
        duration: 5000
      });
      return;
    }

    const dialogRef = this.dialog.open(JsonviewComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  onChange(event, index) {
    const data = this.dataSource.data;
    for (let i = 0; i < this.jsonSchemaList.length; i++) {
      if (i === index) {
        data[i].mainSchema = event.checked;
      } else {
        data[i].mainSchema = false;
      }
    }
    this.dataSource.data = [...data];
  }

  saveJsonSchemaData() {
    let slackMessage = '';
    this.fileService.saveJsonSchemaData(this.dataSource.data).subscribe(
      data => {
        slackMessage = 'Json Schema saved successfully.';
        console.log('saved data : ' + data);
      },
      error => {
        slackMessage = 'Error in saving json schema data!';
        console.log('error in saving : ' + error);
      },
      () => {
        this.snackBar.open(slackMessage, 'Close', {
          duration: 5000,
          verticalPosition: 'bottom',
          horizontalPosition: 'left'
        });
      }
    );
  }
}
