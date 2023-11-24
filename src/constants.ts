interface ColorsTypes {
    primary: string;
    secondary: string;
    tertiary: string;
    grayLight: string;
}

interface FontTypes {
    small: number;
    medium: number;
    large: number;
    xl: number;
    xxl: number;
}

interface PaddingTypes {
    small: number;
    medium: number;
    large: number;
}

interface HomeTypes {
    title: string;
    description: string;
}

interface IconsType {
    back: string;
    paste: string;
}

interface PlanetType {
    name: string;
    image: string;
    description: string;
}

interface PlanetsTypes {
    PLANETS: PlanetType[];
}

export const colors: ColorsTypes = 
{
    primary: '#121212',
    secondary: '#fefefe',
    tertiary: '#74c6c2',
    grayLight: '#282828'
};

export const fontSizes: FontTypes = 
{
    small: 10,
    medium: 12,
    large: 16,
    xl: 24,
    xxl: 30
};

export const paddingHorizontal: PaddingTypes = {
    small: 20,
    medium: 40,
    large: 60
};

export const HOME: HomeTypes = {
    title: 'Planetas',
    description: 'Los planetas son cuerpos celestes que orbitan alrededor de estrellas. En nuestro sistema solar, los ocho planetas principales varían en tamaño, composición y condiciones atmosféricas.'
}

export const ICONS: IconsType = {
    back: 'https://cdn3.iconfinder.com/data/icons/elements-of-geometry/154/arrow-left-geometry-256.png',
    paste: 'https://cdn0.iconfinder.com/data/icons/developer-bw-vol-4/100/developer4-18-256.png'
}

export const PLANETS: PlanetsTypes = [
    {
        name: 'Mercurio',
        image: 'https://w7.pngwing.com/pngs/957/238/png-transparent-mercury-planet-planet-miscellaneous-sphere-venus-thumbnail.png',
        description: 'Mercurio, el planeta más cercano al Sol, destaca por su superficie desolada y extremas variaciones de temperatura.'
    },
    {
        name:'Tierra',
        image: 'https://w7.pngwing.com/pngs/580/212/png-transparent-earth-file-formats-earth-image-file-formats-globe-atmosphere-thumbnail.png',
        description:  'La Tierra, tercer planeta del sistema solar, destaca por ser el único conocido por albergar vida. Con una atmósfera única y variados ecosistemas, es el hogar de una diversidad asombrosa de formas de vida.'
    },
    {
        name: 'Jupiter',
        image: 'https://w7.pngwing.com/pngs/552/71/png-transparent-agar-io-jupiter-planet-solar-system-jupiter-solar-system-saturn-great-red-spot-thumbnail.png',
        description: 'Júpiter, el quinto planeta del sistema solar, es un gigante gaseoso dominado por su inmensidad y su distintiva Gran Mancha Roja.'
    },
    {
        name: 'Marte',
        image: 'https://w7.pngwing.com/pngs/16/806/png-transparent-planet-mars-illustration-earth-terrestrial-planet-mars-solar-system-mars-sphere-venus-astronomical-object-thumbnail.png',
        description: 'Marte, el cuarto planeta, se caracteriza por su color rojizo y es objeto de exploración espacial en busca de evidencias de agua y posibles condiciones para la vida.'
    }
];

export const DATE: any = new Date();
export const DAY: any = DATE.getDate();
export const MONTH: any = DATE.getMonth();

export const iconSize: number = 25;
export const MAX_WIDTH: number = 800;