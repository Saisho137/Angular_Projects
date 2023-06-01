import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public email: String = "";
  public password: String = ""
  public apiResponse: any = ""

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    const token = sessionStorage.getItem('session_token')

    if (token != null) {
      this.router.navigate(['/home'])
    }

  }

  public validateUser() {

    if (!this.email || !this.password) {
      window.alert("You should fill all the fields.")
      return
    }

    const url = "http://localhost:8080/signInUser"

    const headers = new HttpHeaders().set(
      'Content-Type', 'application/json'
    )

    const body = {
      email: this.email,
      password: this.password
    }

    this.http.post(url, body, { headers }).subscribe(
      {
        next: res => {
          this.apiResponse = res
          const token = this.apiResponse.token
          sessionStorage.setItem('session_token', token)
          this.router.navigate(['/home'])
        },
        error: err => {
          window.alert("User or password Invalids. Try Again.")
          console.log(err)
        }
      }
    )
  }
}
