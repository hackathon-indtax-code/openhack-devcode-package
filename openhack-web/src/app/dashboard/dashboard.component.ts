import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  navLinks: any[];
  activeLinkIndex = -1;
  constructor(private router: Router) {}

  ngOnInit() {
    this.navLinks = [
      {
        label: 'Schema Rule Settings',
        link: './schema',
        index: 0
      },
      {
        label: 'Drools Rule Settings',
        link: './albums',
        index: 1
      }
    ];

    this.router.events.subscribe(res => {
      this.activeLinkIndex = this.navLinks.indexOf(
        this.navLinks.find(tab => tab.link === '.' + this.router.url)
      );
    });
  }
}
