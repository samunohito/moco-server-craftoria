import { $ConcurrentLinkedQueue } from "@package/java/util/concurrent";
import { $Blaze3dRenderTargetExt } from "@package/net/irisshaders/iris/targets";
import { $Enum } from "@package/java/lang";

declare module "@package/com/mojang/blaze3d/pipeline" {
    export class $MainTarget$AttachmentState extends $Enum<$MainTarget$AttachmentState> {
    }
    /**
     * Values that may be interpreted as {@link $MainTarget$AttachmentState}.
     */
    export type $MainTarget$AttachmentState_ = "none" | "color" | "depth" | "color_depth";
    export class $RenderCall {
    }
    export interface $RenderCall {
        execute(): void;
    }
    /**
     * Values that may be interpreted as {@link $RenderCall}.
     */
    export type $RenderCall_ = (() => void);
    export class $RenderTarget implements $Blaze3dRenderTargetExt {
        clear(useDepth: boolean): void;
        resize(width: number, height: number, disableBlend: boolean): void;
        bindWrite(useDepth: boolean): void;
        bindRead(): void;
        unbindRead(): void;
        setClearColor(red: number, green: number, blue: number, alpha: number): void;
        checkStatus(): void;
        unbindWrite(): void;
        blitToScreen(width: number, height: number, disableBlend: boolean): void;
        blitToScreen(width: number, height: number): void;
        destroyBuffers(): void;
        getDepthTextureId(): number;
        getColorTextureId(): number;
        isStencilEnabled(): boolean;
        enableStencil(): void;
        copyDepthFrom(otherTarget: $RenderTarget): void;
        createBuffers(width: number, height: number, disableBlend: boolean): void;
        setFilterMode(filterMode: number): void;
        iris$getDepthBufferVersion(): number;
        iris$getColorBufferVersion(): number;
        useDepth: boolean;
        filterMode: number;
        viewWidth: number;
        frameBufferId: number;
        width: number;
        viewHeight: number;
        height: number;
        constructor(useDepth: boolean);
        get depthTextureId(): number;
        get colorTextureId(): number;
        get stencilEnabled(): boolean;
    }
    export class $MainTarget extends $RenderTarget {
        useDepth: boolean;
        filterMode: number;
        static DEFAULT_HEIGHT: number;
        viewWidth: number;
        frameBufferId: number;
        width: number;
        viewHeight: number;
        static DEFAULT_WIDTH: number;
        height: number;
        constructor(width: number, height: number);
    }
    export class $RenderPipeline {
        beginRecording(): boolean;
        endRecording(): void;
        recordRenderCall(renderCall: $RenderCall_): void;
        beginProcessing(): boolean;
        getRecordingQueue(): $ConcurrentLinkedQueue<$RenderCall>;
        getProcessedQueue(): $ConcurrentLinkedQueue<$RenderCall>;
        canBeginRecording(): boolean;
        canBeginProcessing(): boolean;
        startRendering(): $ConcurrentLinkedQueue<$RenderCall>;
        endProcessing(): void;
        processRecordedQueue(): void;
        constructor();
        get recordingQueue(): $ConcurrentLinkedQueue<$RenderCall>;
        get processedQueue(): $ConcurrentLinkedQueue<$RenderCall>;
    }
    export class $MainTarget$Dimension {
    }
    export class $TextureTarget extends $RenderTarget {
        useDepth: boolean;
        filterMode: number;
        viewWidth: number;
        frameBufferId: number;
        width: number;
        viewHeight: number;
        height: number;
        constructor(width: number, height: number, useDepth: boolean, clearError: boolean);
    }
}
