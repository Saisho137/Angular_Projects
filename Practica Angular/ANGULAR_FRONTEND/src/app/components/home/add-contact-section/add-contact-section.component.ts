import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-add-contact-section',
  templateUrl: './add-contact-section.component.html',
  styleUrls: ['./add-contact-section.component.css']
})

export class AddContactSectionComponent {

  public name: String = ""
  public lastNames: String = ""
  public phone: String = ""
  public mobile: String = ""
  public email: String = ""

  constructor(private http: HttpClient, private router: Router) { }

  public addContact (){
    const token = sessionStorage.getItem('session_token')!
    const url = "http://localhost:8080/addContact"

    const headers = new HttpHeaders().set(
      'Authorization', token
    )
    
    const body = {
      name : this.name,
      lastNames : this.lastNames,
      phone : this.phone,
      mobile : this.mobile,
      email : this.email
    }

    this.http.post(url, body, { headers }).subscribe(
      {
        next: res => {
          this.router.navigate(['/'])
        },
        error: err => {
          console.log(err)
        }
      }
    )
  }
  
} 