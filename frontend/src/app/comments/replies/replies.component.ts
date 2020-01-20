import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../../services/jarwis.service';
import { Router, ActivatedRoute } from '@angular/router';
import {FormBuilder,Validators} from '@angular/forms';
import { VirtualTimeScheduler } from 'rxjs';
@Component({
  selector: 'app-replies',
  templateUrl: './replies.component.html',
  styleUrls: ['./replies.component.css']
})
export class RepliesComponent implements OnInit {
  public form = {
    post_id:null,
    reply_name: null,
    reply_comment: null
   
  };
  post_id: any;
  res: Object;
  message: string;
  error: any;
  constructor(private Jarwis: JarwisService,private router: Router,public actRoute: ActivatedRoute,
  private fb: FormBuilder) { }

  // logingdata=this.fb.group({
  //   email:['',[Validators.required,Validators.email]],
  //   pass:['',[Validators.required]]
  // })

  // get email(){
  //   return this.logingdata.get('email');
  // }

  // get pas(){
  //   return this.logingdata.get('pass');
  // }
  onSubmit() {
    
    this.form.post_id=this.post_id
    console.log(this.form)
    this.Jarwis.addpost(this.form).subscribe(
       data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }
  handleResponse(data) {
   // this.Token.handle(data.access_token);
    // this.router.navigateByUrl('/stories');
    this.message='Post successfully';
    this.form.reply_comment=""
    this.form.reply_name=""
  }
  handleError(error) {
    console.log(error)
    this.error =" error.error.errors";
  }
  ngOnInit() {
    this.actRoute.paramMap.subscribe((params => {
      //console.log(this.shop_id)
      this.post_id = params.get('id');
      console.log(this.post_id )
    this.Jarwis.post(this.post_id).subscribe(data=>{
     this.res = data;
    // console.log(this.res)
    // this.det=this.res[0];
   console.log(this.res);
  })
    }));
  }
  // navigate(id){
  //   this.router.navigate(['replies/'+id+''])
  // }

}
