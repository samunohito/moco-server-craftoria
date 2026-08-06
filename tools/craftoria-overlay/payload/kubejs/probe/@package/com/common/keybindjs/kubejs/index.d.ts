import { $KeyModifier_, $KeyModifier } from "@package/net/neoforged/neoforge/client/settings";
import { $ClientKubeEvent } from "@package/dev/latvian/mods/kubejs/client";
import { $Minecraft, $KeyMapping } from "@package/net/minecraft/client";
import { $HashMap } from "@package/java/util";
import { $Object } from "@package/java/lang";

declare module "@package/com/common/keybindjs/kubejs" {
    export class $KeyBindEvent$KeyBindBuilder {
        getBuildKeyMapping(): $KeyMapping;
        addModifier(keyModifier: $KeyModifier_): $KeyBindEvent$KeyBindBuilder;
        get buildKeyMapping(): $KeyMapping;
    }
    export class $KeyBindUtil {
        isDown(customName: string): boolean;
        getAllKeyMappings(): $KeyMapping[];
        getKeyMapping(customName: string): $KeyMapping;
        findKeyMappingInAllKeyMapping(keyName: string): $KeyMapping;
        /**
         * 请在事件里面使用，在外面使用可能出现问题，此screen仅为方便使用指令来调试kjs
         */
        openKubeJSDebugScreen(): void;
        getAllKeyName(): string[];
        getAllKeyCategory(): string[];
        static INSTANCE: $KeyBindUtil;
        constructor();
        get allKeyMappings(): $KeyMapping[];
        get allKeyName(): string[];
        get allKeyCategory(): string[];
    }
    export class $KeyBindEvent implements $ClientKubeEvent {
        create(customName: string, keyNameKey: string, keyCode: number, keyGroupKey: string): $KeyBindEvent$KeyBindBuilder;
        getClient(): $Minecraft;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        get client(): $Minecraft;
    }
    export class $KeyPressedEvent implements $ClientKubeEvent {
        static getModifyerMap(): $HashMap<number, $KeyModifier>;
        getClient(): $Minecraft;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor();
        static get modifyerMap(): $HashMap<number, $KeyModifier>;
        get client(): $Minecraft;
    }
    export class $KeyBindModifyEvent implements $ClientKubeEvent {
        /**
         * 移除按键绑定
         */
        remove(keyBindName: string): void;
        /**
         * 给已有按键添加customName用于监听
         */
        addListener(customName: string, keyName: string): void;
        /**
         * 修改按键的默认按键
         */
        modifyKey(keyBindName: string, keyCode: number): void;
        /**
         * 隐藏按键，隐藏后将只使用默认按键而不读取options文件
         */
        addHideKey(keyBindName: string): void;
        /**
         * 修改按键的默认修饰键
         */
        modifyModifier(keyBindName: string, keyModifier: $KeyModifier_): void;
        /**
         * 修改按键的分组
         */
        modifyCategory(keyBindName: string, category: string): void;
        getClient(): $Minecraft;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor();
        get client(): $Minecraft;
    }
}
