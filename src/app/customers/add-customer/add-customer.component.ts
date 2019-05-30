import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomersListService } from 'src/app/customers-list.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  name;
  contact;
  address;

  constructor(private customersListService: CustomersListService, private router: Router) { }

  ngOnInit() {
  }

  formSubmit(customer) {
    customer.id = this.customersListService.getCustomers().length + 1;
    this.customersListService.addCustomer(customer);
    console.log(this.customersListService.getCustomers());

    this.router.navigate(['/customers'])
  }
}
