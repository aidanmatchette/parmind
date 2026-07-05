export type DecisionKey="plan"|"decision"|"commit"|"emotion";
export type HoleScore={holeNumber:number;par:number;strokes:number;putts:number;penalties:number;plan:boolean;decision:boolean;commit:boolean;emotion:boolean;heroAttempt:boolean;note:string};
export type Round={id:string;player:string;course:string;date:string;targetScore:number;holes:HoleScore[];reflection:{bestDecision:string;costliestDecision:string;nextRoundCommitment:string};createdAt:string;updatedAt:string};
export type RoundTotals={gross:number;putts:number;penalties:number;heroAttempts:number;decisionWins:number;decisionPossible:number;decisionPercent:number;doublesOrWorseEstimate:number;grade:"A"|"B"|"C"|"D"};
