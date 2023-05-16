import { Component, OnInit } from '@angular/core';
import { Cafes } from '../cafes';
import { CafesService } from '../cafes.service';
import { CafesComponent } from '../cafes.component';

@Component({
  selector: 'app-cafe-list',
  templateUrl: './cafe-list.component.html',
  styleUrls: ['./cafe-list.component.css']
})



export class CafeListComponent implements OnInit {

  cafes: Array<CafesComponent>=[];

  constructor(private cafesService: CafesService) { }
  getCafes(): void {
    this.cafesService.getCafes().subscribe((cafes) => {
      this.cafes = cafes;
    });
  }


  ngOnInit() {
  }

}
