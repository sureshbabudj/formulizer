import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RecursiveOperatorComponent } from './recursive-operator/recursive-operator.component';
import { DataService } from './data.service';
import { VisualizerComponent } from './visualizer/visualizer.component';
import { NodeComponent } from './node/node.component';
import { TreeComponent } from './tree/tree.component';
import { FnComponent } from './fn/fn.component';
import { OperatorComponent } from './operator/operator.component';
import { DropdownComponent } from './dropdown/dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    RecursiveOperatorComponent,
    VisualizerComponent,
    NodeComponent,
    TreeComponent,
    FnComponent,
    OperatorComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
