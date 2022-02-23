import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-recursive-operator',
  templateUrl: './recursive-operator.component.html',
  styleUrls: ['./recursive-operator.component.css']
})
export class RecursiveOperatorComponent implements OnInit {

  readonly number = "NUMBER";
  readonly paren = "PAREN";
  readonly fn = "FUNCTION";
  readonly variable = "VARIABLE";

  readonly multiply = "MULTIPLICATION";
  readonly add = "ADDITION";
  readonly minus = "SUBTRACTION";
  readonly divide = "DIVISION";

  ops = {
    MULTIPLICATION: "*",
    ADDITION: "+",
    SUBTRACTION: "-",
    DIVISION: "/"
  }

  _syntaxTree;

  ready = false;
  isParen = false;

  operator = '';
  isFn = false;

  @Input()
  set syntaxTree(val) {
    if (!val) {
      return;
    }
    if (val.type === this.paren) {
      this._syntaxTree = val.expression;
      this.isParen = true;
    } else {
      this._syntaxTree = val;
    }
    // console.log("getting a new value", val);

    this.operator = this.getOperator();
    this.ready = !!Object.keys(val).length;
  }

  constructor(private readonly dataService: DataService) { }

  ngOnInit() { }

  getValue(node) {
    console.log(node);
    if (node.type === this.variable) {
      return node.name;
    }
    if (node.type === this.number) {
      return node.value;
    }
  }

  getOperator() {
    if (!this._syntaxTree || !this._syntaxTree.type) {
      return;
    }
    if (this.ops[this._syntaxTree.type]) {
      return this.ops[this._syntaxTree.type];
    }
    if (this._syntaxTree.type === this.fn) {
      this.isFn = true;
      return this._syntaxTree.name;
    }
  }


}
