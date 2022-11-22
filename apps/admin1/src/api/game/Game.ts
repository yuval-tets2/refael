import { Player } from "../player/Player";

export type Game = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  players?: Array<Player>;
  updatedAt: Date;
};
