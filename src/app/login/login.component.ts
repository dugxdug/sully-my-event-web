import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { UserModel } from 'src/app/models/user.model';
import { UserService } from 'src/app/core/user.service';
import { Router } from '@angular/router';
import { CoreService } from 'src/app/core/core.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;
  user: UserModel;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private coreService: CoreService
  ) { }

  ngOnInit() {
    this.user = <UserModel>{};
    this.createForm();
  }

  createForm(): void {
    this.formGroup = this.formBuilder.group({
      Email: new FormControl(this.user.email),
      Password: new FormControl(this.user.password),
    });
  }

  AttemptLogin() {
    const model = <UserModel>{ ...this.user, ...this.formGroup.value };

    this.userService.logUserIn(model).subscribe((res: UserModel) => {
      console.log(res);
      if (res) {
        this.coreService.setLoggedInUser(res);
        this.router.navigate(['']);
      }
    });
  }
}
