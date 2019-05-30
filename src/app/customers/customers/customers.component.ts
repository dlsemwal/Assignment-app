import { Component, OnInit } from '@angular/core';
import { CustomersListService } from 'src/app/customers-list.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers: any = [];

  constructor(private customersListService: CustomersListService) {
  }

  ngOnInit() {
    this.customers =  this.customersListService.getCustomers();
  }
}
