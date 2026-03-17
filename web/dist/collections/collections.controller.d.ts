import { CollectionsService } from './collections.service';
import type { Response } from 'express';
export declare class CollectionsController {
    private readonly collectionsService;
    constructor(collectionsService: CollectionsService);
    getCollection(handle: string, res: Response): Promise<{
        timestamp: string;
        handle: string;
        categoryInfo: {
            objectID: string;
            _highlightResult?: {
                [key: string]: import("algoliasearch").HighlightResult;
            } | undefined;
            _snippetResult?: {
                [key: string]: import("algoliasearch").SnippetResult;
            } | undefined;
            _rankingInfo?: import("algoliasearch").RankingInfo | undefined;
            _distinctSeqID?: number | undefined;
        } | null;
        products: {
            objectID: string;
            _highlightResult?: {
                [key: string]: import("algoliasearch").HighlightResult;
            } | undefined;
            _snippetResult?: {
                [key: string]: import("algoliasearch").SnippetResult;
            } | undefined;
            _rankingInfo?: import("algoliasearch").RankingInfo | undefined;
            _distinctSeqID?: number | undefined;
        }[];
        content: string | {
            objectID: string;
            _highlightResult?: {
                [key: string]: import("algoliasearch").HighlightResult;
            } | undefined;
            _snippetResult?: {
                [key: string]: import("algoliasearch").SnippetResult;
            } | undefined;
            _rankingInfo?: import("algoliasearch").RankingInfo | undefined;
            _distinctSeqID?: number | undefined;
        };
    }>;
}
