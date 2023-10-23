import { Injectable } from '@angular/core';
import { LocalstorageService } from '../auth/Services/localstorage.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FavsService {

  constructor(
    private localStorage: LocalstorageService,
    router:Router
  ) { }

}
