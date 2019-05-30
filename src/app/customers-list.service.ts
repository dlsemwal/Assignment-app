import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomersListService {

  constructor(private http: HttpClient) { }

  getCustomers() {
    return this.customers
  }
  getCustomerById(id) {
    return this.customers[id]
  }
  addCustomer(customer) {
    this.customers.push(customer)
    return customer
  }
  updateCustomer(id, customer) {
    this.customers[id] = customer
    return customer
  }
  deleteCustomer(id) {
    this.customers.splice(id, 1)
  }

  customers: any = [
    {
      "name": "John Doe",
      "contact": 123456789,
      "address": "NJ",
      "id": 1
    },
    {
      "name": "Brian Cooper",
      "contact": 5463,
      "address": "New York",
      "id": 2
    },
    {
      "name": "Jane Cooper",
      "contact": 844458454,
      "address": "CA",
      "id": 3
    },
    {
      "name": "Sia Parker",
      "contact": 844458454,
      "address": "Berlin",
      "id": 4
    },
    {
      "name": "Tom Derick",
      "contact": 844458454,
      "address": "London",
      "id": 5
    }
  ];
}
