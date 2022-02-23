import { Injectable, Input } from '@angular/core';

@Injectable()
export class DataService {

  readonly number = "NUMBER";
  readonly paren = "PAREN";
  readonly fn = "FUNCTION";
  readonly variable = "VARIABLE";

  ops = {
    MULTIPLICATION: "*",
    ADDITION: "+",
    SUBTRACTION: "-",
    DIVISION: "/"
  }

  highLightedTarget = null;

  syntaxTree;
  showAddNewDropdown = false;

  constructor() { }

  evaluate(a, b, type) {
    if (type == "ADDITION") {
      return a + b;
    }

    if (type == "SUBTRACTION") {
      return a - b;
    }

    if (type == "MULTIPLICATION") {
      return a * b;
    }

    if (type == "DIVISION") {
      return a / b;
    }

    return "Something Wrong Happened....";
  }

  convertAstToFormula(syntaxTree) {
    let formula = "";
    if (!syntaxTree) {
      return;
    }
    if (syntaxTree.type === this.paren) {
      formula += `(${this.convertAstToFormula(syntaxTree.expression)})`;
    } else if (syntaxTree.type === this.number) {
      formula += syntaxTree.value;
    } else if (syntaxTree.type === this.variable) {
      formula += syntaxTree.name;
    } else if (syntaxTree.type === this.fn) {
      let fnFormula = "";
      syntaxTree.arguments.forEach(arg => {
        fnFormula += this.convertAstToFormula(arg);
      });
      formula += `${syntaxTree.name}(${fnFormula})`;
    } else {
      formula += `${this.convertAstToFormula(syntaxTree.left)} ${this.ops[syntaxTree.type]} ${this.convertAstToFormula(syntaxTree.right)}`;
    }
    return formula;
  }

  reRender() {

  }

}
