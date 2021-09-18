import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarlinksService {
  links= ['الرئيسيه', 'الفكرة', 'من نحن', 'المعطيات والاحصائيات', 'تواصل معنا'];
  constructor() {
   }
  
}
