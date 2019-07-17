import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserService } from '../user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    formBuilder.group({username: ['', Validators.required], password: ['', Validators.required]});
   }

   fail=false;
  ngOnInit() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;

  }

  logIn(emails:String, passwords:String) {
    const user:Object = {email: emails, password: passwords};
    this.userService.logIn(user).subscribe(res => {
      document.querySelectorAll("input").forEach(item => item.value = '');
      localStorage.setItem('token', res['token']);
      localStorage.setItem('username',res['username']);
      document.location.assign("/home");
        
      
    }
    ,(error) => {return this.fail =true;}
    
    )
  }

}