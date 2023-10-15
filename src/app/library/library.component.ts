import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit{

  constructor(private activatedRoute:ActivatedRoute){}

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((params:any) => {})
    
  }
}
