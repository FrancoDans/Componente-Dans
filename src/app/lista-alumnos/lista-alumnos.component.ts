import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit {
  estudiantes=[
    {
     nombre:'Noelia',
    nota:7,
    curso: 'Angular'
  },
    
    {
      nombre: 'Martina'
    ,nota:10,
    curso: 'React'
  },
    
    {
      nombre:'Micaela',
      nota:8,
      curso: 'Vue'
    },
    {
      nombre:'Jose',
      nota:3,
      curso: 'Vue'
    },
    {
      nombre:'Matias',
      nota:6,
      curso: 'JavaScript'
    },{
      nombre:'Franco',
      nota:10,
      curso: 'Desarrollo Web'
    }]
  constructor() { }

  ngOnInit() {
  }

}
