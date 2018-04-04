import { Injectable } from '@angular/core';

@Injectable()
export class ImageService {

	constructor() { }
	visibleImages = [];

	getImages() {
		return this.visibleImages = IMAGES.slice(0);
	}

	getImage(id: number) {
		return IMAGES.slice(0).find(image => image.id == id)
	}



}
const IMAGES = [

	{ "id": 1, "category": 'vegan', "url": 'assets/img/pic1.jpg' },
	{ "id": 2, "category": 'vegetarian', "url": 'assets/img/pic2.jpg' },
	{ "id": 3, "category": 'glutenfree', "url": 'assets/img/pic3.jpg' },
	{ "id": 4, "category": 'rawvegan', "url": 'assets/img/pic4.jpg' },
	{ "id": 5, "category": 'vegan', "url": 'assets/img/pic5.JPG' },
	{ "id": 6, "category": 'vegetarian', "url": 'assets/img/pic6.jpg' },
	{ "id": 7, "category": 'glutenfree', "url": 'assets/img/pic7.jpg' },
	{ "id": 8, "category": 'rawvegan', "url": 'assets/img/pic8.JPG' },
	{ "id": 9, "category": 'vegan', "url": 'assets/img/pic9.jpg' },
	{ "id": 10, "category": 'vegetarian', "url": 'assets/img/pic10.png' },
	{ "id": 11, "category": 'glutenfree', "url": 'assets/img/pic11.jpg' },


]
