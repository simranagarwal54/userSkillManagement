import { Component, OnInit } from '@angular/core';
import { UserServicesService } from 'src/app/services/user-services.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  view = 'Users';
  cardtext = ''
  constructor(public userService: UserServicesService) { }

  ngOnInit(): void {
  }

}
