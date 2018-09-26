import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserModel } from 'src/app/models/user.model';
import { FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/core/user.service';
import { FormControl } from '@angular/forms';

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
    private userService: UserService
  ) { }

  ngOnInit() {
    this.user = <UserModel>{};
    this.createForm();
  }

  createForm(): void {
    this.formGroup = this.formBuilder.group({
      Email: new FormControl(this.user.Email),
      Password: new FormControl(this.user.Password),
      FirstName: new FormControl(this.user.FirstName),
      LastName: new FormControl(this.user.LastName),
    });
  }

  AttemptLogin() {
    const model = <UserModel>{ ...this.user, ...this.formGroup.value };

    this.userService.createUser(model).subscribe(res => {
      console.log(res);
    });
  }
}
