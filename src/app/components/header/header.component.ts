import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = "Le Gege's first Angular app";
  showAddTask:boolean = false;

  constructor(private UiService:UiService) {
    this.UiService.onToggle().subscribe(value => {
      this.showAddTask = value
    })
  }

  ngOnInit(): void {
  }

  toggleAddTask = () => {
   this.UiService.toggleAddTask(); 
  }
}
