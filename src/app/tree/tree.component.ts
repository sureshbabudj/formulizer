import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {

  @Input() tree = {};
  @Input() operator;
  @Input() isParen = false;
  @Output() changeOperator = new EventEmitter();

  showParen = false;


  constructor() { }

  ngOnInit() {
  }

}
