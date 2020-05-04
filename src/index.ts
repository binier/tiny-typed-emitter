import { EventEmitter } from 'events';

type ListenerSignature<L> = { [E in keyof L]: (...args: any[]) => any };
interface EventEmitterOverrides<L extends ListenerSignature<L>>  {
  addListener<U extends keyof L>(
    event: U, listener: L[U]
  ): this;

  prependListener<U extends keyof L>(
    event: U, listener: L[U]
  ): this;

  prependOnceListener<U extends keyof L>(
    event: U, listener: L[U]
  ): this;

  removeListener<U extends keyof L>(
    event: U, listener: L[U]
  ): this;

  removeAllListeners(event: keyof L): this;

  once<U extends keyof L>(
    event: U, listener: L[U]
  ): this;

  on<U extends keyof L>(
    event: U, listener: L[U]
  ): this;

  off<U extends keyof L>(
    event: U, listener: L[U]
  ): this;

  emit<U extends keyof L>(
    event: U, ...args: Parameters<L[U]>
  ): boolean;

  eventNames(): (keyof L)[];
  listenerCount(type: keyof L): number;
  listeners<U extends keyof L>(type: U): L[U][];
  rawListeners<U extends keyof L>(type: U): L[U][];
}

export interface TypedEmitter<
  L extends ListenerSignature<L>
> extends
  EventEmitterOverrides<L>,
  Omit<EventEmitter, keyof EventEmitterOverrides<L>>
  { new(): TypedEmitter<L>; }

export function TypedEmitter<L extends ListenerSignature<L>>() {
  return EventEmitter as unknown as TypedEmitter<L>;
}
