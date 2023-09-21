import type Player from "../assets/structures/player";
import type Ground from "../assets/structures/ground";
import type Enemy from "../assets/structures/enemy";
import type Cloud from "../assets/drawings/cloud";
import type Background from "../assets/drawings/background"
import type Platform from "../assets/structures/platform"

export default interface Assets{
    player: Player[];
    grounds: Ground[];
    enemies: Enemy[];
    clouds: Cloud[];
    background: Background[];
    platforms: Platform[];
}