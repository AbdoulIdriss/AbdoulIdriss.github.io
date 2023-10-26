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
    private router: Router
  ) { }

  display$!: Observable<'open' | 'close'>;

  navigate(val: string) {
    console.log(val);

    this.router.navigateByUrl(val)

  }
  Books = [
    {
      id: 1,
      title: 'African Dominion',
      image: "/assets/African_Dominion__A_New_History_of_Empire_in_Early_and_Medieval_West_Africa_150x250.png",
      description: 'M Alis Mansā sUlAymān could hardly have anticipated the consequences. The mid-eighth/fourteenth-century Muslim ruler of what may have been the most extensive realm Africa has ever known had deposed and imprisoned his chief wife Qāsā, but developments following',
      path: "https://www.worldcat.org/title/1003587029"
    },
    {
      id: 2,
      title: 'Cest le Soleil qui ma...',
      image: "/assets/CALIXTHE_BEYALA_150x250.jpg",
      description: 'Cameroun. Chaleur humide, ciel hypnotique. Dans le bidonville où elle a grandi, abandonnée par sa mère, Ateba cherche avec désespoir sa place dans une société où la femme na quun droit : se taire. Ecartelée entre plusieurs sentiments contraires, la jeune fille, le ventre en feu, la haine au cœur, est certaine quelle peut devenir un jour la plus forte. ',
      path: 'https://booknode.com/cest_le_soleil_qui_ma_brulee_09883'
    },
    {
      id: 3,
      title: 'Traditional Wedding in.',
      image: "/assets/Traditional_Wedding_in_Cameroon_150x250.jpeg",
      description: 'Getting married in Cameroon involves a series of steps and processes, which generally are categorized into three. However, the primary step is what we refer to as “door knocking. It is a process where the groom and his family go to the brides family to inform them about their intention to marry their daughter.',
      path: 'https://www.thetravelerbutterfly.com/post/traditional-wedding-in-cameroon'
    },
    {
      id: 4,
      title: 'African A. Herbalism',
      image: "/assets/African_American_Herbalism__A_Practical_Guide_To_Healing_Pl____150x250.jpeg",
      description: 'This first-of-its-kind herbal guide takes you through the origins of herbal practices rooted in African American tradition--from Ancient Egypt and the African tropics to the Caribbean and the United States. Inside youll find the stories of herbal healers like Emma Dupree and Henrietta Jeffries, ',
      path: 'https://www.worldcat.org/title/1281134083'
    },
    {
      id: 5,
      title: 'The Dangerous bridge',
      image: "/assets/The_Dangerous_Bridge__A_Cameroonian_Story_150x250.jpeg",
      description: 'An ex-service man of the famous British West African Frontier Force comes back to devote himself as a benevolent worker.James Walker Gray realises he needs a youngman to help facilitate his work.This is how he comes in contact with Ekema or Otto Von Wilhem, a much respected Mokpe man, for help. ',
      path: 'https://www.scribd.com/book/388253494/The-Dangerous-Bridge-A-Cameroonian-Story'
    },
    {
      id: 6,
      title: 'Short Journey Cameroon',
      image: "/assets/Short Journeys_ Cameroon.jpeg",
      description:'Cameroon is nestled away below Nigeria in West Africa. People know Cameroon for football, and perhaps not much else as far as the rest of the world is concerned, but for the traveller and backpacker Cameroon is full of beauty and friendly people. It is a hidden gem in a region of the world that gets few visitors at present.',
      path: 'https://andysworldjourneys.com/ebooks/short-journeys/short-journeys-cameroon/'
    },
    {
      id: 7,
      title: 'The End of French Rule..',
      image: "/assets/The_End_of_French_Rule_in_Cameroon_by_Martin_Atangana_Paperback___Indigo_Chapters_150x250.jpeg",
      description:'Introduction Political and economic development in Cameroon in the post war era, 1946-1956 2. The implementation of the Loi cadre, 1957 3. The recognition of Cameroons option for independence, 1958 4. The transition and transfer of power, 1959-1960 Conclusion',
      path: 'https://www.worldcat.org/title/1090068007'
    },
    {
      id: 8,
      title: 'Le Contrepied de Foe',
      image: "/assets/Le_Contrepied_de_Foe_150x250.jpeg",
      description:'Le Contrepied de Foé est le nouveau one-shot des auteurs de Lip, Laurent Galandon et Damien Vidal. Ils nous content le parcours dUrbain, jeune passionné de football au Cameroun, dont les rêves de gloire vont être exploités par un agent véreux. Le voici abandonné à Paris, sans papiers et sans un sou en poche',
      path: 'https://takamtikou.bnf.fr/bibliographies/notices/afrique/le-contrepied-de-foe'
    },
    {
      id: 9,
      title: 'The Food of Moroco',
      description:'A labor of love over forty years in the making, The Food of Morocco is a once-in-a-lifetime book of uncommon scope and authenticity, a classic in the making that is an essential work for every serious cook, anyone interested in Moroccan cuisine, and discerning armchair travelers.',
      image: "/assets/moroco_150x250.jpg",
      path:'https://www.worldcat.org/title/793213717'

    },
    {
      id: 10,
      title: 'Ville Cruelle',
      description:'Dans ce premier roman publié sous le pseudonyme dEza Boto, le lecteur découvrira, tracés avec une force qui saccomplira exemplairement dans les œuvres postérieures, fort célèbres, de Mongo Béti, les drames dune Afrique dominée, ceux qui opposent les humbles, les simples, les paysans, aux différents types dexploiteurs du monde politique, économique et religieux.',
      image: "/assets/c5fd40cd-9ec3-42f1-bda1-ef687fa8b628_150x250.jpeg",
      path: 'https://www.presenceafricaine.com/romans-litterature-africaine-caraibes/449-ville-cruelle-2708702629.html'
    },
    {
      id: 11,
      title: 'The Shackled Continent',
      image: "/assets/continent_150x250.jpg",
      description:'The Shackled Continent, Robert Guests fascinating first book, seeks to diagnose the sickness that continues to hobble Africas development. Using reportage, first hand experience and economic insight, Robert Guest takes us to the roots of the problems. Two fifths of African nations are at war, ',
      path: 'https://www.worldcat.org/title/1325299576'
    },
    {
      id: 12,
      title: 'The Shackled Continent',
      image: "/assets/CVT_LONGINGS-OF-JENDE-JONGA_8752_150x250.webp",
      description:'Aux États-Unis et au Cameroun, en 2007.Nous sommes à lautomne 2007 à New York et Jende Jonga, un immigrant illégal dorigine camerounaise, est en passe de réaliser son rêve : après avoir été plongeur et chauffeur de taxis, il vient de décrocher un emploi de chauffeur pour Clark Edwards, riche banquier à la Lehman Brothers.  : ,',
      path: 'https://www.babelio.com/livres/Mbue-Voici-venir-les-reveurs/846024'
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
