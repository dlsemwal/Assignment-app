import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CustomersListService } from 'src/app/customers-list.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  customer
  name;
  contact;
  address;
  id


  constructor(private http: HttpClient,
     private router: Router,
      private customersListService:CustomersListService,
      private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.id = params.id)
    this.customer = this.customersListService.getCustomerById(this.id)
    this.name = this.customer.name
    this.address = this.customer.address
    this.contact = this.customer.contact
  }
  formSubmit(customer) {

    this.customersListService.updateCustomer(this.id, customer)

    this.router.navigate(['/customers'])
    // this.http.put('http://localhost:3000/customers/'+2, customer.value).
    //   subscribe(data => console.log('recv data', data)
    //   );

  }
}
