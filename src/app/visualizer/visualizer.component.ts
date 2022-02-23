import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';

function random_rgba() {
  var o = Math.round, r = Math.random, s = 255;
  return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ', 0.15 )';
}


@Component({
  selector: 'app-visualizer',
  templateUrl: './visualizer.component.html',
  styleUrls: ['./visualizer.component.css']
})
export class VisualizerComponent implements OnInit {

  readonly number = "NUMBER";
  readonly paren = "PAREN";
  readonly fn = "FUNCTION";
  readonly variable = "VARIABLE";

  readonly multiply = "MULTIPLICATION";
  readonly add = "ADDITION";
  readonly minus = "SUBTRACTION";
  readonly divide = "DIVISION";

  bgColor = random_rgba();

  dropdownValues = ["Addition", "Subtraction", "Multiplication", "Division", "SQR", "SQRT", "SIN", "COS", "TAN", "LOG", "LN", "EXP", "ABS", "RND"];

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

  @ViewChild('mainEl') mainEl: ElementRef;

  @Input()
  set syntaxTree(val) {
    if (!val) {
      this.ready = false;
      return;
    }
    if (val.type === this.paren) {
      this._syntaxTree = val.expression;
      this.isParen = true;
    } else {
      this._syntaxTree = val;
    }

    this.operator = this.getOperator();
    this.ready = !!Object.keys(val).length;
  }

  @Input() isArg = false;
  @Input() isRoot = false;

  constructor(public readonly dataService: DataService) { }

  ngOnInit() { }

  ngAfterViewInit() {
    console.log(this.mainEl)
  }

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

  highlight(e: MouseEvent) {
    e.stopPropagation();
    this.dataService.highLightedTarget = e.currentTarget;
  }

  highlighter() {
    return this.mainEl && this.dataService.highLightedTarget && this.dataService.highLightedTarget === this.mainEl.nativeElement;
  }

  toggleAddNewDropdown() {
    this.dataService.showAddNewDropdown = !this.dataService.showAddNewDropdown;
  }

  addNew(e) {
    console.log("add new", e);
    this.toggleAddNewDropdown();
  }

  remove() {
    this._syntaxTree = null;
  }

  onChangeOperator(e) {
    const { operator, isFn } = e;
    console.log("onChangeOperator", operator);
    if (isFn) {
      this._syntaxTree.name = operator;
    } else {
      const keys = Object.keys(this.ops);
      keys.forEach(key => {
        if (this.ops[key] === operator) {
          this._syntaxTree.type = key;
        }
      });
    }
    console.log(this._syntaxTree);
  }

}
