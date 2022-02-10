import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUser, faVideo, faInfoCircle, faPlay } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import actionImg from '../assets/action/action.png';
import isSpartar from '../assets/action/300.png';
import deadpool from '../assets/action/deadpool.png';
import endGame from '../assets/action/endgame.png';
import fastEight from '../assets/action/fast-furious-8.png';
import johnWick from '../assets/action/john-wick-3.png'
import superman from '../assets/action/man-steel.png';
import matrix from '../assets/action/matrix.png';
import comedyImg from '../assets/comedy/comedy.jpg';
import grownUp from '../assets/comedy/grown-ups.png';
import littleMan from '../assets/comedy/little-man.png';
import norbit from '../assets/comedy/norbit.png';
import vacation from '../assets/comedy/vacation.png';
import theMillers from '../assets/comedy/were-the-millers.png';
import docuImg from '../assets/documentary/documentary.png';
import abducted from '../assets/documentary/abducted.png';
import lilPeep from '../assets/documentary/lil-peep.png';
import rousey from '../assets/documentary/ronda-rousey.png';
import sepultura from '../assets/documentary/sepultura-endurance.png';
import superSize from '../assets/documentary/super-size-me.png';
import dramaImg from '../assets/drama/drama.jpg';
import collaBeuaty from '../assets/drama/collateral-beauty.png';
import concussion from '../assets/drama/concussion.png';
import creedII from '../assets/drama/creed-2.png';
import sevenPounds from '../assets/drama/seven-pounds.png';
import impossible from '../assets/drama/the-impossible.png';
import horrorImg from '../assets/horror/horror.png';
import quietPlaceII from '../assets/horror/a-quiet-place-2.png';
import deadSilence from '../assets/horror/dead-silence.png';
import itII from '../assets/horror/it-2.png';
import markedOnes from '../assets/horror/paranormal-activity-marked-ones.png';
import witch from '../assets/horror/the-witch.png';
import kidImg from '../assets/kid/kid.jpg';
import dorado from '../assets/kid/el-dorado.png';
import trainDragonIII from '../assets/kid/how-to-train-your-dragon-3.png';
import shrekII from '../assets/kid/shrek-2.png';
import sinbad from '../assets/kid/sinbad.png';
import croods from '../assets/kid/the-croods.png';
import romanceImg from '../assets/romance/romance.png';
import time from '../assets/romance/about-time.png';
import hitch from '../assets/romance/hitch.png';
import longRide from '../assets/romance/the-longest-ride.png';
import vow from '../assets/romance/the-vow.png';
import yourName from '../assets/romance/your-name.png';
import vintageImg from '../assets/vintage/vintage.png';
import kane from '../assets/vintage/citizen-kane.png';
import enterDragon from '../assets/vintage/enter-the-dragon.png';
import godFather from '../assets/vintage/godfather.png';
import psycho from '../assets/vintage/psycho.png';
import ozWizard from '../assets/vintage/the-wizard-of-oz.png';

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
        url: isSpartar,
        genre: ["action"],
        recent: true,
    },
    {
        id: 2,
        url: deadpool,
        genre: ["action", "comedy"],
        recent: false,
    },
    {
        id: 3,
        url: endGame,
        genre: ["action", "comedy", "drama"],
        recent: false,
    },
    {
        id: 4,
        url: fastEight,
        genre: ["action", "comedy", "drama"],
        recent: false,
    },
    {
        id: 5,
        url: johnWick,
        genre: ["action"],
        recent: false,
    },
    {
        id: 6,
        url: superman,
        genre: ["action", "sci-fi"],
        recent: false,
    },
    {
        id: 7,
        url: matrix,
        genre: ["action", "sci-fi", "romance"],
        recent: false,
    },
    {
        id: 8,
        url: grownUp,
        genre: ["comedy"],
        recent: false,
    },
    {
        id: 9,
        url: littleMan,
        genre: ["comedy"],
        recent: false,
    },
    {
        id: 10,
        url: norbit,
        genre: ["comedy"],
        recent: false,
    },
    {
        id: 11,
        url: vacation,
        genre: ["comedy"],
        recent: false,
    },
    {
        id: 12,
        url: theMillers,
        genre: ["comedy"],
        recent: false,
    },
    {
        id: 13,
        url: abducted,
        genre: ["documentary"],
        recent: false,
    },
    {
        id: 14,
        url: lilPeep,
        genre: ["documentary"],
        recent: false,
    },
    {
        id: 15,
        url: rousey,
        genre: ["documentary"],
        recent: false,
    },
    {
        id: 16,
        url: sepultura,
        genre: ["documentary"],
        recent: false,
    },
    {
        id: 17,
        url: superSize,
        genre: ["documentary"],
        recent: false,
    },
    {
        id: 18,
        url: collaBeuaty,
        genre: ["drama"],
        recent: false,
    },
    {
        id: 19,
        url: concussion,
        genre: ["drama"],
        recent: false,
    },
    {
        id: 20,
        url: creedII,
        genre: ["drama", "comedy"],
        recent: false,
    },
    {
        id: 21,
        url: sevenPounds,
        genre: ["drama"],
        recent: false,
    },
    {
        id: 22,
        url: impossible,
        genre: ["drama"],
        recent: false,
    },
    {
        id: 23,
        url: quietPlaceII,
        genre: ["horror", "suspense", "sci-fi"],
        recent: true,
    },
    {
        id: 24,
        url: deadSilence,
        genre: ["horror", "suspense"],
        recent: false,
    },
    {
        id: 25,
        url: itII,
        genre: ["horror", "suspense"],
        recent: false,
    },
    {
        id: 26,
        url: markedOnes,
        genre: ["horror", "suspense"],
        recent: false,
    },
    {
        id: 27,
        url: witch,
        genre: ["horror", "suspense"],
        recent: false,
    },
    {
        id: 28,
        url: dorado,
        genre: ["kid", "animation", "action", "history"],
        recent: false,
    },
    {
        id: 29,
        url: trainDragonIII,
        genre: ["kid", "animation", "action", "history"],
        recent: false,
    },
    {
        id: 30,
        url: shrekII,
        genre: ["kid", "animation", "action", "comedy"],
        recent: false,
    },
    {
        id: 31,
        url: sinbad,
        genre: ["kid", "animation", "action"],
        recent: false,
    },
    {
        id: 32,
        url: croods,
        genre: ["kid", "animation", "action"],
        recent: false,
    },
    {
        id: 33,
        url: time,
        genre: ["romance", "comedy", "sci-fi", "drama"],
        recent: false,
    },
    {
        id: 34,
        url: hitch,
        genre: ["romance", "comedy", "drama"],
        recent: false,
    },
    {
        id: 35,
        url: longRide,
        genre: ["romance", "drama"],
        recent: false,
    },
    {
        id: 36,
        url: vow,
        genre: ["romance", "drama"],
        recent: false,
    },
    {
        id: 37,
        url: yourName,
        genre: ["romance", "drama", "anime"],
        recent: true,
    },
    {
        id: 38,
        url: kane,
        genre: ["vintage", "drama"],
        recent: false,
    },
    {
        id: 39,
        url: enterDragon,
        genre: ["vintage", "action", "drama"],
        recent: false,
    },
    {
        id: 40,
        url: godFather,
        genre: ["vintage", "action", "drama"],
        recent: true,
    },
    {
        id: 41,
        url: psycho,
        genre: ["vintage", "horror", "drama"],
        recent: false,
    },
    {
        id: 42,
        url: ozWizard,
        genre: ["vintage", "sci-fi", "musical"],
        recent: false,
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
];

export const getUserInfo = {
    img: johnWick,
};

export const play = <FontAwesomeIcon icon={faPlay}/>;

export const info = <FontAwesomeIcon icon={faInfoCircle} />;