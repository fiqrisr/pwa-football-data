import { PositionEnum } from '../enums/PositionEnum';
import { RoleEnum } from '../enums/RoleEnum';

export interface ISquad {
    id: number;
    name: string;
    position: PositionEnum | null;
    dateOfBirth: Date;
    countryOfBirth: string;
    nationality: string;
    shirtNumber: number | null;
    role: RoleEnum;
}
