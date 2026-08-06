import { $MinimapInterface } from "@package/xaero/common/minimap";
import { $ModSettings } from "@package/xaero/common/settings";
import { $List } from "@package/java/util";
import { $IntBuffer } from "@package/java/nio";

declare module "@package/xaero/common/minimap/region" {
    export class $MinimapChunk {
        reset(arg0: number, arg1: number): void;
        cleanup(arg0: $MinimapInterface): void;
        getBuffer(arg0: number): $IntBuffer;
        getTile(arg0: number, arg1: number): $MinimapTile;
        getZ(): number;
        getX(): number;
        setChanged(arg0: boolean): void;
        copyBuffer(arg0: number, arg1: $IntBuffer): void;
        bindTexture(arg0: number): number;
        setTile(arg0: number, arg1: number, arg2: $MinimapTile): void;
        setBlockTextureUpload(arg0: boolean): void;
        setGlTexture(arg0: number, arg1: number): void;
        recycleTiles(): void;
        updateBuffers(arg0: number, arg1: number[][]): void;
        isRefreshRequired(arg0: number): boolean;
        setLevelsBuffered(arg0: number): void;
        getLevelsBuffered(): number;
        setHasSomething(arg0: boolean): void;
        getGlTexture(arg0: number): number;
        setRefreshRequired(arg0: number, arg1: boolean): void;
        isHasSomething(): boolean;
        isChanged(): boolean;
        isBlockTextureUpload(): boolean;
        putColour(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: number): void;
        getLevelToRefresh(arg0: number): number;
        static LIGHT_LEVELS: number;
        static INT_BUFFER_SIZE: number;
        static SIZE_TILES: number;
        constructor(arg0: number, arg1: number);
        get z(): number;
        get x(): number;
    }
    export class $MinimapTile {
        getHeight(arg0: number, arg1: number): number;
        setRGB(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        getZ(): number;
        getX(): number;
        setHeight(arg0: number, arg1: number, arg2: number): void;
        setSuccess(arg0: boolean): void;
        static isSlimeChunk(arg0: $ModSettings, arg1: number, arg2: number, arg3: number): boolean;
        isSlimeChunk(): boolean;
        setCode(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        isSuccess(): boolean;
        getRed(arg0: number, arg1: number, arg2: number): number;
        getBlue(arg0: number, arg1: number, arg2: number): number;
        getGreen(arg0: number, arg1: number, arg2: number): number;
        recycle(): void;
        getHighlightVersion(): number;
        setHighlightVersion(arg0: number): void;
        static getANewTile(arg0: $ModSettings, arg1: number, arg2: number, arg3: number): $MinimapTile;
        setWasTransfered(arg0: boolean): void;
        setHasTerrain(arg0: boolean): void;
        setHighlights(arg0: number[]): void;
        getHighlights(): number[];
        setHasSomething(arg0: boolean): void;
        pixelChanged(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
        isHasSomething(): boolean;
        hasTerrain(): boolean;
        isChunkGrid(): boolean;
        isWasTransfered(): boolean;
        static recycled: $List<$MinimapTile>;
        caveLevel: number;
        constructor(arg0: $ModSettings, arg1: number, arg2: number, arg3: number);
        get z(): number;
        get x(): number;
        get chunkGrid(): boolean;
    }
}
