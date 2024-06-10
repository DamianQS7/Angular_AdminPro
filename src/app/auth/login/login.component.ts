import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  private router: Router = inject(Router);

  public login(): void {
    this.router.navigateByUrl('/dashboard');
  }
}
