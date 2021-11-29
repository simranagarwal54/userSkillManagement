import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wgUI';
  usercomponent = false;
  skillcomponent =false;

  navTo(page: any){
    if(page === 'skills'){
      this.usercomponent = false;
      this.skillcomponent = true;
    }
    if(page === 'users'){
      this.skillcomponent = false;
      this.usercomponent = true;
    }
  }
}
