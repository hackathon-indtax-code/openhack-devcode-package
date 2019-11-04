import { ErrordataComponent } from './errordata/errordata.component';
import { ConfirmComponent } from './../confirm/confirm.component';
import { Filemetadata } from './../filemetadata';
import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { AppService } from '../app.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UploadComponent } from './upload/upload.component';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { JsonviewComponent } from './jsonview/jsonview.component';
import { ErrorbarComponent } from './errorbar/errorbar.component';
import { TooltipPosition } from '@angular/material/tooltip';

@Component({
  selector: 'app-bulkupload',
  templateUrl: './bulkupload.component.html',
  styleUrls: ['./bulkupload.component.css']
})
export class BulkuploadComponent implements OnInit {
  isEmptyValidateList = true;
  displayedColumns: string[] = [
    'position',
    'fileName',
    'createdDate',
    'validateStatus',
    'update',
    'delete'
  ];
  dataSource = new MatTableDataSource<Filemetadata>();
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  positionOptions: TooltipPosition[] = [
    'after',
    'before',
    'above',
    'below',
    'left',
    'right'
  ];
  itrSchemaType: any = [
    { value: 'ITR_SCHEMA_2', viewValue: 'ITR2 Schema' },
    { value: 'ITR_SCHEMA_3', viewValue: 'ITR3 Schema' }
  ];

  schemaModalValue = this.itrSchemaType[1].value;

  constructor(
    private appService: AppService,
    private dialog: MatDialog,
    private changeDetectorRefs: ChangeDetectorRef,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.getValidatedFilesData('INIT');
  }

  getValidatedFilesData(type: string) {
    this.appService.getValidatedFilesData().subscribe(
      (response: Filemetadata[]) => {
        this.dataSource.data = response as Filemetadata[];
        this.dataSource.sortingDataAccessor = (item, property) => {
          switch (property) {
            case 'createdDate':
              return new Date(item.createdDate);
            default:
              return item[property];
          }
        };
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        if (type === 'REFRESH') {
          this.snackBar.open(
            this.dataSource.data.length + ' files data is refreshed.',
            'Close',
            {
              duration: 2000
            }
          );
        }
      },
      error => console.log('error : ' + error),
      () => {
        console.log('completed');
      }
    );
  }

  onSchemaChnage(selectedType) {
    console.log('selectedType : ' + selectedType);
  }

  openUploadDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.minHeight = '400px';
    dialogConfig.minWidth = '500px';
    dialogConfig.panelClass = 'mat-dialog-override';
    dialogConfig.data = { schemaType: this.schemaModalValue };
    const dialogRef = this.dialog.open(UploadComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(data => {
      console.log('Dialog output:', data);
      if (data && data.length > 0) {
        for (const item of data) {
          this.dataSource.data.push(item);
        }
        this.dataSource.data = [...this.dataSource.data];
        this.snackBar.open(data.length + ' files uploaded.', 'Close', {
          duration: 2000
        });
      }
    });
  }

  getUpdateDataById(currentElement) {
    const validateId = currentElement.id;
    let responseData: any = {};
    this.appService.getUpdateDataById(validateId).subscribe(
      data => {
        if (data) {
          responseData = data;
          this.dataSource.data[
            this.getIndexfromdataSource(validateId)
          ].validateStatus = responseData.validateStatus;
          this.dataSource.data = [...this.dataSource.data];
          this.snackBar.open(
            currentElement.fileName + ' data refreshed.',
            'Close',
            {
              duration: 2000
            }
          );
        }
        console.log('Id data' + data);
      },
      error => console.log('Error in getting data from ID')
    );
  }

  deleteValidateFileData(validateFileObj) {
    this.appService.deleteValidateFileData(validateFileObj).subscribe(
      response => {
        let tempList = [];
        tempList = this.dataSource.data.splice(
          this.getIndexfromdataSource(validateFileObj.id),
          1
        );
        this.dataSource.data = [...this.dataSource.data];
        this.snackBar.open(validateFileObj.fileName + ' is deleted.', 'Close', {
          duration: 2000
        });
        console.log(response);
      },
      error => console.log(error),
      () => {
        console.log('Delete completed');
      }
    );
  }

  deleteAllValidateFielData() {
    const dialogRef = this.dialog.open(ConfirmComponent, {
      width: '350px',
      data: 'Do you confirm the deletion?'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.appService.deleteAllValidateFielData().subscribe(
          response => {
            console.log('complete data deleted');
            const dataSourceLength = this.dataSource.data.length;
            this.dataSource.data = [];
            this.snackBar.open(dataSourceLength + ' items deleted.', 'Close', {
              duration: 2000
            });
          },
          error => console.log('error in data deletion')
        );
      }
    });
  }

  getIndexfromdataSource(validateFileId) {
    let index = -1;
    if (this.dataSource.data && this.dataSource.data.length > 0) {
      index = this.dataSource.data.map(e => e.id).indexOf(validateFileId);
    }
    return index;
  }

  refresh() {
    this.changeDetectorRefs.detectChanges();
  }

  showJsonViewer(currentElement) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.panelClass = 'mat-dialog-override';
    try {
      dialogConfig.data = { jsonData: JSON.parse(currentElement.jsonData) };
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

  getErrorDetails(currentElement) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.minHeight = '500px';
    dialogConfig.minWidth = '800px';

    dialogConfig.data = {
      errorDataList: currentElement.errorDataList,
      detailedErrorData: currentElement.detailedErrorData
    };

    const dialogRef = this.dialog.open(ErrordataComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  showStatusIcon(currentElement, validStatus) {
    let isValidStatus = false;
    if (currentElement.validateStatus === validStatus) {
      isValidStatus = true;
    }
    return isValidStatus;
  }
}
