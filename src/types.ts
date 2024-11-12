export type Country = {
    name: {
        common: string,
        official: string
    },
    tld?: string[],
    population: number,
    region: FilterType,
    subregion?: string,
    capital?: string[],
    flags: {
        png: string
    },
    currencies?: {
        [currencyCode: string]: {
            name: string
        };
    },
    languages?: {
        [languageCode: string]: string
    }
}

export enum FilterType {
    africa = "Africa",
    antarctic = "Antarctic",
    americas = "Americas",
    asia = "Asia",
    europe = "Europe",
    oceania = "Oceania"
}