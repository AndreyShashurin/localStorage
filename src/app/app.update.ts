import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.update.html'
})
export class UpdateComponent implements OnInit {
    detailsForm: FormGroup;
    param: string;
    index: number;
	private arraylocalStorage = [];	
	private arraylocalStorageAll = [];	

	constructor(
		private route: ActivatedRoute,
        private formBuilder: FormBuilder
    ) {}
	
	ngOnInit() {  
		this.param = this.route.snapshot.params['id'];

	  this.arraylocalStorageAll.push(JSON.parse(localStorage.getItem("arraylocalStorage")));
	    for(let i = 0; i<JSON.parse(localStorage.getItem("arraylocalStorage")).length; i++){
	    	if(JSON.parse(localStorage.getItem("arraylocalStorage"))[i].id === this.param){
	    		this.index = i;
	    		this.arraylocalStorage.push(JSON.parse(localStorage.getItem("arraylocalStorage"))[i]);
	    	}
	    }
	    this.detailsForm = this.formBuilder.group({
	      name: [this.arraylocalStorage[0].author ? this.arraylocalStorage[0].author['fio'] : ''],
	      docName: [this.arraylocalStorage[0].docName]
	    });	    
	}

	save(event){
	    for(let i = 0; i<this.arraylocalStorageAll.length; i++){
	    	if(this.arraylocalStorageAll[i][this.index].id === this.param){
	    		this.arraylocalStorageAll[i][this.index].docName = this.detailsForm.value.name;
	    		this.arraylocalStorageAll[i][this.index].author['fio'] = this.detailsForm.value.docName;
	    	}
	    }     
	 	localStorage.setItem("arraylocalStorage",JSON.stringify(this.arraylocalStorageAll[0]));

    }
}
