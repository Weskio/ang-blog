import { Injectable, signal } from '@angular/core';
import { UserInterface } from './user-interface';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  currentUserSig = signal<UserInterface | undefined | null>(undefined)


  constructor() { }
}
