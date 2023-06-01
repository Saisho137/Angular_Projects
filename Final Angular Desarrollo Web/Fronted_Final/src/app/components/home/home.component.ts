import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router) { }

  public confirmAdd: boolean = false

  ngOnInit() {
    const token = sessionStorage.getItem('session_token')

    if (token == null) {
      this.router.navigate(['/login'])
    }

  }

  logOut() {
    sessionStorage.removeItem('session_token')
    this.router.navigate(['/'])
  }

  public switchToAdd() {
    this.confirmAdd = true
  }
  public switchToNotAdd() {
    this.confirmAdd = false
  }

}
