import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Visitor } from '../../services/interfaces/visitor';
import { VisitorServicesService } from '../../services/visitorService/visitor-services.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-visitor-create',
  standalone: true,
   imports: [CommonModule, RouterModule,FormsModule ],
  templateUrl: './visitor-create.component.html',
  styleUrls: ['./visitor-create.component.scss']
})
export class VisitorCreateComponent implements OnInit {

  visitorData: Visitor = {
    name: '',
    phone: '',
    relation: '',
    date: '',
    status: 'upcoming',
    imageUrl: ''
  };

  constructor(private router: Router, private visitorService: VisitorServicesService) {}

  ngOnInit(): void {}

  isFormValid(): boolean {
    return this.visitorData.name.trim() !== '' && 
           this.visitorData.phone.trim() !== '' && 
           this.visitorData.relation !== '';
  }

  changePhoto() {
    console.log('Cambiar foto clickeado');
  }

  saveVisitor() {
    if (this.isFormValid()) {
      this.visitorService.addVisitor(this.visitorData).subscribe(() => {
        console.log('Visitante guardado:', this.visitorData);
        this.router.navigate(['/visitor-list']); 
      });
    }
  }
  goBack() {
    this.router.navigate(['/visitor-list']);
  }
}
