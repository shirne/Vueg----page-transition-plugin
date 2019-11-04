
import {Vue, VueRoute} from 'vue';

export interface VuegHistory {
    install(Vue: Vue, router: VueRoute, options = {}):void;
}

declare const vuegHistory: VuegHistory;

export default vuegHistory;