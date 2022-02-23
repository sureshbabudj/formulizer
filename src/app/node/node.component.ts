import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.css']
})
export class NodeComponent implements OnInit {

  readonly number = "NUMBER";
  readonly paren = "PAREN";
  readonly fn = "FUNCTION";
  readonly variable = "VARIABLE";

  @Input() node;
  @Input() isArg = false;

  formGroup: FormGroup;

  constructor() { }

  ngOnInit() {
    if (this.node.type === this.variable) {
      this.formGroup = new FormGroup({
        [this.node.name]: new FormControl()
      });
    }
  }

}
