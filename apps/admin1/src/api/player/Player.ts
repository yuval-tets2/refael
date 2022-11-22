import { Game } from "../game/Game";

export type Player = {
  createdAt: Date;
  game?: Game | null;
  id: string;
  name: string | null;
  updatedAt: Date;
};
