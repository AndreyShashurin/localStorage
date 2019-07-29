import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.detail.html'
})
export class AppDetailComponent implements OnInit {
    param: string;
	private arraylocalStorage = [];
	
	constructor(private route: ActivatedRoute) {}

	ngOnInit() {  
		this.param = this.route.snapshot.params['id'];
	    for(let i = 0; i<JSON.parse(localStorage.getItem("arraylocalStorage")).length; i++){
	    	if(JSON.parse(localStorage.getItem("arraylocalStorage"))[i].id === this.param){
	    		this.arraylocalStorage.push(JSON.parse(localStorage.getItem("arraylocalStorage"))[i]);
	    	}
	    }
	}

}
