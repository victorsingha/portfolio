import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.http.get("https://raw.githubusercontent.com/victorsingha/Employee-Payroll-App/main/employee.json")
    .subscribe(res => {
      console.log(res)
    })
  }

}
