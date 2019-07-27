import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderComponent } from './product/order/order.component';
import { ProductListComponent } from './product/product-list.component';
import { DeleteComponent } from './product/delete/delete.component';
import { AdminComponent } from './admin/admin.component';
import { AddComponent } from './admin/add/add.component';
import { UpdateComponent } from './admin/update/update.component';
import { ADeleteComponent } from './admin/delete/delete.component';


const routes: Routes = [
  {path:'product/allProd/product/order',component:OrderComponent},
  {path:'product/allProd/product/order/delete',component:DeleteComponent},
  {path:'product/allProd',component:ProductListComponent},
  {path:'admin/allProd',component:AdminComponent},
  {path:'admin/delete/:productId',component:ADeleteComponent},
  {path:'admin/addProd',component:AddComponent},
  {path:'admin/update/:productId/:price',component:UpdateComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
