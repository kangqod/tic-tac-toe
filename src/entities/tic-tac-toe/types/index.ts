import { PLAYERS } from "../models";

export type Player = (typeof PLAYERS)[keyof typeof PLAYERS] | null;
