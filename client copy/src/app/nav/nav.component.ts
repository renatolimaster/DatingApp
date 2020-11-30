import { Component, OnInit } from '@angular/core';
//
import { AccountService } from './../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: [ './nav.component.css' ]
})
export class NavComponent implements OnInit {
  model: any = {};
  loggedIn: boolean = false;

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }

  login() {
    console.log(this.model);
    this.accountService.login(this.model).subscribe(res => {
      if (res) {
        console.log('res:', res);
        this.loggedIn = true;
      } else {
        this.logout();
      }
    }, error => {
      this.logout();
      console.log('Error:', error);
    });
  }

  logout() {
    this.loggedIn = false;
  }

}
