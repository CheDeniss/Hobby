import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextServiceService } from '../text-service.service';
import { ImgServiceService } from '../img-service.service';

@Component({
  selector: 'app-hobby',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hobby.component.html',
  styleUrl: './hobby.component.css'
})

export class HobbyComponent {
  constructor(
    private textCont: TextServiceService,
    private imgCont: ImgServiceService
  ) {}

  arrOfHobbiesTextPart:{ name: string; text: string; }[] = []
  arrOfHobbiesImgPart: { essence_img: string; fam_img: string; }[] = []

ngOnInit(): void{
  this.arrOfHobbiesTextPart = this.textCont.getTextContent()
  this.arrOfHobbiesImgPart = this.imgCont.getImgContent()
}


  // arrOfHobbies = [
  //   { name: 'Малювання', text: 'Створюю картини за допомогою акрилових фарб.', essence_img: '../../assets/hobby-imgs/paint-ess.jpg', fam_img: '../../assets/hobby-imgs/paint-fam.gif' },
  //   { name: 'Готування', text: 'Експериментую з новими рецептами щодня.', essence_img: '../../assets/hobby-imgs/cook-ess.jpg', fam_img: '../../assets/hobby-imgs/cook-fam.jpg' },
  //   { name: 'Вишивка', text: 'Вишиваю хрестиком.', essence_img: '../../assets/hobby-imgs/needl-ess.jpg', fam_img: '../../assets/hobby-imgs/needl-fam.jpeg' },
  // ];
}
