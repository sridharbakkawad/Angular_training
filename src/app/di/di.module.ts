import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductComponent } from './product.component';

@NgModule({
    imports: [ FormsModule, CommonModule ],
    declarations: [ ProductComponent ],
    exports:    [ ProductComponent ]
    // providers: [ProductService]
})
export class DIModule { }