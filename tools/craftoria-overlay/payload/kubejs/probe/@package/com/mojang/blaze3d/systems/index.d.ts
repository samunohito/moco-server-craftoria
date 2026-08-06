import { $ShaderInstance } from "@package/net/minecraft/client/renderer";
import { $RenderCall_ } from "@package/com/mojang/blaze3d/pipeline";
import { $GlStateManager$SourceFactor_, $GlStateManager$LogicOp_, $GlStateManager$DestFactor_ } from "@package/com/mojang/blaze3d/platform";
import { $ByteBuffer, $IntBuffer, $FloatBuffer } from "@package/java/nio";
import { $TimeSource$NanoTimeSource } from "@package/net/minecraft/util";
import { $RenderSystemAccessor } from "@package/net/createmod/ponder/mixin/client/accessor";
import { $Consumer_, $Supplier_ } from "@package/java/util/function";
import { $GlStateBackup } from "@package/net/neoforged/neoforge/client";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Tesselator, $VertexFormat$IndexType, $VertexSorting, $VertexFormat$Mode_, $VertexSorting_ } from "@package/com/mojang/blaze3d/vertex";
import { $GLFWErrorCallbackI_ } from "@package/org/lwjgl/glfw";
import { $Runnable_ } from "@package/java/lang";
import { $FogShape_, $FogShape } from "@package/com/mojang/blaze3d/shaders";
import { $Matrix4fStack, $Matrix4f, $Vector3f } from "@package/org/joml";

