declare class DrapoStorageItem {
    private _dataKey;
    private _type;
    private _access;
    private _element;
    private _data;
    private _dataInserted;
    private _dataUpdated;
    private _dataDeleted;
    private _urlGet;
    private _urlSet;
    private _urlParameters;
    private _postGet;
    private _start;
    private _increment;
    private _isIncremental;
    private _isFull;
    private _isGrowing;
    private _isUnitOfWork;
    private _isDelay;
    private _cookieName;
    private _isCookieChange;
    private _userConfig;
    private _isToken;
    private _sector;
    private _groups;
    private _pipes;
    private _channels;
    private _canCache;
    private _cacheKeys;
    private _onLoad;
    private _onAfterLoad;
    private _onAfterContainerLoad;
    private _onBeforeContainerUnload;
    private _onAfterCached;
    private _onNotify;
    private _headersGet;
    private _headersSet;
    private _hasChanges;
    private _pollingKey;
    private _pollingTimespan;
    private _pollingDate;
    private _pollingHash;
    get DataKey(): string;
    get Type(): string;
    set Type(value: string);
    get Access(): string;
    set Access(value: string);
    get Element(): HTMLElement;
    set Element(value: HTMLElement);
    get Data(): any[];
    set Data(value: any[]);
    get DataInserted(): any[];
    set DataInserted(value: any[]);
    get DataUpdated(): any[];
    set DataUpdated(value: any[]);
    get DataDeleted(): any[];
    set DataDeleted(value: any[]);
    get UrlGet(): string;
    set UrlGet(value: string);
    get UrlSet(): string;
    set UrlSet(value: string);
    get UrlParameters(): string;
    get IsUrlParametersRequired(): boolean;
    get PostGet(): string;
    set PostGet(value: string);
    get Start(): number;
    set Start(value: number);
    get Increment(): number;
    set Increment(value: number);
    get IsIncremental(): boolean;
    set IsIncremental(value: boolean);
    get IsFull(): boolean;
    set IsFull(value: boolean);
    get IsGrowing(): boolean;
    set IsGrowing(value: boolean);
    get IsUnitOfWork(): boolean;
    set IsUnitOfWork(value: boolean);
    get IsDelay(): boolean;
    set IsDelay(value: boolean);
    get CookieName(): string;
    set CookieName(value: string);
    get IsCookieChange(): boolean;
    set IsCookieChange(value: boolean);
    get UserConfig(): string;
    set UserConfig(value: string);
    get IsTypeValue(): boolean;
    get IsTypeObject(): boolean;
    get IsTypeParent(): boolean;
    get IsTypeArray(): boolean;
    get IsTypeFunction(): boolean;
    get IsAccessPublic(): boolean;
    get IsAccessPrivate(): boolean;
    get IsToken(): boolean;
    set IsToken(value: boolean);
    get Sector(): string;
    set Sector(value: string);
    get Pipes(): string[];
    set Pipes(value: string[]);
    get Channels(): string[];
    set Channels(value: string[]);
    get CanCache(): boolean;
    set CanCache(value: boolean);
    get CacheKeys(): string[];
    set CacheKeys(value: string[]);
    get OnLoad(): string;
    set OnLoad(value: string);
    get OnAfterLoad(): string;
    set OnAfterLoad(value: string);
    get OnAfterContainerLoad(): string;
    set OnAfterContainerLoad(value: string);
    get OnBeforeContainerUnload(): string;
    set OnBeforeContainerUnload(value: string);
    get OnAfterCached(): string;
    set OnAfterCached(value: string);
    get OnNotify(): string;
    set OnNotify(value: string);
    get HeadersGet(): [string, string][];
    set HeadersGet(value: [string, string][]);
    get HeadersSet(): [string, string][];
    set HeadersSet(value: [string, string][]);
    get HasChanges(): boolean;
    set HasChanges(value: boolean);
    get PollingKey(): string;
    set PollingKey(value: string);
    get PollingTimespan(): number;
    set PollingTimespan(value: number);
    get PollingDate(): Date;
    set PollingDate(value: Date);
    get PollingHash(): string;
    set PollingHash(value: string);
    constructor(dataKey: string, type: string, access: string, element: HTMLElement, data: any[], urlGet: string, urlSet: string, urlParameters: string, postGet: string, start: number, increment: number, isIncremental: boolean, isFull: boolean, isUnitOfWork: boolean, isDelay: boolean, cookieName: string, isCookieChange: boolean, userConfig: string, isToken: boolean, sector: string, groups: string[], pipes: string[], channels: string[], canCache: boolean, cacheKeys: string[], onLoad: string, onAfterLoad: string, onAfterContainerLoad: string, onBeforeContainerUnload: string, onAfterCached: string, onNotify: string, headersGet: [string, string][], headersSet: [string, string][], pollingKey: string, pollingTimespan: number);
    private Initialize;
    CheckpointPolling(): void;
    ContainsGroup(group: string): boolean;
}
