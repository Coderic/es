import { CityInterface } from "projects/suadmin/src/app/panel/params/city/city.interface";
import { TransportInterface } from "projects/suadmin/src/app/panel/params/transport/transport.interface";

export interface ParamsInterface {
    id: number;
    name: string;
}

export interface PackageTypeInterface extends ParamsInterface { }
export interface ShipperInterface extends ParamsInterface { }

export interface RemitteeInterface {
    id: number;
    city: CityInterface|null;
    nombres: string;
    apellidos: string;
    direccion: string;
    telefono: string;
    correo: string;
}

export interface PackageInterface {
    id: number;
    remittee: RemitteeInterface;
    shipper: ShipperInterface;
    transport: TransportInterface|null;
    packageType: PackageTypeInterface;
    fecha: Date|string|null;
    recibo: string;
    alto: number;
    ancho: number;
    largo: number;
    peso: number;
    tracking: string;
    notas: string;
}
