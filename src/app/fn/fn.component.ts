import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-fn',
  templateUrl: './fn.component.html',
  styleUrls: ['./fn.component.css']
})
export class FnComponent implements OnInit {

  @Input() operator;
  @Input() tree = {};
  @Output() changeOperator = new EventEmitter();

  showParen = false;

  constructor() { }

  ngOnInit() {
  }

}
