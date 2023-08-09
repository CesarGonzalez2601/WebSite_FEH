import { Component } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-programas',
  templateUrl: './programas.component.html',
  styleUrls: ['./programas.component.css']
})
export class ProgramasComponent {
  constructor () {}
    ngOnInit(){
AOS.init();
    }
}
