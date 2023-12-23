import { DepartmentInterface } from "../department/department.interface";

export interface CityInterface {
    id: number;
    name: string | undefined | null;
    department?: DepartmentInterface | null;
}
