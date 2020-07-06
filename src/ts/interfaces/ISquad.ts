import { Position } from '../enums/PositionEnum';
import { Role } from '../enums/RoleEnum';

export interface ISquad {
    id: number;
    name: string;
    position: Position | null;
    dateOfBirth: Date;
    countryOfBirth: string;
    nationality: string;
    shirtNumber: number | null;
    role: Role;
}
