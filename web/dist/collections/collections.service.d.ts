import { AlgoliaService } from '../algolia/algolia.service';
export declare class CollectionsService {
    private readonly algolia;
    constructor(algolia: AlgoliaService);
    getCollectionsData(handle: string): Promise<{
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
    private fetchContent;
}
