import { clsx, type ClassValue } from "clsx"; import { twMerge } from "tailwind-merge";
export function cn(...i:ClassValue[]){return twMerge(clsx(i))} export function clamp(v:number,min:number,max:number){return Math.min(max,Math.max(min,v))} export function todayISO(){return new Date().toISOString().slice(0,10)}
