import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dairy-navbar',
  templateUrl: './dairy-navbar.component.html',
  styleUrls: ['./dairy-navbar.component.scss']
})
export class DairyNavbarComponent implements OnInit {
  navbarOpen = false;
  sideBarOpen = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  toggleSidebar() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  logout() {
    if (confirm("Are you sure?")) {
      sessionStorage.clear();
      this.router.navigate(['/dairy/dairy-login']);
    }
  }
}
