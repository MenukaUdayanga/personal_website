import { IconType } from 'react-icons';
import { FaReact , FaNodeJs , FaJava , FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { TbBrandReactNative } from "react-icons/tb";
import { FaAngular } from "react-icons/fa6";
import { SiSpringboot } from "react-icons/si";

// Interface for each item in dataList
interface DataItem {
  id: number;
  icon: IconType; // IconType is imported from react-icons
  iconProps: { color: string; size: number };
  heading:string
  paragraph: string;
}

// Array of data items
const dataList: DataItem[] = [
  { id: 1, icon: TbBrandReactNative , iconProps: { color: 'blue', size: 40 },heading:"React Native", paragraph: 'Laboriosam reprehenderit atque sit quo adipisci debitis officia, nobis rerum! Perferendis dolorem autem veritatis, possimus aliquam unde repellendus! Numquam laborum sapiente distinctio.' },
  { id: 2, icon: FaReact , iconProps: { color: 'blue', size: 40 },heading:"React", paragraph: 'Expedita quas perferendis eveniet perspiciatis, nulla distinctio sed dolore voluptas ullam molestias debitis consectetur ducimus, mollitia beatae tempora.' },
  { id: 3, icon: FaAngular , iconProps: { color: 'red', size: 40 },heading:"Strategy & Direction", paragraph: 'Laboriosam reprehenderit atque sit quo adipisci debitis officia, nobis rerum! Perferendis dolorem autem veritatis, possimus aliquam unde repellendus! Numquam laborum sapiente distinctio.' },
  { id: 3, icon: FaJava , iconProps: { color: 'blue', size: 40 },heading:"Strategy & Direction", paragraph: 'Laboriosam reprehenderit atque sit quo adipisci debitis officia, nobis rerum! Perferendis dolorem autem veritatis, possimus aliquam unde repellendus! Numquam laborum sapiente distinctio.' },
  { id: 4, icon: FaNodeJs, iconProps: { color: 'green', size: 40 },heading:"Strategy & Direction", paragraph: 'Qui repellat maiores necessitatibus, fuga praesentium, iure quis vero porro non earum iste? Fuga sit repellendus natus veritatis earum aperiam aliquam. Repudiandae.' },
  { id: 5, icon: SiSpringboot, iconProps: { color: 'green', size: 40 },heading:"Strategy & Direction", paragraph: 'Expedita quas perferendis eveniet perspiciatis, nulla distinctio sed dolore voluptas ullam molestias debitis consectetur ducimus, mollitia beatae tempora.' },
];

export default dataList;
