import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ErrorData } from 'src/app/errordata';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

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
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    this.dataSource.data = this.data.errorDataList as ErrorData[];
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}
