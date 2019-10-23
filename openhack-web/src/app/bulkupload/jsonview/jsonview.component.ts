import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { JsonEditorComponent, JsonEditorOptions } from 'ang-jsoneditor';

@Component({
  selector: 'app-jsonview',
  templateUrl: './jsonview.component.html',
  styleUrls: ['./jsonview.component.css']
})
export class JsonviewComponent implements OnInit {
  jsonData: any;
  public editorOptions: JsonEditorOptions;
  @ViewChild(JsonEditorComponent, { static: true }) editor: JsonEditorComponent;
  constructor(
    public dialogRef: MatDialogRef<JsonviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.editorOptions = new JsonEditorOptions();
    this.editorOptions.mode = 'tree'; // set all allowed modes
    this.editorOptions.expandAll = true;
    this.jsonData = this.data.jsonData;
  }

  ngOnInit() {}
}
