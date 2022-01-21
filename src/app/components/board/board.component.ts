import { Component, OnInit } from '@angular/core';
import { HeroeServiceService } from 'src/app/services/heroe-service.service';
import { Heroe } from "../../interfaces/heroe";


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  heroes:Heroe[] = [];
  search = "";
  constructor(private dataHeroe:HeroeServiceService) {

   }

  ngOnInit(): void {
    this.dataHeroe.getAll().subscribe( res => {
      this.heroes = res;
    })
  }

}
