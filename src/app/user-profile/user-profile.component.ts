import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  User = {
    name : 'Doe',
    firstName : 'John',
    age : 25,
    quote : '',
    photo : 'https://randomuser.me/api/portraits/lego/2.jpg'
  };

  constructor() { }
  toggle = true;
  afficherMasquer() {
    if (this.toggle) {
      document.getElementById("ageUser").style.display = "none";
      this.toggle = !this.toggle;
    } else {
      document.getElementById("ageUser").style.display = "inline-block";
      this.toggle = !this.toggle;
    };
  }


  ngOnInit() {
  }

}
