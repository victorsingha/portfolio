import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public http: HttpClient,private router: Router) { 
    
  }

  public partnersLogoList: any;

  ngOnInit(): void {
    this.getPartnersLogo();
  }

  getPartnersLogo(){
    this.http.get("https://raw.githubusercontent.com/victorsingha/SERVER/main/portfolio/jsons/partners_logo.json")
    .subscribe(res => {
      console.log(res)
      this.partnersLogoList = res;
    })
  }

  openProjects(){
    this.router.navigate(['/projects']);
  }

}
