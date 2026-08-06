import { $Map, $Set } from "@package/java/util";
import { $Object } from "@package/java/lang";

declare module "@package/net/tysontheember/emberstextapi/immersivemessages/effects/animation" {
    export class $ObfuscateTrack {
        resetTimers(): void;
        checkAndResetIfNeeded(): boolean;
        obfuscateUntilMs: $Map<number, number>;
        currentPlayCounted: boolean;
        lastAccessMs: number;
        resetDelayMs: number;
        currentlyObfuscatedIndices: $Set<number>;
        length: number;
        startTimeMs: number;
        directionKey: string;
        lastRandomUpdateMs: number;
        completed: boolean;
        playCount: number;
        completedAtMs: number;
        intervalMs: number;
        textHash: number;
        ranks: number[];
        cacheKey: $Object;
        repeat: boolean;
        order: number[];
        constructor();
    }
    export class $TypewriterTrack {
        reset(): void;
        update(): void;
        isCompleted(): boolean;
        getInterval(): number;
        setTotalChars(arg0: number): void;
        setInterval(arg0: number): void;
        getSound(): string;
        setSound(arg0: string): void;
        static createCompleted(): $TypewriterTrack;
        getSequentialOrdinal(arg0: number, arg1: number): number;
        checkAndResetIfNeeded(): boolean;
        getPlayCount(): number;
        setMaxPlays(arg0: number): void;
        setResetDelayMs(arg0: number): void;
        getTotalChars(): number;
        getResetDelayMs(): number;
        getMaxPlays(): number;
        setCacheKey(arg0: $Object): void;
        getElapsedMs(): number;
        nextRenderIndex(arg0: number, arg1: boolean): number;
        startedAt: number;
        index: number;
        changedSince: number;
        constructor();
        get completed(): boolean;
        get playCount(): number;
        set cacheKey(value: $Object);
        get elapsedMs(): number;
    }
}
