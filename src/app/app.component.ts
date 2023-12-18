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
    console.log("here");
    const data = event?.dataTransfer?.getData('text'); // Safely access dataTransfer
    console.log(event);
      if (data) {
    // Handle the dropped data or perform actions as needed
        this.form.push(data);
        console.log("data",this.form)
      }
  }

  // Prevent default behavior during drag over to allow dropping
  onDragOver(event: DragEvent): void {
    event.preventDefault();
  }

  onSubmit(): void {
    console.log('Form Data:', this.form,this.formData);
    // Process or store the formData as needed
   this.submittedForm = this.form;
    this.submittedData = {...this.formData}
    this.formData = {}
  }

  onFieldChange(ind: number, value: any): void {
    this.formData[ind] = value;
    // this.formData = {}
  }

  onGetForm() {
    this.formData = this.submittedData;
    console.log("sub",this.form,this.formData)
    // this.form = [ ...Object.keys(this.submittedData) ]; // Populate form data from submittedData
  }
  
  onResetForm(){
    this.form=[];
    this.formData={};
  }

}
