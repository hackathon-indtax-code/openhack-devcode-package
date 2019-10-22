import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BulkuploadComponent } from './bulkupload/bulkupload.component';

const routes: Routes = [
  { path: 'bulkupload', component: BulkuploadComponent },
  { path: '',
    redirectTo: '/bulkupload',
    pathMatch: 'full'
  },
  { path: '**', component: BulkuploadComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
