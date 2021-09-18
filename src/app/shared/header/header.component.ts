import { Component, OnInit } from '@angular/core';
import { NavbarlinksService } from '../services/navbarlinks.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navLinks=[];
  collapsed = true;
  constructor(private links:NavbarlinksService) { }

  ngOnInit(): void {
    this.navLinks = Object.assign([], this.links.links);
    console.log(this.links.links)
    console.log(this.navLinks)
  }
  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }

}
