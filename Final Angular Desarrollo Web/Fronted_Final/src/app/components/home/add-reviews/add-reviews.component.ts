import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-add-reviews',
  templateUrl: './add-reviews.component.html',
  styleUrls: ['./add-reviews.component.css']
})

export class AddReviewsComponent {
  public name: String = ""
  public score: String = ""
  public visitDate: String = ""
  public comments: String = ""

  constructor(private http: HttpClient, private router: Router) { }

  public addReview() {

    if (!this.name || !this.score || !this.visitDate || !this.comments) {
      window.alert("You should fill all the fields.")
      return
    }

    const token = sessionStorage.getItem('session_token')!
    const url = "http://localhost:8080/addReview"

    const headers = new HttpHeaders().set(
      'Authorization', token
    )

    const body = {
      name: this.name,
      score: this.score,
      visitDate: this.visitDate,
      comments: this.comments
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
