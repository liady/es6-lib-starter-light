const INITIALIZED = Symbol();

export default class Library {
    
    init() {
        this[INITIALIZED] = true;
    }

    get isInitialized(){
        return this[INITIALIZED];
    }
}

export function getLibrary(){
    return new Library();
}