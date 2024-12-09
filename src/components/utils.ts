import { isFunction, isObject } from '@/lib/assertions';
import { create } from 'twrnc';

/** Tailwind styles */
export const tw = create(require('../../tailwind.config'));

type PossibleRef<El> = React.ForwardedRef<El> | undefined;
/** Use multiple refs on a single element */
export function compositeRefs<El extends Element>(...refs: PossibleRef<El>[]) {
  if (!refs.length) return;
  return (el: El) => {
    for (const ref of refs) {
      if (!ref) continue;
      else if (isFunction(ref)) ref(el);
      else if (isObject(ref)) ref.current = el;
    }
  };
}