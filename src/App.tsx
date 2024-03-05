import React from 'react';
import { IPortfolioPage, PortfolioPage } from './pages/portfolio/Portfolio';
import { Header, IHeader } from './components/header/Header';
import { Footer, IFooter } from './components/footer/Footer';
import { FaCat, FaWhatsapp, FaTelegram, FaLinkedin, FaPhoneAlt } from 'react-icons/fa';

const headerProps: IHeader = {
  logoProps: {
    title: 'TMV',
    link: '/',
    icon: FaCat,
  },
  navbarProps: {
    links: [
      { name: 'Portfolio', href: '#portfolio' },
      { name: 'About', href: '#about' },
      { name: 'GitHub', href: 'https://github.com/user530', newTab: true },
    ],
  },
  contactBtnProps: {
    text: 'Contact',
    href: 'mailto:m.timarsuev@gmail.com',
  },
  socialIconsProps: {
    icons: [
      { icon: FaPhoneAlt, href: 'tel:+79271557757', },
      { icon: FaWhatsapp, href: 'https://api.whatsapp.com/send?phone=79271557757', },
      { icon: FaTelegram, href: 'https://t.me/@tmv95' },
      { icon: FaLinkedin, href: 'www.linkedin.com/in/magomed-timarsuev-7249581aa', newTab: true },
    ],
  },
}

const portfolioPageProps: IPortfolioPage = {
  title: 'Portfolio',
  subtitle: 'Full stack web developer: getting better, one project at a time',
  cardsSectionProps: {
    pageCount: 6,
    projectsData: [
      {
        name: 'SPA with Auth',
        imgName: 'QuasarApp.jpg',
        href: 'http://app1.m.timarsuev.fvds.ru',
        tags: ['Quasar', 'VueJs', 'NestJs'],
        shortDescription: 'A simple SPA with authentication mechanism. Front end built using Quasar Vue Framework, data storage using Pinia store and API services using Axios. Back end is NestJS and Postgres DB. Authorization mechanism is JWT stored in HTTP secure cookie, Axios interceptor used for the token refresh.',
      },
      {
        name: 'Crypto Chart',
        imgName: 'NuxtApp.jpg',
        href: 'http://app2.m.timarsuev.fvds.ru',
        tags: ['Nuxt', 'VueJs', 'NestJs'],
        shortDescription: 'A simple crypto currency chart. Front end build using Nuxt Vue Framework, data visualisation using ApexCharts, styled using Tailwind. Back end is NestJS and Postgres DB. Chart checks for the data in the DB, if no data cached it fetches some from the market (Twelvedata API) and stores in the DB for the future use. Back end allows even more detalisation for the stamps (minutes, seconds).',
      },
      {
        name: 'Game App',
        imgName: 'WsGameApp.jpg',
        href: 'http://app3.m.timarsuev.fvds.ru',
        tags: ['React', 'SocketIO', 'NestJs'],
        shortDescription: 'Multiplayer game portal with test game (Tic-Tac-Toe). Front end build using vanila React, data storage using Redux store, API services using Axios, SocketIO for the web socket interactions. Back end is NestJS and Postgres DB. This app is built in 3 layers - hub, lobby and game itself. Allows for the general, private (DM) and room based chats. Game is a placeholder, but abstraction will work for any turn based game.',
      },
    ]
  },
  aboutSectionProps: {
    heading: 'Help To Build Your Dream Project',
    text: 'Front-end or Back-end? Commercial or Community-based? Simple or Elaborate? It doesn\'t matter! If you need something built - just contact me!',
    btnTxt: 'Contact now',
    btnHref: 'mailto:m.timarsuev@gmail.com',
  }
};

const footerProps: IFooter = {
  socialLinksProps: {
    icons: [
      { icon: FaPhoneAlt, href: 'tel:+79271557757', },
      { icon: FaWhatsapp, href: 'https://api.whatsapp.com/send?phone=79271557757', },
      { icon: FaTelegram, href: 'https://t.me/@tmv95' },
      { icon: FaLinkedin, href: 'www.linkedin.com/in/magomed-timarsuev-7249581aa', newTab: true },
    ],
  }
};

function App() {
  return (
    <>
      <Header {...headerProps} />
      <PortfolioPage {...portfolioPageProps} />
      <Footer {...footerProps} />
    </>
  );
}

export default App;
