import { GroupInterface } from "../group/group.interface";
import { PermissionInterface } from "../permission/permission.interface";
import { RoleInterface } from "../role/role.interface";

export interface UserInterface {
    id?: number;
    username: string | null;
    password: string | null;
    enabled: boolean | null;
    roles: RoleInterface[];
    groups: GroupInterface[];
    permissions: PermissionInterface[];
}