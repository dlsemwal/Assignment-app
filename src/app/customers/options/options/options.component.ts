import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CustomersListService } from 'src/app/customers-list.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {
  id;
  constructor(private route: ActivatedRoute, private customersListService: CustomersListService, public router:Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.id = +params.id);
  }
  dltCustomer() {
    let confirmation: boolean = confirm('Do you want to remove this customer?');
    if (!confirmation) return;

    this.customersListService.deleteCustomer(this.id)
    this.router.navigate(['/customers'])

  }

}
