import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule }   from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, SidebarComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'form-builder';
  data:any;
  form :any = [];
  formData:any={
    text:'',
    email:'',
    number:'',
    password:''
  }
  submittedForm:any=[]
  submittedData: any = {};

  onDrop(event: DragEvent): void {
    event.preventDefault();
    const data = event?.dataTransfer?.getData('text'); // Safely access dataTransfer
      if (data) {
    // Handle the dropped data or perform actions as needed
        this.form.push(data);
      }
  }

  // Prevent default behavior during drag over to allow dropping
  onDragOver(event: DragEvent): void {
    event.preventDefault();
  }

  onSubmit(): void {
    // Process or store the formData as needed
   this.submittedForm = this.form;
    this.submittedData = {...this.formData}
    this.formData = {}
  }

  onFieldChange(ind: number, value: any): void {
    this.formData[ind] = value;
  }

  onGetForm() {
    this.formData = this.submittedData;
  }
  
  onResetForm(){
    this.form=[];
    this.formData={};
  }

}
