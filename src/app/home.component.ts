import { Component, OnInit, Pipe } from '@angular/core';
import { Router } from '@angular/router';
import { AppModule } from './app.module';
import { PagerService } from './pager.service';

@Component({
	selector: 'app-root', 
  styleUrls: ['./app.component.scss'],
    templateUrl: './app.component.html'
})
export class HomeComponent implements OnInit {
	private arraylocalStorage = [];
	pager: any = {};    
    private allItems: any[];
    pagedItems: any[];
	private jsonArray = [
		{ 
			"id": "yok0cpn5g7j0n1ck",
			"author": { "account": "semenov_gn", "fio": "Семенов Геннадий Николаевич", "post": "Главный специалист" }, 
			"docCode": "bchqihg90v6viqq1ogak93dffrke19gm", 
			"docDate": "2018/09/30", 
			"docName": "Заявление о внесении в реестр №271", 
			"docType": "request", 
			"address": "г. Москва, ул. Академика Королева, 32", 
			"status": "registred", "isSpecial": true
		}, 
		{ 
			"id": "xyxepbuv9s45ake7", 
			"author": { "account": "antonov_ds", "fio": "Антонов Дмитрий Сергеевич", "post": "Специалист" },
			"docCode": "ag4r795cevrlmozxvtjfbjyw79ve1f7f",
			"docDate": "2018/08/27", 
			"docName": "Свидетельство об утверждении проекта планировки №0028", 
			"docType": "certificate", 
			"address": "г. Москва, 2-й Южнопортовый проезд, 19к1", 
			"status": "accepted", "isSpecial": false 
		},
		{
			"id": "a1thght7p61v5mev", 
			"author": null, 
			"docCode": "93rdd6y56gn5t1xdgxm1ow9m9z9rq7ip",
			"docDate": "2018/10/02", 
			"docName": "Заявление о внесении в реестр №272", 
			"docType": "certificate", 
			"address": "г. Москва, Партийный пер., 7с2", 
			"status": "registred", 
			"isSpecial": false 
		}
	];
	
	constructor(
		private router: Router, 
		private pagerService: PagerService
	) {}

	ngOnInit() {
		if(localStorage.getItem("arraylocalStorage")){
			this.arraylocalStorage.push(JSON.parse(localStorage.getItem("arraylocalStorage")));
		} else{
			localStorage.setItem("arraylocalStorage", JSON.stringify(this.jsonArray));
			this.arraylocalStorage.push(JSON.parse(localStorage.getItem("arraylocalStorage")));
		}
		this.setPage(1);
		this.allItems = JSON.parse(localStorage.getItem("arraylocalStorage"));
	}

	transform(array: Array<string>): Array<string> {
	    array.sort((a: any, b: any) => {
	     	if (a.docDate < b.docDate) {
	        	return 1;
	    	} else if (a.docDate > b.docDate) {
	        	return -1;
	    	} else {
	       		return 0;
	    	}
	    });
		return array;
	}

    setPage(page: number) {
        this.transform(this.arraylocalStorage[0]);
        this.pager = this.pagerService.getPager(this.arraylocalStorage[0].length, page);
        this.pagedItems = this.arraylocalStorage[0].slice(this.pager.startIndex, this.pager.endIndex + 1);
	}
	
	delete(event){
		var details = JSON.parse(localStorage.getItem('arraylocalStorage'));
		details = details.filter(function(e) {
		  return e.id !== event.id;
		});
		localStorage.setItem('arraylocalStorage', JSON.stringify(details));
		this.router.navigate(['']);
    }
}