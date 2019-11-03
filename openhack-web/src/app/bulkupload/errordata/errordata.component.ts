import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ErrorData } from 'src/app/errordata';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogConfig,
  MatDialog
} from '@angular/material/dialog';
import { ErrorbarComponent } from '../errorbar/errorbar.component';
import { MatSnackBar } from '@angular/material';
import { JsonviewComponent } from '../jsonview/jsonview.component';

@Component({
  selector: 'app-errordata',
  templateUrl: './errordata.component.html',
  styleUrls: ['./errordata.component.css']
})
export class ErrordataComponent implements OnInit {
  dataSource = new MatTableDataSource<ErrorData>();
  displayedColumns: string[] = ['position', 'errorType', 'errorDescription'];
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    public dialogRef: MatDialogRef<ErrordataComponent>,
    public snackBar: MatSnackBar,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    this.dataSource.data = this.data.errorDataList as ErrorData[];
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  showJsonViewer() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.panelClass = 'mat-dialog-override';
    try {
      dialogConfig.data = { jsonData: JSON.parse(this.data.detailedErrorData) };
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
}
