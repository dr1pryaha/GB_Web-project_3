import "./style.scss";
import { drawGalleryItem } from "./item";
import items from "./items";
const galleryRootElement = document.querySelector(".gallery");
console.log(galleryRootElement);
items.map(item => galleryRootElement.appendChild(drawGalleryItem(item))); // const itemsEl = document.querySelector(".items");
// const items = [
//   // { id: 1, title: "Заголовок_1", content: "../media/audio/1.mp3" },
//   // { id: 2, title: "Заголовок_2", content: "../media/audio/2.mp3" },
//   // { id: 3, title: "Заголовок_3", content: "../media/audio/3.mp3" },
//   { id: 4, title: "Заголовок_4", content: "../media/images/1.jpg" },
//   { id: 5, title: " Заголовок_5", content: "../media/images/2.jpg" },
//   { id: 6, title: "Заголовок_6", content: "../media/images/3.jpg" },
//   // { id: 7, title: "Заголовок_7", content: "../media/images/4.jpg" },
//   // { id: 8, title: "Заголовок_8", content: "../media/video/1.mp4" },
//   // { id: 9, title: "Заголовок_9", content: "../media/video/2.mp4" },
// ];
// items.forEach((el, i) => {
//   // itemsEl.innerHTML = '<img scr=/"here youre pass/" width="" height="" /> ';
//   const img = document.createElement("img");
//   img.className = "card-img";
//   img.src = el.content;
//   const div = document.createElement("div");
//   div.className = "card-title";
//   div.append(el.title);
//   itemsEl.append(img);
//   itemsEl.append(div);
// });
// console.log(items);