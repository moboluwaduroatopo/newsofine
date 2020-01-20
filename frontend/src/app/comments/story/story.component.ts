import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { JarwisService } from '../../services/jarwis.service';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {
  public form = {
    stories_id:null,
    story_name: null,
    comment: null
   
  };
  stories_id: any;
  res: Object;
  message: string;
  error: any;
  constructor(private Jarwis: JarwisService,private router: Router,public actRoute: ActivatedRoute) { }
  onSubmit() {
    this.form.stories_id=this.stories_id
    console.log(this.form)
    this.Jarwis.addstory(this.form).subscribe(
       data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }
  handleResponse(data) {
   // this.Token.handle(data.access_token);
    // this.router.navigateByUrl('/stories');
    this.message='Post successfully';
    this.form.comment=""
    this.form.story_name=""
  }
  handleError(error) {
    console.log(error)
    this.error = error.error.errors;
  }
  ngOnInit() {
    this.actRoute.paramMap.subscribe((params => {
      //console.log(this.shop_id)
      this.stories_id = params.get('id');
      console.log(this.stories_id )
    this.Jarwis.story(this.stories_id).subscribe(data=>{
     this.res = data;
    // console.log(this.res)
    // this.det=this.res[0];
   console.log(this.res);
  })
    }));
  }
  navigate(id){
    this.router.navigate(['replies/'+id+''])
  }
}