declare module "@package/com/mojang/blaze3d/systems" {
    export class $RenderSystem$AutoStorageIndexBuffer$IndexGenerator {
    }
    export interface $RenderSystem$AutoStorageIndexBuffer$IndexGenerator {
    }
    /**
     * Values that may be interpreted as {@link $RenderSystem$AutoStorageIndexBuffer$IndexGenerator}.
     */
    export type $RenderSystem$AutoStorageIndexBuffer$IndexGenerator_ = (() => void);
    export class $RenderSystem$AutoStorageIndexBuffer {
        type(): $VertexFormat$IndexType;
        bind(index: number): void;
        hasStorage(index: number): boolean;
    }
    export class $RenderSystem implements $RenderSystemAccessor {
        static clear(mask: number, checkError: boolean): void;
        static getString(name: number, consumer: $Consumer_<string>): void;
        static enablePolygonOffset(): void;
        static disableColorLogicOp(): void;
        static disablePolygonOffset(): void;
        static getProjectionMatrix(): $Matrix4f;
        static getShaderGlintAlpha(): number;
        static teardownOverlayColor(): void;
        static glDeleteVertexArrays(texture: number): void;
        static setupGui3DDiffuseLighting(lightingVector0: $Vector3f, lightingVector1: $Vector3f): void;
        static restoreProjectionMatrix(): void;
        static bindTextureForSetup(texture: number): void;
        static setupLevelDiffuseLighting(lightingVector0: $Vector3f, lightingVector1: $Vector3f): void;
        static getSequentialBuffer(formatMode: $VertexFormat$Mode_): $RenderSystem$AutoStorageIndexBuffer;
        static backupProjectionMatrix(): void;
        static isFrozenAtPollEvents(): boolean;
        static logicOp(op: $GlStateManager$LogicOp_): void;
        static setShader(shaderSupplier: $Supplier_<$ShaderInstance>): void;
        static depthMask(flag: boolean): void;
        static blendFunc(sourceFactor: $GlStateManager$SourceFactor_, destFactor: $GlStateManager$DestFactor_): void;
        static blendFunc(shaderTexture: number, textureId: number): void;
        static enableCull(): void;
        static pixelStore(shaderTexture: number, textureId: number): void;
        static readPixels(x: number, y: number, width: number, height: number, format: number, type: number, pixels: $ByteBuffer): void;
        static glBufferData(target: number, data: $ByteBuffer, usage: number): void;
        static glDeleteBuffers(texture: number): void;
        static glBindBuffer(shaderTexture: number, textureId: number): void;
        static glGenBuffers(bufferIdConsumer: $Consumer_<number>): void;
        static glUniform1i(shaderTexture: number, textureId: number): void;
        static glGenVertexArrays(bufferIdConsumer: $Consumer_<number>): void;
        static lineWidth(shaderLineWidth: number): void;
        static glBindVertexArray(texture: number): void;
        static disableScissor(): void;
        static enableScissor(sourceFactor: number, destFactor: number, sourceFactorAlpha: number, destFactorAlpha: number): void;
        static initBackendSystem(): $TimeSource$NanoTimeSource;
        static initRenderer(mask: number, checkError: boolean): void;
        static setErrorCallback(callback: $GLFWErrorCallbackI_): void;
        static setupDefaultState(sourceFactor: number, destFactor: number, sourceFactorAlpha: number, destFactorAlpha: number): void;
        static limitDisplayFPS(texture: number): void;
        static getModelViewStack(): $Matrix4fStack;
        static getApiDescription(): string;
        static getCapsString(): string;
        static getShader(): $ShaderInstance;
        static depthFunc(texture: number): void;
        static glUniform2(location: number, value: $FloatBuffer): void;
        static glUniform2(location: number, value: $IntBuffer): void;
        static glUniform3(location: number, value: $IntBuffer): void;
        static glUniform3(location: number, value: $FloatBuffer): void;
        static glUniform4(location: number, value: $IntBuffer): void;
        static glUniform4(location: number, value: $FloatBuffer): void;
        static glUniform1(location: number, value: $IntBuffer): void;
        static glUniform1(location: number, value: $FloatBuffer): void;
        static flipFrame(windowId: number): void;
        static stencilOp(mode: number, count: number, type: number): void;
        static clearDepth(depth: number): void;
        static clearColor(red: number, green: number, blue: number, alpha: number): void;
        static applyModelViewMatrix(): void;
        static viewport(sourceFactor: number, destFactor: number, sourceFactorAlpha: number, destFactorAlpha: number): void;
        static defaultBlendFunc(): void;
        static getModelViewMatrix(): $Matrix4f;
        static disableBlend(): void;
        static disableCull(): void;
        static setShaderTexture(shaderTexture: number, textureId: number): void;
        static setShaderTexture(shaderTexture: number, textureId: $ResourceLocation_): void;
        static enableDepthTest(): void;
        static setShaderColor(red: number, green: number, blue: number, alpha: number): void;
        static enableBlend(): void;
        static disableDepthTest(): void;
        static isOnRenderThread(): boolean;
        static recordRenderCall(renderCall: $RenderCall_): void;
        static setShaderGlintAlpha(depth: number): void;
        static setShaderGlintAlpha(shaderLineWidth: number): void;
        static getBackendDescription(): string;
        static setProjectionMatrix(projectionMatrix: $Matrix4f, vertexSorting: $VertexSorting_): void;
        static isOnRenderThreadOrInit(): boolean;
        static assertOnRenderThreadOrInit(): void;
        static initRenderThread(): void;
        static finishInitialization(): void;
        static beginInitialization(): void;
        static catnip$getShaderLightDirections$ponder_$md$f87c94$2(): $Vector3f[];
        static colorMask(red: boolean, green: boolean, blue: boolean, alpha: boolean): void;
        static maxSupportedTextureSize(): number;
        static assertOnRenderThread(): void;
        static renderThreadTesselator(): $Tesselator;
        static blendFuncSeparate(sourceFactor: $GlStateManager$SourceFactor_, destFactor: $GlStateManager$DestFactor_, sourceFactorAlpha: $GlStateManager$SourceFactor_, destFactorAlpha: $GlStateManager$DestFactor_): void;
        static blendFuncSeparate(sourceFactor: number, destFactor: number, sourceFactorAlpha: number, destFactorAlpha: number): void;
        static polygonOffset(factor: number, units: number): void;
        static setTextureMatrix(textureMatrix: $Matrix4f): void;
        static enableColorLogicOp(): void;
        static resetTextureMatrix(): void;
        static setupOverlayColor(shaderTexture: number, textureId: number): void;
        static getShaderLineWidth(): number;
        static bindTexture(texture: number): void;
        static getShaderGameTime(): number;
        static getShaderTexture(shaderTexture: number): number;
        static getTextureMatrix(): $Matrix4f;
        static getShaderFogEnd(): number;
        static setupShaderLights(instance: $ShaderInstance): void;
        static activeTexture(texture: number): void;
        static getShaderFogShape(): $FogShape;
        static getShaderColor(): number[];
        static getShaderFogStart(): number;
        static getShaderFogColor(): number[];
        static setShaderGameTime(tickTime: number, arg1: number): void;
        static stencilMask(texture: number): void;
        static replayQueue(): void;
        static blendEquation(texture: number): void;
        static polygonMode(shaderTexture: number, textureId: number): void;
        static texParameter(mode: number, count: number, type: number): void;
        static deleteTexture(texture: number): void;
        static stencilFunc(mode: number, count: number, type: number): void;
        static glUniformMatrix2(location: number, transpose: boolean, value: $FloatBuffer): void;
        static setShaderFogEnd(shaderLineWidth: number): void;
        static glUniformMatrix3(location: number, transpose: boolean, value: $FloatBuffer): void;
        static getVertexSorting(): $VertexSorting;
        static setShaderFogColor(red: number, green: number, blue: number): void;
        static setShaderFogColor(red: number, green: number, blue: number, alpha: number): void;
        static restoreGlState(arg0: $GlStateBackup): void;
        static backupGlState(arg0: $GlStateBackup): void;
        static drawElements(mode: number, count: number, type: number): void;
        static setShaderLights(lightingVector0: $Vector3f, lightingVector1: $Vector3f): void;
        static setShaderFogStart(shaderLineWidth: number): void;
        static _setShaderTexture(shaderTexture: number, textureId: number): void;
        static _setShaderTexture(shaderTexture: number, textureId: $ResourceLocation_): void;
        static clearStencil(texture: number): void;
        static setShaderFogShape(shaderFogShape: $FogShape_): void;
        static glUniformMatrix4(location: number, transpose: boolean, value: $FloatBuffer): void;
        static renderCrosshair(texture: number): void;
        /**
         * @deprecated
         */
        static runAsFancy(fancyRunnable: $Runnable_): void;
        static setupGuiFlatDiffuseLighting(lightingVector0: $Vector3f, lightingVector1: $Vector3f): void;
        static shaderLightDirections: $Vector3f[];
        constructor();
        static get frozenAtPollEvents(): boolean;
        static set errorCallback(value: $GLFWErrorCallbackI_);
        static get modelViewStack(): $Matrix4fStack;
        static get apiDescription(): string;
        static get capsString(): string;
        static get modelViewMatrix(): $Matrix4f;
        static get onRenderThread(): boolean;
        static get backendDescription(): string;
        static get onRenderThreadOrInit(): boolean;
        static get shaderLineWidth(): number;
        static set upShaderLights(value: $ShaderInstance);
        static get vertexSorting(): $VertexSorting;
    }
}
