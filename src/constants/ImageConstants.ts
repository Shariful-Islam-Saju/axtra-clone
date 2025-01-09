import img1 from "../../public/7.png";
import img2 from "../../public/2.png";
import img3 from "../../public/3.png";
import img4 from "../../public/4.png";
import img5 from "../../public/5.png";
import img6 from "../../public/6.png";
import { StaticImageData } from "next/image";

export const brandImage: {
  src: StaticImageData;
  delay: number;
}[] = [
  { src: img1, delay: 0 },
  { src: img2, delay: .1 },
  { src: img3, delay: .2 },
  { src: img4, delay: .3 },
  { src: img5, delay: .4 },
  { src: img6, delay: .5 },
]; // Array of images
