import { type GameData } from "@/types/gameData";

export const GAME_DATA: { de_mirage: GameData; de_vertigo: GameData } = {
  de_mirage: {
    local_player: {
      nickname: "qiki",
      team: 3,
      weapons: [60, 42, 43, 44],
      health: 35,
      has_helmet: false,
      armor: 100,
      money: 150,
      position: {
        y: -1988,
        z: -286.98107910156,
        x: -1972,
      },
      color: 1,
      has_defuser: true,
      index: 1,
      view_angles: {
        y: 17.77587890625,
        x: 2.2879028320313,
      },
      alive: true,
    },
    map: "de_mirage",
    bomb: {
      is_defusing: true,
      defuse_time: 10.0,
      position: {
        y: -131.0625,
        x: 1263.625,
        z: 0,
      },
      is_planted: true,
      site: "B",
      detonation_time: 39.0324,
    },
    players: [
      {
        nickname: "Pines",
        team: 2,
        weapons: [59, 4, 11, 46, 45, 44, 43],
        health: 100,
        has_helmet: true,
        armor: 90,
        money: 800,
        position: {
          y: -599.50244140625,
          z: -163.96875,
          x: 1261.0024414063,
        },
        color: 0,
        has_defuser: false,
        index: 2,
        view_angles: {
          y: -110.28522491455,
          x: -0.14178466796875,
        },
        alive: true,
      },
      {
        nickname: "Dios",
        team: 2,
        weapons: [59, 4, 49, 46, 45, 44],
        health: 70,
        has_helmet: true,
        armor: 100,
        money: 800,
        position: {
          y: -104.86291503906,
          z: -164.81488037109,
          x: 1226.2635498047,
        },
        color: 2,
        has_defuser: false,
        index: 3,
        view_angles: {
          y: -90.25577545166,
          x: -0.14178466796875,
        },
        alive: true,
      },
      {
        nickname: "Ulric",
        team: 3,
        weapons: [42, 32, 9, 48, 47, 45, 43],
        health: 100,
        has_helmet: false,
        armor: 0,
        money: 800,
        position: {
          y: -1995.0888671875,
          z: -262.35577392578,
          x: -1510.6339111328,
        },
        color: 0,
        has_defuser: true,
        index: 4,
        view_angles: {
          y: -47.800140380859,
          x: -0.14178466796875,
        },
        alive: true,
      },
      {
        nickname: "Telsen",
        team: 2,
        weapons: [59, 4, 39, 46, 45, 44, 43],
        health: 100,
        has_helmet: false,
        armor: 0,
        money: 800,
        position: {
          y: -756.90216064453,
          z: -234.20141601563,
          x: 1217.0034179688,
        },
        color: 3,
        has_defuser: false,
        index: 5,
        view_angles: {
          y: -56.863174438477,
          x: -0.14178466796875,
        },
        alive: true,
      },
      {
        nickname: "Maru",
        team: 3,
        weapons: [42, 32, 45, 47, 38],
        health: 100,
        has_helmet: true,
        armor: 100,
        money: 800,
        position: {
          y: -2292.765625,
          z: -172.83117675781,
          x: -1125.9040527344,
        },
        color: 3,
        has_defuser: true,
        index: 6,
        view_angles: {
          y: 8.0251770019531,
          x: -0.14178466796875,
        },
        alive: true,
      },
      {
        nickname: "Conleth",
        team: 3,
        weapons: [42, 32, 35, 48, 47, 45, 43],
        health: 100,
        has_helmet: false,
        armor: 100,
        money: 800,
        position: {
          y: -2203.4924316406,
          z: -242.34912109375,
          x: -1452.2259521484,
        },
        color: 4,
        has_defuser: false,
        index: 7,
        view_angles: {
          y: -23.656997680664,
          x: -0.14178466796875,
        },
        alive: true,
      },
      {
        nickname: "Bassey",
        team: 2,
        weapons: [59, 4, 40, 46, 45, 44, 43],
        health: 100,
        has_helmet: false,
        armor: 100,
        money: 800,
        position: {
          y: -343.07080078125,
          z: -164.130859375,
          x: 1239.5886230469,
        },
        color: 4,
        has_defuser: false,
        index: 8,
        view_angles: {
          y: -91.43440246582,
          x: -0.14178466796875,
        },
        alive: true,
      },
      {
        nickname: "Azul",
        team: 2,
        weapons: [59, 4, 28, 46, 45, 44, 43],
        health: 100,
        has_helmet: false,
        armor: 100,
        money: 800,
        position: {
          y: -910.09680175781,
          z: -261.36511230469,
          x: 1152.2000732422,
        },
        color: 1,
        has_defuser: false,
        index: 9,
        view_angles: {
          y: -137.48532104492,
          x: -0.14178466796875,
        },
        alive: true,
      },
      {
        nickname: "Clarence",
        team: 3,
        weapons: [42, 32, 25, 48, 47, 45, 43],
        health: 100,
        has_helmet: false,
        armor: 0,
        money: 800,
        position: {
          y: -2373.8208007813,
          z: -224.67150878906,
          x: -1412.1241455078,
        },
        color: 2,
        has_defuser: false,
        index: 10,
        view_angles: {
          y: -0.46211242675781,
          x: -0.14178466796875,
        },
        alive: true,
      },
    ],
  },
  de_vertigo: {
    local_player: {
      color: 1,
      money: 800,
      weapons: [60, 42, 43, 44],
      armor: 100,
      health: 35,
      position: {
        x: -1770.4985351563,
        y: -1258.6116943359,
        z: 11488.03125,
      },
      team: 2,
      has_helmet: false,
      index: 1,
      alive: true,
      nickname: "qiki",
      view_angles: {
        y: 106.90829467773,
        x: 10.841445922852,
      },
      has_defuser: false,
    },
    map: "de_vertigo",
    bomb: {
      position: {
        x: -1770.4985351563,
        y: -1258.6116943359,
        z: 11488.03125,
      },
      is_defusing: true,
      defuse_time: 10.0,
      detonation_time: 39.0324,
      is_planted: true,
      site: "A",
    },
    players: [
      {
        color: 0,
        money: 800,
        weapons: [59, 4, 11, 46, 45, 44, 43],
        armor: 90,
        health: 100,
        position: {
          x: -833.63140869141,
          y: 752.36157226563,
          z: 11776.03125,
        },
        team: 3,
        has_helmet: true,
        index: 3,
        alive: true,
        nickname: "Miguel",
        view_angles: {
          y: 147.64526367188,
          x: -1.5809936523438,
        },
        has_defuser: false,
      },
      {
        color: 0,
        money: 800,
        weapons: [59, 4, 49, 46, 45, 44],
        armor: 100,
        health: 70,
        position: {
          x: -1332.0358886719,
          y: -1453.2391357422,
          z: 11488.03125,
        },
        team: 2,
        has_helmet: true,
        index: 4,
        alive: true,
        nickname: "Yuri",
        view_angles: {
          y: 163.64547729492,
          x: -1.5809936523438,
        },
        has_defuser: false,
      },
      {
        color: 3,
        money: 800,
        weapons: [42, 32, 9, 48, 47, 45, 43],
        armor: 0,
        health: 100,
        position: {
          x: -1085.9937744141,
          y: 813.93145751953,
          z: 11776.03125,
        },
        team: 3,
        has_helmet: false,
        index: 5,
        alive: true,
        nickname: "Harvey",
        view_angles: {
          y: -6.8547821044922,
          x: -1.5809936523438,
        },
        has_defuser: true,
      },
      {
        color: 2,
        money: 800,
        weapons: [59, 4, 39, 46, 45, 44, 43],
        armor: 0,
        health: 100,
        position: {
          x: -1300.5004882813,
          y: -1200.0070800781,
          z: 11488.03125,
        },
        team: 2,
        has_helmet: false,
        index: 6,
        alive: true,
        nickname: "Niles",
        view_angles: {
          y: -121.354637146,
          x: -1.5809936523438,
        },
        has_defuser: false,
      },
      {
        color: 4,
        money: 800,
        weapons: [42, 32, 45, 47, 38],
        armor: 100,
        health: 100,
        position: {
          x: -1103.3575439453,
          y: 741.70263671875,
          z: 11776.03125,
        },
        team: 3,
        has_helmet: true,
        index: 7,
        alive: true,
        nickname: "Rivers",
        view_angles: {
          y: 101.14562988281,
          x: -1.5809936523438,
        },
        has_defuser: true,
      },
      {
        color: 3,
        money: 800,
        weapons: [42, 32, 35, 48, 47, 45, 43],
        armor: 100,
        health: 100,
        position: {
          x: -1359.2918701172,
          y: -1324.4642333984,
          z: 11488.03125,
        },
        team: 2,
        has_helmet: false,
        index: 8,
        alive: true,
        nickname: "Ulric",
        view_angles: {
          y: 147.14538574219,
          x: -1.5809936523438,
        },
        has_defuser: false,
      },
      {
        color: 4,
        money: 800,
        weapons: [59, 4, 40, 46, 45, 44, 43],
        armor: 100,
        health: 100,
        position: {
          x: -1296.7083740234,
          y: -1392.4282226563,
          z: 11488.03125,
        },
        team: 2,
        has_helmet: false,
        index: 9,
        alive: true,
        nickname: "Oli",
        view_angles: {
          y: -146.85458374023,
          x: -1.5809936523438,
        },
        has_defuser: false,
      },
      {
        color: 2,
        money: 800,
        weapons: [59, 4, 28, 46, 45, 44, 43],
        armor: 100,
        health: 100,
        position: {
          x: -782.57440185547,
          y: 901.92822265625,
          z: 11776.03125,
        },
        team: 3,
        has_helmet: false,
        index: 10,
        alive: true,
        nickname: "Azul",
        view_angles: {
          y: -122.35473632813,
          x: -1.5809936523438,
        },
        has_defuser: false,
      },
      {
        color: 1,
        money: 800,
        weapons: [42, 32, 25, 48, 47, 45, 43],
        armor: 0,
        health: 100,
        position: {
          x: -860.14361572266,
          y: 940.28204345703,
          z: 11776.03125,
        },
        team: 3,
        has_helmet: false,
        index: 11,
        alive: true,
        nickname: "Vox",
        view_angles: {
          y: -58.854789733887,
          x: -1.5809936523438,
        },
        has_defuser: false,
      },
    ],
  },
};
