declare module goog.i18n.uChar {

    /**
     * Builds the RemoteNameFetcher object. This object retrieves codepoint names
     * from a remote data source.
     *
     * @param {string} dataSourceUri URI to the data source.
     * @constructor
     * @implements {goog.i18n.uChar.NameFetcher}
     * @extends {goog.Disposable}
     * @final
     */
    class RemoteNameFetcher extends goog.Disposable {
        constructor(dataSourceUri: string);
    }
}

declare module goog.i18n.uChar.RemoteNameFetcher {

    /**
     * Enum for the different request types.
     *
     * @enum {string}
     * @private
     */
    interface RequestType_ {
        BASE_88: string;
        CODEPOINT: string;
    }
}
