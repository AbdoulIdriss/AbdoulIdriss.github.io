import { Component, OnInit } from '@angular/core';
import { ModalService } from '../auth/Services/modal.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  bookInModal: any = null;

  constructor(
    private modalService: ModalService,
    router:Router
  ) { }

  display$!: Observable<'open' | 'close'>;

  read(){
    this.Books[4]
  }

  Books = [
    {
      id: 1,
      title: 'African Dominion',
      image: "/assets/African_Dominion__A_New_History_of_Empire_in_Early_and_Medieval_West_Africa_150x250.png",
      description: 'M Alis Mansā sUlAymān could hardly have anticipated the consequences. The mid-eighth/fourteenth-century Muslim ruler of what may have been the most extensive realm Africa has ever known had deposed and imprisoned his chief wife Qāsā, but developments following',
      path:"/assets/African Dominion_ A New History of Empire in Early and Medieval West Africa - PDF Room.pdf"
    },
    {
      id: 2,
      title: 'Cest le Soleil qui ma...',
      image: "/assets/CALIXTHE_BEYALA_150x250.jpg",
      path:''
    },
    {
      id: 3,
      title: 'Traditional Wedding in.',
      image: "/assets/Traditional_Wedding_in_Cameroon_150x250.jpeg",
      path:''
    },
    {
      id: 4,
      title: 'African A. Herbalism',
      image: "/assets/African_American_Herbalism__A_Practical_Guide_To_Healing_Pl____150x250.jpeg",
      path:''
    },
    {
      id: 5,
      title: 'The Dangerous bridge',
      image: "/assets/The_Dangerous_Bridge__A_Cameroonian_Story_150x250.jpeg",
      path:''
    },
    {
      id: 6,
      title: 'Short Journey Cameroon',
      image: "/assets/Short Journeys_ Cameroon.jpeg",
      path:''
    },
    {
      id: 7,
      title: 'The End of French Rule...',
      image: "/assets/The_End_of_French_Rule_in_Cameroon_by_Martin_Atangana_Paperback___Indigo_Chapters_150x250.jpeg",
      path:''
    },
    {
      id: 8,
      title: 'Le Contrepied de Foe',
      image: "/assets/Le_Contrepied_de_Foe_150x250.jpeg",
      path:''
    },
    {
      id: 9,
      title: 'The Food of Moroco',
      image: "/assets/moroco_150x250.jpg",

    },
    {
      id: 10,
      title: 'Ville Cruelle',
      image: "/assets/c5fd40cd-9ec3-42f1-bda1-ef687fa8b628_150x250.jpeg",
      path:''
    },
    {
      id: 11,
      title: 'The Shackled Continent',
      image: "/assets/continent_150x250.jpg",
      path:''
    },
    {
      id: 12,
      title: 'The Shackled Continent',
      image: "/assets/continent_150x250.jpg",
      path:''
    },

  ]

  ngOnInit(): void {

    this.display$ = this.modalService.watch()
  }

  open(book: any) {

    this.bookInModal = book;
    this.modalService.open()
  }

  close() {

    this.modalService.close()
    this.bookInModal = null;
  }

}
