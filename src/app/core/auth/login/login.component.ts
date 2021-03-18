import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public loginSuccess!: boolean;

  public formGroup: FormGroup = new FormGroup({
    username: new FormControl('admin', Validators.required),
    password: new FormControl('admin', Validators.required),
  });

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    if (this.authService.isUserAuthenticated()) this.goToListPage();
  }

  public doLogin(): void {
    const { username, password } = this.formGroup.value;

    this.authService.authenticate(username, password).subscribe((res) => {
      this.loginSuccess = true;
      this.goToListPage();
    });
  }

  private goToListPage(): void {
    this.router.navigate(['pessoas']);
  }
}
