import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.css']
})
export class OperatorComponent implements OnInit {

  operators = ["*", "+", "-", "/"];

  @Input() operator;
  @Input() isFn = false;
  @Output() changeOperator = new EventEmitter();

  constructor() { }

  ngOnInit() {
    if (this.isFn) {
      this.operators = ["SQR", "SQRT", "SIN", "COS", "TAN", "LOG", "LN", "EXP", "ABS", "RND"];
    }
  }

  onChangeOperator(e) {
    this.operator = e.target.value;
    this.changeOperator.emit(e.target.value);
  }

}
