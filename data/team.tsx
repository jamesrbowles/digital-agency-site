import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const team = [
  {
    id: 1,
    img: '/assets/images/about/team1.jpg',
    socialList: [
      { icon: <FaFacebook />, liveLink: 'https://www.facebook.com/' },
      { icon: <FaTwitter />, liveLink: 'https://www.twitter.com/' },
      { icon: <FaInstagram />, liveLink: 'https://www.instagram.com/' },
    ],
    name: `Christopher Pakulla`,
    type: 'Broker',
    office: '134 456 3210',
    mobile: '891 456 9874',
    email: 'pakulla@vanguard.com',
  },
  {
    id: 2,
    img: '/assets/images/about/team2.jpg',
    socialList: [
      { icon: <FaFacebook />, liveLink: 'https://www.facebook.com/' },
      { icon: <FaTwitter />, liveLink: 'https://www.twitter.com/' },
      { icon: <FaInstagram />, liveLink: 'https://www.instagram.com/' },
    ],
    name: `Anna Harrison`,
    type: 'Agent',
    office: '134 456 3210',
    mobile: '891 456 9874',
    email: 'harrison@vanguard.com',
  },
  {
    id: 3,
    img: '/assets/images/about/team3.jpg',
    socialList: [
      { icon: <FaFacebook />, liveLink: 'https://www.facebook.com/' },
      { icon: <FaTwitter />, liveLink: 'https://www.twitter.com/' },
      { icon: <FaInstagram />, liveLink: 'https://www.instagram.com/' },
    ],
    name: `Juan Maldini`,
    type: 'Broker',
    office: '134 456 3210',
    mobile: '891 456 9874',
    email: 'maldini@vanguard.com',
  },
  {
    id: 4,
    img: '/assets/images/about/team4.jpg',
    socialList: [
      { icon: <FaFacebook />, liveLink: 'https://www.facebook.com/' },
      { icon: <FaTwitter />, liveLink: 'https://www.twitter.com/' },
      { icon: <FaInstagram />, liveLink: 'https://www.instagram.com/' },
    ],
    name: `Michelle Ciesla`,
    type: 'Agent',
    office: '134 456 3210',
    mobile: '891 456 9874',
    email: 'ciesla@vanguard.com',
  },
];

export default team;
