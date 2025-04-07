import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-visitors',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './visitors.component.html',
  styleUrl: './visitors.component.scss'
})
export class VisitorsComponent {

    visitors: any[] = []; 
  
    constructor() {}
  
    onAddVisitor(): void {
      console.log('boton añadir visitante');
      
    }
}
