import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-reviews-render',
  templateUrl: './reviews-render.component.html',
  styleUrls: ['./reviews-render.component.css']
})

export class ReviewsRenderComponent {
  public renderList: any
  public reviewToEdit: any = ""
  public confirmEdit: boolean = false

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {

    const token = sessionStorage.getItem('session_token')!

    const url = "http://localhost:8080/getReview"

    const headers = new HttpHeaders().set(
      'Authorization', token
    )

    this.http.get(url, { headers }).subscribe(
      {
        next: res => {
          this.renderList = res
          this.renderList = this.renderList.Reviews
        },
        error: err => {
          console.log(err)
        }
      }
    )
  }

  public switchEdit(review: any) {
    this.confirmEdit = true
    this.reviewToEdit = { ...review }
  }

  public switchNotEdit() {
    this.confirmEdit = false
    this.reviewToEdit = null
  }

  public editReview() {

    if (!this.reviewToEdit.score || !this.reviewToEdit.comments) {
      window.alert("You should fill all the fields.")
      return
    }

    const token = sessionStorage.getItem('session_token')!

    const url = `http://localhost:8080/updateReview/${this.reviewToEdit._id}`
    const headers = new HttpHeaders().set(
      'Authorization', token
    )

    const body = {
      score: this.reviewToEdit.score,
      comments: this.reviewToEdit.comments
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

  public deleteReview(review: any) {
    if (window.confirm("Are you sure about delete this review?")) {
      const token = sessionStorage.getItem('session_token')!
      const url = `http://localhost:8080/deleteReview/${review._id}`

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
}
