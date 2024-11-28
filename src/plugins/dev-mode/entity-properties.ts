import { RxCollectionBase } from '../../rx-collection.ts';
import { RxDatabaseBase } from '../../rx-database.ts';
import { createRxDocumentConstructor, basePrototype } from '../../rx-document.ts';

/**
 * returns all possible properties of a RxCollection-instance
 */
let _rxCollectionProperties: string[];
export function rxCollectionProperties(): string[] {
    if (!_rxCollectionProperties) {
        const pseudoInstance = new (RxCollectionBase as any)();
        const ownProperties = Object.getOwnPropertyNames(pseudoInstance);
        const prototypeProperties = Object.getOwnPropertyNames(
            Object.getPrototypeOf(pseudoInstance)
        );
        _rxCollectionProperties = [...ownProperties, ...prototypeProperties];
    }
    return _rxCollectionProperties;
}


/**
 * returns all possible properties of a RxDatabase-instance
 */
let _rxDatabaseProperties: string[];
export function rxDatabaseProperties(): string[] {
    if (!_rxDatabaseProperties) {
        const pseudoInstance: RxDatabaseBase<any, any> = new (RxDatabaseBase as any)(
            'pseudoInstance',
            'memory'
        );
        const ownProperties = Object.getOwnPropertyNames(pseudoInstance);
        const prototypeProperties = Object.getOwnPropertyNames(
            Object.getPrototypeOf(pseudoInstance)
        );
        _rxDatabaseProperties = [...ownProperties, ...prototypeProperties];
        pseudoInstance.close();
    }
    return _rxDatabaseProperties;
}

/**
 * returns all possible properties of a RxDocument
 */
const pseudoConstructor = createRxDocumentConstructor(basePrototype);
const pseudoRxDocument = new (pseudoConstructor as any)();
let _rxDocumentProperties: string[];
export function rxDocumentProperties(): string[] {
    if (!_rxDocumentProperties) {
        const reserved = ['deleted', 'synced'];
        const ownProperties = Object.getOwnPropertyNames(pseudoRxDocument);
        const prototypeProperties = Object.getOwnPropertyNames(basePrototype);
        _rxDocumentProperties = [...ownProperties, ...prototypeProperties, ...reserved];
    }
    return _rxDocumentProperties;
}
