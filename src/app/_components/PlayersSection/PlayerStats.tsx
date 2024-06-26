import { Team } from "@/types/team";

import { PLAYER_COLORS } from "@/constants/player";

import {
  getPrimaryWeapon,
  getSecondaryWeapon,
  getNades,
  playerHasBomb,
} from "@/lib/weapon";

import PlayerPrimaryWeapon from "./PlayerPrimaryWeapon";
import PlayerSecondaryWeapon from "./PlayerSecondaryWeapon";
import PlayerArmor from "./PlayerArmor";
import PlayerNades from "./PlayerNades";
import PlayerMisc from "./PlayerMisc";

type PlayerStatsProps = {
  color: number;
  nickname: string;
  team: Team;
  health: number;
  armor: number;
  hasHelmet: boolean;
  money: number;
  weapons: number[];
  hasDefuser: boolean;
};

export default function PlayerStats({
  color,
  nickname,
  team,
  health,
  armor,
  hasHelmet,
  money,
  weapons,
  hasDefuser,
}: PlayerStatsProps) {
  return (
    <div className="overflow-hidden rounded-md bg-black/5 text-zinc-800 dark:bg-white/5 dark:text-white">
      <div className="relative grid w-full grid-cols-3 items-center justify-between bg-black/20 px-2 py-1 text-white dark:bg-white/5">
        <div
          className={`absolute h-full w-[0%] ${team === Team.Terrorist ? "bg-[hsl(36,74%,23%)]" : "bg-[hsl(219,33%,52%)]"}`}
          style={{ width: `${health}%` }}
        ></div>

        <span className="relative">{health}</span>
        <span className="relative truncate">
          <span style={{ color: PLAYER_COLORS[color] }}>&#x25cf;</span>{" "}
          {nickname}
        </span>
        <PlayerPrimaryWeapon weapon={getPrimaryWeapon(weapons)} />
      </div>

      <div className="grid w-full grid-cols-2 items-center justify-between gap-2 px-2 py-1 sm:grid-cols-4">
        <span data-money={money} className="text-green-500">
          ${money}
        </span>
        <PlayerNades nades={getNades(weapons)} />
        <div className="col-span-2 flex flex-row-reverse items-center justify-between sm:flex-row">
          <div className="flex gap-2 brightness-[0.25] dark:brightness-100">
            <PlayerArmor armor={armor} hasHelmet={hasHelmet} />
            <PlayerMisc
              hasDefuser={hasDefuser}
              hasBomb={playerHasBomb(weapons)}
            />
          </div>
          <PlayerSecondaryWeapon weapon={getSecondaryWeapon(weapons)} />
        </div>
      </div>
    </div>
  );
}
