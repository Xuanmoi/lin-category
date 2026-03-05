import { AlgoliaService } from '../algolia/algolia.service';
export declare class CollectionsService {
    private algolia;
    constructor(algolia: AlgoliaService);
    renderCollection(handle: string, shop: string): Promise<string>;
}
