import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: "./dropdown.component.html",
  styleUrls: ["./dropdown.component.css"]
})
export class DropdownComponent {
  @Input() values: DropdownValue[];

  @Output() select: EventEmitter<any>;

  constructor() {
    this.select = new EventEmitter();
  }

  selectItem(value) {
    this.select.emit(value);
  }
}


export class DropdownValue {
  value: string;
  label: string;

  constructor(value: string, label: string) {
    this.value = value;
    this.label = label;
  }
}

