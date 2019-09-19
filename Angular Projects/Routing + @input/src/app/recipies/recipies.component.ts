import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.css']
})
export class RecipiesComponent implements OnInit {

  constructor() { }
recipies=[
  {
    name:'Pani Puri',
    img:'https://image.shutterstock.com/image-photo/panipuri-golgappa-common-street-snack-260nw-1133137268.jpg',
    description:'It consists of a round, hollow puri, deep-fried crisp crepe and filled with a mixture of flavored water (known as imli pani), tamarind chutney, chili, chaat masala, potato, onion or chickpeas.'
  },
  {
    name:'Noodles',
    img:'https://image.shutterstock.com/image-photo/hand-uses-chopsticks-pickup-tasty-260nw-721269526.jpg',
    description:'Pan fried Thai rice noodles with tofu, bean sprouts, green onions, dried daikon radish and egg, served with extra fresh bean sprouts, slice of lime and crushed peanuts on the side. ... Crystal noodles with garlic, onion, cabbage, carrots, tomatoes and mushroom, stir fried in light soy bean sauce'
  },
  {
    name:'Dal',
    img:'https://media-public.canva.com/MABySsQdqzQ/1/thumbnail_large.jpg',
    description:'Dal makhani or dal makhni (pronounced daal makh-nee, "buttery lentils") is a dish originating from the Indian subcontinent, notably in the Punjab region. The primary ingredients are whole black lentil (urad), red kidney beans (rajma), butter and cream.'
  },
  {
    name:'Poori',
    img:'https://image.shutterstock.com/image-photo/poori-puri-260nw-1156980631.jpg',
    description:'Puri bhaji (sometimes spelled poori bhaji) is a dish, originating from the Indian subcontinent, of puri (deep-fried rounds of flour) and aloo (potato) bhaji (a spiced potato dish which may be dry or curried).'
  },
  {
    name:'Dosa',
    img:'https://image.shutterstock.com/image-photo/paper-masala-dosa-south-indian-260nw-1008144772.jpg',
    description:'A dosa is a cooked flat thin layered rice batter, originating from the Indian subcontinent, made from a fermented batter. It is somewhat similar to a crepe in appearance. ... Traditionally, dosas are served hot along with sambar, a stuffing of potatoes, and chutney.'
  },
  {
    name:'Momos',
    img:'https://image.shutterstock.com/image-photo/nepalese-traditional-dumpling-momos-served-260nw-594827216.jpg',
    description:'Veg momos recipe is one of the most requested among Indian Chinese food recipes. Veg momos are a tantalizing, traditional food of Tibet and Nepal. Momos, dim sum, wontons are different names of a variety of savory dumplings that are popular China, Nepal, Tibet, Bhutan and in many North Eastern states of India.'
  },
  {
    name:'Curd rice',
    img:'https://image.shutterstock.com/image-photo/curd-rice-mixed-yogurt-seasoning-260nw-278109890.jpg',
    description:'Curd rice also called yogurt rice, is a dish originating from India. The word "curd" in Indian ... white rice and yogurt, more elaborate methods can be used when needed. A simple recipe: Rice is steamed so it breaks down into nearly a paste.'
  },
  {
    name:'Lemon Rice',
    img:'https://image.shutterstock.com/image-photo/lemon-ricechitranna-indian-rice-traditional-260nw-317794625.jpg',
    description:'INGREDIENTS FOR lemon rice recipe. 1 cup heaped regular rice or 3 to 4 cups cooked rice (chawal) 1.5 to 2 tablespoons lemon juice (nimbu ka ras) or add as required. 1 teaspoon mustard seeds (rai) 1 teaspoon urad dal (spilt and skinned black gram) 2 dry red chilies (sookhi lal mirch) 1 to 2 green chilies, chopped.'
  },
  {
    name:'Dahi Puri',
    img:'https://image.shutterstock.com/image-photo/dahi-batata-puri-chat-food-260nw-259688381.jpg',
    description:'Dahi Puri Chaat is yet another member of popular Indian street chaats that is made by stuffing crispy puffed puris with boiled potatoes and topping it with a combination of sweet, sour and spicy chutneys, onion, sev and beaten curd (dahi) giving it a perfectly balanced tongue tickling taste.'
  },
  {
    name:'Rolls',
    img:'https://image.shutterstock.com/image-photo/spring-rolls-shrimp-sweet-chili-260nw-285208673.jpg',
    description:' A blend of fresh cabbage, carrots, and onions with a hint of seasoning, wrapped in a deliciously flaky and crispy spring wrap. FOOD BASED EQUIVALENCY: 1 spring roll is equal to ½ serving of vegetables (1/8 cup of vegetables) and ½ serving of grain.'
  }]
  recipieData :any ='';
  sendRecipie(recipie){
    this.recipieData=recipie;
  }
  ngOnInit() {
  }

}
