//import {singleton} from 'aurelia-framework';
import {transient} from 'aurelia-framework';

//@singleton()
@transient()

export class DataCache {
    constructor(){
        this.data = [
            {id: 1, name: 'item1'},
            {id: 2, name: 'item2'}
        ];
        console.log("DATA CACHE CONSTRUCTOR");
    }
}