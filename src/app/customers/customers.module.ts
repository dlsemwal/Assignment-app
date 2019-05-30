import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers/customers.component';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '', component: CustomersComponent, children: [
      { path: 'customer/:id', loadChildren: './options/options.module#OptionsModule' },
      { path: 'add-customer', component: AddCustomerComponent },
    ]
  }
]

@NgModule({
  declarations: [CustomersComponent, AddCustomerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    HttpClientModule
  ]
})
export class CustomersModule { }
