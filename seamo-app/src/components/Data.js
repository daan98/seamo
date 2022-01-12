import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUser, faVideo,  } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import comedyImg from '../assets/comedy/comedy.jpg';
import actionImg from '../assets/action/action.png';
import docuImg from '../assets/documentary/documentary.png';
import dramaImg from '../assets/drama/drama.jpg';
import kidImg from '../assets/kid/kid.jpg'
import romanceImg from '../assets/romance/romance.png';
import horrorImg from '../assets/horror/horror.png';
import vintageImg from '../assets/vintage/vintage.png'

export const getNavbarLink = [
    {
        id: 1,
        icon: "Seamo",
        url: "/"
    },
    {
        id: 2,
        icon: <FontAwesomeIcon icon={faVideo} />,
        url: "/movies"
    },
    {
        id: 3,
        icon: <FontAwesomeIcon icon={faSearch} />,
        url: "/search"
    },
    {
        id: 4,
        icon: <FontAwesomeIcon  icon={faUser} />,
        url: "/setting"
    }
];

export const getSocialLink = [
    {
        id: 1,
        icon: <FontAwesomeIcon icon={faFacebookF} />,
        url: "/facebook"
    },
    {
        id: 2,
        icon: <FontAwesomeIcon icon={faInstagram} />,
        url: "/instagram"
    },
    {
        id: 3,
        icon: <FontAwesomeIcon icon={faTwitter} />,
        url: "/twitter"
    }
];

export const getMoviesImage = [
    {
        id: 1,
        url: '../assets/action/300.png',
    },
    {
        id: 2,
        url: '../assets/action/deadpool.png',
    },
    {
        id: 3,
        url: '../assets/action/endgame.png',
    },
    {
        id: 4,
        url: '../assets/action/fast-furious-8.png',
    },
    {
        id: 5,
        url: '../assets/action/john-wick-3.png',
    },
    {
        id: 6,
        url: '../assets/man-steel.png',
    },
    {
        id: 7,
        url: '../assets/action/matrix.png',
    },
    {
        id: 8,
        url: '../assets/comedy/grown-ups.png',
    },
    {
        id: 9,
        url: '../assets/comedy/little-man.png',
    },
    {
        id: 10,
        url: '../assets/comedy/norbit.png',
    },
    {
        id: 11,
        url: '../assets/comedy/vacation.png',
    },
    {
        id: 12,
        url: '../assets/comedy/were-the-millers.png',
    },
    {
        id: 13,
        url: '../assets/documentary/abducted.png',
    },
    {
        id: 14,
        url: '../assets/documentary/lil-peep.png',
    },
    {
        id: 15,
        url: '../assets/documentary/ronda-rousey.png',
    },
    {
        id: 16,
        url: '../assets/documentary/sepultura-endurance.png',
    },
    {
        id: 17,
        url: '../assets/documentary/super-size-me.png',
    },
    {
        id: 18,
        url: '../assets/drama/collateral-beauty.png',
    },
    {
        id: 19,
        url: '../assets/drama/concussion.png',
    },
    {
        id: 20,
        url: '../assets/drama/creed-2.png',
    },
    {
        id: 21,
        url: '../assets/drama/seven-pounds.png',
    },
    {
        id: 22,
        url: '../assets/drama/the-impossible.png',
    },
    {
        id: 23,
        url: '../assets/horror/a-quiet-place-2.png',
    },
    {
        id: 24,
        url: '../assets/horror/dead-silence.png',
    },
    {
        id: 25,
        url: '../assets/horror/it-2.png',
    },
    {
        id: 26,
        url: '../assets/horror/paranormal-activity-marked-ones.png',
    },
    {
        id: 27,
        url: '../assets/horror/the-witch.png',
    },
    {
        id: 28,
        url: '../assets/kid/el-dorado.png',
    },
    {
        id: 29,
        url: '../assets/kid/how-to-train-your-dragon-3.png',
    },
    {
        id: 30,
        url: '../assets/kid/shrek-2.png',
    },
    {
        id: 31,
        url: '../assets/kid/sinbad.png',
    },
    {
        id: 32,
        url: '../assets/kid/the-croods.png',
    },
    {
        id: 33,
        url: '../assets/romance/about-time.png',
    },
    {
        id: 34,
        url: '../assets/romance/hitch.png',
    },
    {
        id: 35,
        url: '../assets/romance/the-longest-ride.png',
    },
    {
        id: 36,
        url: '../assets/romance/the-vow.png',
    },
    {
        id: 37,
        url: '../assets/romance/your-name.png',
    },
    {
        id: 38,
        url: '../assets/vintage/citizen-kene.png',
    },
    {
        id: 39,
        url: '../assets/vintage/enter-the-dragon.png',
    },
    {
        id: 40,
        url: '../assets/vintage/godfather.png',
    },
    {
        id: 41,
        url: '../assets/vintage/psycho.png',
    },
    {
        id: 42,
        url: '../assets/vintage/the-wizard-of-oz.png',
    },
];

export const getGenresImage = [
    {
        id: 1,
        url: comedyImg,
        genre: "Comedy",
    },
    {
        id: 2,
        url: actionImg,
        genre: "Action",
    },
    {
        id: 3,
        url: docuImg,
        genre: "Documentary"
    },
    {
        id: 4,
        url: dramaImg,
        genre: "Drama",
    },
    {
        id: 5,
        url: kidImg,
        genre: "Kid",
    },
    {
        id: 6,
        url: romanceImg,
        genre: "Romance",
    },
    {
        id: 7,
        url: horrorImg,
        genre: "Horror",
    },
    {
        id: 8,
        url: vintageImg,
        genre: "Vintage",
    },
]