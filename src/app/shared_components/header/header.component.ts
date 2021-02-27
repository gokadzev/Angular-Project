import { Component, OnInit } from '@angular/core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {
  public isCollapsed = true;  
  public isCollapsedMob = true; 

  expansionClass!:string;
  panelOpenState:any;


  
  constructor() { }
  

  ngOnInit(): void {
  }
  

  faChevronDown = faChevronDown;

  navbarState:any;

  closeNav(){
    this.panelOpenState = false;
    this.navbarState = 'closednavbarexpand'; 

  }


  
}
