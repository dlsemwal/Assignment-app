import { Component, OnInit } from '@angular/core';
import { CustomersListService } from 'src/app/customers-list.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  id;
  customer;
  constructor(private customersListService: CustomersListService, private route:ActivatedRoute ) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.id = params.id)
    this.customer = this.customersListService.getCustomerById(this.id)

  }

}
