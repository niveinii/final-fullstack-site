import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  constructor(private userService:UserService) { }
failedRegister = false;
submitted=false;
  onSubmit(d){
    this.submitted = true;
  }
  ngOnInit() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;


  }
  register(email: String, username: String, password: String) {
    const user:Object = {email: email, username: username, password: password};
    this.userService.signUp(user).subscribe(
     (res) => {console.log(res);
    document.querySelectorAll("input").forEach(item => item.value = '');
 
    },
    (error) =>this.failedRegister = true
    );
  }
}
