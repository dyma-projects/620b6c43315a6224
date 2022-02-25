import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {

  @Output() changementCompteur = new EventEmitter();
  @Input() valeur: number;

  constructor() { }

  ngOnInit() {
  }
  
  incrementer() {
    this.valeur++;
    this.changementCompteur.emit(this.valeur);
  }

  decrementer() {
    this.valeur--;
    this.changementCompteur.emit(this.valeur);
  }


}
