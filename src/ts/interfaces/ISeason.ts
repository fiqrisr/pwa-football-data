import { IWinner } from './IWinner';

export interface ISeason {
    id: number;
    startDate: Date;
    endDate: Date;
    currentMatchday: number | null;
    winner: IWinner | null;
}
