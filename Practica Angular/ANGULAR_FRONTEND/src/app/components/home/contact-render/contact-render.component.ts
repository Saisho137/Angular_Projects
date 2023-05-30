import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-contact-render',
  templateUrl: './contact-render.component.html',
  styleUrls: ['./contact-render.component.css']
})

export class ContactRenderComponent {

  public contactList: any
  public editedContact: any = ""
  public confirmEdit: boolean = false

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {

    const token = sessionStorage.getItem('session_token')!

    const url = "http://localhost:8080/getContact"

    const headers = new HttpHeaders().set(
      'Authorization', token
    )

    this.http.get(url, { headers }).subscribe(
      {
        next: res => {
          this.contactList = res
          this.contactList = this.contactList.Contacts
        },
        error: err => {
          console.log(err)
        }
      }
    )
  }

  public switchEdit(contact: any) {
    this.confirmEdit = true
    this.editedContact = { ...contact }
  }

  public switchNotEdit(){
    this.confirmEdit = false
    this.editedContact = null
  }

  public editContact() {
    const token = sessionStorage.getItem('session_token')!

    const url = `http://localhost:8080/updateContact/${this.editedContact._id}`
    const headers = new HttpHeaders().set(
      'Authorization', token
    )

    const body = {
      phone: this.editedContact.phone,
      mobile: this.editedContact.mobile
    }

    this.http.put(url, body, { headers }).subscribe(
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

  public deleteContact(contact: any) {
    const token = sessionStorage.getItem('session_token')!
    const url = `http://localhost:8080/deleteContact/${contact._id}`

    const headers = new HttpHeaders().set(
      'Authorization', token
    )

    this.http.delete(url, { headers }).subscribe(
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
