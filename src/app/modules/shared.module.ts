import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileSelectDirective } from 'ng2-file-upload';

@NgModule({
    declarations: [
        FileSelectDirective,
        
    ],
    imports: [

    ],
    exports: [
        FileSelectDirective,
        
    ]
})
export class SharedModule {
}