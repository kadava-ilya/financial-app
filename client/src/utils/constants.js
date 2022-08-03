import AppleLogo from "../assets/icons/logos/Apple_logo.png";
import AmazonLogo from "../assets/icons/logos/Amazon_logo.png";
import FacebookLogo from "../assets/icons/logos/Facebook_logo.png";
import GoogleLogo from "../assets/icons/logos/Google_logo.png";
import MicrosoftLogo from "../assets/icons/logos/Microsoft_logo.png";
import TeslaLogo from "../assets/icons/logos/Tesla_logo.png";

export const TIME_RANGES = [
    {
        id: 1,
        title: '1s',
        value: 1000,
    },
    {
        id: 2,
        title: '5s',
        value: 5000,
    },
    {
        id: 3,
        title: '10s',
        value: 10000,
    },
    {
        id: 4,
        title: '30s',
        value: 30000,
    },
]

export const TABLE_ICONS = (path) => {
    switch (path) {
        case 'AAPL':
            return AppleLogo
            break;
        case 'AMZN':
            return AmazonLogo
            break;
        case 'FB':
            return FacebookLogo
            break;
        case 'GOOGL':
            return GoogleLogo
            break;
        case 'MSFT':
            return MicrosoftLogo
            break;
        case 'TSLA':
            return TeslaLogo
            break;
        default:

    }
}

export const TABLE_HEADER = [
    'Logo',
    'Ticker',
    'Exchange',
    'Price, USD',
    'Changed, USD',
    'Changed, %',
    'Dividend',
    'Yield',
    'Last Trade',
    'Delete'
]
