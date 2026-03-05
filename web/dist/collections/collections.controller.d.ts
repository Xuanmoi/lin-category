import { Response } from 'express';
import { CollectionsService } from './collections.service';
export declare class CollectionsController {
    private collections;
    constructor(collections: CollectionsService);
    list(): string;
    getCollection(handle: string, shop: string, res: Response): Promise<void>;
}
