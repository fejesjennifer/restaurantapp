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

	{ "id": 1, "category": 'vegan', "url": 'assets/img/pic1.jpg', "link" : "http://google.hu"},
	{ "id": 2, "category": 'vegetarian', "url": 'assets/img/pic2.jpg' , "link" : "http://google.hu"},
	{ "id": 3, "category": 'glutenfree', "url": 'assets/img/pic3.jpg' , "link" : "http://google.hu"},
	{ "id": 4, "category": 'rawvegan', "url": 'assets/img/pic4.jpg' , "link" : "http://google.hu"},
	{ "id": 5, "category": 'vegan', "url": 'assets/img/pic5.JPG' , "link" : "http://google.hu"},
	{ "id": 6, "category": 'vegetarian', "url": 'assets/img/pic6.jpg' , "link" : "http://google.hu"},
	{ "id": 7, "category": 'glutenfree', "url": 'assets/img/pic7.jpg' , "link" : "http://google.hu"},
	{ "id": 8, "category": 'rawvegan', "url": 'assets/img/pic8.JPG' , "link" : "http://google.hu"},
	{ "id": 9, "category": 'vegan', "url": 'assets/img/pic9.jpg' , "link" : "http://google.hu"},
	{ "id": 10, "category": 'vegetarian', "url": 'assets/img/pic10.png' , "link" : "http://google.hu"},
	{ "id": 11, "category": 'glutenfree', "url": 'assets/img/pic11.jpg' , "link" : "http://google.hu"},


]
