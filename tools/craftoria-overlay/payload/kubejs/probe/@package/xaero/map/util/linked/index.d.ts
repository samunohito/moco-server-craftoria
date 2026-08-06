
declare module "@package/xaero/map/util/linked" {
    export class $ILinkedChainNode<V extends $ILinkedChainNode<V>> {
    }
    export interface $ILinkedChainNode<V extends $ILinkedChainNode<V>> {
        isDestroyed(): boolean;
        getPrevious(): V;
        setPrevious(arg0: V): void;
        setNext(arg0: V): void;
        getNext(): V;
        onDestroyed(): void;
        get destroyed(): boolean;
    }
}
