import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list.component';
import { OrderComponent } from './product/order/order.component';
import { ProductService } from './product/service/prod-service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DeleteComponent } from './product/delete/delete.component';
import { AdminComponent } from './admin/admin.component';
import { AddComponent } from './admin/add/add.component';
import { UpdateComponent } from './admin/update/update.component';
import { ADeleteComponent } from './admin/delete/delete.component';





@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    OrderComponent,
    DeleteComponent,
    AdminComponent,
    AddComponent,
    UpdateComponent,
    ADeleteComponent
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
