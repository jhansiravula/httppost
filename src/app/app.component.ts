import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'HTTPPOST';
  allPost: Object;
  isEdit=false;
  userObj={
    firstname:'',
    lastname:'',
    email:'',
    password:'',
    id:''
  }
  //registerForm: FormGroup;

    constructor(private formBuilder: FormBuilder,private http:HttpClient) { }


    ngOnInit() {
       /* this.registerForm = this.formBuilder.group({
            firstname: ['', Validators.required],
            lastname: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        }); */

    this.getAllPosts();

    }

    // GET Method

    getAllPosts() {
    this.http.get('http://localhost:3000/posts',)
      .subscribe((res: any) => {
        console.log(res);
        this.allPost = res;
      })
    }

    addUser(posts){
      console.log(posts)
      this.http.post('http://localhost:3000/posts', posts).
      subscribe((response)=>{
        this.getAllPosts();
      })
    }

    editPost(posts){
      this.isEdit = true;
      this.userObj = posts;
    }

    deletePost(posts){
      this.http.delete('http://localhost:3000/posts/' +posts.id).subscribe(()=>{
        this.getAllPosts();
      })
    }
    updatePost(posts){
      this.isEdit = !this.isEdit;
      this.http.put('http://localhost:3000/posts/' +posts.id , posts).subscribe(()=>{
        this.getAllPosts();
      })
    }

  }

