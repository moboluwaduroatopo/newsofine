import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../../services/jarwis.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {
  public form = {
    stories_name: null,
    scomment: null,
    story_image:null,
    story_image1:null,
    story_image2:null
  };
  filename1: any;
  filename2: any;
  error: any;
  message: string;
  constructor( private Jarwis: JarwisService,private router: Router) { }
  public response:any;
  public filename:any;
  uploadFile(event){
    let files =event.target.files[0];
    // console.log(files)
    this.filename=files.name
    console.log(this.filename)
    let reader = new FileReader();
    let vm = this;
    reader.onloadend =()=> {
      this.form.story_image = reader.result;
    }
    reader.readAsDataURL(files);
  }
  uploadFile1(event){
    let files =event.target.files[0];
    this.filename1=files.name
    console.log(this.filename1)
    let reader = new FileReader();
    let vm = this;
    reader.onloadend =()=> {
      this.form.story_image1= reader.result;
    }
    reader.readAsDataURL(files);
  }
  uploadFile2(event){
    let files =event.target.files[0];
    // console.log(files)
    this.filename2=files.name
    console.log(this.filename2)
    let reader = new FileReader();
    let vm = this;
    reader.onloadend =()=> {
      this.form.story_image2 = reader.result;
    }
    reader.readAsDataURL(files);
  }
  onSubmit() {
    console.log(this.form)
    this.Jarwis.stories(this.form).subscribe(
       data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }
  handleResponse(data) {
   // this.Token.handle(data.access_token);
    this.router.navigateByUrl('/stories');
    this.message='Post successfully'
  }
  handleError(error) {
    console.log(error)
    this.error = error.error.errors;
  }
  displaystories(){
    // this.response = this.Jarwis.det;
    // console.log(this.response);
    this.Jarwis.displaystories().subscribe(data=>{
      //console.log(data);
      this.response = data;
      // console.log(this.response.length);
    })
    
  }
  ngOnInit() {
   this.displaystories()
  }
  navigate(id){
    this.router.navigate(['story/'+id+''])
  }
}
