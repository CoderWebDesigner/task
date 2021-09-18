import { Component, OnInit } from '@angular/core';
import { NavbarlinksService } from '../services/navbarlinks.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  navLinks=[]
  constructor(private links:NavbarlinksService) { }

  ngOnInit(): void {
    this.navLinks = Object.assign([], this.links.links);
    console.log(this.links.links)
    console.log(this.navLinks)
  }

}
