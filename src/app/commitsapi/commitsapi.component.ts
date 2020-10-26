import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-commitsapi',
  templateUrl: './commitsapi.component.html',
  styleUrls: ['./commitsapi.component.css']
})
export class CommitsapiComponent implements OnInit {
  commitdata: Object;

  constructor(private http: HttpClient) { }

  ngOnInit(){

    this.http.get('https://api.github.com/repositories/19438/commits',)
      .subscribe((res: any) => {
        this.commitdata = res;
        //console.log(res);    //display all the results

        //for (let items in res)
        for (var i = 0; i < res.length; i++) {
          console.log(res[i].author.id);
          console.log(res[i].author.avatar_url);       //printing only urls
          console.log(res[i].commit.author.name);
          console.log(res[i].commit.author.email);
          console.log(res[i].commit.author.date);
          //console.log(res[i]);     //display all the results
        }

      })
  }
}
