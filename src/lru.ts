import { LRUCache } from 'typescript-lru-cache';
import { getSSML } from './ssml';

/**
 * creating lru cache with size 10000
 */
export const cache = new LRUCache<string, string>({
  maxSize: 10000,
  entryExpirationTimeInMS: null,
});



export const getTextFromCache = (text : string) => {
    const value = cache.get(text);
    if(value == null){
        let ssmlText = getSSML(text);
        cache.set(text,ssmlText);
        return ssmlText;
    }
    return value;
}
