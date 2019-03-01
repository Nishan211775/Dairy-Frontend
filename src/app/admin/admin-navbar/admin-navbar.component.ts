import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.scss']
})
export class AdminNavbarComponent implements OnInit {
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
      this.router.navigate(['/admin/admin-login']);
    }
  }
}
