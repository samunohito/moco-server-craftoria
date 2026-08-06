import { $PrintStream } from "@package/java/io";
import { $FFICIF } from "@package/org/lwjgl/system/libffi";
import { $PointerBuffer } from "@package/org/lwjgl";
import { $CharSequence } from "@package/java/lang";
import { $DoubleBuffer, $ByteBuffer, $IntBuffer, $FloatBuffer, $ShortBuffer } from "@package/java/nio";
import { $NativeResource, $CallbackI, $Callback, $MemoryStack, $SharedLibrary, $Struct, $StructBuffer } from "@package/org/lwjgl/system";

declare module "@package/org/lwjgl/glfw" {
    export class $GLFWMonitorCallback extends $Callback implements $GLFWMonitorCallbackI {
        set(): $GLFWMonitorCallback;
        static create(arg0: $GLFWMonitorCallbackI_): $GLFWMonitorCallback;
        static create(arg0: number): $GLFWMonitorCallback;
        static createSafe(arg0: number): $GLFWMonitorCallback;
        callback(arg0: number, arg1: number): void;
        getCallInterface(): $FFICIF;
        get callInterface(): $FFICIF;
    }
    export class $GLFWDeallocateCallback extends $Callback implements $GLFWDeallocateCallbackI {
        static create(arg0: number): $GLFWDeallocateCallback;
        static create(arg0: $GLFWDeallocateCallbackI_): $GLFWDeallocateCallback;
        static createSafe(arg0: number): $GLFWDeallocateCallback;
        callback(arg0: number, arg1: number): void;
        getCallInterface(): $FFICIF;
        get callInterface(): $FFICIF;
    }
    export class $GLFWGammaRamp extends $Struct<$GLFWGammaRamp> implements $NativeResource {
        size(): number;
        size(arg0: number): $GLFWGammaRamp;
        static validate(arg0: number): void;
        set(arg0: $GLFWGammaRamp): $GLFWGammaRamp;
        set(arg0: $ShortBuffer, arg1: $ShortBuffer, arg2: $ShortBuffer, arg3: number): $GLFWGammaRamp;
        static create(arg0: number, arg1: number): $GLFWGammaRamp$Buffer;
        static create(arg0: number): $GLFWGammaRamp$Buffer;
        static create(arg0: number): $GLFWGammaRamp;
        static create(): $GLFWGammaRamp;
        red(arg0: $ShortBuffer): $GLFWGammaRamp;
        red(): $ShortBuffer;
        green(): $ShortBuffer;
        green(arg0: $ShortBuffer): $GLFWGammaRamp;
        blue(): $ShortBuffer;
        blue(arg0: $ShortBuffer): $GLFWGammaRamp;
        static nsize(arg0: number, arg1: number): void;
        static nsize(arg0: number): number;
        static calloc(arg0: number, arg1: $MemoryStack): $GLFWGammaRamp$Buffer;
        static calloc(): $GLFWGammaRamp;
        static calloc(arg0: $MemoryStack): $GLFWGammaRamp;
        static calloc(arg0: number): $GLFWGammaRamp$Buffer;
        static createSafe(arg0: number): $GLFWGammaRamp;
        static createSafe(arg0: number, arg1: number): $GLFWGammaRamp$Buffer;
        /**
         * @deprecated
         */
        static mallocStack(arg0: $MemoryStack): $GLFWGammaRamp;
        /**
         * @deprecated
         */
        static mallocStack(arg0: number): $GLFWGammaRamp$Buffer;
        /**
         * @deprecated
         */
        static mallocStack(arg0: number, arg1: $MemoryStack): $GLFWGammaRamp$Buffer;
        /**
         * @deprecated
         */
        static mallocStack(): $GLFWGammaRamp;
        /**
         * @deprecated
         */
        static callocStack(): $GLFWGammaRamp;
        /**
         * @deprecated
         */
        static callocStack(arg0: number, arg1: $MemoryStack): $GLFWGammaRamp$Buffer;
        /**
         * @deprecated
         */
        static callocStack(arg0: $MemoryStack): $GLFWGammaRamp;
        /**
         * @deprecated
         */
        static callocStack(arg0: number): $GLFWGammaRamp$Buffer;
        static malloc(arg0: number): $GLFWGammaRamp$Buffer;
        static malloc(arg0: number, arg1: $MemoryStack): $GLFWGammaRamp$Buffer;
        static malloc(arg0: $MemoryStack): $GLFWGammaRamp;
        static malloc(): $GLFWGammaRamp;
        static nred(arg0: number): $ShortBuffer;
        static nred(arg0: number, arg1: $ShortBuffer): void;
        static nblue(arg0: number): $ShortBuffer;
        static nblue(arg0: number, arg1: $ShortBuffer): void;
        static ngreen(arg0: number): $ShortBuffer;
        static ngreen(arg0: number, arg1: $ShortBuffer): void;
        close(): void;
        static RED: number;
        static BLUE: number;
        static ALIGNOF: number;
        static SIZE: number;
        static SIZEOF: number;
        static GREEN: number;
        constructor(arg0: $ByteBuffer);
    }
    export class $GLFWDropCallback extends $Callback implements $GLFWDropCallbackI {
        static getName(arg0: number, arg1: number): string;
        set(arg0: number): $GLFWDropCallback;
        static create(arg0: $GLFWDropCallbackI_): $GLFWDropCallback;
        static create(arg0: number): $GLFWDropCallback;
        static createSafe(arg0: number): $GLFWDropCallback;
        callback(arg0: number, arg1: number): void;
        getCallInterface(): $FFICIF;
        get callInterface(): $FFICIF;
    }
    export class $GLFWDeallocateCallbackI {
        static CIF: $FFICIF;
    }
    export interface $GLFWDeallocateCallbackI extends $CallbackI {
        invoke(arg0: number, arg1: number): void;
        callback(arg0: number, arg1: number): void;
        getCallInterface(): $FFICIF;
        get callInterface(): $FFICIF;
    }
    /**
     * Values that may be interpreted as {@link $GLFWDeallocateCallbackI}.
     */
    export type $GLFWDeallocateCallbackI_ = ((arg0: number, arg1: number) => void);
    export class $GLFWImage$Buffer extends $StructBuffer<$GLFWImage, $GLFWImage$Buffer> implements $NativeResource {
        width(): number;
        width(arg0: number): $GLFWImage$Buffer;
        height(arg0: number): $GLFWImage$Buffer;
        height(): number;
        pixels(arg0: $ByteBuffer): $GLFWImage$Buffer;
        pixels(arg0: number): $ByteBuffer;
        close(): void;
        constructor(arg0: number, arg1: number);
        constructor(arg0: $ByteBuffer);
    }
    export class $GLFWVidMode extends $Struct<$GLFWVidMode> {
        static create(arg0: number): $GLFWVidMode;
        static create(arg0: number, arg1: number): $GLFWVidMode$Buffer;
        width(): number;
        height(): number;
        greenBits(): number;
        static nblueBits(arg0: number): number;
        static nredBits(arg0: number): number;
        redBits(): number;
        static ngreenBits(arg0: number): number;
        blueBits(): number;
        refreshRate(): number;
        static nrefreshRate(arg0: number): number;
        static nheight(arg0: number): number;
        static nwidth(arg0: number): number;
        static createSafe(arg0: number, arg1: number): $GLFWVidMode$Buffer;
        static createSafe(arg0: number): $GLFWVidMode;
        static ALIGNOF: number;
        static SIZEOF: number;
        static GREENBITS: number;
        static WIDTH: number;
        static REFRESHRATE: number;
        static HEIGHT: number;
        static REDBITS: number;
        static BLUEBITS: number;
        constructor(arg0: $ByteBuffer);
    }
    export class $GLFWMouseButtonCallbackI {
        static CIF: $FFICIF;
    }
    export interface $GLFWMouseButtonCallbackI extends $CallbackI {
        invoke(arg0: number, arg1: number, arg2: number, arg3: number): void;
        callback(arg0: number, arg1: number): void;
        getCallInterface(): $FFICIF;
        get callInterface(): $FFICIF;
    }
    /**
     * Values that may be interpreted as {@link $GLFWMouseButtonCallbackI}.
     */
    export type $GLFWMouseButtonCallbackI_ = ((arg0: number, arg1: number, arg2: number, arg3: number) => void);
    export class $GLFWWindowPosCallbackI {
        static CIF: $FFICIF;
    }
    export interface $GLFWWindowPosCallbackI extends $CallbackI {
        invoke(arg0: number, arg1: number, arg2: number): void;
        callback(arg0: number, arg1: number): void;
        getCallInterface(): $FFICIF;
        get callInterface(): $FFICIF;
    }
    /**
     * Values that may be interpreted as {@link $GLFWWindowPosCallbackI}.
     */
    export type $GLFWWindowPosCallbackI_ = ((arg0: number, arg1: number, arg2: number) => void);
    export class $GLFWWindowPosCallback extends $Callback implements $GLFWWindowPosCallbackI {
        set(arg0: number): $GLFWWindowPosCallback;
        static create(arg0: $GLFWWindowPosCallbackI_): $GLFWWindowPosCallback;
        static create(arg0: number): $GLFWWindowPosCallback;
        static createSafe(arg0: number): $GLFWWindowPosCallback;
        callback(arg0: number, arg1: number): void;
        getCallInterface(): $FFICIF;
        get callInterface(): $FFICIF;
    }
    export class $GLFWWindowContentScaleCallbackI {
        static CIF: $FFICIF;
    }
    export interface $GLFWWindowContentScaleCallbackI extends $CallbackI {
        invoke(arg0: number, arg1: number, arg2: number): void;
        callback(arg0: number, arg1: number): void;
        getCallInterface(): $FFICIF;
        get callInterface(): $FFICIF;
    }
    /**
     * Values that may be interpreted as {@link $GLFWWindowContentScaleCallbackI}.
     */
    export type $GLFWWindowContentScaleCallbackI_ = ((arg0: number, arg1: number, arg2: number) => void);
    export class $GLFWWindowFocusCallbackI {
        static CIF: $FFICIF;
    }
    export interface $GLFWWindowFocusCallbackI extends $CallbackI {
        invoke(arg0: number, arg1: boolean): void;
        callback(arg0: number, arg1: number): void;
        getCallInterface(): $FFICIF;
        get callInterface(): $FFICIF;
    }
    /**
     * Values that may be interpreted as {@link $GLFWWindowFocusCallbackI}.
     */
    export type $GLFWWindowFocusCallbackI_ = ((arg0: number, arg1: boolean) => void);
    export class $GLFWFramebufferSizeCallback extends $Callback implements $GLFWFramebufferSizeCallbackI {
        set(arg0: number): $GLFWFramebufferSizeCallback;
        static create(arg0: $GLFWFramebufferSizeCallbackI_): $GLFWFramebufferSizeCallback;
        static create(arg0: number): $GLFWFramebufferSizeCallback;
        static createSafe(arg0: number): $GLFWFramebufferSizeCallback;
        callback(arg0: number, arg1: number): void;
        getCallInterface(): $FFICIF;
        get callInterface(): $FFICIF;
    }
    export class $GLFWErrorCallbackI {
        static CIF: $FFICIF;
    }
    export interface $GLFWErrorCallbackI extends $CallbackI {
        invoke(arg0: number, arg1: number): void;
        callback(arg0: number, arg1: number): void;
        getCallInterface(): $FFICIF;
        get callInterface(): $FFICIF;
    }
    /**
     * Values that may be interpreted as {@link $GLFWErrorCallbackI}.
     */
    export type $GLFWErrorCallbackI_ = ((arg0: number, arg1: number) => void);
    export class $GLFWJoystickCallback extends $Callback implements $GLFWJoystickCallbackI {
        set(): $GLFWJoystickCallback;
        static create(arg0: $GLFWJoystickCallbackI_): $GLFWJoystickCallback;
        static create(arg0: number): $GLFWJoystickCallback;
        static createSafe(arg0: number): $GLFWJoystickCallback;
        callback(arg0: number, arg1: number): void;
        getCallInterface(): $FFICIF;
        get callInterface(): $FFICIF;
    }
    export class $GLFW {
        static glfwWaitEvents(): void;
        static glfwGetGamepadName(arg0: number): string;
        static glfwGetTime(): number;
        static glfwGetProcAddress(arg0: $ByteBuffer): number;
        static glfwGetProcAddress(arg0: $CharSequence): number;
        static nglfwGetWindowPos(arg0: number, arg1: number, arg2: number): void;
        static glfwFocusWindow(arg0: number): void;
        static glfwGetKeyName(arg0: number, arg1: number): string;
        static glfwGetKeyScancode(arg0: number): number;
        static glfwPostEmptyEvent(): void;
        static glfwDestroyWindow(arg0: number): void;
        static glfwSetInputMode(arg0: number, arg1: number, arg2: number): void;
        static glfwCreateCursor(arg0: $GLFWImage, arg1: number, arg2: number): number;
        static glfwGetTimerValue(): number;
        static glfwIconifyWindow(arg0: number): void;
        static glfwSetWindowSize(arg0: number, arg1: number, arg2: number): void;
        static nglfwGetKeyName(arg0: number, arg1: number): number;
        static nglfwGetCursorPos(arg0: number, arg1: number, arg2: number): void;
        static glfwGetCursorPos(arg0: number, arg1: $DoubleBuffer | null, arg2: $DoubleBuffer | null): void;
        static glfwGetCursorPos(arg0: number, arg1: number[] | null, arg2: number[] | null): void;
        static glfwSetKeyCallback(arg0: number, arg1: $GLFWKeyCallbackI_ | null): $GLFWKeyCallback;
        static glfwSetCursor(arg0: number, arg1: number): void;
        static glfwHideWindow(arg0: number): void;
        static glfwSetTime(arg0: number): void;
        static glfwSetCursorPos(arg0: number, arg1: number, arg2: number): void;
        static nglfwSetWindowIcon(arg0: number, arg1: number, arg2: number): void;
        static glfwRestoreWindow(arg0: number): void;
        static nglfwGetWindowSize(arg0: number, arg1: number, arg2: number): void;
        static glfwGetMouseButton(arg0: number, arg1: number): number;
        static nglfwCreateCursor(arg0: number, arg1: number, arg2: number): number;
        static glfwDestroyCursor(arg0: number): void;
        static glfwGetInputMode(arg0: number, arg1: number): number;
        static glfwGetGamepadState(arg0: number, arg1: $GLFWGamepadState): boolean;
        static glfwGetJoystickGUID(arg0: number): string;
        static glfwGetJoystickButtons(arg0: number): $ByteBuffer;
        static nglfwSetClipboardString(arg0: number, arg1: number): void;
        static glfwGetTimerFrequency(): number;
        static nglfwExtensionSupported(arg0: number): number;
        static glfwExtensionSupported(arg0: $ByteBuffer): boolean;
        static glfwExtensionSupported(arg0: $CharSequence): boolean;
        static glfwGetCurrentContext(): number;
        static nglfwGetJoystickHats(arg0: number, arg1: number): number;
        static nglfwGetProcAddress(arg0: number): number;
        static glfwSetJoystickCallback(arg0: $GLFWJoystickCallbackI_ | null): $GLFWJoystickCallback;
        static glfwGetJoystickName(arg0: number): string;
        static nglfwGetGamepadState(arg0: number, arg1: number): number;
        static nglfwGetJoystickName(arg0: number): number;
        static glfwJoystickIsGamepad(arg0: number): boolean;
        static nglfwGetJoystickAxes(arg0: number, arg1: number): number;
        static nglfwSetJoystickCallback(arg0: number): number;
        static glfwSetDropCallback(arg0: number, arg1: $GLFWDropCallbackI_ | null): $GLFWDropCallback;
        static nglfwGetClipboardString(arg0: number): number;
        static nglfwGetGamepadName(arg0: number): number;
        static glfwSetJoystickUserPointer(arg0: number, arg1: number): void;
        static glfwGetJoystickHats(arg0: number): $ByteBuffer;
        static nglfwGetJoystickButtons(arg0: number, arg1: number): number;
        static nglfwGetJoystickGUID(arg0: number): number;
        static nglfwUpdateGamepadMappings(arg0: number): number;
        static glfwGetJoystickUserPointer(arg0: number): number;
        static glfwUpdateGamepadMappings(arg0: $ByteBuffer): boolean;
        static glfwGetClipboardString(arg0: number): string;
        static glfwGetJoystickAxes(arg0: number): $FloatBuffer;
        static glfwSetClipboardString(arg0: number, arg1: $CharSequence): void;
        static glfwSetClipboardString(arg0: number, arg1: $ByteBuffer): void;
        static glfwJoystickPresent(arg0: number): boolean;
        static glfwGetMonitorWorkarea(arg0: number, arg1: number[] | null, arg2: number[] | null, arg3: number[] | null, arg4: number[] | null): void;
        static glfwGetMonitorWorkarea(arg0: number, arg1: $IntBuffer | null, arg2: $IntBuffer | null, arg3: $IntBuffer | null, arg4: $IntBuffer | null): void;
        static glfwSetWindowOpacity(arg0: number, arg1: number): void;
        static glfwSetErrorCallback(arg0: $GLFWErrorCallbackI_ | null): $GLFWErrorCallback;
        static glfwGetVersionString(): string;
        static glfwCreateStandardCursor(arg0: number): number;
        static nglfwSetMonitorCallback(arg0: number): number;
        static nglfwSetWindowPosCallback(arg0: number, arg1: number): number;
        static glfwGetWindowOpacity(arg0: number): number;
        static nglfwSetCharCallback(arg0: number, arg1: number): number;
        static glfwSetCharModsCallback(arg0: number, arg1: $GLFWCharModsCallbackI_ | null): $GLFWCharModsCallback;
        static glfwRequestWindowAttention(arg0: number): void;
        static glfwSetWindowAttrib(arg0: number, arg1: number, arg2: number): void;
        static glfwSetMouseButtonCallback(arg0: number, arg1: $GLFWMouseButtonCallbackI_ | null): $GLFWMouseButtonCallback;
        static glfwPlatformSupported(arg0: number): boolean;
        static nglfwSetCursorPosCallback(arg0: number, arg1: number): number;
        static nglfwSetErrorCallback(arg0: number): number;
        static glfwGetMonitorContentScale(arg0: number, arg1: $FloatBuffer | null, arg2: $FloatBuffer | null): void;
        static glfwGetMonitorContentScale(arg0: number, arg1: number[] | null, arg2: number[] | null): void;
        static nglfwSetWindowTitle(arg0: number, arg1: number): void;
        static glfwSetMonitorCallback(arg0: $GLFWMonitorCallbackI_ | null): $GLFWMonitorCallback;
        static glfwWindowShouldClose(arg0: number): boolean;
        static nglfwGetFramebufferSize(arg0: number, arg1: number, arg2: number): void;
        static nglfwGetWindowFrameSize(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        static nglfwGetWindowContentScale(arg0: number, arg1: number, arg2: number): void;
        static glfwGetWindowContentScale(arg0: number, arg1: $FloatBuffer | null, arg2: $FloatBuffer | null): void;
        static glfwGetWindowContentScale(arg0: number, arg1: number[] | null, arg2: number[] | null): void;
        static glfwSetWindowMonitor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        static glfwGetWindowUserPointer(arg0: number): number;
        static nglfwSetWindowSizeCallback(arg0: number, arg1: number): number;
        static glfwSetWindowSizeLimits(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        static glfwSetWindowCloseCallback(arg0: number, arg1: $GLFWWindowCloseCallbackI_ | null): $GLFWWindowCloseCallback;
        static nglfwSetKeyCallback(arg0: number, arg1: number): number;
        static glfwSetCharCallback(arg0: number, arg1: $GLFWCharCallbackI_ | null): $GLFWCharCallback;
        static nglfwWindowHintString(arg0: number, arg1: number): void;
        static glfwSetWindowShouldClose(arg0: number, arg1: boolean): void;
        static glfwSetCursorPosCallback(arg0: number, arg1: $GLFWCursorPosCallbackI_ | null): $GLFWCursorPosCallback;
        static glfwSetCursorEnterCallback(arg0: number, arg1: $GLFWCursorEnterCallbackI_ | null): $GLFWCursorEnterCallback;
        static glfwSetMonitorUserPointer(arg0: number, arg1: number): void;
        static nglfwGetVersionString(): number;
        static glfwGetWindowFrameSize(arg0: number, arg1: $IntBuffer | null, arg2: $IntBuffer | null, arg3: $IntBuffer | null, arg4: $IntBuffer | null): void;
        static glfwGetWindowFrameSize(arg0: number, arg1: number[] | null, arg2: number[] | null, arg3: number[] | null, arg4: number[] | null): void;
        static nglfwSetCharModsCallback(arg0: number, arg1: number): number;
        static nglfwGetMonitorWorkarea(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        static glfwSetWindowUserPointer(arg0: number, arg1: number): void;
        static nglfwSetScrollCallback(arg0: number, arg1: number): number;
        static nglfwGetMonitorName(arg0: number): number;
        static glfwSetWindowFocusCallback(arg0: number, arg1: $GLFWWindowFocusCallbackI_ | null): $GLFWWindowFocusCallback;
        static glfwSetWindowAspectRatio(arg0: number, arg1: number, arg2: number): void;
        static glfwSetScrollCallback(arg0: number, arg1: $GLFWScrollCallbackI_ | null): $GLFWScrollCallback;
        static glfwGetMonitorPhysicalSize(arg0: number, arg1: number[] | null, arg2: number[] | null): void;
        static glfwGetMonitorPhysicalSize(arg0: number, arg1: $IntBuffer | null, arg2: $IntBuffer | null): void;
        static glfwGetMonitorUserPointer(arg0: number): number;
        static glfwGetWindowMonitor(arg0: number): number;
        static glfwWaitEventsTimeout(arg0: number): void;
        static nglfwSetDropCallback(arg0: number, arg1: number): number;
        static glfwGetKey(arg0: number, arg1: number): number;
        static nglfwSetWindowRefreshCallback(arg0: number, arg1: number): number;
        static glfwSetWindowMaximizeCallback(arg0: number, arg1: $GLFWWindowMaximizeCallbackI_ | null): $GLFWWindowMaximizeCallback;
        static nglfwSetWindowContentScaleCallback(arg0: number, arg1: number): number;
        static nglfwSetWindowFocusCallback(arg0: number, arg1: number): number;
        static nglfwSetMouseButtonCallback(arg0: number, arg1: number): number;
        static nglfwSetWindowMaximizeCallback(arg0: number, arg1: number): number;
        static nglfwSetWindowCloseCallback(arg0: number, arg1: number): number;
        static nglfwSetCursorEnterCallback(arg0: number, arg1: number): number;
        static glfwRawMouseMotionSupported(): boolean;
        static glfwSetWindowRefreshCallback(arg0: number, arg1: $GLFWWindowRefreshCallbackI_ | null): $GLFWWindowRefreshCallback;
        static nglfwSetWindowIconifyCallback(arg0: number, arg1: number): number;
        static glfwSetWindowContentScaleCallback(arg0: number, arg1: $GLFWWindowContentScaleCallbackI_ | null): $GLFWWindowContentScaleCallback;
        static glfwSetWindowIconifyCallback(arg0: number, arg1: $GLFWWindowIconifyCallbackI_ | null): $GLFWWindowIconifyCallback;
        static nglfwSetFramebufferSizeCallback(arg0: number, arg1: number): number;
        static getLibrary(): $SharedLibrary;
        static glfwSetFramebufferSizeCallback(arg0: number, arg1: $GLFWFramebufferSizeCallbackI_ | null): $GLFWFramebufferSizeCallback;
        static glfwWindowHintString(arg0: number, arg1: $CharSequence): void;
        static glfwWindowHintString(arg0: number, arg1: $ByteBuffer): void;
        static glfwSetWindowSizeCallback(arg0: number, arg1: $GLFWWindowSizeCallbackI_ | null): $GLFWWindowSizeCallback;
        static glfwDefaultWindowHints(): void;
        static glfwMakeContextCurrent(arg0: number): void;
        static glfwSetWindowPosCallback(arg0: number, arg1: $GLFWWindowPosCallbackI_ | null): $GLFWWindowPosCallback;
        static glfwGetFramebufferSize(arg0: number, arg1: number[] | null, arg2: number[] | null): void;
        static glfwGetFramebufferSize(arg0: number, arg1: $IntBuffer | null, arg2: $IntBuffer | null): void;
        static glfwGetWindowAttrib(arg0: number, arg1: number): number;
        static glfwGetPrimaryMonitor(): number;
        static glfwSwapBuffers(arg0: number): void;
        static glfwSwapInterval(arg0: number): void;
        static glfwWindowHint(arg0: number, arg1: number): void;
        static glfwSetWindowPos(arg0: number, arg1: number, arg2: number): void;
        static glfwGetWindowPos(arg0: number, arg1: number[] | null, arg2: number[] | null): void;
        static glfwGetWindowPos(arg0: number, arg1: $IntBuffer | null, arg2: $IntBuffer | null): void;
        static glfwSetWindowTitle(arg0: number, arg1: $CharSequence): void;
        static glfwSetWindowTitle(arg0: number, arg1: $ByteBuffer): void;
        static glfwGetMonitorPos(arg0: number, arg1: $IntBuffer | null, arg2: $IntBuffer | null): void;
        static glfwGetMonitorPos(arg0: number, arg1: number[] | null, arg2: number[] | null): void;
        static glfwPollEvents(): void;
        static glfwGetVideoMode(arg0: number): $GLFWVidMode;
        static glfwGetError(arg0: $PointerBuffer | null): number;
        static glfwMaximizeWindow(arg0: number): void;
        static glfwSetWindowIcon(arg0: number, arg1: $GLFWImage$Buffer | null): void;
        static glfwCreateWindow(arg0: number, arg1: number, arg2: $ByteBuffer, arg3: number, arg4: number): number;
        static glfwCreateWindow(arg0: number, arg1: number, arg2: $CharSequence, arg3: number, arg4: number): number;
        static glfwShowWindow(arg0: number): void;
        static glfwGetWindowSize(arg0: number, arg1: $IntBuffer | null, arg2: $IntBuffer | null): void;
        static glfwGetWindowSize(arg0: number, arg1: number[] | null, arg2: number[] | null): void;
        static nglfwGetMonitorPos(arg0: number, arg1: number, arg2: number): void;
        static glfwGetMonitorName(arg0: number): string;
        static nglfwGetVideoModes(arg0: number, arg1: number): number;
        static glfwGetVideoModes(arg0: number): $GLFWVidMode$Buffer;
        static glfwSetGamma(arg0: number, arg1: number): void;
        static nglfwGetVideoMode(arg0: number): number;
        static nglfwGetGammaRamp(arg0: number): number;
        static glfwGetGammaRamp(arg0: number): $GLFWGammaRamp;
        static nglfwSetGammaRamp(arg0: number, arg1: number): void;
        static glfwTerminate(): void;
        static glfwSetGammaRamp(arg0: number, arg1: $GLFWGammaRamp): void;
        static glfwInitHint(arg0: number, arg1: number): void;
        static nglfwCreateWindow(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): number;
        static glfwInitAllocator(arg0: $GLFWAllocator | null): void;
        static nglfwGetVersion(arg0: number, arg1: number, arg2: number): void;
        static nglfwInitAllocator(arg0: number): void;
        static glfwGetPlatform(): number;
        static nglfwGetError(arg0: number): number;
        static glfwGetMonitors(): $PointerBuffer;
        static glfwGetVersion(arg0: $IntBuffer | null, arg1: $IntBuffer | null, arg2: $IntBuffer | null): void;
        static glfwGetVersion(arg0: number[] | null, arg1: number[] | null, arg2: number[] | null): void;
        static nglfwGetMonitors(arg0: number): number;
        static nglfwGetMonitorPhysicalSize(arg0: number, arg1: number, arg2: number): void;
        static nglfwGetMonitorContentScale(arg0: number, arg1: number, arg2: number): void;
        static glfwInit(): boolean;
        static GLFW_HAT_RIGHT: number;
        static GLFW_DONT_CARE: number;
        static GLFW_NATIVE_CONTEXT_API: number;
        static GLFW_KEY_LAST: number;
        static GLFW_CURSOR_HIDDEN: number;
        static GLFW_CROSSHAIR_CURSOR: number;
        static GLFW_ANGLE_PLATFORM_TYPE_OPENGL: number;
        static GLFW_KEY_RIGHT_SHIFT: number;
        static GLFW_GREEN_BITS: number;
        static GLFW_GAMEPAD_BUTTON_LEFT_THUMB: number;
        static GLFW_NO_RESET_NOTIFICATION: number;
        static GLFW_KEY_APOSTROPHE: number;
        static GLFW_NOT_INITIALIZED: number;
        static GLFW_KEY_F25: number;
        static GLFW_KEY_KP_SUBTRACT: number;
        static GLFW_ARROW_CURSOR: number;
        static GLFW_WAYLAND_APP_ID: number;
        static GLFW_KEY_BACKSPACE: number;
        static GLFW_KEY_LEFT_SUPER: number;
        static GLFW_KEY_PAUSE: number;
        static GLFW_ANY_PLATFORM: number;
        static GLFW_LOSE_CONTEXT_ON_RESET: number;
        static GLFW_WIN32_KEYBOARD_MENU: number;
        static GLFW_ANY_POSITION: number;
        static GLFW_PRESS: number;
        static GLFW_RED_BITS: number;
        static GLFW_HAND_CURSOR: number;
        static GLFW_OPENGL_FORWARD_COMPAT: number;
        static GLFW_NO_ERROR: number;
        static GLFW_KEY_F6: number;
        static GLFW_KEY_F5: number;
        static GLFW_KEY_F8: number;
        static GLFW_KEY_F7: number;
        static GLFW_KEY_LEFT_BRACKET: number;
        static GLFW_KEY_F9: number;
        static GLFW_PLATFORM: number;
        static GLFW_KEY_EQUAL: number;
        static GLFW_KEY_GRAVE_ACCENT: number;
        static GLFW_KEY_F10: number;
        static GLFW_KEY_UNKNOWN: number;
        static GLFW_KEY_F11: number;
        static GLFW_KEY_F12: number;
        static GLFW_KEY_F13: number;
        static GLFW_KEY_F2: number;
        static GLFW_KEY_F1: number;
        static GLFW_KEY_F4: number;
        static GLFW_KEY_F3: number;
        static GLFW_ANGLE_PLATFORM_TYPE_VULKAN: number;
        static GLFW_KEY_LEFT_ALT: number;
        static GLFW_DISCONNECTED: number;
        static GLFW_MOUSE_BUTTON_LAST: number;
        static GLFW_VRESIZE_CURSOR: number;
        static GLFW_GAMEPAD_BUTTON_START: number;
        static GLFW_KEY_UP: number;
        static GLFW_OPENGL_CORE_PROFILE: number;
        static GLFW_JOYSTICK_LAST: number;
        static GLFW_GAMEPAD_AXIS_LAST: number;
        static GLFW_CURSOR_DISABLED: number;
        static GLFW_NO_WINDOW_CONTEXT: number;
        static GLFW_KEY_PAGE_DOWN: number;
        static GLFW_KEY_F21: number;
        static GLFW_ANY_RELEASE_BEHAVIOR: number;
        static GLFW_KEY_F22: number;
        static GLFW_KEY_F23: number;
        static GLFW_KEY_F24: number;
        static GLFW_KEY_F20: number;
        static GLFW_KEY_F18: number;
        static GLFW_KEY_F19: number;
        static GLFW_KEY_F14: number;
        static GLFW_MOUSE_PASSTHROUGH: number;
        static GLFW_KEY_F15: number;
        static GLFW_RESIZE_NS_CURSOR: number;
        static GLFW_KEY_F16: number;
        static GLFW_KEY_F17: number;
        static GLFW_MOUSE_BUTTON_MIDDLE: number;
        static GLFW_GAMEPAD_BUTTON_LAST: number;
        static GLFW_KEY_DOWN: number;
        static GLFW_HAT_LEFT: number;
        static GLFW_KEY_COMMA: number;
        static GLFW_RAW_MOUSE_MOTION: number;
        static GLFW_COCOA_CHDIR_RESOURCES: number;
        static GLFW_JOYSTICK_12: number;
        static GLFW_JOYSTICK_11: number;
        static GLFW_JOYSTICK_10: number;
        static GLFW_JOYSTICK_16: number;
        static GLFW_CONTEXT_VERSION_MAJOR: number;
        static GLFW_CONTEXT_VERSION_MINOR: number;
        static GLFW_JOYSTICK_15: number;
        static GLFW_JOYSTICK_14: number;
        static GLFW_JOYSTICK_13: number;
        static GLFW_GAMEPAD_AXIS_RIGHT_Y: number;
        static GLFW_GAMEPAD_AXIS_RIGHT_X: number;
        static GLFW_CLIENT_API: number;
        static GLFW_X11_INSTANCE_NAME: number;
        static GLFW_COCOA_GRAPHICS_SWITCHING: number;
        static GLFW_PLATFORM_WAYLAND: number;
        static GLFW_INVALID_VALUE: number;
        static GLFW_KEY_BACKSLASH: number;
        static GLFW_CURSOR_NORMAL: number;
        static GLFW_STENCIL_BITS: number;
        static GLFW_ANGLE_PLATFORM_TYPE_METAL: number;
        static GLFW_KEY_PRINT_SCREEN: number;
        static GLFW_ACCUM_GREEN_BITS: number;
        static GLFW_COCOA_RETINA_FRAMEBUFFER: number;
        static GLFW_STEREO: number;
        static GLFW_RESIZE_NWSE_CURSOR: number;
        static GLFW_OPENGL_ANY_PROFILE: number;
        static GLFW_ACCUM_BLUE_BITS: number;
        static GLFW_RELEASE_BEHAVIOR_NONE: number;
        static GLFW_KEY_HOME: number;
        static GLFW_AUX_BUFFERS: number;
        static GLFW_GAMEPAD_BUTTON_TRIANGLE: number;
        static GLFW_KEY_PAGE_UP: number;
        static GLFW_PLATFORM_UNAVAILABLE: number;
        static GLFW_KEY_RIGHT_CONTROL: number;
        static GLFW_PLATFORM_WIN32: number;
        static GLFW_RELEASE: number;
        static GLFW_CURSOR_UNAVAILABLE: number;
        static GLFW_OPENGL_DEBUG_CONTEXT: number;
        static GLFW_SCALE_TO_MONITOR: number;
        static GLFW_DECORATED: number;
        static GLFW_ALPHA_BITS: number;
        static GLFW_GAMEPAD_BUTTON_BACK: number;
        static GLFW_JOYSTICK_1: number;
        static GLFW_POSITION_Y: number;
        static GLFW_MOUSE_BUTTON_1: number;
        static GLFW_POSITION_X: number;
        static GLFW_MOUSE_BUTTON_6: number;
        static GLFW_JOYSTICK_7: number;
        static GLFW_CURSOR_CAPTURED: number;
        static GLFW_MOUSE_BUTTON_7: number;
        static GLFW_JOYSTICK_6: number;
        static GLFW_RESIZE_EW_CURSOR: number;
        static GLFW_MOUSE_BUTTON_8: number;
        static GLFW_JOYSTICK_9: number;
        static GLFW_JOYSTICK_8: number;
        static GLFW_ACCUM_RED_BITS: number;
        static GLFW_MOUSE_BUTTON_2: number;
        static GLFW_JOYSTICK_3: number;
        static GLFW_GAMEPAD_BUTTON_SQUARE: number;
        static GLFW_MOUSE_BUTTON_3: number;
        static GLFW_JOYSTICK_2: number;
        static GLFW_MOUSE_BUTTON_4: number;
        static GLFW_JOYSTICK_5: number;
        static GLFW_RESIZABLE: number;
        static GLFW_MOUSE_BUTTON_5: number;
        static GLFW_JOYSTICK_4: number;
        static GLFW_NO_API: number;
        static GLFW_HAT_CENTERED: number;
        static GLFW_KEY_ENTER: number;
        static GLFW_MOUSE_BUTTON_RIGHT: number;
        static GLFW_ANGLE_PLATFORM_TYPE_NONE: number;
        static GLFW_CONNECTED: number;
        static GLFW_KEY_RIGHT_ALT: number;
        static GLFW_RELEASE_BEHAVIOR_FLUSH: number;
        static GLFW_KEY_LEFT_CONTROL: number;
        static GLFW_GAMEPAD_BUTTON_DPAD_DOWN: number;
        static GLFW_COCOA_MENUBAR: number;
        static GLFW_KEY_RIGHT: number;
        static GLFW_MOD_CONTROL: number;
        static GLFW_SRGB_CAPABLE: number;
        static GLFW_KEY_TAB: number;
        static GLFW_RESIZE_NESW_CURSOR: number;
        static GLFW_OPENGL_API: number;
        static GLFW_PLATFORM_ERROR: number;
        static GLFW_WAYLAND_DISABLE_LIBDECOR: number;
        static GLFW_KEY_MINUS: number;
        static GLFW_PLATFORM_NULL: number;
        static GLFW_HAT_LEFT_UP: number;
        static GLFW_ACCUM_ALPHA_BITS: number;
        static GLFW_WAYLAND_PREFER_LIBDECOR: number;
        static GLFW_FOCUS_ON_SHOW: number;
        static GLFW_KEY_LEFT_SHIFT: number;
        static GLFW_KEY_ESCAPE: number;
        static GLFW_CONTEXT_REVISION: number;
        static GLFW_KEY_KP_ADD: number;
        static GLFW_CONTEXT_RELEASE_BEHAVIOR: number;
        static GLFW_GAMEPAD_BUTTON_DPAD_LEFT: number;
        static GLFW_TRUE: number;
        static GLFW_KEY_KP_EQUAL: number;
        static GLFW_GAMEPAD_BUTTON_CROSS: number;
        static GLFW_GAMEPAD_BUTTON_RIGHT_BUMPER: number;
        static GLFW_INVALID_ENUM: number;
        static GLFW_SAMPLES: number;
        static GLFW_VISIBLE: number;
        static GLFW_FOCUSED: number;
        static GLFW_GAMEPAD_BUTTON_CIRCLE: number;
        static GLFW_KEY_RIGHT_SUPER: number;
        static GLFW_OPENGL_ES_API: number;
        static GLFW_ANGLE_PLATFORM_TYPE_D3D9: number;
        static GLFW_CURSOR: number;
        static GLFW_MOD_SUPER: number;
        static GLFW_KEY_MENU: number;
        static GLFW_PLATFORM_X11: number;
        static GLFW_KEY_KP_DIVIDE: number;
        static GLFW_FORMAT_UNAVAILABLE: number;
        static GLFW_GAMEPAD_AXIS_LEFT_TRIGGER: number;
        static GLFW_POINTING_HAND_CURSOR: number;
        static GLFW_REPEAT: number;
        static GLFW_KEY_KP_MULTIPLY: number;
        static GLFW_OSMESA_CONTEXT_API: number;
        static GLFW_KEY_KP_0: number;
        static GLFW_HAT_UP: number;
        static GLFW_MOD_CAPS_LOCK: number;
        static GLFW_HRESIZE_CURSOR: number;
        static GLFW_X11_XCB_VULKAN_SURFACE: number;
        static GLFW_STICKY_KEYS: number;
        static GLFW_KEY_INSERT: number;
        static GLFW_ANGLE_PLATFORM_TYPE: number;
        static GLFW_GAMEPAD_BUTTON_RIGHT_THUMB: number;
        static GLFW_LOCK_KEY_MODS: number;
        static GLFW_EGL_CONTEXT_API: number;
        static GLFW_VERSION_REVISION: number;
        static GLFW_KEY_SLASH: number;
        static GLFW_KEY_NUM_LOCK: number;
        static GLFW_KEY_KP_DECIMAL: number;
        static GLFW_DEPTH_BITS: number;
        static GLFW_OUT_OF_MEMORY: number;
        static GLFW_GAMEPAD_BUTTON_LEFT_BUMPER: number;
        static GLFW_NOT_ALLOWED_CURSOR: number;
        static GLFW_PLATFORM_COCOA: number;
        static GLFW_MOD_NUM_LOCK: number;
        static GLFW_NO_CURRENT_CONTEXT: number;
        static GLFW_VERSION_UNAVAILABLE: number;
        static GLFW_OPENGL_PROFILE: number;
        static GLFW_FALSE: number;
        static GLFW_VERSION_MAJOR: number;
        static GLFW_ANGLE_PLATFORM_TYPE_D3D11: number;
        static GLFW_KEY_CAPS_LOCK: number;
        static GLFW_STICKY_MOUSE_BUTTONS: number;
        static GLFW_NO_ROBUSTNESS: number;
        static GLFW_KEY_KP_ENTER: number;
        static GLFW_VERSION_MINOR: number;
        static GLFW_KEY_SCROLL_LOCK: number;
        static GLFW_KEY_DELETE: number;
        static GLFW_HAT_LEFT_DOWN: number;
        static GLFW_REFRESH_RATE: number;
        static GLFW_GAMEPAD_BUTTON_X: number;
        static GLFW_GAMEPAD_BUTTON_Y: number;
        static GLFW_KEY_LEFT: number;
        static GLFW_FEATURE_UNAVAILABLE: number;
        static GLFW_KEY_Z: number;
        static GLFW_GAMEPAD_AXIS_RIGHT_TRIGGER: number;
        static GLFW_API_UNAVAILABLE: number;
        static GLFW_HAT_RIGHT_DOWN: number;
        static GLFW_KEY_Y: number;
        static GLFW_HOVERED: number;
        static GLFW_ANGLE_PLATFORM_TYPE_OPENGLES: number;
        static GLFW_KEY_V: number;
        static GLFW_KEY_U: number;
        static GLFW_KEY_X: number;
        static GLFW_KEY_W: number;
        static GLFW_CONTEXT_DEBUG: number;
        static GLFW_KEY_R: number;
        static GLFW_KEY_Q: number;
        static GLFW_KEY_T: number;
        static GLFW_KEY_RIGHT_BRACKET: number;
        static GLFW_KEY_S: number;
        static GLFW_CONTEXT_NO_ERROR: number;
        static GLFW_KEY_N: number;
        static GLFW_KEY_M: number;
        static GLFW_KEY_P: number;
        static GLFW_KEY_O: number;
        static GLFW_KEY_J: number;
        static GLFW_KEY_I: number;
        static GLFW_KEY_L: number;
        static GLFW_KEY_K: number;
        static GLFW_MAXIMIZED: number;
        static GLFW_IBEAM_CURSOR: number;
        static GLFW_KEY_END: number;
        static GLFW_MOUSE_BUTTON_LEFT: number;
        static GLFW_GAMEPAD_BUTTON_B: number;
        static GLFW_RESIZE_ALL_CURSOR: number;
        static GLFW_WAYLAND_LIBDECOR: number;
        static GLFW_GAMEPAD_BUTTON_GUIDE: number;
        static GLFW_X11_CLASS_NAME: number;
        static GLFW_GAMEPAD_BUTTON_A: number;
        static GLFW_CONTEXT_ROBUSTNESS: number;
        static GLFW_KEY_KP_9: number;
        static GLFW_CENTER_CURSOR: number;
        static GLFW_OPENGL_COMPAT_PROFILE: number;
        static GLFW_KEY_KP_3: number;
        static GLFW_KEY_KP_4: number;
        static GLFW_KEY_KP_1: number;
        static GLFW_KEY_KP_2: number;
        static GLFW_KEY_SEMICOLON: number;
        static GLFW_KEY_KP_7: number;
        static GLFW_KEY_KP_8: number;
        static GLFW_ICONIFIED: number;
        static GLFW_KEY_KP_5: number;
        static GLFW_KEY_KP_6: number;
        static GLFW_BLUE_BITS: number;
        static GLFW_KEY_PERIOD: number;
        static GLFW_GAMEPAD_AXIS_LEFT_X: number;
        static GLFW_FLOATING: number;
        static GLFW_MOD_SHIFT: number;
        static GLFW_GAMEPAD_BUTTON_DPAD_UP: number;
        static GLFW_KEY_SPACE: number;
        static GLFW_GAMEPAD_AXIS_LEFT_Y: number;
        static GLFW_FEATURE_UNIMPLEMENTED: number;
        static GLFW_KEY_WORLD_1: number;
        static GLFW_KEY_WORLD_2: number;
        static GLFW_HAT_RIGHT_UP: number;
        static GLFW_TRANSPARENT_FRAMEBUFFER: number;
        static GLFW_KEY_F: number;
        static GLFW_KEY_E: number;
        static GLFW_KEY_H: number;
        static GLFW_KEY_G: number;
        static GLFW_KEY_B: number;
        static GLFW_KEY_A: number;
        static GLFW_KEY_D: number;
        static GLFW_KEY_C: number;
        static GLFW_MOD_ALT: number;
        static GLFW_KEY_9: number;
        static GLFW_CONTEXT_CREATION_API: number;
        static GLFW_AUTO_ICONIFY: number;
        static GLFW_KEY_6: number;
        static GLFW_COCOA_FRAME_NAME: number;
        static GLFW_KEY_5: number;
        static GLFW_KEY_8: number;
        static GLFW_DOUBLEBUFFER: number;
        static GLFW_KEY_7: number;
        static GLFW_KEY_2: number;
        static GLFW_KEY_1: number;
        static GLFW_GAMEPAD_BUTTON_DPAD_RIGHT: number;
        static GLFW_KEY_4: number;
        static GLFW_KEY_3: number;
        static GLFW_JOYSTICK_HAT_BUTTONS: number;
        static GLFW_KEY_0: number;
        static GLFW_HAT_DOWN: number;
        static get library(): $SharedLibrary;
    }
    export class $GLFWMouseButtonCallback extends $Callback implements $GLFWMouseButtonCallbackI {
        set(arg0: number): $GLFWMouseButtonCallback;
        static create(arg0: $GLFWMouseButtonCallbackI_): $GLFWMouseButtonCallback;
        static create(arg0: number): $GLFWMouseButtonCallback;
        static createSafe(arg0: number): $GLFWMouseButtonCallback;
        callback(arg0: number, arg1: number): void;
        getCallInterface(): $FFICIF;
        get callInterface(): $FFICIF;
    }
    export class $GLFWReallocateCallback extends $Callback implements $GLFWReallocateCallbackI {
        static create(arg0: number): $GLFWReallocateCallback;
        static create(arg0: $GLFWReallocateCallbackI_): $GLFWReallocateCallback;
        static createSafe(arg0: number): $GLFWReallocateCallback;
        callback(arg0: number, arg1: number): void;
        getCallInterface(): $FFICIF;
        get callInterface(): $FFICIF;
    }
    export class $GLFWFramebufferSizeCallbackI {
        static CIF: $FFICIF;
    }
    export interface $GLFWFramebufferSizeCallbackI extends $CallbackI {
        invoke(arg0: number, arg1: number, arg2: number): void;
        callback(arg0: number, arg1: number): void;
        getCallInterface(): $FFICIF;
        get callInterface(): $FFICIF;
    }
    /**
     * Values that may be interpreted as {@link $GLFWFramebufferSizeCallbackI}.
     */
    export type $GLFWFramebufferSizeCallbackI_ = ((arg0: number, arg1: number, arg2: number) => void);
    export class $GLFWWindowMaximizeCallbackI {
        static CIF: $FFICIF;
    }
    export interface $GLFWWindowMaximizeCallbackI extends $CallbackI {
        invoke(arg0: number, arg1: boolean): void;
        callback(arg0: number, arg1: number): void;
        getCallInterface(): $FFICIF;
        get callInterface(): $FFICIF;
    }
    /**
     * Values that may be interpreted as {@link $GLFWWindowMaximizeCallbackI}.
     */
    export type $GLFWWindowMaximizeCallbackI_ = ((arg0: number, arg1: boolean) => void);
    export class $GLFWGamepadState$Buffer extends $StructBuffer<$GLFWGamepadState, $GLFWGamepadState$Buffer> implements $NativeResource {
        buttons(arg0: $ByteBuffer): $GLFWGamepadState$Buffer;
        buttons(arg0: number, arg1: number): $GLFWGamepadState$Buffer;
        buttons(): $ByteBuffer;
        buttons(arg0: number): number;
        axes(arg0: number): number;
        axes(): $FloatBuffer;
        axes(arg0: number, arg1: number): $GLFWGamepadState$Buffer;
        axes(arg0: $FloatBuffer): $GLFWGamepadState$Buffer;
        close(): void;
        constructor(arg0: number, arg1: number);
        constructor(arg0: $ByteBuffer);
    }
    export class $GLFWCursorEnterCallback extends $Callback implements $GLFWCursorEnterCallbackI {
        set(arg0: number): $GLFWCursorEnterCallback;
        static create(arg0: $GLFWCursorEnterCallbackI_): $GLFWCursorEnterCallback;
        static create(arg0: number): $GLFWCursorEnterCallback;
        static createSafe(arg0: number): $GLFWCursorEnterCallback;
        callback(arg0: number, arg1: number): void;
        getCallInterface(): $FFICIF;
        get callInterface(): $FFICIF;
    }
    export class $GLFWAllocateCallback extends $Callback implements $GLFWAllocateCallbackI {
        static create(arg0: number): $GLFWAllocateCallback;
        static create(arg0: $GLFWAllocateCallbackI_): $GLFWAllocateCallback;
        static createSafe(arg0: number): $GLFWAllocateCallback;
        callback(arg0: number, arg1: number): void;
        getCallInterface(): $FFICIF;
        get callInterface(): $FFICIF;
    }
    export class $GLFWCharCallback extends $Callback implements $GLFWCharCallbackI {
        set(arg0: number): $GLFWCharCallback;
        static create(arg0: $GLFWCharCallbackI_): $GLFWCharCallback;
        static create(arg0: number): $GLFWCharCallback;
        static createSafe(arg0: number): $GLFWCharCallback;
        callback(arg0: number, arg1: number): void;
        getCallInterface(): $FFICIF;
        get callInterface(): $FFICIF;
    }
    export class $GLFWWindowFocusCallback extends $Callback implements $GLFWWindowFocusCallbackI {
        set(arg0: number): $GLFWWindowFocusCallback;
        static create(arg0: $GLFWWindowFocusCallbackI_): $GLFWWindowFocusCallback;
        static create(arg0: number): $GLFWWindowFocusCallback;
        static createSafe(arg0: number): $GLFWWindowFocusCallback;
        callback(arg0: number, arg1: number): void;
        getCallInterface(): $FFICIF;
        get callInterface(): $FFICIF;
    }
    export class $GLFWWindowCloseCallbackI {
        static CIF: $FFICIF;
    }
    export interface $GLFWWindowCloseCallbackI extends $CallbackI {
        invoke(arg0: number): void;
        callback(arg0: number, arg1: number): void;
        getCallInterface(): $FFICIF;
        get callInterface(): $FFICIF;
    }
    /**
     * Values that may be interpreted as {@link $GLFWWindowCloseCallbackI}.
     */
    export type $GLFWWindowCloseCallbackI_ = ((arg0: number) => void);
    export class $GLFWMonitorCallbackI {
        static CIF: $FFICIF;
    }
    export interface $GLFWMonitorCallbackI extends $CallbackI {
        invoke(arg0: number, arg1: number): void;
        callback(arg0: number, arg1: number): void;
        getCallInterface(): $FFICIF;
        get callInterface(): $FFICIF;
    }
    /**
     * Values that may be interpreted as {@link $GLFWMonitorCallbackI}.
     */
    export type $GLFWMonitorCallbackI_ = ((arg0: number, arg1: number) => void);
    export class $GLFWWindowIconifyCallbackI {
        static CIF: $FFICIF;
    }
    export interface $GLFWWindowIconifyCallbackI extends $CallbackI {
        invoke(arg0: number, arg1: boolean): void;
        callback(arg0: number, arg1: number): void;
        getCallInterface(): $FFICIF;
        get callInterface(): $FFICIF;
    }
    /**
     * Values that may be interpreted as {@link $GLFWWindowIconifyCallbackI}.
     */
    export type $GLFWWindowIconifyCallbackI_ = ((arg0: number, arg1: boolean) => void);
    export class $GLFWWindowSizeCallback extends $Callback implements $GLFWWindowSizeCallbackI {
        set(arg0: number): $GLFWWindowSizeCallback;
        static create(arg0: $GLFWWindowSizeCallbackI_): $GLFWWindowSizeCallback;
        static create(arg0: number): $GLFWWindowSizeCallback;
        static createSafe(arg0: number): $GLFWWindowSizeCallback;
        callback(arg0: number, arg1: number): void;
        getCallInterface(): $FFICIF;
        get callInterface(): $FFICIF;
    }
    export class $GLFWWindowRefreshCallback extends $Callback implements $GLFWWindowRefreshCallbackI {
        set(arg0: number): $GLFWWindowRefreshCallback;
        static create(arg0: $GLFWWindowRefreshCallbackI_): $GLFWWindowRefreshCallback;
        static create(arg0: number): $GLFWWindowRefreshCallback;
        static createSafe(arg0: number): $GLFWWindowRefreshCallback;
        callback(arg0: number, arg1: number): void;
        getCallInterface(): $FFICIF;
        get callInterface(): $FFICIF;
    }
    export class $GLFWGamepadState extends $Struct<$GLFWGamepadState> implements $NativeResource {
        set(arg0: $ByteBuffer, arg1: $FloatBuffer): $GLFWGamepadState;
        set(arg0: $GLFWGamepadState): $GLFWGamepadState;
        static create(arg0: number, arg1: number): $GLFWGamepadState$Buffer;
        static create(arg0: number): $GLFWGamepadState;
        static create(): $GLFWGamepadState;
        static create(arg0: number): $GLFWGamepadState$Buffer;
        static calloc(): $GLFWGamepadState;
        static calloc(arg0: number, arg1: $MemoryStack): $GLFWGamepadState$Buffer;
        static calloc(arg0: number): $GLFWGamepadState$Buffer;
        static calloc(arg0: $MemoryStack): $GLFWGamepadState;
        static createSafe(arg0: number): $GLFWGamepadState;
        static createSafe(arg0: number, arg1: number): $GLFWGamepadState$Buffer;
        /**
         * @deprecated
         */
        static mallocStack(arg0: number, arg1: $MemoryStack): $GLFWGamepadState$Buffer;
        /**
         * @deprecated
         */
        static mallocStack(arg0: number): $GLFWGamepadState$Buffer;
        /**
         * @deprecated
         */
        static mallocStack(arg0: $MemoryStack): $GLFWGamepadState;
        /**
         * @deprecated
         */
        static mallocStack(): $GLFWGamepadState;
        /**
         * @deprecated
         */
        static callocStack(arg0: number, arg1: $MemoryStack): $GLFWGamepadState$Buffer;
        /**
         * @deprecated
         */
        static callocStack(): $GLFWGamepadState;
        /**
         * @deprecated
         */
        static callocStack(arg0: $MemoryStack): $GLFWGamepadState;
        /**
         * @deprecated
         */
        static callocStack(arg0: number): $GLFWGamepadState$Buffer;
        buttons(arg0: number): number;
        buttons(arg0: number, arg1: number): $GLFWGamepadState;
        buttons(arg0: $ByteBuffer): $GLFWGamepadState;
        buttons(): $ByteBuffer;
        axes(): $FloatBuffer;
        axes(arg0: number): number;
        axes(arg0: number, arg1: number): $GLFWGamepadState;
        axes(arg0: $FloatBuffer): $GLFWGamepadState;
        static malloc(): $GLFWGamepadState;
        static malloc(arg0: $MemoryStack): $GLFWGamepadState;
        static malloc(arg0: number): $GLFWGamepadState$Buffer;
        static malloc(arg0: number, arg1: $MemoryStack): $GLFWGamepadState$Buffer;
        static nbuttons(arg0: number): $ByteBuffer;
        static nbuttons(arg0: number, arg1: number, arg2: number): void;
        static nbuttons(arg0: number, arg1: $ByteBuffer): void;
        static nbuttons(arg0: number, arg1: number): number;
        static naxes(arg0: number, arg1: number): number;
        static naxes(arg0: number): $FloatBuffer;
        static naxes(arg0: number, arg1: number, arg2: number): void;
        static naxes(arg0: number, arg1: $FloatBuffer): void;
        close(): void;
        static ALIGNOF: number;
        static SIZEOF: number;
        static AXES: number;
        static BUTTONS: number;
        constructor(arg0: $ByteBuffer);
    }
    export class $GLFWAllocator extends $Struct<$GLFWAllocator> implements $NativeResource {
        static validate(arg0: number): void;
        set(arg0: $GLFWAllocator): $GLFWAllocator;
        set(arg0: $GLFWAllocateCallbackI_, arg1: $GLFWReallocateCallbackI_, arg2: $GLFWDeallocateCallbackI_, arg3: number): $GLFWAllocator;
        static create(arg0: number): $GLFWAllocator$Buffer;
        static create(): $GLFWAllocator;
        static create(arg0: number): $GLFWAllocator;
        static create(arg0: number, arg1: number): $GLFWAllocator$Buffer;
        allocate(): $GLFWAllocateCallback;
        allocate(arg0: $GLFWAllocateCallbackI_): $GLFWAllocator;
        user(arg0: number): $GLFWAllocator;
        user(): number;
        static calloc(arg0: number): $GLFWAllocator$Buffer;
        static calloc(arg0: number, arg1: $MemoryStack): $GLFWAllocator$Buffer;
        static calloc(): $GLFWAllocator;
        static calloc(arg0: $MemoryStack): $GLFWAllocator;
        static createSafe(arg0: number): $GLFWAllocator;
        static createSafe(arg0: number, arg1: number): $GLFWAllocator$Buffer;
        static malloc(arg0: number): $GLFWAllocator$Buffer;
        static malloc(arg0: number, arg1: $MemoryStack): $GLFWAllocator$Buffer;
        static malloc(): $GLFWAllocator;
        static malloc(arg0: $MemoryStack): $GLFWAllocator;
        deallocate(): $GLFWDeallocateCallback;
        deallocate(arg0: $GLFWDeallocateCallbackI_): $GLFWAllocator;
        reallocate(): $GLFWReallocateCallback;
        reallocate(arg0: $GLFWReallocateCallbackI_): $GLFWAllocator;
        static nreallocate(arg0: number, arg1: $GLFWReallocateCallbackI_): void;
        static nreallocate(arg0: number): $GLFWReallocateCallback;
        static ndeallocate(arg0: number, arg1: $GLFWDeallocateCallbackI_): void;
        static ndeallocate(arg0: number): $GLFWDeallocateCallback;
        static nuser(arg0: number): number;
        static nuser(arg0: number, arg1: number): void;
        static nallocate(arg0: number): $GLFWAllocateCallback;
        static nallocate(arg0: number, arg1: $GLFWAllocateCallbackI_): void;
        close(): void;
        static ALLOCATE: number;
        static ALIGNOF: number;
        static REALLOCATE: number;
        static SIZEOF: number;
        static DEALLOCATE: number;
        static USER: number;
        constructor(arg0: $ByteBuffer);
    }
    export class $GLFWWindowRefreshCallbackI {
        static CIF: $FFICIF;
    }
    export interface $GLFWWindowRefreshCallbackI extends $CallbackI {
        invoke(arg0: number): void;
        callback(arg0: number, arg1: number): void;
        getCallInterface(): $FFICIF;
        get callInterface(): $FFICIF;
    }
    /**
     * Values that may be interpreted as {@link $GLFWWindowRefreshCallbackI}.
     */
    export type $GLFWWindowRefreshCallbackI_ = ((arg0: number) => void);
    export class $GLFWErrorCallback extends $Callback implements $GLFWErrorCallbackI {
        set(): $GLFWErrorCallback;
        static create(arg0: number): $GLFWErrorCallback;
        static create(arg0: $GLFWErrorCallbackI_): $GLFWErrorCallback;
        static getDescription(arg0: number): string;
        static createSafe(arg0: number): $GLFWErrorCallback;
        static createThrow(): $GLFWErrorCallback;
        static createPrint(arg0: $PrintStream): $GLFWErrorCallback;
        static createPrint(): $GLFWErrorCallback;
        callback(arg0: number, arg1: number): void;
        getCallInterface(): $FFICIF;
        get callInterface(): $FFICIF;
    }
    export class $GLFWWindowCloseCallback extends $Callback implements $GLFWWindowCloseCallbackI {
        set(arg0: number): $GLFWWindowCloseCallback;
        static create(arg0: $GLFWWindowCloseCallbackI_): $GLFWWindowCloseCallback;
        static create(arg0: number): $GLFWWindowCloseCallback;
        static createSafe(arg0: number): $GLFWWindowCloseCallback;
        callback(arg0: number, arg1: number): void;
        getCallInterface(): $FFICIF;
        get callInterface(): $FFICIF;
    }
    export class $GLFWVidMode$Buffer extends $StructBuffer<$GLFWVidMode, $GLFWVidMode$Buffer> {
        width(): number;
        height(): number;
        greenBits(): number;
        redBits(): number;
        blueBits(): number;
        refreshRate(): number;
        constructor(arg0: number, arg1: number);
        constructor(arg0: $ByteBuffer);
    }
    export class $GLFWKeyCallbackI {
        static CIF: $FFICIF;
    }
    export interface $GLFWKeyCallbackI extends $CallbackI {
        invoke(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        callback(arg0: number, arg1: number): void;
        getCallInterface(): $FFICIF;
        get callInterface(): $FFICIF;
    }
    /**
     * Values that may be interpreted as {@link $GLFWKeyCallbackI}.
     */
    export type $GLFWKeyCallbackI_ = ((arg0: number, arg1: number, arg2: number, arg3: number, arg4: number) => void);
    export class $GLFWWindowContentScaleCallback extends $Callback implements $GLFWWindowContentScaleCallbackI {
        set(arg0: number): $GLFWWindowContentScaleCallback;
        static create(arg0: $GLFWWindowContentScaleCallbackI_): $GLFWWindowContentScaleCallback;
        static create(arg0: number): $GLFWWindowContentScaleCallback;
        static createSafe(arg0: number): $GLFWWindowContentScaleCallback;
        callback(arg0: number, arg1: number): void;
        getCallInterface(): $FFICIF;
        get callInterface(): $FFICIF;
    }
    export class $GLFWJoystickCallbackI {
        static CIF: $FFICIF;
    }
    export interface $GLFWJoystickCallbackI extends $CallbackI {
        invoke(arg0: number, arg1: number): void;
        callback(arg0: number, arg1: number): void;
        getCallInterface(): $FFICIF;
        get callInterface(): $FFICIF;
    }
    /**
     * Values that may be interpreted as {@link $GLFWJoystickCallbackI}.
     */
    export type $GLFWJoystickCallbackI_ = ((arg0: number, arg1: number) => void);
    export class $GLFWCharCallbackI {
        static CIF: $FFICIF;
    }
    export interface $GLFWCharCallbackI extends $CallbackI {
        invoke(arg0: number, arg1: number): void;
        callback(arg0: number, arg1: number): void;
        getCallInterface(): $FFICIF;
        get callInterface(): $FFICIF;
    }
    /**
     * Values that may be interpreted as {@link $GLFWCharCallbackI}.
     */
    export type $GLFWCharCallbackI_ = ((arg0: number, arg1: number) => void);
    export class $GLFWAllocator$Buffer extends $StructBuffer<$GLFWAllocator, $GLFWAllocator$Buffer> implements $NativeResource {
        allocate(): $GLFWAllocateCallback;
        allocate(arg0: $GLFWAllocateCallbackI_): $GLFWAllocator$Buffer;
        user(arg0: number): $GLFWAllocator$Buffer;
        user(): number;
        deallocate(): $GLFWDeallocateCallback;
        deallocate(arg0: $GLFWDeallocateCallbackI_): $GLFWAllocator$Buffer;
        reallocate(): $GLFWReallocateCallback;
        reallocate(arg0: $GLFWReallocateCallbackI_): $GLFWAllocator$Buffer;
        close(): void;
        constructor(arg0: number, arg1: number);
        constructor(arg0: $ByteBuffer);
    }
    export class $GLFWScrollCallback extends $Callback implements $GLFWScrollCallbackI {
        set(arg0: number): $GLFWScrollCallback;
        static create(arg0: $GLFWScrollCallbackI_): $GLFWScrollCallback;
        static create(arg0: number): $GLFWScrollCallback;
        static createSafe(arg0: number): $GLFWScrollCallback;
        callback(arg0: number, arg1: number): void;
        getCallInterface(): $FFICIF;
        get callInterface(): $FFICIF;
    }
    export class $GLFWReallocateCallbackI {
        static CIF: $FFICIF;
    }
    export interface $GLFWReallocateCallbackI extends $CallbackI {
        invoke(arg0: number, arg1: number, arg2: number): number;
        callback(arg0: number, arg1: number): void;
        getCallInterface(): $FFICIF;
        get callInterface(): $FFICIF;
    }
    /**
     * Values that may be interpreted as {@link $GLFWReallocateCallbackI}.
     */
    export type $GLFWReallocateCallbackI_ = ((arg0: number, arg1: number, arg2: number) => number);
    export class $GLFWDropCallbackI {
        static CIF: $FFICIF;
    }
    export interface $GLFWDropCallbackI extends $CallbackI {
        invoke(arg0: number, arg1: number, arg2: number): void;
        callback(arg0: number, arg1: number): void;
        getCallInterface(): $FFICIF;
        get callInterface(): $FFICIF;
    }
    /**
     * Values that may be interpreted as {@link $GLFWDropCallbackI}.
     */
    export type $GLFWDropCallbackI_ = ((arg0: number, arg1: number, arg2: number) => void);
    export class $GLFWGammaRamp$Buffer extends $StructBuffer<$GLFWGammaRamp, $GLFWGammaRamp$Buffer> implements $NativeResource {
        size(arg0: number): $GLFWGammaRamp$Buffer;
        size(): number;
        red(arg0: $ShortBuffer): $GLFWGammaRamp$Buffer;
        red(): $ShortBuffer;
        green(arg0: $ShortBuffer): $GLFWGammaRamp$Buffer;
        green(): $ShortBuffer;
        blue(arg0: $ShortBuffer): $GLFWGammaRamp$Buffer;
        blue(): $ShortBuffer;
        close(): void;
        constructor(arg0: number, arg1: number);
        constructor(arg0: $ByteBuffer);
    }
    export class $GLFWCursorPosCallback extends $Callback implements $GLFWCursorPosCallbackI {
        set(arg0: number): $GLFWCursorPosCallback;
        static create(arg0: $GLFWCursorPosCallbackI_): $GLFWCursorPosCallback;
        static create(arg0: number): $GLFWCursorPosCallback;
        static createSafe(arg0: number): $GLFWCursorPosCallback;
        callback(arg0: number, arg1: number): void;
        getCallInterface(): $FFICIF;
        get callInterface(): $FFICIF;
    }
    export class $GLFWCharModsCallback extends $Callback implements $GLFWCharModsCallbackI {
        set(arg0: number): $GLFWCharModsCallback;
        static create(arg0: $GLFWCharModsCallbackI_): $GLFWCharModsCallback;
        static create(arg0: number): $GLFWCharModsCallback;
        static createSafe(arg0: number): $GLFWCharModsCallback;
        callback(arg0: number, arg1: number): void;
        getCallInterface(): $FFICIF;
        get callInterface(): $FFICIF;
    }
    export class $GLFWWindowIconifyCallback extends $Callback implements $GLFWWindowIconifyCallbackI {
        set(arg0: number): $GLFWWindowIconifyCallback;
        static create(arg0: $GLFWWindowIconifyCallbackI_): $GLFWWindowIconifyCallback;
        static create(arg0: number): $GLFWWindowIconifyCallback;
        static createSafe(arg0: number): $GLFWWindowIconifyCallback;
        callback(arg0: number, arg1: number): void;
        getCallInterface(): $FFICIF;
        get callInterface(): $FFICIF;
    }
    export class $GLFWKeyCallback extends $Callback implements $GLFWKeyCallbackI {
        set(arg0: number): $GLFWKeyCallback;
        static create(arg0: $GLFWKeyCallbackI_): $GLFWKeyCallback;
        static create(arg0: number): $GLFWKeyCallback;
        static createSafe(arg0: number): $GLFWKeyCallback;
        callback(arg0: number, arg1: number): void;
        getCallInterface(): $FFICIF;
        get callInterface(): $FFICIF;
    }
    export class $GLFWImage extends $Struct<$GLFWImage> implements $NativeResource {
        static validate(arg0: number): void;
        set(arg0: $GLFWImage): $GLFWImage;
        set(arg0: number, arg1: number, arg2: $ByteBuffer): $GLFWImage;
        static create(arg0: number): $GLFWImage$Buffer;
        static create(arg0: number, arg1: number): $GLFWImage$Buffer;
        static create(): $GLFWImage;
        static create(arg0: number): $GLFWImage;
        width(): number;
        width(arg0: number): $GLFWImage;
        height(): number;
        height(arg0: number): $GLFWImage;
        static nheight(arg0: number, arg1: number): void;
        static nheight(arg0: number): number;
        static npixels(arg0: number, arg1: $ByteBuffer): void;
        static npixels(arg0: number, arg1: number): $ByteBuffer;
        static calloc(arg0: number, arg1: $MemoryStack): $GLFWImage$Buffer;
        static calloc(): $GLFWImage;
        static calloc(arg0: $MemoryStack): $GLFWImage;
        static calloc(arg0: number): $GLFWImage$Buffer;
        static nwidth(arg0: number): number;
        static nwidth(arg0: number, arg1: number): void;
        static createSafe(arg0: number, arg1: number): $GLFWImage$Buffer;
        static createSafe(arg0: number): $GLFWImage;
        pixels(arg0: number): $ByteBuffer;
        pixels(arg0: $ByteBuffer): $GLFWImage;
        /**
         * @deprecated
         */
        static mallocStack(arg0: number): $GLFWImage$Buffer;
        /**
         * @deprecated
         */
        static mallocStack(arg0: $MemoryStack): $GLFWImage;
        /**
         * @deprecated
         */
        static mallocStack(): $GLFWImage;
        /**
         * @deprecated
         */
        static mallocStack(arg0: number, arg1: $MemoryStack): $GLFWImage$Buffer;
        /**
         * @deprecated
         */
        static callocStack(arg0: number, arg1: $MemoryStack): $GLFWImage$Buffer;
        /**
         * @deprecated
         */
        static callocStack(): $GLFWImage;
        /**
         * @deprecated
         */
        static callocStack(arg0: $MemoryStack): $GLFWImage;
        /**
         * @deprecated
         */
        static callocStack(arg0: number): $GLFWImage$Buffer;
        static malloc(arg0: number, arg1: $MemoryStack): $GLFWImage$Buffer;
        static malloc(arg0: number): $GLFWImage$Buffer;
        static malloc(): $GLFWImage;
        static malloc(arg0: $MemoryStack): $GLFWImage;
        close(): void;
        static ALIGNOF: number;
        static SIZEOF: number;
        static WIDTH: number;
        static HEIGHT: number;
        static PIXELS: number;
        constructor(arg0: $ByteBuffer);
    }
    export class $GLFWWindowMaximizeCallback extends $Callback implements $GLFWWindowMaximizeCallbackI {
        set(arg0: number): $GLFWWindowMaximizeCallback;
        static create(arg0: $GLFWWindowMaximizeCallbackI_): $GLFWWindowMaximizeCallback;
        static create(arg0: number): $GLFWWindowMaximizeCallback;
        static createSafe(arg0: number): $GLFWWindowMaximizeCallback;
        callback(arg0: number, arg1: number): void;
        getCallInterface(): $FFICIF;
        get callInterface(): $FFICIF;
    }
    export class $GLFWCursorEnterCallbackI {
        static CIF: $FFICIF;
    }
    export interface $GLFWCursorEnterCallbackI extends $CallbackI {
        invoke(arg0: number, arg1: boolean): void;
        callback(arg0: number, arg1: number): void;
        getCallInterface(): $FFICIF;
        get callInterface(): $FFICIF;
    }
    /**
     * Values that may be interpreted as {@link $GLFWCursorEnterCallbackI}.
     */
    export type $GLFWCursorEnterCallbackI_ = ((arg0: number, arg1: boolean) => void);
    export class $GLFWCharModsCallbackI {
        static CIF: $FFICIF;
    }
    export interface $GLFWCharModsCallbackI extends $CallbackI {
        invoke(arg0: number, arg1: number, arg2: number): void;
        callback(arg0: number, arg1: number): void;
        getCallInterface(): $FFICIF;
        get callInterface(): $FFICIF;
    }
    /**
     * Values that may be interpreted as {@link $GLFWCharModsCallbackI}.
     */
    export type $GLFWCharModsCallbackI_ = ((arg0: number, arg1: number, arg2: number) => void);
    export class $GLFWCursorPosCallbackI {
        static CIF: $FFICIF;
    }
    export interface $GLFWCursorPosCallbackI extends $CallbackI {
        invoke(arg0: number, arg1: number, arg2: number): void;
        callback(arg0: number, arg1: number): void;
        getCallInterface(): $FFICIF;
        get callInterface(): $FFICIF;
    }
    /**
     * Values that may be interpreted as {@link $GLFWCursorPosCallbackI}.
     */
    export type $GLFWCursorPosCallbackI_ = ((arg0: number, arg1: number, arg2: number) => void);
    export class $GLFWAllocateCallbackI {
        static CIF: $FFICIF;
    }
    export interface $GLFWAllocateCallbackI extends $CallbackI {
        invoke(arg0: number, arg1: number): number;
        callback(arg0: number, arg1: number): void;
        getCallInterface(): $FFICIF;
        get callInterface(): $FFICIF;
    }
    /**
     * Values that may be interpreted as {@link $GLFWAllocateCallbackI}.
     */
    export type $GLFWAllocateCallbackI_ = ((arg0: number, arg1: number) => number);
    export class $GLFWWindowSizeCallbackI {
        static CIF: $FFICIF;
    }
    export interface $GLFWWindowSizeCallbackI extends $CallbackI {
        invoke(arg0: number, arg1: number, arg2: number): void;
        callback(arg0: number, arg1: number): void;
        getCallInterface(): $FFICIF;
        get callInterface(): $FFICIF;
    }
    /**
     * Values that may be interpreted as {@link $GLFWWindowSizeCallbackI}.
     */
    export type $GLFWWindowSizeCallbackI_ = ((arg0: number, arg1: number, arg2: number) => void);
    export class $GLFWScrollCallbackI {
        static CIF: $FFICIF;
    }
    export interface $GLFWScrollCallbackI extends $CallbackI {
        invoke(arg0: number, arg1: number, arg2: number): void;
        callback(arg0: number, arg1: number): void;
        getCallInterface(): $FFICIF;
        get callInterface(): $FFICIF;
    }
    /**
     * Values that may be interpreted as {@link $GLFWScrollCallbackI}.
     */
    export type $GLFWScrollCallbackI_ = ((arg0: number, arg1: number, arg2: number) => void);
}
