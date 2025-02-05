import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Container } from "react-bootstrap";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import SocialIcons from "./SocialIcons";

const Main = () => {
  const [cards] = useState([
    {
      id: 1,
      category: "Varios",
      description: "Base de tanque 500L",
      price: 17.531,
      image: "./img/1.jpg",
    },
    {
      id: 2,
      category: "Varios",
      description: "Base de tanque 1000L",
      price: 18.239,
      image: "./img/2.jpg",
    },
    {
      id: 3,
      category: "Varios",
      description: "Tender 10 varillas con alas",
      price: 14.201,
      image: "./img/3.jpg",
    },
    {
      id: 4,
      category: "Reflectores",
      description: "Reflector Candela 10W",
      price: 2.727,
      image: "./img/4.jpg",
    },
    {
      id: 5,
      category: "Reflectores",
      description: "Reflector Candela 20W",
      price: 3.781,
      image: "./img/5.jpg",
    },
    {
      id: 6,
      category: "Reflectores",
      description: "Reflector Candela 30W",
      price: 4.218,
      image: "./img/6.jpg",
    },
    {
      id: "7",
      category: "Reflectores",
      description: "Reflector Candela 50W",
      price: 6.589,
      image: "./img/7.jpg",
    },
    {
      id: 8,
      category: "Reflectores",
      description: "Reflector Candela 100W",
      price: 10.873,
      image: "./img/8.jpg",
    },
    {
      id: 9,
      category: "Reflectores",
      description: "Reflector Candela 150W",
      price: 17.624,
      image: "./img/9.jpg",
    },
    {
      id: 10,
      category: "Fichas",
      description: "Triple trapecio 2 y 3 patas",
      price: 816,
      image: "./img/10.jpg",
    },
    {
      id: 11,
      category: "Griferías",
      description: "Grifería mesada",
      price: 32.663,
      image: "./img/11.jpg",
    },
    {
      id: 11.1,
      category: "Griferías",
      description: "Grifería mesada",
      price: 31.108,
      image: "./img/11.jpg",
    },
    {
      id: 12,
      category: "Griferías",
      description: "Grifería lavatorio",
      price: 30.342,
      image: "./img/12.jpg",
    },
    {
      id: 12.1,
      category: "Griferías",
      description: "Grifería lavatorio",
      price: 29.757,
      image: "./img/12.jpg",
    },
    {
      id: 13,
      category: "Griferías",
      description: "Grifería lavatorio pico fundido",
      price: 31.841,
      image: "./img/13.jpg",
    },
    {
      id: 13.1,
      category: "Griferías",
      description: "Grifería lavatorio pico fundido",
      price: 29.757,
      image: "./img/13.jpg",
    },
    {
      id: 14,
      category: "Griferías",
      description: "Grifería bidet",
      price: 34.224,
      image: "./img/14.jpg",
    },
    {
      id: 14.1,
      category: "Griferías",
      description: "Grifería bidet",
      price: 32.591,
      image: "./img/14.jpg",
    },
    {
      id: 15,
      category: "Griferías",
      description: "Grifería ducha con transferencia",
      price: 39.645,
      image: "./img/15.jpg",
    },
    {
      id: 15.1,
      category: "Griferías",
      description: "Grifería ducha con transferencia",
      price: 37.051,
      image: "./img/15.jpg",
    },
    {
      id: 16,
      category: "Griferías",
      description: "Grifería ducha sin transferencia",
      price: 28.334,
      image: "./img/16.jpg",
    },
    {
      id: 16.1,
      category: "Griferías",
      description: "Grifería ducha sin transferencia",
      price: 26.481,
      image: "./img/16.jpg",
    },
    {
      id: 17,
      category: "Griferías",
      description: "Grifería cocina exterior",
      price: 33.929,
      image: "./img/17.jpg",
    },
    {
      id: 17.1,
      category: "Griferías",
      description: "Grifería cocina exterior",
      price: 26.481,
      image: "./img/17.jpg",
    },
    {
      id: 18,
      category: "Griferías",
      description: "Grifería ducha interior",
      price: 37.603,
      image: "./img/18.jpg",
    },
    {
      id: 18.1,
      category: "Griferías",
      description: "Grifería ducha interior",
      price: 35.811,
      image: "./img/18.jpg",
    },
    {
      id: 19,
      category: "Griferías",
      description: "Grifería mesada 1 agua",
      price: 16.511,
      image: "./img/19.jpg",
    },
    {
      id: 22,
      category: "Griferías",
      description: "LLuvia con Brazo",
      price: 2.861,
      image: "./img/22.jpg",
    },
    {
      id: 23,
      category: "Varios",
      description: "Timer Sica",
      price: 6.834,
      image: "./img/23.jpg",
    },
    {
      id: 28,
      category: "Térmicas",
      description: "Termicas Sica hasta 32 AMP",
      price: 4.862,
      image: "./img/28.jpg",
    },
    {
      id: 29,
      category: "Griferías",
      description: "Grifería cocina embutir",
      price: 33.929,
      image: "./img/29.jpg",
    },
    {
      id: 29.1,
      category: "Griferías",
      description: "Grifería cocina embutir",
      price: 32.264,
      image: "./img/29.jpg",
    },
    {
      id: 30,
      category: "Cajas de embutir",
      description: "Caja chapa rectangulas",
      price: 281,
      image: "./img/30.jpg",
    },
    {
      id: 34,
      category: "Bastidores",
      description: "Módulo toma Jeluz",
      price: 487,
      image: "./img/34.jpg",
    },
    {
      id: 35,
      category: "Bastidores",
      description: "Módulo punto Jeluz",
      price: 442,
      image: "./img/35.jpg",
    },
    {
      id: 36,
      category: "Bastidores",
      description: "Modulo punto combinado Jeluz",
      price: 551,
      image: "./img/36.jpg",
    },
    {
      id: 37,
      category: "Bastidores",
      description: "Módulo toma 20 AMP Jeluz",
      price: 904,
      image: "./img/37.jpg",
    },
    {
      id: 39,
      category: "Bastidores",
      description: "Tapita ciega Jeluz",
      price: 58,
      image: "./img/39.jpg",
    },
    {
      id: 40,
      category: "Bastidores",
      description: "Tapa bastidor mito Jeluz",
      price: 384,
      image: "./img/40.jpg",
    },
    {
      id: 42,
      category: "Pinceles y rodillos",
      description: "Pincel elefante serie 1000 N° 15",
      price: 1.472,
      image: "./img/42.jpg",
    },
    {
      id: 43,
      category: "Bastidores",
      description: "Toma exterior Taad",
      price: 851,
      image: "./img/43.jpg",
    },
    {
      id: 44,
      category: "Fichas",
      description: "Ficha calefón",
      price: 456,
      image: "./img/44.jpg",
    },
    {
      id: 45,
      category: "Lámparas Candela",
      description: "Lámpara Candela 20W",
      price: 1.945,
      image: "./img/45.jpg",
    },
    {
      id: 46,
      category: "Lámparas Candela",
      description: "Lámpara Candela 20W",
      price: 2.993,
      image: "./img/46.jpg",
    },
    {
      id: 47,
      category: "Térmicas",
      description: "Caja para térmicas 2 a 4",
      price: 1.358,
      image: "./img/47.jpg",
    },
    {
      id: 49,
      category: "Lámparas Candela",
      description: "Lámparas Candela 15W",
      price: 981,
      image: "./img/49.jpg",
    },
    {
      id: 51,
      category: "Cintas",
      description: "Cinta aisladora Tacsa 5M",
      price: 322,
      image: "./img/51.jpg",
    },
    {
      id: 51.1,
      category: "Cintas",
      description: "Cinta aisladora Tacsa 20M",
      price: 855,
      image: "./img/51.jpg",
    },
    {
      id: 53,
      category: "Zapatillas",
      description: "Zapatilla Genesis sin cable sin tecla",
      price: 2.507,
      image: "./img/53.jpg",
    },
    {
      id: 54,
      category: "Zapatillas",
      description: "Zapatilla Genesis 1.5M",
      price: 2.903,
      image: "./img/54.jpg",
    },
    {
      id: 55,
      category: "Zapatillas",
      description: "Zapatilla Genesis 3M",
      price: 3.692,
      image: "./img/55.jpg",
    },
    {
      id: 56,
      category: "Zapatillas",
      description: "Zapatilla Genesis 5M",
      price: 5.129,
      image: "./img/56.jpg",
    },
    {
      id: 58,
      category: "Plafones Candela",
      description: "Panel LED exterior cuadrado Candela 24W",
      price: 7.827,
      image: "./img/58.jpg",
    },
    {
      id: 59,
      category: "Plafones Candela",
      description: "Panel LED exterior redondo Candela 18W",
      price: 4.027,
      image: "./img/59.jpg",
    },
    {
      id: 60,
      category: "Plafones Candela",
      description: "Panel LED exterior cuadrado Candela 18W",
      price: 4.514,
      image: "./img/60.jpg",
    },
    {
      id: 61,
      category: "Griferías",
      description: "Grifería monocomando mesada",
      price: 14.421,
      image: "./img/61.jpg",
    },
    {
      id: 65,
      category: "Lámparas Candela",
      description: "Lámpara Candela 12W",
      price: 863,
      image: "./img/65.jpg",
    },
    {
      id: 67,
      category: "Pinceles y rodillos",
      description: "Rodillo Cubre mas 22",
      price: 3.532,
      image: "./img/67.jpg",
    },
    {
      id: 69,
      category: "Pinceles y rodillos",
      description: "Pincel elefante serie 1000 N° 10",
      price: 1.203,
      image: "./img/469.jpg",
    },
    {
      id: 71,
      category: "Pinceles y rodillos",
      description: "Pinceleta",
      price: 4.265,
      image: "./img/71.jpg",
    },
    {
      id: 73,
      category: "Reflectores",
      description: "Reflector Candela 200W",
      price: 24.375,
      image: "./img/73.jpg",
    },
    {
      id: 74,
      category: "Fichas",
      description: "Ficha simil Richi macho",
      price: 391,
      image: "./img/74.jpg",
    },
    {
      id: 75,
      category: "Fichas",
      description: "Ficha simil Richi hembra",
      price: 391,
      image: "./img/75.jpg",
    },
    {
      id: 77,
      category: "Fichas",
      description: "Ficha macho Richi",
      price: 715,
      image: "./img/77.jpg",
    },
    {
      id: 79,
      category: "Lámparas Candela",
      description: "Lámpara Candela 40W",
      price: 4.043,
      image: "./img/79.jpg",
    },
    {
      id: 80,
      category: "Lámparas Candela",
      description: "Lámpara Candela 48W",
      price: 5.773,
      image: "./img/80.jpg",
    },
    {
      id: 81,
      category: "Lámparas Candela",
      description: "Lámpara Candela 9W",
      price: 683,
      image: "./img/81.jpg",
    },
    {
      id: 83,
      category: "Plafones Candela",
      description: "Panel LED embutir redonde Candela 12W",
      price: 2.699,
      image: "./img/83.jpg",
    },
    {
      id: 84,
      category: "Plafones Candela",
      description: "Panel LED exterior redondo Candela 24W",
      price: 6.807,
      image: "./img/84.jpg",
    },
    {
      id: 85,
      category: "Plafones Candela",
      description: "Panel LED embutir redondo Candela 8W",
      price: 3.361,
      image: "./img/85.jpg",
    },
    {
      id: 86,
      category: "Plafones Candela",
      description: "Panel LED exterior redondo Candela 12W",
      price: 3.351,
      image: "./img/86.jpg",
    },
    {
      id: 89,
      category: "Bastidores",
      description: "Toma exterior 20 AMP Taad",
      price: 1.458,
      image: "./img/89.jpg",
    },
    {
      id: 91,
      category: "Cintas",
      description: "Cinta aisladora Tacsa 10M",
      price: 505,
      image: "./img/91.jpg",
    },
    {
      id: 93,
      category: "Varios",
      description: "Timbre inalámbrico",
      price: 4.201,
      image: "./img/93.jpg",
    },
    {
      id: 94,
      category: "Térmicas",
      description: "Térmica Sica 2 x 40",
      price: 6.631,
      image: "./img/94.jpg",
    },
    {
      id: 95,
      category: "Iluminación",
      description: "Portalámpara 2 piezas",
      price: 332,
      image: "./img/95.jpg",
    },
    {
      id: 96,
      category: "Pinceles y rodillos",
      description: "Pincel elefante serie 1000 N° 25",
      price: 2.463,
      image: "./img/96.jpg",
    },
    {
      id: 97,
      category: "Lámparas Candela",
      description: "Tubo LED Candela 18W 120cm",
      price: 1.842,
      image: "./img/97.jpg",
    },
    {
      id: 101,
      category: "Pinceles y rodillos",
      description: "Pincel elefante serie 1000 N° 7",
      price: 1.018,
      image: "./img/101.jpg",
    },
    {
      id: 102,
      category: "Pinceles y rodillos",
      description: "Pincel elefante serie 1000 N° 20",
      price: 1.784,
      image: "./img/102.jpg",
    },
    {
      id: 103,
      category: "Pinceles y rodillos",
      description: "Pincel elefante scerie 1000 N° 30",
      price: 3.096,
      image: "./img/103.jpg",
    },
    {
      id: 104,
      category: "Pinceles y rodillos",
      description: "Rodillo antigota 17 elefante Galgo",
      price: 2.917,
      image: "./img/104.jpg",
    },
    {
      id: 105,
      category: "Pinceles y rodillos",
      description: "Rodillo antigota 22 elefante Galgo",
      price: 3.286,
      image: "./img/105.jpg",
    },
    {
      id: 106,
      category: "Pinceles y rodillos",
      description: "Rodillo espuma 17 Galgo",
      price: 2.243,
      image: "./img/106.jpg",
    },
    {
      id: 107,
      category: "Pinceles y rodillos",
      description: "Rodillo espuma 22 Galgo",
      price: 2.695,
      image: "./img/107.jpg",
    },
    {
      id: 109,
      category: "Bastidores",
      description: "Toma doble exterior Taad",
      price: 1.442,
      image: "./img/109.jpg",
    },
    {
      id: 110,
      category: "Bastidores",
      description: "Pulsador esterior Taad",
      price: 794,
      image: "./img/110.jpg",
    },
    {
      id: 111,
      category: "Bastidores",
      description: "Punto exterior Taad",
      price: 749,
      image: "./img/111.jpg",
    },
    {
      id: 112,
      category: "Bastidores",
      description: "Doble punto exterior Taad",
      price: 1.326,
      image: "./img/112.jpg",
    },
    {
      id: 113,
      category: "Bastidores",
      description: "Punto y toma exterior Taad",
      price: 1.331,
      image: "./img/113.jpg",
    },
    {
      id: 120,
      category: "Zapatillas",
      description: "Zapatilla Top sin cable 4 tomas",
      price: 4.064,
      image: "./img/120.jpg",
    },
    {
      id: 121,
      category: "Zapatillas",
      description: "Zapatilla Top sin cable 6 tomas",
      price: 5.435,
      image: "./img/121.jpg",
    },
    {
      id: 122,
      category: "Caño corrugado",
      description: "Cable canal 20 x 10 x metro Kalop",
      price: 503,
      image: "./img/122.jpg",
    },
    {
      id: 123,
      category: "Varios",
      description: "Automático de tanque Vigilant",
      price: 7.291,
      image: "./img/123.jpg",
    },
    {
      id: 124,
      category: "Iluminación",
      description: "Portalámpara con chicote",
      price: 241,
      image: "./img/124.jpg",
    },
    {
      id: 129,
      category: "Cajas de embutir",
      description: "Caja chapa mignon",
      price: 281,
      image: "./img/129.jpg",
    },
    {
      id: 131,
      category: "Griferías",
      description: "Monocomando lavatorio",
      price: 21.451,
      image: "./img/131.jpg",
    },
    {
      id: 132,
      category: "Cable económico",
      description: "Cable unipolar ECO 1 x 1.5",
      price: 13.607,
      image: "./img/132.jpg",
    },
    {
      id: 133,
      category: "Cable económico",
      description: "Cable unipolar ECO 1 x 2.5",
      price: 18.261,
      image: "./img/133.jpg",
    },
    {
      id: 134,
      category: "Cable económico",
      description: "Cable unipolar ECO 1 x 4",
      price: 32.305,
      image: "./img/134.jpg",
    },
    {
      id: 135,
      category: "Cable económico",
      description: "Cable unipolar ECO 1 x 6",
      price: 44.568,
      image: "./img/135.jpg",
    },
    {
      id: 136,
      category: "Térmicas",
      description: "Caja para térmica 1 a 2",
      price: 822,
      image: "./img/136.jpg",
    },
    {
      id: 140,
      category: "Caño corrugado",
      description: "Cable canal 14 x 7 x metro Kalop",
      price: 381,
      image: "./img/140.jpg",
    },
    {
      id: 142,
      category: "Térmicas",
      description: "Disyuntor Sica 25 AMP",
      price: 20.297,
      image: "./img/142.jpg",
    },
    {
      id: 143,
      category: "Térmicas",
      description: "Disytuntor Sica 40 AMP",
      price: 22.016,
      image: "./img/143.jpg",
    },
    {
      id: 145,
      category: "Fichas",
      description: "Ficha Hembra Richi",
      price: 771,
      image: "./img/145.jpg",
    },
    {
      id: 149,
      category: "Cable económico",
      description: "Cable paralelo 2 x 1 ECO",
      price: 28.067,
      image: "./img/149.jpg",
    },
    {
      id: 151,
      category: "Griferías",
      description: "Cabezal largo",
      price: 4.502,
      image: "./img/151.jpg",
    },
    {
      id: 152,
      category: "Griferías",
      description: "Cabezal Transferencia",
      price: 5.695,
      image: "./img/152.jpg",
    },
    {
      id: 153,
      category: "Griferías",
      description: "Cabezal corto",
      price: 4.321,
      image: "./img/153.jpg",
    },
    {
      id: 155,
      category: "Pinceles y rodillos",
      description: "Rodillo cubre mas 17",
      price: 3.162,
      image: "./img/155.jpg",
    },
    {
      id: 160,
      category: "Lámparas Candela",
      description: "Tubo LED Candela 9W 60cm",
      price: 1.339,
      image: "./img/160.jpg",
    },
    {
      id: 180,
      category: "Herramientas",
      description: "Buscapolo económico",
      price: 898,
      image: "./img/180.jpg",
    },
    {
      id: 184,
      category: "Térmicas",
      description: "Térmica Sica 2 x 63",
      price: 12.874,
      image: "./img/184.jpg",
    },
    {
      id: 187,
      category: "Plafones Candela",
      description: "Panel LED embutir redondo Candela 24W",
      price: 6.352,
      image: "./img/187.jpg",
    },
    {
      id: 188,
      category: "Griferías",
      description: "Grifería ducha monocomando exterior",
      price: 29.181,
      image: "./img/188.jpg",
    },
    {
      id: 189,
      category: "Caño corrugado",
      description: "Caja cable canal",
      price: 761,
      image: "./img/189.jpg",
    },
    {
      id: 193,
      category: "Griferías",
      description: "Grifería mesada cierre cerámico",
      price: 48.555,
      image: "./img/193.jpg",
    },
    {
      id: 194,
      category: "Plafones Candela",
      description: "Panel LED exterior embutir cuadrado Candela 12W",
      price: 3.568,
      image: "./img/194.jpg",
    },
    {
      id: 195,
      category: "Plafones Candela",
      description: "Panel embutir cuadrado Candela 12W",
      price: 2.948,
      image: "./img/195.jpg",
    },
    {
      id: 196,
      category: "Plafones Candela",
      description: "Panel embutir cuadrado Candela 12W",
      price: 3.898,
      image: "./img/196.jpg",
    },
    {
      id: 197,
      category: "Plafones Candela",
      description: "Panel embutir cuadrado Candela 12W",
      price: 7.058,
      image: "./img/197.jpg",
    },
    {
      id: 222,
      category: "Pinceles y rodillos",
      description: "Rodillo pelo corto 17 económico Galgo",
      price: 2.211,
      image: "./img/222.jpg",
    },
    {
      id: 223,
      category: "Pinceles y rodillos",
      description: "Rodillo pelo corto 22 económico Galgo",
      price: 2.465,
      image: "./img/223.jpg",
    },
    {
      id: 229,
      category: "Herramientas",
      description: "Buscapolo Sica 14cm",
      price: 1.421,
      image: "./img/229.jpg",
    },
    {
      id: 230,
      category: "Herramientas",
      description: "Buscapolo Sica 19cm",
      price: 2.291,
      image: "./img/230.jpg",
    },
    {
      id: 231,
      category: "Bastidores",
      description: "Toma simple exterior Ciocca plast",
      price: 532,
      image: "./img/231.jpg",
    },
    {
      id: 232,
      category: "Bastidores",
      description: "Punto simple exterior Ciocca plast",
      price: 461,
      image: "./img/232.jpg",
    },
    {
      id: 233,
      category: "Bastidores",
      description: "Punto y toma exterior Ciocca plast",
      price: 931,
      image: "./img/233.jpg",
    },
    {
      id: 234,
      category: "Bastidores",
      description: "Toma doble exterior Ciocca plast",
      price: 1.148,
      image: "./img/234.jpg",
    },
    {
      id: 235,
      category: "Bastidores",
      description: "Toma 20 AMP exterior Ciocca plast",
      price: 1.068,
      image: "./img/235.jpg",
    },
    {
      id: 238,
      category: "Griferías",
      description: "Monocomando lavatorio columna 30cm",
      price: 25.752,
      image: "./img/238.jpg",
    },
    {
      id: 244,
      category: "Cajas de embutir",
      description: "Caja chapa octogonal",
      price: 281,
      image: "./img/244.jpg",
    },
    {
      id: 249,
      category: "Caño corrugado",
      description: "Cable canal 18 x 21 x metro Kalop",
      price: 858,
      image: "./img/249.jpg",
    },
    {
      id: 259,
      category: "Griferías",
      description: "Campana grifería",
      price: 735,
      image: "./img/259.jpg",
    },
    {
      id: 260,
      category: "Griferías",
      description: "Volante conpleto Aleko",
      price: 931,
      image: "./img/260.jpg",
    },
    {
      id: 262,
      category: "Zapatillas",
      description: "Zapatilla VR 1.5m 5 tomas con tecla",
      price: 4.306,
      image: "./img/262.jpg",
    },
    {
      id: 263,
      category: "Zapatillas",
      description: "Zapatilla VR 3m 5 tomas con tecla",
      price: 5.638,
      image: "./img/263.jpg",
    },
    {
      id: 264,
      category: "Bastidores",
      description: "Tapa bastidor Verona 2000/2",
      price: 369,
      image: "./img/264.jpg",
    },
    {
      id: 266,
      category: "Lámparas Candela",
      description: "Luz emergencia Candela 30 LED",
      price: 8.734,
      image: "./img/266.jpg",
    },
    {
      id: 270,
      category: "Zapatillas",
      description: "Zapatilla VR 5m  con tecla",
      price: 3.641,
      image: "./img/270.jpg",
    },
    {
      id: 271,
      category: "Zapatillas",
      description: "Zapatilla normalizada Trefilcon 1.5m con térmica",
      price: 4.649,
      image: "./img/271.jpg",
    },
    {
      id: 274,
      category: "Griferías",
      description: "Ducha exterior monocomando columna",
      price: 81.901,
      image: "./img/274.jpg",
    },
    {
      id: 276,
      category: "Térmicas",
      description: "Caja para térmicas 4 a 8",
      price: 2.431,
      image: "./img/276.jpg",
    },
    {
      id: 287,
      category: "Cable",
      description: "1 cable normalizado Trefilcon 1 x 1.5",
      price: 34.321,
      image: "./img/287.jpg",
    },
    {
      id: 288,
      category: "Cable",
      description: "1 cable normalizado Trefilcon 1 x 2.5",
      price: 54.652,
      image: "./img/288.jpg",
    },
    {
      id: 289,
      category: "Cable",
      description: "1 cable normalizado Trefilcon 1 x 4",
      price: 86.191,
      image: "./img/289.jpg",
    },
    {
      id: 290,
      category: "Cable",
      description: "1 cable normalizado Trefilcon 1 x 6",
      price: 127.401,
      image: "./img/290.jpg",
    },
    {
      id: 313,
      category: "Griferías",
      description: "Monocomando pico cisne",
      price: 25.741,
      image: "./img/313.jpg",
    },
    {
      id: 314,
      category: "Griferías",
      description: "Monocomando lavatorio cuadrada",
      price: 27.653,
      image: "./img/314.jpg",
    },
    {
      id: 323,
      category: "Cable económico",
      description: "Cable paralelo 2 x 1.5 ECO",
      price: 31.175,
      image: "./img/323.jpg",
    },
    {
      id: 324,
      category: "Cable económico",
      description: "Cable paralelo 2 x 2.5 ECO",
      price: 37.571,
      image: "./img/324.jpg",
    },
    {
      id: 325,
      category: "Cable económico",
      description: "Cable tipo taller 2 x 1.5 ECO",
      price: 49.183,
      image: "./img/325.jpg",
    },
    {
      id: 326,
      category: "Cable económico",
      description: "Cable tipo taller 2 x 2.5 ECO",
      price: 64.345,
      image: "./img/326.jpg",
    },
    {
      id: 327,
      category: "Cable económico",
      description: "Cable tipo taller 2 x 4 ECO",
      price: 102.701,
      image: "./img/327.jpg",
    },
    {
      id: 328,
      category: "Cable económico",
      description: "Cable tipo taller 2 x 6 ECO",
      price: 141.196,
      image: "./img/328.jpg",
    },
    {
      id: 332,
      category: "Bastidores",
      description: "Bastidor oculto Jeluz",
      price: 236,
      image: "./img/332.jpg",
    },
    {
      id: 334,
      category: "Iluminación",
      description: "Portalampara floron negro",
      price: 648,
      image: "./img/334.jpg",
    },
    {
      id: 338,
      category: "Pinceles y rodillos",
      description: "Rodillo sin goteo diam 40",
      price: 3.742,
      image: "./img/338.jpg",
    },
    {
      id: 339,
      category: "Pinceles y rodillos",
      description: "Rodillo microfibra 22",
      price: 2.265,
      image: "./img/339.jpg",
    },
    {
      id: 347,
      category: "Lámparas Candela",
      description: "Lámpara Candela 7W",
      price: 651,
      image: "./img/347.jpg",
    },
    {
      id: 348,
      category: "Plafones Candela",
      description: "Panel LED embutir redondo 6W Candela",
      price: 1.913,
      image: "./img/348.jpg",
    },
    {
      id: 349,
      category: "Plafones Candela",
      description: "Panel LED exterior redondo 6W",
      price: 2.481,
      image: "./img/349.jpg",
    },
    {
      id: 350,
      category: "Plafones Candela",
      description: "Panel LED exterior cuadrado Cnadela 6W",
      price: 2.603,
      image: "./img/350.jpg",
    },
    {
      id: 351,
      category: "Adaptadores",
      description: "Adaptador 2 a 3 MV",
      price: 495,
      image: "./img/351.jpg",
    },
    {
      id: 352,
      category: "Adaptadores",
      description: "Adaptador 2 a 3 Starbox",
      price: 729,
      image: "./img/352.jpg",
    },
    {
      id: 353,
      category: "Adaptadores",
      description: "Adaptador 2 a 3",
      price: 458,
      image: "./img/353.jpg",
    },
    {
      id: 354,
      category: "Adaptadores",
      description: "Adaptador de toma multiple Richi",
      price: 1.369,
      image: "./img/354.jpg",
    },
    {
      id: 355,
      category: "Adaptadores",
      description: "Adaptador mosquito pata plana",
      price: 504,
      image: "./img/355.jpg",
    },
    {
      id: 356,
      category: "Adaptadores",
      description: "Adaptador mosquito pata redonda",
      price: 504,
      image: "./img/356.jpg",
    },
    {
      id: 357,
      category: "Adaptadores",
      description: "Adaptador 2 a 3 MIG",
      price: 691,
      image: "./img/357.jpg",
    },
    {
      id: 358,
      category: "Adaptadores",
      description: "Adaptador 2 a 3 Turista MIG",
      price: 714,
      image: "./img/358.jpg",
    },
    {
      id: 359,
      category: "Adaptadores",
      description: "Adaptador triple pata plana MIG",
      price: 917,
      image: "./img/359.jpg",
    },
    {
      id: 360,
      category: "Adaptadores",
      description: "Adaptador triple pata redonda MIG",
      price: 917,
      image: "./img/360.jpg",
    },
    {
      id: 361,
      category: "Adaptadores",
      description: "Adaptador para tableta mosquitos",
      price: 761,
      image: "./img/361.jpg",
    },
    {
      id: 363,
      category: "Fichas",
      description: "Ficha americana MIG",
      price: 677,
      image: "./img/363.jpg",
    },
    {
      id: 364,
      category: "Fichas",
      description: "Ficha americana Starbox",
      price: 642,
      image: "./img/364.jpg",
    },
    {
      id: 365,
      category: "Fichas",
      description: "Ficha macho 2 patas planas",
      price: 633,
      image: "./img/365.jpg",
    },
    {
      id: 366,
      category: "Fichas",
      description: "Ficha macho 2 patas redondas",
      price: 633,
      image: "./img/366.jpg",
    },
    {
      id: 367,
      category: "Fichas",
      description: "Ficha hembra 2 patas",
      price: 633,
      image: "./img/367.jpg",
    },
    {
      id: 368,
      category: "Fichas",
      description: "Ficha macho 2 patas planas Genesis",
      price: 321,
      image: "./img/368.jpg",
    },
    {
      id: 369,
      category: "Fichas",
      description: "Ficha macho Kalop",
      price: 865,
      image: "./img/369.jpg",
    },
    {
      id: 370,
      category: "Fichas",
      description: "Ficha hembra Kalop",
      price: 865,
      image: "./img/370.jpg",
    },
    {
      id: 371,
      category: "Fichas",
      description: "Ficha macho ECO 2 3 patas",
      price: 507,
      image: "./img/371.jpg",
    },
    {
      id: 372,
      category: "Fichas",
      description: "Ficha hembra ECO 3 patas",
      price: 507,
      image: "./img/372.jpg",
    },
    {
      id: 373,
      category: "Fichas",
      description: "Ficha macho con prensacable Ciocca",
      price: 507,
      image: "./img/373.jpg",
    },
    {
      id: 374,
      category: "Fichas",
      description: "Ficha hembra con prensacable Ciocca",
      price: 507,
      image: "./img/374.jpg",
    },
    {
      id: 375,
      category: "Fichas",
      description: "Ficha macho lateral Jeluz",
      price: 597,
      image: "./img/375.jpg",
    },
    {
      id: 376,
      category: "Fichas",
      description: "Ficha hembra lateral Jeluz",
      price: 596,
      image: "./img/376.jpg",
    },
    {
      id: 377,
      category: "Fichas",
      description: "Ficha macho 20 AMP MIG",
      price: 1.204,
      image: "./img/377.jpg",
    },
    {
      id: 378,
      category: "Fichas",
      description: "Ficha hembra 20 AMP MIG",
      price: 1.217,
      image: "./img/378.jpg",
    },
    {
      id: 379,
      category: "Bastidores",
      description: "Toma simple armado Jeluz",
      price: 896,
      image: "./img/379.jpg",
    },
    {
      id: 380,
      category: "Bastidores",
      description: "Punto simple armado Jeluz",
      price: 857,
      image: "./img/380.jpg",
    },
    {
      id: 381,
      category: "Bastidores",
      description: "Teclon simple armado Jeluz",
      price: 857,
      image: "./img/381.jpg",
    },
    {
      id: 382,
      category: "Bastidores",
      description: "Punto y toma armado Jeluz",
      price: 1.258,
      image: "./img/382.jpg",
    },
    {
      id: 383,
      category: "Bastidores",
      description: "Doble toma armado Jeluz",
      price: 1.298,
      image: "./img/383.jpg",
    },
    {
      id: 384,
      category: "Bastidores",
      description: "Doble punto armado Jeluz",
      price: 1.217,
      image: "./img/384.jpg",
    },
    {
      id: 385,
      category: "Bastidores",
      description: "doble punto teclon armado",
      price: 1.217,
      image: "./img/385.jpg",
    },
    {
      id: 386,
      category: "Bastidores",
      description: "Toma simple exterior Jeluz",
      price: 631,
      image: "./img/386.jpg",
    },
    {
      id: 387,
      category: "Bastidores",
      description: "Punto simple exterior Jeluz",
      price: 623,
      image: "./img/387.jpg",
    },
    {
      id: 388,
      category: "Bastidores",
      description: "Toma 20 AMP exterior Jeluz",
      price: 1.227,
      image: "./img/388.jpg",
    },
    {
      id: 389,
      category: "Bastidores",
      description: "Doble toma exterior Jeluz",
      price: 1.125,
      image: "./img/389.jpg",
    },
    {
      id: 390,
      category: "Bastidores",
      description: "Punto y toma exterior Jeluz",
      price: 1.151,
      image: "./img/390.jpg",
    },
    {
      id: 391,
      category: "Bastidores",
      description: "Pulsador exterior Jeluz",
      price: 647,
      image: "./img/391.jpg",
    },
    {
      id: 392,
      category: "Bastidores",
      description: "Base módulo exterior simple Jeluz",
      price: 174,
      image: "./img/392.jpg",
    },
    {
      id: 393,
      category: "Bastidores",
      description: "Base módulo exterior doble Jeluz",
      price: 293,
      image: "./img/393.jpg",
    },
    {
      id: 394,
      category: "Bastidores",
      description: "Tapa módulo exterior simple",
      price: 221,
      image: "./img/394.jpg",
    },
    {
      id: 395,
      category: "Bastidores",
      description: "Punto armado Sica Life",
      price: 938,
      image: "./img/395.jpg",
    },
    {
      id: 396,
      category: "Bastidores",
      description: "Toma armado simple Sica Life",
      price: 985,
      image: "./img/396.jpg",
    },
    {
      id: 397,
      category: "Bastidores",
      description: "Doble punto armado Sica Life",
      price: 1.356,
      image: "./img/397.jpg",
    },
    {
      id: 398,
      category: "Bastidores",
      description: "Doble toma armado Sica Life",
      price: 1.425,
      image: "./img/398.jpg",
    },
    {
      id: 399,
      category: "Bastidores",
      description: "Punto y toma armado Sica Life",
      price: 1.356,
      image: "./img/399.jpg",
    },
    {
      id: 400,
      category: "Bastidores",
      description: "Toma 20 AMP armado Sica Life",
      price: 2.192,
      image: "./img/400.jpg",
    },
    {
      id: 401,
      category: "Bastidores",
      description: "Repuesto bastidor Sica Life",
      price: 284,
      image: "./img/401.jpg",
    },
    {
      id: 402,
      category: "Bastidores",
      description: "Repuesto ciego Sica Life",
      price: 65,
      image: "./img/402.jpg",
    },
    {
      id: 403,
      category: "Bastidores",
      description: "Repuesto punto Sica Life",
      price: 348,
      image: "./img/403.jpg",
    },
    {
      id: 404,
      category: "Bastidores",
      description: "Repuesto tapa ciega Sica Life",
      price: 265,
      image: "./img/404.jpg",
    },
    {
      id: 405,
      category: "Bastidores",
      description: "Repuesto toma Sica Life",
      price: 365,
      image: "./img/405.jpg",
    },
    {
      id: 406,
      category: "Bastidores",
      description: "Repuesto punto combinado Sica Life",
      price: 424,
      image: "./img/406.jpg",
    },
    {
      id: 407,
      category: "Bastidores",
      description: "Repuesto toma 20 AMP Sica Life",
      price: 1.23,
      image: "./img/407.jpg",
    },
    {
      id: 408,
      category: "Bastidores",
      description: "Repuesto tapa mignon Sica Life",
      price: 267,
      image: "./img/408.jpg",
    },
    {
      id: 409,
      category: "Bastidores",
      description: "Repuesto soporte mignon Sica Life",
      price: 284,
      image: "./img/409.jpg",
    },
    {
      id: 410,
      category: "Bastidores",
      description: "Doble punto esterior Ciocca Plast",
      price: 719,
      image: "./img/410.jpg",
    },
    {
      id: 411,
      category: "Bastidores",
      description: "Pulsador exterior Ciocca Plast",
      price: 465,
      image: "./img/411.jpg",
    },
    {
      id: 412,
      category: "Bastidores",
      description: "Punto combinado exterior Ciocca Plast",
      price: 719,
      image: "./img/412.jpg",
    },
    {
      id: 413,
      category: "Bastidores",
      description: "Tres toma exterior Ciocca Plast",
      price: 2.621,
      image: "./img/413.jpg",
    },
    {
      id: 414,
      category: "Bastidores",
      description: "Caja capsulada toma simple Taad",
      price: 1.638,
      image: "./img/414.jpg",
    },
    {
      id: 415,
      category: "Bastidores",
      description: "Caja capsulada punto simple Taad",
      price: 1.528,
      image: "./img/415.jpg",
    },
    {
      id: 416,
      category: "Bastidores",
      description: "Caja capsulada pulsador Taad",
      price: 1.565,
      image: "./img/416.jpg",
    },
    {
      id: 417,
      category: "Bastidores",
      description: "Caja capsulada toma 20 AMP Taad",
      price: 2.134,
      image: "./img/417.jpg",
    },
    {
      id: 418,
      category: "Bastidores",
      description: "Caja capsulada doble toma Taad",
      price: 3.206,
      image: "./img/418.jpg",
    },
    {
      id: 419,
      category: "Bastidores",
      description: "Caja capsulada punto y toma Taad",
      price: 2.816,
      image: "./img/419.jpg",
    },
    {
      id: 420,
      category: "Bastidores",
      description: "Caja capsulada doble punto Taad",
      price: 2.844,
      image: "./img/420.jpg",
    },
    {
      id: 421,
      category: "Lámparas Candela",
      description: "Lámpara LED vela 5W fría/cálida",
      price: 897,
      image: "./img/421.jpg",
    },
    {
      id: 422,
      category: "Lámparas Candela",
      description: "Lámpara LED gota 5W fría/cálida",
      price: 896,
      image: "./img/422.jpg",
    },
    {
      id: 423,
      category: "Lámparas Candela",
      description: "Lámpara LED globo Candela 12W fría/cálida",
      price: 3.459,
      image: "./img/423.jpg",
    },
    {
      id: 424,
      category: "Lámparas Candela",
      description: "LED dicroica 5W fría/cálida",
      price: 737,
      image: "./img/424.jpg",
    },
    {
      id: 425,
      category: "Lámparas Candela",
      description: "LED dicroica Candela 7W fría/cálida",
      price: 794,
      image: "./img/425.jpg",
    },
    {
      id: 426,
      category: "Lámparas Candela",
      description: "LEd dicroica Candela Dimer 7W fría/cálida",
      price: 1.357,
      image: "./img/426.jpg",
    },
    {
      id: 427,
      category: "Lámparas Candela",
      description: "Lámpara LED AR-111 Candela 12W fría/cálida",
      price: 4.008,
      image: "./img/427.jpg",
    },
    {
      id: 428,
      category: "Lámparas Candela",
      description: "Lámpara LED AR-111 Candela Dimer 12W fría/cálida",
      price: 6.386,
      image: "./img/428.jpg",
    },
    {
      id: 429,
      category: "Lámparas Candela",
      description: "Liston LED 5W Candela",
      price: 4.095,
      image: "./img/429.jpg",
    },
    {
      id: 430,
      category: "Lámparas Candela",
      description: "Liston LED 9W Candela",
      price: 4.571,
      image: "./img/430.jpg",
    },
    {
      id: 431,
      category: "Lámparas Candela",
      description: "Liston 12W Candela",
      price: 4.965,
      image: "./img/431.jpg",
    },
    {
      id: 432,
      category: "Lámparas Candela",
      description: "Liston 18W Candela",
      price: 5.463,
      image: "./img/432.jpg",
    },
    {
      id: 433,
      category: "Plafones Candela",
      description: "Panel embutir cuadrado 6W Candela",
      price: 2.024,
      image: "./img/433.jpg",
    },
    {
      id: 434,
      category: "Griferías",
      description: 'Monocomando "L" cromada',
      price: 27.654,
      image: "./img/434.jpg",
    },
    {
      id: 435,
      category: "Griferías",
      description: 'Monocomando "L" negra',
      price: 21.451,
      image: "./img/435.jpg",
    },
    {
      id: 436,
      category: "Griferías",
      description: "Monocomando extensible cocina negra",
      price: 38.681,
      image: "./img/436.jpg",
    },
    {
      id: 437,
      category: "Griferías",
      description: "Monocomando extensible plateada",
      price: 38.681,
      image: "./img/437.jpg",
    },
    {
      id: 438,
      category: "Griferías",
      description: "Monocomando gourmet",
      price: 71.253,
      image: "./img/438.jpg",
    },
    {
      id: 439,
      category: "Griferías",
      description: "Monocomando pico flexible",
      price: 21.581,
      image: "./img/439.jpg",
    },
    {
      id: 440,
      category: "Griferías",
      description: "Monocomando pico flexible (ducha)",
      price: 21.581,
      image: "./img/440.jpg",
    },
    {
      id: 441,
      category: "Griferías",
      description: "Monocomando bidet sin transferencia",
      price: 26.465,
      image: "./img/441.jpg",
    },
    {
      id: 442,
      category: "Griferías",
      description: "Monocomando mesada J negra",
      price: 21.411,
      image: "./img/442.jpg",
    },
    {
      id: 443,
      category: "Griferías",
      description: "Monocomando bidet con transferencia",
      price: 37.441,
      image: "./img/443.jpg",
    },
    {
      id: 444,
      category: "Griferías",
      description: "Lluvia cuadrada grande",
      price: 5.265,
      image: "./img/444.jpg",
    },
    {
      id: 445,
      category: "Griferías",
      description: "Caño 50cm para lluvia",
      price: 3.705,
      image: "./img/445.jpg",
    },
    {
      id: 446,
      category: "Griferías",
      description: "Monocomando cocina exterior pico flexible",
      price: 32.761,
      image: "./img/446.jpg",
    },
    {
      id: 447,
      category: "Griferías",
      description: "Monocomando mesada 2 agujeros",
      price: 34.741,
      image: "./img/447.jpg",
    },
    {
      id: 448,
      category: "Griferías",
      description: "Adaptador canilla 360 cuatro posiciones",
      price: 9501,
      image: "./img/448.jpg",
    },
    {
      id: 449,
      category: "Térmicas",
      description: "Caja para térmica 8 a 12",
      price: 4.355,
      image: "./img/449.jpg",
    },
    {
      id: 450,
      category: "Térmicas",
      description: "Disyuntor Sica 2 x 63",
      price: 23.202,
      image: "./img/450.jpg",
    },
    {
      id: 451,
      category: "Caño corrugado",
      description: "Caño corrugado blanco 3/4",
      price: 3.611,
      image: "./img/451.jpg",
    },
    {
      id: 452,
      category: "Caño corrugado",
      description: "Caño corrugado blanco 7/8",
      price: 4.845,
      image: "./img/452.jpg",
    },
    {
      id: 453,
      category: "Caño corrugado",
      description: 'Caño corrugado blanco 1"',
      price: 6.653,
      image: "./img/453.jpg",
    },
    {
      id: 454,
      category: "Caño corrugado",
      description: "Caño corrugado naranja 3/4",
      price: 3.315,
      image: "./img/454.jpg",
    },
    {
      id: 455,
      category: "Caño corrugado",
      description: "Caño corrugado naranja 7/8",
      price: 4.811,
      image: "./img/455.jpg",
    },
    {
      id: 456,
      category: "Caño corrugado",
      description: 'Caño corrugado naranja 1"',
      price: 6.078,
      image: "./img/456.jpg",
    },
    {
      id: 457,
      category: "Caño corrugado",
      description: "Unión 3/4",
      price: 91,
      image: "./img/457.jpg",
    },
    {
      id: 458,
      category: "Caño corrugado",
      description: "Unión 7/8 Ovra",
      price: 115,
      image: "./img/458.jpg",
    },
    {
      id: 459,
      category: "Caño corrugado",
      description: 'Unión 1"',
      price: 137,
      image: "./img/459.jpg",
    },
    {
      id: 460,
      category: "Caño corrugado",
      description: "Conector 3/3",
      price: 71,
      image: "./img/460.jpg",
    },
    {
      id: 461,
      category: "Caño corrugado",
      description: "Conector 7/8",
      price: 81,
      image: "./img/461.jpg",
    },
    {
      id: 462,
      category: "Caño corrugado",
      description: 'Conector 1"',
      price: 86,
      image: "./img/462.jpg",
    },
    {
      id: 463,
      category: "Caño corrugado",
      description: "Curva 3/4",
      price: 358,
      image: "./img/463.jpg",
    },
    {
      id: 464,
      category: "Caño corrugado",
      description: "Curva 7/8",
      price: 399,
      image: "./img/464.jpg",
    },
    {
      id: 465,
      category: "Caño corrugado",
      description: 'Curva 1"',
      price: 472,
      image: "./img/465.jpg",
    },
    {
      id: 466,
      category: "Caño corrugado",
      description: "Caño rígido 3/4 x metro Sica",
      price: 577,
      image: "./img/466.jpg",
    },
    {
      id: 467,
      category: "Caño corrugado",
      description: "Caño rígido 7/8 x metro Sica",
      price: 749,
      image: "./img/467.jpg",
    },
    {
      id: 468,
      category: "Caño corrugado",
      description: 'Caño rígido 1" x metro Sica',
      price: 815,
      image: "./img/468.jpg",
    },
    {
      id: 469,
      category: "Caño corrugado",
      description: "Unión 3/4 Sica",
      price: 191,
      image: "./img/469.jpg",
    },
    {
      id: 470,
      category: "Caño corrugado",
      description: "Unión 7/8 Sica",
      price: 224,
      image: "./img/470.jpg",
    },
    {
      id: 471,
      category: "Caño corrugado",
      description: 'Unión 1" Sica',
      price: 251,
      image: "./img/471.jpg",
    },
    {
      id: 472,
      category: "Caño corrugado",
      description: "Conector 3/4 Sica",
      price: 192,
      image: "./img/472.jpg",
    },
    {
      id: 473,
      category: "Caño corrugado",
      description: "Conector 7/8 Sica",
      price: 212,
      image: "./img/473.jpg",
    },
    {
      id: 474,
      category: "Caño corrugado",
      description: 'Conector 1" Sica',
      price: 484,
      image: "./img/474.jpg",
    },
    {
      id: 475,
      category: "Caño corrugado",
      description: "Curva 3/4 Sica",
      price: 343,
      image: "./img/475.jpg",
    },
    {
      id: 476,
      category: "Caño corrugado",
      description: "Curva 7/8 Sica",
      price: 387,
      image: "./img/476.jpg",
    },
    {
      id: 477,
      category: "Caño corrugado",
      description: 'Curva 1" Sica',
      price: 484,
      image: "./img/477.jpg",
    },
    {
      id: 478,
      category: "Caño corrugado",
      description: "Grampa 3/4, 7/8 Sica",
      price: 229,
      image: "./img/478.jpg",
    },
    {
      id: 479,
      category: "Caño corrugado",
      description: 'Grampa 1" Sica',
      price: 295,
      image: "./img/479.jpg",
    },
    {
      id: 480,
      category: "Caño corrugado",
      description: "Grampa 1 1/4 Sica",
      price: 667,
      image: "./img/480.jpg",
    },
    {
      id: 481,
      category: "Caño corrugado",
      description: "Cable canal 27 x 30 x metro Kalop",
      price: 1.524,
      image: "./img/481.jpg",
    },
    {
      id: 482,
      category: "Cintas",
      description: "Cinta métrica 3M",
      price: 2.041,
      image: "./img/482.jpg",
    },
    {
      id: 483,
      category: "Cintas",
      description: "Cinta métrica 5M",
      price: 2.639,
      image: "./img/483.jpg",
    },
    {
      id: 484,
      category: "Cintas",
      description: "Cinta métrica 7.5M",
      price: 4.801,
      image: "./img/484.jpg",
    },
    {
      id: 485,
      category: "Cintas",
      description: "Cinta métrica 10M",
      price: 6.119,
      image: "./img/485.jpg",
    },
    {
      id: 486,
      category: "Cintas",
      description: "Cinta pasacable 7M ECO",
      price: 1.929,
      image: "./img/486.jpg",
    },
    {
      id: 487,
      category: "Cintas",
      description: "Cinta pasacable 10M ECO",
      price: 2.127,
      image: "./img/487.jpg",
    },
    {
      id: 488,
      category: "Cintas",
      description: "Cinta pasacable 15M ECO",
      price: 2.501,
      image: "./img/488.jpg",
    },
    {
      id: 489,
      category: "Cintas",
      description: "Cinta pasacable 20M ECO",
      price: 2.925,
      image: "./img/489.jpg",
    },
    {
      id: 490,
      category: "Cintas",
      description: "Cinta pasacable acero 7M",
      price: 5.368,
      image: "./img/490.jpg",
    },
    {
      id: 491,
      category: "Cintas",
      description: "Cinta pasacable acero 10M",
      price: 6.885,
      image: "./img/491.jpg",
    },
    {
      id: 492,
      category: "Cintas",
      description: "Cinta pasacable acero 15M",
      price: 9.472,
      image: "./img/492.jpg",
    },
    {
      id: 493,
      category: "Cable",
      description: "Cable tipo taller 2 x 1 Flexivolt",
      price: 55.511,
      image: "./img/493.jpg",
    },
    {
      id: 494,
      category: "Cable",
      description: "Cable tipo taller 2 x 1.5 Flexivolt",
      price: 76.311,
      image: "./img/494.jpg",
    },
    {
      id: 495,
      category: "Cable",
      description: "Cable tipo taller 2 x 2.5 Flexivolt",
      price: 121.811,
      image: "./img/495.jpg",
    },
    {
      id: 496,
      category: "Cable",
      description: "Cable tipo taller 2 x 4 Flexivolt",
      price: 175.891,
      image: "./img/496.jpg",
    },
    {
      id: 497,
      category: "Cable",
      description: "Cable paralelo 2 x 1 Flexivolt",
      price: 40.041,
      image: "./img/497.jpg",
    },
    {
      id: 498,
      category: "Cable",
      description: "Cable paralelo 2 x 1.5 Flexivolt",
      price: 57.591,
      image: "./img/498.jpg",
    },
    {
      id: 499,
      category: "Cable",
      description: "Cable paralelo 2 x 2.5 Flexivolt",
      price: 89.961,
      image: "./img/499.jpg",
    },
    {
      id: 500,
      category: "Iluminación",
      description: "Capelina negra Zuluz",
      price: 5.155,
      image: "./img/500.jpg",
    },
    {
      id: 501,
      category: "Iluminación",
      description: "Capelina roja Zuluz",
      price: 5.155,
      image: "./img/501.jpg",
    },
    {
      id: 502,
      category: "Iluminación",
      description: "Capelina azul Zuluz",
      price: 5.155,
      image: "./img/502.jpg",
    },
    {
      id: 503,
      category: "Iluminación",
      description: "Colgante campana blanco Starbox",
      price: 6.007,
      image: "./img/503.jpg",
    },
    {
      id: 504,
      category: "Iluminación",
      description: "Colgante campana negro Starbox",
      price: 6.007,
      image: "./img/504.jpg",
    },
    {
      id: 505,
      category: "Iluminación",
      description: "Colgante campana ámbar Starbox",
      price: 6.305,
      image: "./img/505.jpg",
    },
    {
      id: 506,
      category: "Iluminación",
      description: "Colgante campana verde fluorescente Starbox",
      price: 6.302,
      image: "./img/506.jpg",
    },
    {
      id: 507,
      category: "Iluminación",
      description: "Colgante campana amarillo fluorescente Starbox",
      price: 6.302,
      image: "./img/507.jpg",
    },
    {
      id: 508,
      category: "Iluminación",
      description: "Tortuga Zuluz",
      price: 3.686,
      image: "./img/508.jpg",
    },
    {
      id: 509,
      category: "Iluminación",
      description: "Tulipa Zuluz",
      price: 5.405,
      image: "./img/509.jpg",
    },
    {
      id: 510,
      category: "Iluminación",
      description: "Farol 4 caras Zuluz",
      price: 12.285,
      image: "./img/510.jpg",
    },
    {
      id: 511,
      category: "Iluminación",
      description: "Farol 6 caras Zuluz",
      price: 12.285,
      image: "./img/511.jpg",
    },
    {
      id: 512,
      category: "Zapatillas",
      description: "Zapatilla normalizada Trefilcon 2.5M con térmica",
      price: 5.829,
      image: "./img/512.jpg",
    },
    {
      id: 513,
      category: "Zapatillas",
      description: "Zapatilla normalizada 5M Trefilcon con térmica",
      price: 10.621,
      image: "./img/513.jpg",
    },
    {
      id: 514,
      category: "Iluminación",
      description: "Receptáculo curvo negro",
      price: 502,
      image: "./img/514.jpg",
    },
    {
      id: 517,
      category: "Iluminación",
      description: "Receptáculo recto blanco",
      price: 595,
      image: "./img/517.jpg",
    },
    {
      id: 518,
      category: "Iluminación",
      description: "Portalámpara con enchufe",
      price: 886,
      image: "./img/518.jpg",
    },
    {
      id: 519,
      category: "Iluminación",
      description: 'Portalámpara cerámica "L"',
      price: 434,
      image: "./img/519.jpg",
    },
    {
      id: 520,
      category: "Iluminación",
      description: "Portalámpara cerámica con puente",
      price: 434,
      image: "./img/520.jpg",
    },
    {
      id: 521,
      category: "Iluminación",
      description: "Portalámpara floron blanco",
      price: 681,
      image: "./img/521.jpg",
    },
    {
      id: 522,
      category: "Iluminación",
      description: "Receptáculo recto negro",
      price: 498,
      image: "./img/522.jpg",
    },
    {
      id: 523,
      category: "Varios",
      description: "Protector de tensión Alumine 1600W",
      price: 14.711,
      image: "./img/523.jpg",
    },
    {
      id: 524,
      category: "Iluminación",
      description: "Portalámpara 3 piezas",
      price: 426,
      image: "./img/526.jpg",
    },
    {
      id: 525,
      category: "Iluminación",
      description: "Portalámpara E14",
      price: 781,
      image: "./img/525.jpg",
    },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredCards =
    selectedCategory === "All"
      ? cards
      : cards.filter((card) => card.category === selectedCategory);

  return (
    <>
      <main>
        <Navbar
          fixed="top"
          collapseOnSelect
          expand="lg"
          className="main-navbar"
          variant="dark"
        >
          <Container fluid className="asd">
            <img className="nav-logo" src="./img/logo.png" />
            <Navbar.Brand className="title">Distribuidora LM</Navbar.Brand>
            <NavDropdown title="Categorías" id="collapsible-nav-dropdown">
              <NavDropdown.Item
                onClick={() => {
                  setSelectedCategory("All"),
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                }}
              >
                Todos los productos
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => {
                  setSelectedCategory("Adaptadores"),
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                }}
              >
                Adaptadores
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => {
                  setSelectedCategory("Bastidores"),
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                }}
              >
                Bastidores
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => {
                  setSelectedCategory("Cable"),
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                }}
              >
                Cable
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => {
                  setSelectedCategory("Cable económico"),
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                }}
              >
                Cable económico
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => {
                  setSelectedCategory("Cajas de embutir"),
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                }}
              >
                Cajas de embutir
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => {
                  setSelectedCategory("Caño corrugado"),
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                }}
              >
                Caño corrugado
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => {
                  setSelectedCategory("Cintas"),
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                }}
              >
                Cintas
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => {
                  setSelectedCategory("Fichas"),
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                }}
              >
                Fichas
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => {
                  setSelectedCategory("Griferías"),
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                }}
              >
                Griferías
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => {
                  setSelectedCategory("Herramientas"),
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                }}
              >
                Herramientas
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => {
                  setSelectedCategory("Iluminación"),
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                }}
              >
                Iluminación
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => {
                  setSelectedCategory("Lámparas Candela"),
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                }}
              >
                Lámparas Candela
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => {
                  setSelectedCategory("Pinceles y rodillos"),
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                }}
              >
                Pinceles y rodillos
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => {
                  setSelectedCategory("Plafones Candela"),
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                }}
              >
                Plafones Candela
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => {
                  setSelectedCategory("Reflectores"),
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                }}
              >
                Reflectores
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => {
                  setSelectedCategory("Térmicas"),
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                }}
              >
                Térmicas
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => {
                  setSelectedCategory("Varios"),
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                }}
              >
                Varios
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => {
                  setSelectedCategory("Zapatillas"),
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                }}
              >
                Zapatillas
              </NavDropdown.Item>
            </NavDropdown>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav>
                <SocialIcons />
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container fluid className="card-container"></Container>
        <Container id="cards" fluid className="card-container">
          {filteredCards.map((product) => (
            <Card className="card-base" style={{ width: "18rem" }}>
              <Card.Img className="card-image" src={product.image} />
              <Card.Body className="card-body">
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>Precio ${product.price}</Card.Text>
                <Card.Text>Artículo: {product.id}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Container>
      </main>
    </>
  );
};

export default Main;
