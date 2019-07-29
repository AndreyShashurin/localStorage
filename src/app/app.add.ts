import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.add.html'
})
export class AddComponent implements OnInit {
  detailsForm: FormGroup;
  param: string;
  days: any;
  month: any;
  position: any;
  result: any;
  getNormalDate: any;
  getRandomId: any;
  dateFormat: any;
	private arraylocalStorage = [];
  private arraylocalStorageAll = [];  
  newName = new FormControl();
  newDescription = new FormControl();
  private jsonArray = [];

	constructor(
		private router: Router,
        protected formBuilder: FormBuilder
    ) {}

	ngOnInit() {  
    this.arraylocalStorageAll.push(JSON.parse(localStorage.getItem("arraylocalStorage")));
     
   this.detailsForm = this.formBuilder.group({
      newName: [''],
      newDescription: ['']
    }); 
	}
  
  setNormalDateNow() {
    var date = new Date();
    var options = {
      year: 'numeric',
      day: 'numeric',
      month: 'numeric'
    };
    this.days = date.getDay();
    this.dateFormat = date.toLocaleString("ru", options).split('.') ;
    return this.dateFormat[2]+"/"+this.dateFormat[0]+"/"+this.dateFormat[1];
  };

  setRandomId() {
    var result = '';
    var words  = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
    var max_position = words.length - 1;
    for(let i = 0; i < 16; ++i ) {
      this.position = Math.floor ( Math.random() * max_position );
      this.result = result + words.substring(this.position, this.position + 16);
    }
    return this.result;
  }

	save(){    
    this.getNormalDate = this.setNormalDateNow();
    this.getRandomId = this.setRandomId();
    this.arraylocalStorageAll[0].push({ 
      "id": this.getRandomId,
      "author": { "account": "semenov_gn", "fio": this.detailsForm.value.newName, "post": "Главный специалист" }, 
      "docCode": "93rdd6y56gn5t1xdgxm1ow9m9z9rq7ip", 
      "docDate": this.getNormalDate, 
      "docName": this.detailsForm.value.newDescription, 
      "docType": "request", 
      "address": "г. Москва, ул. Академика Королева, 32", 
      "status": "registred", 
      "isSpecial": true
    });
    this.detailsForm = this.formBuilder.group({
        newName: [''],
        newDescription: ['']
    });       
    localStorage.setItem("arraylocalStorage",JSON.stringify(this.arraylocalStorageAll[0]));
    this.router.navigate(['']);
	}
}
