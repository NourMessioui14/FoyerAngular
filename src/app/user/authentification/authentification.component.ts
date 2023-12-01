// authentification.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Core/Services/user.service';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent {
  authForm!: FormGroup;
  loading = false;
  error: string | null = null;

  constructor(private fb: FormBuilder, private users: UserService, private router: Router) {}

  ngOnInit(): void {
    this.authForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      userRole: ['admin', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.authForm.invalid) {
      return;
    }

    this.loading = true;

    const userCredentials = {
      email: this.authForm.value.email,
      password: this.authForm.value.password,
    };

    this.users.login(userCredentials).subscribe(
      (response) => {
        const userRole = this.authForm.value.userRole;

        if (userRole === 'admin') {
          this.router.navigate(['/listfoyer']); // Redirect to the admin page
        } else if (userRole === 'client') {
          this.router.navigate(['/client']); // Redirect to the client page
        } else {
          // Handle other roles or scenarios as needed
        }
      },
      (error) => {
        console.error('Login failed', error);
        this.error = 'Invalid credentials. Please try again.';
        this.loading = false;
      },
      () => {
        this.loading = false;
      }
    );
  }
}
