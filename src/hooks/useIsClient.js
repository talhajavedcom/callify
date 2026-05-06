import { useSyncExternalStore } from 'react';

const emptySubscribe = () => () => {};

/**
 * True only after hydration (safe for document / createPortal). Avoids setState-in-effect.
 */
export function useIsClient() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}
