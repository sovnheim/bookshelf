// on importe les constantes dont on a besoin
import { getTopic } from '../data/topics.js';
import { LANGUAGES } from '../data/languages.js';
import { AUTHORS } from '../data/authors.js';
import { LEADS, ENDS, APPEARANCE } from '../data/flavors.js';
import { selectRandomItem } from '../modules/utils.js';

const AUTHOR_INSERT = ['expliquée par', 'selon', 'vu par', 'de'];

// on définit les propriétés de l'objet Book
export class Book {
  constructor() {
    this.language = selectRandomItem(LANGUAGES);
    this.topic = getTopic();
    this.appearance = selectRandomItem(APPEARANCE);
    this.author = selectRandomItem(AUTHORS);
  }

  get title() {
    const seed = Math.floor(Math.random() * 7);
    console.log(seed);
    if (seed >= 0 && seed <= 3) {
      return `${this.topic}`;
    } else if (seed == 4) {
      return `${selectRandomItem(LEADS)} ${this.topic}`;
    } else if (seed == 5) {
      return `${this.topic} ${selectRandomItem(ENDS)}`;
    } else if (seed == 6) {
      return `${this.topic} ${selectRandomItem(AUTHOR_INSERT)} ${this.author} `;
    }
  }

  get nbPages() {
    return Math.floor(Math.random() * 990 + 10);
  }

  get content() {
    return `<h2> ${this.title} </h2> <p> <b> Langue: </b> ${this.language}, <br/>
           <b> Author: </b> ${this.author} <br/> 
           <b> Topic: </b> ${this.topic} <br/>
           <b> Description: </b> L'ouvrage fait ${this.nbPages} pages et ressemble à ${this.appearance}</p>`;
  }
}

// on génère des propriétés de base de l'objet
export function getBook() {
  return new Book().content;
}
