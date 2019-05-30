import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionsComponent } from './options/options.component';
import { Routes, RouterModule } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '', component: OptionsComponent, children: [
      { path: 'view/:id', component: ViewComponent },
      { path: 'orders', component: OrdersComponent },
      { path: 'edit/:id', component: EditComponent },
    ]
  }
]

@NgModule({
  declarations: [OptionsComponent, OrdersComponent, ViewComponent, EditComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class OptionsModule { }
