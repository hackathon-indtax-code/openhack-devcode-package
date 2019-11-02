import { DroolsComponent } from './dashboard/drools/drools.component';
import { SchemaComponent } from './dashboard/schema/schema.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BulkuploadComponent } from './bulkupload/bulkupload.component';

const routes: Routes = [
  { path: 'bulkupload', component: BulkuploadComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'schema', pathMatch: 'full' },
      { path: 'schema', component: SchemaComponent },
      { path: 'albums', component: DroolsComponent }
    ]
  },
  { path: '', redirectTo: '/bulkupload', pathMatch: 'full' },
  { path: '**', component: BulkuploadComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
