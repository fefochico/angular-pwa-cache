import { Component, OnInit } from '@angular/core';
import { PaisInterface } from 'src/app/iterfaces/paises';
import { PaisesService } from 'src/app/services/paises.service';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit{
  public paises: PaisInterface[]=[]
  constructor(private paisService: PaisesService){}

  ngOnInit(){
    this.paisService.getPaises()
    .then(paises => this.paises =paises)
  }
}
