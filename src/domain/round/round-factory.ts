import { todayISO } from "@/lib/utils"; import type { HoleScore, Round } from "./types";
const pars=[4,4,3,4,4,4,3,4,5,4,4,3,5,4,4,3,4,5];
export function createDefaultHole(holeNumber:number):HoleScore{return{holeNumber,par:pars[holeNumber-1]??4,strokes:0,putts:0,penalties:0,plan:false,decision:false,commit:false,emotion:false,heroAttempt:false,note:""}}
export function createRound(overrides:Partial<Round>={}):Round{const now=new Date().toISOString();return{id:crypto.randomUUID(),player:"Aidan",course:"The Havens Country Club",date:todayISO(),targetScore:72,holes:Array.from({length:18},(_,i)=>createDefaultHole(i+1)),reflection:{bestDecision:"",costliestDecision:"",nextRoundCommitment:""},createdAt:now,updatedAt:now,...overrides}}
