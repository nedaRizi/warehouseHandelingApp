import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WarehouseComponent } from './warehouse/presentation/warehouse.component';
import { AssignmentOrRecieptComponent } from './warehouse/presentation/assignmentOrReciept/assignmentOrReciept.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'warehouse', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: 'warehouse', pathMatch: 'full'
  },
  {
    path: 'warehouse',
    loadChildren: () =>
      import('./warehouse/warehouse.module').then(m => m.WarehouseModule),
    component: WarehouseComponent
  },
  {
    path: 'assignmentorreceipt',
    loadChildren: () =>
      import('./warehouse/presentation/assignmentOrReciept/assignmentOrReciept.module').then(m => m.AssignmentOrRecieptModule),
    component: AssignmentOrRecieptComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
