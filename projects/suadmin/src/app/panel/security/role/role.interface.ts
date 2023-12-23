import { PermissionInterface } from "../permission/permission.interface";

export interface RoleInterface {
    id: number;
    name: string | null;
    role: string | null;
    permissions: PermissionInterface[]
}
