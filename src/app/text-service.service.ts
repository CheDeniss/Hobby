import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextServiceService {
  textContent = [
    { name: 'Малювання', text: 'Створюю картини за допомогою акрилових фарб.'},
    { name: 'Готування', text: 'Експериментую з новими рецептами щодня.'},
    { name: 'Вишивка', text: 'Вишиваю хрестиком.'},
  ];

  getTextContent(){
    return this.textContent
  }
}
