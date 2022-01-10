import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUser, faVideo,  } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

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