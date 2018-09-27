import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserModel } from 'src/app/models/user.model';
import { FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/core/user.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CoreService } from 'src/app/core/core.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  formGroup: FormGroup;
  user: UserModel;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private coreService: CoreService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.user = <UserModel>{};
    this.createForm();
  }

  createForm(): void {
    this.formGroup = this.formBuilder.group({
      email: new FormControl(this.user.email),
      password: new FormControl(this.user.password),
      firstName: new FormControl(this.user.firstName),
      lastName: new FormControl(this.user.lastName),
    });
  }

  CreateUser() {
    const model = <UserModel>{ ...this.user, ...this.formGroup.value };

    this.userService.createUser(model).subscribe((res: UserModel) => {
      if (res) {
        this.coreService.setLoggedInUser(res);
        this.router.navigate(['']);
      }
    });
  }
}
