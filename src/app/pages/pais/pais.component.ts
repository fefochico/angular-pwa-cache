import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaisInterface } from 'src/app/iterfaces/paises';
import { PaisesService } from 'src/app/services/paises.service';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
export class PaisComponent implements OnInit {
  public pais: PaisInterface | undefined = undefined;
  constructor(private paisesService: PaisesService, private activatedRoute: ActivatedRoute, private router: Router){}

  ngOnInit(){
    const id = this.activatedRoute.snapshot.paramMap.get('id') || '';
    this.paisesService.getPaisById(id)
    .then(pais => {
      if(!pais) this.router.navigateByUrl('/');
      else this.pais = pais;
      console.log(pais)
    })
  }
}
