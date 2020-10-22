import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-commitsapi',
  templateUrl: './commitsapi.component.html',
  styleUrls: ['./commitsapi.component.css']
})
export class CommitsapiComponent implements OnInit {
  commitdata=[];

  constructor(private http: HttpClient) { }

  ngOnInit(){

    this.http.get('https://api.github.com/repositories/19438/commits',)
      .subscribe((res: any) => {
        this.commitdata = res;
      })
  }
}
