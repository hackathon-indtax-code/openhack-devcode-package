import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { BulkuploadComponent } from './bulkupload/bulkupload.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableModule } from '@angular/material/table';
import { UploadComponent } from './bulkupload/upload/upload.component';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatTabsModule } from '@angular/material';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ConfirmComponent } from './confirm/confirm.component';
import { JsonviewComponent } from './bulkupload/jsonview/jsonview.component';
import { NgJsonEditorModule } from 'ang-jsoneditor';
import { ErrorbarComponent } from './bulkupload/errorbar/errorbar.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ErrordataComponent } from './bulkupload/errordata/errordata.component';
import { MatSelectModule } from '@angular/material/select';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DroolsComponent } from './dashboard/drools/drools.component';
import { SchemaComponent } from './dashboard/schema/schema.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    BulkuploadComponent,
    UploadComponent,
    ConfirmComponent,
    JsonviewComponent,
    ErrorbarComponent,
    ErrordataComponent,
    DashboardComponent,
    DroolsComponent,
    SchemaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    FormsModule,
    FlexLayoutModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatSnackBarModule,
    NgJsonEditorModule,
    MatTooltipModule,
    MatSelectModule,
    MatTabsModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule
  ],
  providers: [
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: { panelClass: 'mat-dialog-override' }
    }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
  entryComponents: [
    UploadComponent,
    ConfirmComponent,
    JsonviewComponent,
    ErrorbarComponent,
    ErrordataComponent
  ]
})
export class AppModule {}
