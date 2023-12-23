import { CountryInterface } from "../country/country.interface";

export interface DepartmentInterface {
    id: number;
    code: string | undefined | null;
    name: string | undefined | null;
    country?: CountryInterface;
}
