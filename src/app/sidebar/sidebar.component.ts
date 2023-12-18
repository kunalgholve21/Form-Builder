import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent { 
  formConfigTemplate = [
    {
      type: 'email',
    },
    {
      type: 'text',
    },
    {
      type:'number',
    },
    {
      type: 'password'
    }
  ];

  onDrag(ev:DragEvent, type: string){
    console.log("dragged");
    ev.dataTransfer?.setData("text",type)
  }
}
