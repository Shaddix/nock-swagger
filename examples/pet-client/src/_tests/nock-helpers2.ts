/* eslint-disable */

type DeleteProductNockParameters = {
  id?: number | undefined | RegExp;
};

type SearchProductNockParameters = {
  search?: string | null | undefined | RegExp;
  productType?: ProductType | null | undefined | RegExp;
  lastStockUpdatedAt?: Date | null | undefined | RegExp;
  offset?: number | null | undefined | RegExp;
  limit?: number | null | undefined | RegExp;
  sortBy?: string | null | undefined | RegExp;
  sortOrder?: SortOrder | undefined | RegExp;
};

type PatchProductNockParameters = {
  id: number;
};

type GetProductNockParameters = {
  id: number;
};

export const ProductNock = {
  create: (
    requestBody?:
      | string
      | Buffer
      | RegExp
      | DataMatcherArray
      | DataMatcherMap
      | CreateProductDto
      | ((body: CreateProductDto) => boolean),
    interceptorOptions?: Options & { preservePreviousInterceptors?: boolean },
  ): Omit<Interceptor, 'reply'> & {
    reply(
      replyFnWithCallback: (
        this: ReplyFnContext,
        uri: string,
        body: CreateProductDto,
        callback: (
          err: NodeJS.ErrnoException | null,
          result: ReplyFnResultGeneric<IProductDto>,
        ) => void,
      ) => void,
    ): Scope;
    reply(
      replyFn: (
        this: ReplyFnContext,
        uri: string,
        body: CreateProductDto,
      ) =>
        | ReplyFnResultGeneric<IProductDto>
        | Promise<ReplyFnResultGeneric<IProductDto>>,
    ): Scope;
    reply(
      statusCode: StatusCode,
      replyBodyFnWithCallback: (
        this: ReplyFnContext,
        uri: string,
        body: CreateProductDto,
        callback: (
          err: NodeJS.ErrnoException | null,
          result: IProductDto,
        ) => void,
      ) => void,
      headers?: ReplyHeaders,
    ): Scope;
    reply(
      statusCode: StatusCode,
      replyBodyFn: (
        this: ReplyFnContext,
        uri: string,
        body: CreateProductDto,
      ) => IProductDto | Promise<IProductDto>,
      headers?: ReplyHeaders,
    ): Scope;
    reply(
      responseCode?: StatusCode,
      body?: IProductDto,
      headers?: ReplyHeaders,
    ): Scope;
  } => {
    let url_ = '/api/products';
    const interceptor = nock(getBaseUrl()).post(
      new RegExp('^' + url_ + '([?]|$)'),
      requestBody as RequestBodyMatcher,
      interceptorOptions,
    );
    if (!interceptorOptions?.preservePreviousInterceptors) {
      removeInterceptor(interceptor);
    }
    return interceptor as any;
  },

  parseCreateUrl(url: string) {
    return {};
  },

  delete: (
    queryParams: DeleteProductNockParameters,
    requestBody?: RequestBodyMatcher,
    interceptorOptions?: Options & { preservePreviousInterceptors?: boolean },
  ): Omit<Interceptor, 'reply'> & {
    reply(
      replyFnWithCallback: (
        this: ReplyFnContext,
        uri: string,
        body: Body,
        callback: (
          err: NodeJS.ErrnoException | null,
          result: ReplyFnResultGeneric<void>,
        ) => void,
      ) => void,
    ): Scope;
    reply(
      replyFn: (
        this: ReplyFnContext,
        uri: string,
        body: Body,
      ) => ReplyFnResultGeneric<void> | Promise<ReplyFnResultGeneric<void>>,
    ): Scope;
    reply(
      statusCode: StatusCode,
      replyBodyFnWithCallback: (
        this: ReplyFnContext,
        uri: string,
        body: Body,
        callback: (err: NodeJS.ErrnoException | null, result: void) => void,
      ) => void,
      headers?: ReplyHeaders,
    ): Scope;
    reply(
      statusCode: StatusCode,
      replyBodyFn: (
        this: ReplyFnContext,
        uri: string,
        body: Body,
      ) => void | Promise<void>,
      headers?: ReplyHeaders,
    ): Scope;
    reply(
      responseCode?: StatusCode,
      body?: void,
      headers?: ReplyHeaders,
    ): Scope;
  } => {
    let url_ = '/api/products';
    const interceptor = nock(getBaseUrl())
      .delete(
        new RegExp('^' + url_ + '([?]|$)'),
        requestBody as RequestBodyMatcher,
        interceptorOptions,
      )
      .query({
        id:
          queryParams.id === null || queryParams.id === undefined
            ? /./
            : queryParams.id instanceof RegExp
            ? queryParams.id
            : encodeURIComponent('' + queryParams.id),
      });
    if (!interceptorOptions?.preservePreviousInterceptors) {
      removeInterceptor(interceptor);
    }
    return interceptor as any;
  },

  parseDeleteUrl(url: string) {
    const parsedUrl = new URL('http://localhost' + url);
    return {
      id: parsedUrl.searchParams.get('id'),
    };
  },

  /**
   */
  search: (
    queryParams: SearchProductNockParameters,
    requestBody?: RequestBodyMatcher,
    interceptorOptions?: Options & { preservePreviousInterceptors?: boolean },
  ): Omit<Interceptor, 'reply'> & {
    reply(
      replyFnWithCallback: (
        this: ReplyFnContext,
        uri: string,
        body: Body,
        callback: (
          err: NodeJS.ErrnoException | null,
          result: ReplyFnResultGeneric<IPagedResultOfProductListItemDto>,
        ) => void,
      ) => void,
    ): Scope;
    reply(
      replyFn: (
        this: ReplyFnContext,
        uri: string,
        body: Body,
      ) =>
        | ReplyFnResultGeneric<IPagedResultOfProductListItemDto>
        | Promise<ReplyFnResultGeneric<IPagedResultOfProductListItemDto>>,
    ): Scope;
    reply(
      statusCode: StatusCode,
      replyBodyFnWithCallback: (
        this: ReplyFnContext,
        uri: string,
        body: Body,
        callback: (
          err: NodeJS.ErrnoException | null,
          result: IPagedResultOfProductListItemDto,
        ) => void,
      ) => void,
      headers?: ReplyHeaders,
    ): Scope;
    reply(
      statusCode: StatusCode,
      replyBodyFn: (
        this: ReplyFnContext,
        uri: string,
        body: Body,
      ) =>
        | IPagedResultOfProductListItemDto
        | Promise<IPagedResultOfProductListItemDto>,
      headers?: ReplyHeaders,
    ): Scope;
    reply(
      responseCode?: StatusCode,
      body?: IPagedResultOfProductListItemDto,
      headers?: ReplyHeaders,
    ): Scope;
  } => {
    let url_ = '/api/products';
    const interceptor = nock(getBaseUrl())
      .get(
        new RegExp('^' + url_ + '([?]|$)'),
        requestBody as RequestBodyMatcher,
        interceptorOptions,
      )
      .query({
        search:
          queryParams.search === null || queryParams.search === undefined
            ? /./
            : queryParams.search instanceof RegExp
            ? queryParams.search
            : encodeURIComponent('' + queryParams.search),
        productType:
          queryParams.productType === null ||
          queryParams.productType === undefined
            ? /./
            : queryParams.productType instanceof RegExp
            ? queryParams.productType
            : encodeURIComponent('' + queryParams.productType),
        lastStockUpdatedAt:
          queryParams.lastStockUpdatedAt === null ||
          queryParams.lastStockUpdatedAt === undefined
            ? /./
            : queryParams.lastStockUpdatedAt instanceof RegExp
            ? queryParams.lastStockUpdatedAt
            : encodeURIComponent(formatDate(queryParams.lastStockUpdatedAt)),
        offset:
          queryParams.offset === null || queryParams.offset === undefined
            ? /./
            : queryParams.offset instanceof RegExp
            ? queryParams.offset
            : encodeURIComponent('' + queryParams.offset),
        limit:
          queryParams.limit === null || queryParams.limit === undefined
            ? /./
            : queryParams.limit instanceof RegExp
            ? queryParams.limit
            : encodeURIComponent('' + queryParams.limit),
        sortBy:
          queryParams.sortBy === null || queryParams.sortBy === undefined
            ? /./
            : queryParams.sortBy instanceof RegExp
            ? queryParams.sortBy
            : encodeURIComponent('' + queryParams.sortBy),
        sortOrder:
          queryParams.sortOrder === null || queryParams.sortOrder === undefined
            ? /./
            : queryParams.sortOrder instanceof RegExp
            ? queryParams.sortOrder
            : encodeURIComponent('' + queryParams.sortOrder),
      });
    if (!interceptorOptions?.preservePreviousInterceptors) {
      removeInterceptor(interceptor);
    }
    return interceptor as any;
  },

  parseSearchUrl(url: string) {
    const parsedUrl = new URL('http://localhost' + url);
    return {
      Search: parsedUrl.searchParams.get('Search'),
      ProductType: parsedUrl.searchParams.get('ProductType'),
      LastStockUpdatedAt: parsedUrl.searchParams.get('LastStockUpdatedAt'),
      Offset: parsedUrl.searchParams.get('Offset'),
      Limit: parsedUrl.searchParams.get('Limit'),
      SortBy: parsedUrl.searchParams.get('SortBy'),
      SortOrder: parsedUrl.searchParams.get('SortOrder'),
    };
  },

  patch: (
    queryParams: PatchProductNockParameters,
    requestBody?:
      | string
      | Buffer
      | RegExp
      | DataMatcherArray
      | DataMatcherMap
      | PatchProductDto
      | ((body: PatchProductDto) => boolean),
    interceptorOptions?: Options & { preservePreviousInterceptors?: boolean },
  ): Omit<Interceptor, 'reply'> & {
    reply(
      replyFnWithCallback: (
        this: ReplyFnContext,
        uri: string,
        body: PatchProductDto,
        callback: (
          err: NodeJS.ErrnoException | null,
          result: ReplyFnResultGeneric<IProductDto>,
        ) => void,
      ) => void,
    ): Scope;
    reply(
      replyFn: (
        this: ReplyFnContext,
        uri: string,
        body: PatchProductDto,
      ) =>
        | ReplyFnResultGeneric<IProductDto>
        | Promise<ReplyFnResultGeneric<IProductDto>>,
    ): Scope;
    reply(
      statusCode: StatusCode,
      replyBodyFnWithCallback: (
        this: ReplyFnContext,
        uri: string,
        body: PatchProductDto,
        callback: (
          err: NodeJS.ErrnoException | null,
          result: IProductDto,
        ) => void,
      ) => void,
      headers?: ReplyHeaders,
    ): Scope;
    reply(
      statusCode: StatusCode,
      replyBodyFn: (
        this: ReplyFnContext,
        uri: string,
        body: PatchProductDto,
      ) => IProductDto | Promise<IProductDto>,
      headers?: ReplyHeaders,
    ): Scope;
    reply(
      responseCode?: StatusCode,
      body?: IProductDto,
      headers?: ReplyHeaders,
    ): Scope;
  } => {
    let url_ = '/api/products/{id}';
    if (queryParams.id !== null && queryParams.id !== undefined)
      url_ = url_.replace('{id}', encodeURIComponent('' + queryParams.id));
    else url_ = url_.replace('{id}', '[^/^?]*?');
    const interceptor = nock(getBaseUrl()).patch(
      new RegExp('^' + url_ + '([?]|$)'),
      requestBody as RequestBodyMatcher,
      interceptorOptions,
    );
    if (!interceptorOptions?.preservePreviousInterceptors) {
      removeInterceptor(interceptor);
    }
    return interceptor as any;
  },

  parsePatchUrl(url: string) {
    let regex = '/api/products/{id}([?]|$)';
    regex = regex.replace('{id}', '(?<id>.*?)');
    const match = new RegExp(regex).exec(url);
    return {
      id: match?.groups?.['id'],
    };
  },

  get: (
    queryParams: GetProductNockParameters,
    requestBody?: RequestBodyMatcher,
    interceptorOptions?: Options & { preservePreviousInterceptors?: boolean },
  ): Omit<Interceptor, 'reply'> & {
    reply(
      replyFnWithCallback: (
        this: ReplyFnContext,
        uri: string,
        body: Body,
        callback: (
          err: NodeJS.ErrnoException | null,
          result: ReplyFnResultGeneric<IProductDto>,
        ) => void,
      ) => void,
    ): Scope;
    reply(
      replyFn: (
        this: ReplyFnContext,
        uri: string,
        body: Body,
      ) =>
        | ReplyFnResultGeneric<IProductDto>
        | Promise<ReplyFnResultGeneric<IProductDto>>,
    ): Scope;
    reply(
      statusCode: StatusCode,
      replyBodyFnWithCallback: (
        this: ReplyFnContext,
        uri: string,
        body: Body,
        callback: (
          err: NodeJS.ErrnoException | null,
          result: IProductDto,
        ) => void,
      ) => void,
      headers?: ReplyHeaders,
    ): Scope;
    reply(
      statusCode: StatusCode,
      replyBodyFn: (
        this: ReplyFnContext,
        uri: string,
        body: Body,
      ) => IProductDto | Promise<IProductDto>,
      headers?: ReplyHeaders,
    ): Scope;
    reply(
      responseCode?: StatusCode,
      body?: IProductDto,
      headers?: ReplyHeaders,
    ): Scope;
  } => {
    let url_ = '/api/products/{id}';
    if (queryParams.id !== null && queryParams.id !== undefined)
      url_ = url_.replace('{id}', encodeURIComponent('' + queryParams.id));
    else url_ = url_.replace('{id}', '[^/^?]*?');
    const interceptor = nock(getBaseUrl()).get(
      new RegExp('^' + url_ + '([?]|$)'),
      requestBody as RequestBodyMatcher,
      interceptorOptions,
    );
    if (!interceptorOptions?.preservePreviousInterceptors) {
      removeInterceptor(interceptor);
    }
    return interceptor as any;
  },

  parseGetUrl(url: string) {
    let regex = '/api/products/{id}([?]|$)';
    regex = regex.replace('{id}', '(?<id>.*?)');
    const match = new RegExp(regex).exec(url);
    return {
      id: match?.groups?.['id'],
    };
  },
};

type ExternalCallbackGETOpenIdAuthorizationNockParameters = {
  remoteError?: string | null | undefined | RegExp;
  originalQuery?: string | null | undefined | RegExp;
};

type ExternalCallbackPOSTOpenIdAuthorizationNockParameters = {
  remoteError?: string | null | undefined | RegExp;
  originalQuery?: string | null | undefined | RegExp;
};

type AuthorizeGETOpenIdAuthorizationNockParameters = {
  provider?: string | null | undefined | RegExp;
  reauthenticateWithAnotherProviderIfAlreadyLoggedIn?:
    | boolean
    | undefined
    | RegExp;
};

type AuthorizePOSTOpenIdAuthorizationNockParameters = {
  provider?: string | null | undefined | RegExp;
  reauthenticateWithAnotherProviderIfAlreadyLoggedIn?:
    | boolean
    | undefined
    | RegExp;
};

export const OpenIdAuthorizationNock = {
  externalCallbackGET: (
    queryParams: ExternalCallbackGETOpenIdAuthorizationNockParameters,
    requestBody?: RequestBodyMatcher,
    interceptorOptions?: Options & { preservePreviousInterceptors?: boolean },
  ): Omit<Interceptor, 'reply'> & {
    reply(
      replyFnWithCallback: (
        this: ReplyFnContext,
        uri: string,
        body: Body,
        callback: (
          err: NodeJS.ErrnoException | null,
          result: ReplyFnResultGeneric<void>,
        ) => void,
      ) => void,
    ): Scope;
    reply(
      replyFn: (
        this: ReplyFnContext,
        uri: string,
        body: Body,
      ) => ReplyFnResultGeneric<void> | Promise<ReplyFnResultGeneric<void>>,
    ): Scope;
    reply(
      statusCode: StatusCode,
      replyBodyFnWithCallback: (
        this: ReplyFnContext,
        uri: string,
        body: Body,
        callback: (err: NodeJS.ErrnoException | null, result: void) => void,
      ) => void,
      headers?: ReplyHeaders,
    ): Scope;
    reply(
      statusCode: StatusCode,
      replyBodyFn: (
        this: ReplyFnContext,
        uri: string,
        body: Body,
      ) => void | Promise<void>,
      headers?: ReplyHeaders,
    ): Scope;
    reply(
      responseCode?: StatusCode,
      body?: void,
      headers?: ReplyHeaders,
    ): Scope;
  } => {
    let url_ = '/connect/authorize/callback';
    const interceptor = nock(getBaseUrl())
      .get(
        new RegExp('^' + url_ + '([?]|$)'),
        requestBody as RequestBodyMatcher,
        interceptorOptions,
      )
      .query({
        remoteError:
          queryParams.remoteError === null ||
          queryParams.remoteError === undefined
            ? /./
            : queryParams.remoteError instanceof RegExp
            ? queryParams.remoteError
            : encodeURIComponent('' + queryParams.remoteError),
        originalQuery:
          queryParams.originalQuery === null ||
          queryParams.originalQuery === undefined
            ? /./
            : queryParams.originalQuery instanceof RegExp
            ? queryParams.originalQuery
            : encodeURIComponent('' + queryParams.originalQuery),
      });
    if (!interceptorOptions?.preservePreviousInterceptors) {
      removeInterceptor(interceptor);
    }
    return interceptor as any;
  },

  parseExternalCallbackGETUrl(url: string) {
    const parsedUrl = new URL('http://localhost' + url);
    return {
      remoteError: parsedUrl.searchParams.get('remoteError'),
      originalQuery: parsedUrl.searchParams.get('originalQuery'),
    };
  },

  externalCallbackPOST: (
    queryParams: ExternalCallbackPOSTOpenIdAuthorizationNockParameters,
    requestBody?: RequestBodyMatcher,
    interceptorOptions?: Options & { preservePreviousInterceptors?: boolean },
  ): Omit<Interceptor, 'reply'> & {
    reply(
      replyFnWithCallback: (
        this: ReplyFnContext,
        uri: string,
        body: Body,
        callback: (
          err: NodeJS.ErrnoException | null,
          result: ReplyFnResultGeneric<void>,
        ) => void,
      ) => void,
    ): Scope;
    reply(
      replyFn: (
        this: ReplyFnContext,
        uri: string,
        body: Body,
      ) => ReplyFnResultGeneric<void> | Promise<ReplyFnResultGeneric<void>>,
    ): Scope;
    reply(
      statusCode: StatusCode,
      replyBodyFnWithCallback: (
        this: ReplyFnContext,
        uri: string,
        body: Body,
        callback: (err: NodeJS.ErrnoException | null, result: void) => void,
      ) => void,
      headers?: ReplyHeaders,
    ): Scope;
    reply(
      statusCode: StatusCode,
      replyBodyFn: (
        this: ReplyFnContext,
        uri: string,
        body: Body,
      ) => void | Promise<void>,
      headers?: ReplyHeaders,
    ): Scope;
    reply(
      responseCode?: StatusCode,
      body?: void,
      headers?: ReplyHeaders,
    ): Scope;
  } => {
    let url_ = '/connect/authorize/callback';
    const interceptor = nock(getBaseUrl())
      .post(
        new RegExp('^' + url_ + '([?]|$)'),
        requestBody as RequestBodyMatcher,
        interceptorOptions,
      )
      .query({
        remoteError:
          queryParams.remoteError === null ||
          queryParams.remoteError === undefined
            ? /./
            : queryParams.remoteError instanceof RegExp
            ? queryParams.remoteError
            : encodeURIComponent('' + queryParams.remoteError),
        originalQuery:
          queryParams.originalQuery === null ||
          queryParams.originalQuery === undefined
            ? /./
            : queryParams.originalQuery instanceof RegExp
            ? queryParams.originalQuery
            : encodeURIComponent('' + queryParams.originalQuery),
      });
    if (!interceptorOptions?.preservePreviousInterceptors) {
      removeInterceptor(interceptor);
    }
    return interceptor as any;
  },

  parseExternalCallbackPOSTUrl(url: string) {
    const parsedUrl = new URL('http://localhost' + url);
    return {
      remoteError: parsedUrl.searchParams.get('remoteError'),
      originalQuery: parsedUrl.searchParams.get('originalQuery'),
    };
  },

  authorizeGET: (
    queryParams: AuthorizeGETOpenIdAuthorizationNockParameters,
    requestBody?: RequestBodyMatcher,
    interceptorOptions?: Options & { preservePreviousInterceptors?: boolean },
  ): Omit<Interceptor, 'reply'> & {
    reply(
      replyFnWithCallback: (
        this: ReplyFnContext,
        uri: string,
        body: Body,
        callback: (
          err: NodeJS.ErrnoException | null,
          result: ReplyFnResultGeneric<void>,
        ) => void,
      ) => void,
    ): Scope;
    reply(
      replyFn: (
        this: ReplyFnContext,
        uri: string,
        body: Body,
      ) => ReplyFnResultGeneric<void> | Promise<ReplyFnResultGeneric<void>>,
    ): Scope;
    reply(
      statusCode: StatusCode,
      replyBodyFnWithCallback: (
        this: ReplyFnContext,
        uri: string,
        body: Body,
        callback: (err: NodeJS.ErrnoException | null, result: void) => void,
      ) => void,
      headers?: ReplyHeaders,
    ): Scope;
    reply(
      statusCode: StatusCode,
      replyBodyFn: (
        this: ReplyFnContext,
        uri: string,
        body: Body,
      ) => void | Promise<void>,
      headers?: ReplyHeaders,
    ): Scope;
    reply(
      responseCode?: StatusCode,
      body?: void,
      headers?: ReplyHeaders,
    ): Scope;
  } => {
    let url_ = '/connect/authorize';
    const interceptor = nock(getBaseUrl())
      .get(
        new RegExp('^' + url_ + '([?]|$)'),
        requestBody as RequestBodyMatcher,
        interceptorOptions,
      )
      .query({
        provider:
          queryParams.provider === null || queryParams.provider === undefined
            ? /./
            : queryParams.provider instanceof RegExp
            ? queryParams.provider
            : encodeURIComponent('' + queryParams.provider),
        reauthenticateWithAnotherProviderIfAlreadyLoggedIn:
          queryParams.reauthenticateWithAnotherProviderIfAlreadyLoggedIn ===
            null ||
          queryParams.reauthenticateWithAnotherProviderIfAlreadyLoggedIn ===
            undefined
            ? /./
            : queryParams.reauthenticateWithAnotherProviderIfAlreadyLoggedIn instanceof
              RegExp
            ? queryParams.reauthenticateWithAnotherProviderIfAlreadyLoggedIn
            : encodeURIComponent(
                '' +
                  queryParams.reauthenticateWithAnotherProviderIfAlreadyLoggedIn,
              ),
      });
    if (!interceptorOptions?.preservePreviousInterceptors) {
      removeInterceptor(interceptor);
    }
    return interceptor as any;
  },

  parseAuthorizeGETUrl(url: string) {
    const parsedUrl = new URL('http://localhost' + url);
    return {
      provider: parsedUrl.searchParams.get('provider'),
      reauthenticateWithAnotherProviderIfAlreadyLoggedIn:
        parsedUrl.searchParams.get(
          'reauthenticateWithAnotherProviderIfAlreadyLoggedIn',
        ),
    };
  },

  authorizePOST: (
    queryParams: AuthorizePOSTOpenIdAuthorizationNockParameters,
    requestBody?: RequestBodyMatcher,
    interceptorOptions?: Options & { preservePreviousInterceptors?: boolean },
  ): Omit<Interceptor, 'reply'> & {
    reply(
      replyFnWithCallback: (
        this: ReplyFnContext,
        uri: string,
        body: Body,
        callback: (
          err: NodeJS.ErrnoException | null,
          result: ReplyFnResultGeneric<void>,
        ) => void,
      ) => void,
    ): Scope;
    reply(
      replyFn: (
        this: ReplyFnContext,
        uri: string,
        body: Body,
      ) => ReplyFnResultGeneric<void> | Promise<ReplyFnResultGeneric<void>>,
    ): Scope;
    reply(
      statusCode: StatusCode,
      replyBodyFnWithCallback: (
        this: ReplyFnContext,
        uri: string,
        body: Body,
        callback: (err: NodeJS.ErrnoException | null, result: void) => void,
      ) => void,
      headers?: ReplyHeaders,
    ): Scope;
    reply(
      statusCode: StatusCode,
      replyBodyFn: (
        this: ReplyFnContext,
        uri: string,
        body: Body,
      ) => void | Promise<void>,
      headers?: ReplyHeaders,
    ): Scope;
    reply(
      responseCode?: StatusCode,
      body?: void,
      headers?: ReplyHeaders,
    ): Scope;
  } => {
    let url_ = '/connect/authorize';
    const interceptor = nock(getBaseUrl())
      .post(
        new RegExp('^' + url_ + '([?]|$)'),
        requestBody as RequestBodyMatcher,
        interceptorOptions,
      )
      .query({
        provider:
          queryParams.provider === null || queryParams.provider === undefined
            ? /./
            : queryParams.provider instanceof RegExp
            ? queryParams.provider
            : encodeURIComponent('' + queryParams.provider),
        reauthenticateWithAnotherProviderIfAlreadyLoggedIn:
          queryParams.reauthenticateWithAnotherProviderIfAlreadyLoggedIn ===
            null ||
          queryParams.reauthenticateWithAnotherProviderIfAlreadyLoggedIn ===
            undefined
            ? /./
            : queryParams.reauthenticateWithAnotherProviderIfAlreadyLoggedIn instanceof
              RegExp
            ? queryParams.reauthenticateWithAnotherProviderIfAlreadyLoggedIn
            : encodeURIComponent(
                '' +
                  queryParams.reauthenticateWithAnotherProviderIfAlreadyLoggedIn,
              ),
      });
    if (!interceptorOptions?.preservePreviousInterceptors) {
      removeInterceptor(interceptor);
    }
    return interceptor as any;
  },

  parseAuthorizePOSTUrl(url: string) {
    const parsedUrl = new URL('http://localhost' + url);
    return {
      provider: parsedUrl.searchParams.get('provider'),
      reauthenticateWithAnotherProviderIfAlreadyLoggedIn:
        parsedUrl.searchParams.get(
          'reauthenticateWithAnotherProviderIfAlreadyLoggedIn',
        ),
    };
  },

  exchange: (
    requestBody?: RequestBodyMatcher,
    interceptorOptions?: Options & { preservePreviousInterceptors?: boolean },
  ): Omit<Interceptor, 'reply'> & {
    reply(
      replyFnWithCallback: (
        this: ReplyFnContext,
        uri: string,
        body: Body,
        callback: (
          err: NodeJS.ErrnoException | null,
          result: ReplyFnResultGeneric<void>,
        ) => void,
      ) => void,
    ): Scope;
    reply(
      replyFn: (
        this: ReplyFnContext,
        uri: string,
        body: Body,
      ) => ReplyFnResultGeneric<void> | Promise<ReplyFnResultGeneric<void>>,
    ): Scope;
    reply(
      statusCode: StatusCode,
      replyBodyFnWithCallback: (
        this: ReplyFnContext,
        uri: string,
        body: Body,
        callback: (err: NodeJS.ErrnoException | null, result: void) => void,
      ) => void,
      headers?: ReplyHeaders,
    ): Scope;
    reply(
      statusCode: StatusCode,
      replyBodyFn: (
        this: ReplyFnContext,
        uri: string,
        body: Body,
      ) => void | Promise<void>,
      headers?: ReplyHeaders,
    ): Scope;
    reply(
      responseCode?: StatusCode,
      body?: void,
      headers?: ReplyHeaders,
    ): Scope;
  } => {
    let url_ = '/connect/token';
    const interceptor = nock(getBaseUrl()).post(
      new RegExp('^' + url_ + '([?]|$)'),
      requestBody as RequestBodyMatcher,
      interceptorOptions,
    );
    if (!interceptorOptions?.preservePreviousInterceptors) {
      removeInterceptor(interceptor);
    }
    return interceptor as any;
  },

  parseExchangeUrl(url: string) {
    return {};
  },
};

export const SignUrlNock = {
  getSignature: (
    requestBody?: RequestBodyMatcher,
    interceptorOptions?: Options & { preservePreviousInterceptors?: boolean },
  ): Omit<Interceptor, 'reply'> & {
    reply(
      replyFnWithCallback: (
        this: ReplyFnContext,
        uri: string,
        body: Body,
        callback: (
          err: NodeJS.ErrnoException | null,
          result: ReplyFnResultGeneric<string>,
        ) => void,
      ) => void,
    ): Scope;
    reply(
      replyFn: (
        this: ReplyFnContext,
        uri: string,
        body: Body,
      ) => ReplyFnResultGeneric<string> | Promise<ReplyFnResultGeneric<string>>,
    ): Scope;
    reply(
      statusCode: StatusCode,
      replyBodyFnWithCallback: (
        this: ReplyFnContext,
        uri: string,
        body: Body,
        callback: (err: NodeJS.ErrnoException | null, result: string) => void,
      ) => void,
      headers?: ReplyHeaders,
    ): Scope;
    reply(
      statusCode: StatusCode,
      replyBodyFn: (
        this: ReplyFnContext,
        uri: string,
        body: Body,
      ) => string | Promise<string>,
      headers?: ReplyHeaders,
    ): Scope;
    reply(
      responseCode?: StatusCode,
      body?: string,
      headers?: ReplyHeaders,
    ): Scope;
  } => {
    let url_ = '/api/sign-url/signature';
    const interceptor = nock(getBaseUrl()).get(
      new RegExp('^' + url_ + '([?]|$)'),
      requestBody as RequestBodyMatcher,
      interceptorOptions,
    );
    if (!interceptorOptions?.preservePreviousInterceptors) {
      removeInterceptor(interceptor);
    }
    return interceptor as any;
  },

  parseGetSignatureUrl(url: string) {
    return {};
  },

  setSignatureCookie: (
    requestBody?: RequestBodyMatcher,
    interceptorOptions?: Options & { preservePreviousInterceptors?: boolean },
  ): Omit<Interceptor, 'reply'> & {
    reply(
      replyFnWithCallback: (
        this: ReplyFnContext,
        uri: string,
        body: Body,
        callback: (
          err: NodeJS.ErrnoException | null,
          result: ReplyFnResultGeneric<void>,
        ) => void,
      ) => void,
    ): Scope;
    reply(
      replyFn: (
        this: ReplyFnContext,
        uri: string,
        body: Body,
      ) => ReplyFnResultGeneric<void> | Promise<ReplyFnResultGeneric<void>>,
    ): Scope;
    reply(
      statusCode: StatusCode,
      replyBodyFnWithCallback: (
        this: ReplyFnContext,
        uri: string,
        body: Body,
        callback: (err: NodeJS.ErrnoException | null, result: void) => void,
      ) => void,
      headers?: ReplyHeaders,
    ): Scope;
    reply(
      statusCode: StatusCode,
      replyBodyFn: (
        this: ReplyFnContext,
        uri: string,
        body: Body,
      ) => void | Promise<void>,
      headers?: ReplyHeaders,
    ): Scope;
    reply(
      responseCode?: StatusCode,
      body?: void,
      headers?: ReplyHeaders,
    ): Scope;
  } => {
    let url_ = '/api/sign-url/signature/cookie';
    const interceptor = nock(getBaseUrl()).get(
      new RegExp('^' + url_ + '([?]|$)'),
      requestBody as RequestBodyMatcher,
      interceptorOptions,
    );
    if (!interceptorOptions?.preservePreviousInterceptors) {
      removeInterceptor(interceptor);
    }
    return interceptor as any;
  },

  parseSetSignatureCookieUrl(url: string) {
    return {};
  },
};

export const TestDataNock = {
  /**
   * Demonstrates an error response.
   */
  throwError: (
    requestBody?: RequestBodyMatcher,
    interceptorOptions?: Options & { preservePreviousInterceptors?: boolean },
  ): Omit<Interceptor, 'reply'> & {
    reply(
      replyFnWithCallback: (
        this: ReplyFnContext,
        uri: string,
        body: Body,
        callback: (
          err: NodeJS.ErrnoException | null,
          result: ReplyFnResultGeneric<string>,
        ) => void,
      ) => void,
    ): Scope;
    reply(
      replyFn: (
        this: ReplyFnContext,
        uri: string,
        body: Body,
      ) => ReplyFnResultGeneric<string> | Promise<ReplyFnResultGeneric<string>>,
    ): Scope;
    reply(
      statusCode: StatusCode,
      replyBodyFnWithCallback: (
        this: ReplyFnContext,
        uri: string,
        body: Body,
        callback: (err: NodeJS.ErrnoException | null, result: string) => void,
      ) => void,
      headers?: ReplyHeaders,
    ): Scope;
    reply(
      statusCode: StatusCode,
      replyBodyFn: (
        this: ReplyFnContext,
        uri: string,
        body: Body,
      ) => string | Promise<string>,
      headers?: ReplyHeaders,
    ): Scope;
    reply(
      responseCode?: StatusCode,
      body?: string,
      headers?: ReplyHeaders,
    ): Scope;
  } => {
    let url_ = '/error-test';
    const interceptor = nock(getBaseUrl()).get(
      new RegExp('^' + url_ + '([?]|$)'),
      requestBody as RequestBodyMatcher,
      interceptorOptions,
    );
    if (!interceptorOptions?.preservePreviousInterceptors) {
      removeInterceptor(interceptor);
    }
    return interceptor as any;
  },

  parseThrowErrorUrl(url: string) {
    return {};
  },

  /**
   * Sends a dummy email
   */
  sendEmail: (
    requestBody?: RequestBodyMatcher,
    interceptorOptions?: Options & { preservePreviousInterceptors?: boolean },
  ): Omit<Interceptor, 'reply'> & {
    reply(
      replyFnWithCallback: (
        this: ReplyFnContext,
        uri: string,
        body: Body,
        callback: (
          err: NodeJS.ErrnoException | null,
          result: ReplyFnResultGeneric<string>,
        ) => void,
      ) => void,
    ): Scope;
    reply(
      replyFn: (
        this: ReplyFnContext,
        uri: string,
        body: Body,
      ) => ReplyFnResultGeneric<string> | Promise<ReplyFnResultGeneric<string>>,
    ): Scope;
    reply(
      statusCode: StatusCode,
      replyBodyFnWithCallback: (
        this: ReplyFnContext,
        uri: string,
        body: Body,
        callback: (err: NodeJS.ErrnoException | null, result: string) => void,
      ) => void,
      headers?: ReplyHeaders,
    ): Scope;
    reply(
      statusCode: StatusCode,
      replyBodyFn: (
        this: ReplyFnContext,
        uri: string,
        body: Body,
      ) => string | Promise<string>,
      headers?: ReplyHeaders,
    ): Scope;
    reply(
      responseCode?: StatusCode,
      body?: string,
      headers?: ReplyHeaders,
    ): Scope;
  } => {
    let url_ = '/send-email';
    const interceptor = nock(getBaseUrl()).post(
      new RegExp('^' + url_ + '([?]|$)'),
      requestBody as RequestBodyMatcher,
      interceptorOptions,
    );
    if (!interceptorOptions?.preservePreviousInterceptors) {
      removeInterceptor(interceptor);
    }
    return interceptor as any;
  },

  parseSendEmailUrl(url: string) {
    return {};
  },

  /**
   * Tests RequiredOrUndefined attribute
   */
  patch: (
    requestBody?:
      | string
      | Buffer
      | RegExp
      | DataMatcherArray
      | DataMatcherMap
      | TestPatchDto
      | ((body: TestPatchDto) => boolean),
    interceptorOptions?: Options & { preservePreviousInterceptors?: boolean },
  ): Omit<Interceptor, 'reply'> & {
    reply(
      replyFnWithCallback: (
        this: ReplyFnContext,
        uri: string,
        body: TestPatchDto,
        callback: (
          err: NodeJS.ErrnoException | null,
          result: ReplyFnResultGeneric<string>,
        ) => void,
      ) => void,
    ): Scope;
    reply(
      replyFn: (
        this: ReplyFnContext,
        uri: string,
        body: TestPatchDto,
      ) => ReplyFnResultGeneric<string> | Promise<ReplyFnResultGeneric<string>>,
    ): Scope;
    reply(
      statusCode: StatusCode,
      replyBodyFnWithCallback: (
        this: ReplyFnContext,
        uri: string,
        body: TestPatchDto,
        callback: (err: NodeJS.ErrnoException | null, result: string) => void,
      ) => void,
      headers?: ReplyHeaders,
    ): Scope;
    reply(
      statusCode: StatusCode,
      replyBodyFn: (
        this: ReplyFnContext,
        uri: string,
        body: TestPatchDto,
      ) => string | Promise<string>,
      headers?: ReplyHeaders,
    ): Scope;
    reply(
      responseCode?: StatusCode,
      body?: string,
      headers?: ReplyHeaders,
    ): Scope;
  } => {
    let url_ = '/patch';
    const interceptor = nock(getBaseUrl()).post(
      new RegExp('^' + url_ + '([?]|$)'),
      requestBody as RequestBodyMatcher,
      interceptorOptions,
    );
    if (!interceptorOptions?.preservePreviousInterceptors) {
      removeInterceptor(interceptor);
    }
    return interceptor as any;
  },

  parsePatchUrl(url: string) {
    return {};
  },

  /**
   * Try this in browser with language set to DE
   */
  formData: (
    requestBody?: RequestBodyMatcher,
    interceptorOptions?: Options & { preservePreviousInterceptors?: boolean },
  ): Omit<Interceptor, 'reply'> & {
    reply(
      replyFnWithCallback: (
        this: ReplyFnContext,
        uri: string,
        body: Body,
        callback: (
          err: NodeJS.ErrnoException | null,
          result: ReplyFnResultGeneric<string>,
        ) => void,
      ) => void,
    ): Scope;
    reply(
      replyFn: (
        this: ReplyFnContext,
        uri: string,
        body: Body,
      ) => ReplyFnResultGeneric<string> | Promise<ReplyFnResultGeneric<string>>,
    ): Scope;
    reply(
      statusCode: StatusCode,
      replyBodyFnWithCallback: (
        this: ReplyFnContext,
        uri: string,
        body: Body,
        callback: (err: NodeJS.ErrnoException | null, result: string) => void,
      ) => void,
      headers?: ReplyHeaders,
    ): Scope;
    reply(
      statusCode: StatusCode,
      replyBodyFn: (
        this: ReplyFnContext,
        uri: string,
        body: Body,
      ) => string | Promise<string>,
      headers?: ReplyHeaders,
    ): Scope;
    reply(
      responseCode?: StatusCode,
      body?: string,
      headers?: ReplyHeaders,
    ): Scope;
  } => {
    let url_ = '/formdata';
    const interceptor = nock(getBaseUrl()).post(
      new RegExp('^' + url_ + '([?]|$)'),
      requestBody as RequestBodyMatcher,
      interceptorOptions,
    );
    if (!interceptorOptions?.preservePreviousInterceptors) {
      removeInterceptor(interceptor);
    }
    return interceptor as any;
  },

  parseFormDataUrl(url: string) {
    return {};
  },
};

export const VersionNock = {
  /**
   * Gets the version of the service.
   */
  version: (
    requestBody?: RequestBodyMatcher,
    interceptorOptions?: Options & { preservePreviousInterceptors?: boolean },
  ): Omit<Interceptor, 'reply'> & {
    reply(
      replyFnWithCallback: (
        this: ReplyFnContext,
        uri: string,
        body: Body,
        callback: (
          err: NodeJS.ErrnoException | null,
          result: ReplyFnResultGeneric<string>,
        ) => void,
      ) => void,
    ): Scope;
    reply(
      replyFn: (
        this: ReplyFnContext,
        uri: string,
        body: Body,
      ) => ReplyFnResultGeneric<string> | Promise<ReplyFnResultGeneric<string>>,
    ): Scope;
    reply(
      statusCode: StatusCode,
      replyBodyFnWithCallback: (
        this: ReplyFnContext,
        uri: string,
        body: Body,
        callback: (err: NodeJS.ErrnoException | null, result: string) => void,
      ) => void,
      headers?: ReplyHeaders,
    ): Scope;
    reply(
      statusCode: StatusCode,
      replyBodyFn: (
        this: ReplyFnContext,
        uri: string,
        body: Body,
      ) => string | Promise<string>,
      headers?: ReplyHeaders,
    ): Scope;
    reply(
      responseCode?: StatusCode,
      body?: string,
      headers?: ReplyHeaders,
    ): Scope;
  } => {
    let url_ = '/api';
    const interceptor = nock(getBaseUrl()).get(
      new RegExp('^' + url_ + '([?]|$)'),
      requestBody as RequestBodyMatcher,
      interceptorOptions,
    );
    if (!interceptorOptions?.preservePreviousInterceptors) {
      removeInterceptor(interceptor);
    }
    return interceptor as any;
  },

  parseVersionUrl(url: string) {
    return {};
  },
};

export class ProblemDetails implements IProblemDetails {
  type?: string | undefined;
  title?: string | undefined;
  status?: number | undefined;
  detail?: string | undefined;
  instance?: string | undefined;
  extensions?: { [key: string]: any };

  constructor(data?: IProblemDetails) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.type = _data['type'];
      this.title = _data['title'];
      this.status = _data['status'];
      this.detail = _data['detail'];
      this.instance = _data['instance'];
      if (_data['extensions']) {
        this.extensions = {} as any;
        for (let key in _data['extensions']) {
          if (_data['extensions'].hasOwnProperty(key))
            (<any>this.extensions)![key] = _data['extensions'][key];
        }
      }
    }
  }

  static fromJS(data: any): ProblemDetails {
    data = typeof data === 'object' ? data : {};
    let result = new ProblemDetails();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data['type'] = this.type;
    data['title'] = this.title;
    data['status'] = this.status;
    data['detail'] = this.detail;
    data['instance'] = this.instance;
    if (this.extensions) {
      data['extensions'] = {};
      for (let key in this.extensions) {
        if (this.extensions.hasOwnProperty(key))
          (<any>data['extensions'])[key] = this.extensions[key];
      }
    }
    return data;
  }
}

export interface IProblemDetails {
  type?: string | undefined;
  title?: string | undefined;
  status?: number | undefined;
  detail?: string | undefined;
  instance?: string | undefined;
  extensions?: { [key: string]: any };
}

export class HttpValidationProblemDetails
  extends ProblemDetails
  implements IHttpValidationProblemDetails
{
  errors?: { [key: string]: string[] };

  constructor(data?: IHttpValidationProblemDetails) {
    super(data);
  }

  init(_data?: any) {
    super.init(_data);
    if (_data) {
      if (_data['errors']) {
        this.errors = {} as any;
        for (let key in _data['errors']) {
          if (_data['errors'].hasOwnProperty(key))
            (<any>this.errors)![key] =
              _data['errors'][key] !== undefined ? _data['errors'][key] : [];
        }
      }
    }
  }

  static fromJS(data: any): HttpValidationProblemDetails {
    data = typeof data === 'object' ? data : {};
    let result = new HttpValidationProblemDetails();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    if (this.errors) {
      data['errors'] = {};
      for (let key in this.errors) {
        if (this.errors.hasOwnProperty(key))
          (<any>data['errors'])[key] = this.errors[key];
      }
    }
    super.toJSON(data);
    return data;
  }
}

export interface IHttpValidationProblemDetails extends IProblemDetails {
  errors?: { [key: string]: string[] };
}

export class ValidationProblemDetails
  extends HttpValidationProblemDetails
  implements IValidationProblemDetails
{
  errors?: { [key: string]: string[] };

  constructor(data?: IValidationProblemDetails) {
    super(data);
  }

  init(_data?: any) {
    super.init(_data);
    if (_data) {
      if (_data['errors']) {
        this.errors = {} as any;
        for (let key in _data['errors']) {
          if (_data['errors'].hasOwnProperty(key))
            (<any>this.errors)![key] =
              _data['errors'][key] !== undefined ? _data['errors'][key] : [];
        }
      }
    }
  }

  static fromJS(data: any): ValidationProblemDetails {
    data = typeof data === 'object' ? data : {};
    let result = new ValidationProblemDetails();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    if (this.errors) {
      data['errors'] = {};
      for (let key in this.errors) {
        if (this.errors.hasOwnProperty(key))
          (<any>data['errors'])[key] = this.errors[key];
      }
    }
    super.toJSON(data);
    return data;
  }
}

export interface IValidationProblemDetails
  extends IHttpValidationProblemDetails {
  errors?: { [key: string]: string[] };
}

export class ProductDto implements IProductDto {
  id!: number;
  title!: string;
  productType!: ProductType;
  lastStockUpdatedAt!: Date;

  constructor(data?: IProductDto) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.id = _data['id'];
      this.title = _data['title'];
      this.productType = _data['productType'];
      this.lastStockUpdatedAt = _data['lastStockUpdatedAt']
        ? new Date(_data['lastStockUpdatedAt'].toString())
        : <any>undefined;
    }
  }

  static fromJS(data: any): ProductDto {
    data = typeof data === 'object' ? data : {};
    let result = new ProductDto();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data['id'] = this.id;
    data['title'] = this.title;
    data['productType'] = this.productType;
    data['lastStockUpdatedAt'] = this.lastStockUpdatedAt
      ? formatDate(this.lastStockUpdatedAt)
      : <any>undefined;
    return data;
  }
}

export interface IProductDto {
  id: number;
  title: string;
  productType: ProductType;
  lastStockUpdatedAt: Date;
}

export enum ProductType {
  Undefined = 'Undefined',
  Auto = 'Auto',
  Electronic = 'Electronic',
  Other = 'Other',
}

export class CreateProductDto implements ICreateProductDto {
  title!: string;
  productType!: ProductType;
  lastStockUpdatedAt!: Date;

  constructor(data?: ICreateProductDto) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.title = _data['title'];
      this.productType = _data['productType'];
      this.lastStockUpdatedAt = _data['lastStockUpdatedAt']
        ? new Date(_data['lastStockUpdatedAt'].toString())
        : <any>undefined;
    }
  }

  static fromJS(data: any): CreateProductDto {
    data = typeof data === 'object' ? data : {};
    let result = new CreateProductDto();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data['title'] = this.title;
    data['productType'] = this.productType;
    data['lastStockUpdatedAt'] = this.lastStockUpdatedAt
      ? formatDate(this.lastStockUpdatedAt)
      : <any>undefined;
    return data;
  }
}

export interface ICreateProductDto {
  title: string;
  productType: ProductType;
  lastStockUpdatedAt: Date;
}

export class PatchProductDto implements IPatchProductDto {
  title?: string;
  productType?: ProductType;
  lastStockUpdatedAt?: Date;

  constructor(data?: IPatchProductDto) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.title = _data['title'];
      this.productType = _data['productType'];
      this.lastStockUpdatedAt = _data['lastStockUpdatedAt']
        ? new Date(_data['lastStockUpdatedAt'].toString())
        : <any>undefined;
    }
  }

  static fromJS(data: any): PatchProductDto {
    data = typeof data === 'object' ? data : {};
    let result = new PatchProductDto();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data['title'] = this.title;
    data['productType'] = this.productType;
    data['lastStockUpdatedAt'] = this.lastStockUpdatedAt
      ? formatDate(this.lastStockUpdatedAt)
      : <any>undefined;
    return data;
  }
}

export interface IPatchProductDto {
  title?: string;
  productType?: ProductType;
  lastStockUpdatedAt?: Date;
}

export class PagedResultOfProductListItemDto
  implements IPagedResultOfProductListItemDto
{
  data!: ProductListItemDto[];
  totalCount!: number;

  constructor(data?: IPagedResultOfProductListItemDto) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
    if (!data) {
      this.data = [];
    }
  }

  init(_data?: any) {
    if (_data) {
      if (Array.isArray(_data['data'])) {
        this.data = [] as any;
        for (let item of _data['data'])
          this.data!.push(ProductListItemDto.fromJS(item));
      }
      this.totalCount = _data['totalCount'];
    }
  }

  static fromJS(data: any): PagedResultOfProductListItemDto {
    data = typeof data === 'object' ? data : {};
    let result = new PagedResultOfProductListItemDto();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    if (Array.isArray(this.data)) {
      data['data'] = [];
      for (let item of this.data) data['data'].push(item.toJSON());
    }
    data['totalCount'] = this.totalCount;
    return data;
  }
}

export interface IPagedResultOfProductListItemDto {
  data: ProductListItemDto[];
  totalCount: number;
}

export class ProductListItemDto implements IProductListItemDto {
  id!: number;
  title!: string;
  productType!: ProductType;
  lastStockUpdatedAt!: Date;

  constructor(data?: IProductListItemDto) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.id = _data['id'];
      this.title = _data['title'];
      this.productType = _data['productType'];
      this.lastStockUpdatedAt = _data['lastStockUpdatedAt']
        ? new Date(_data['lastStockUpdatedAt'].toString())
        : <any>undefined;
    }
  }

  static fromJS(data: any): ProductListItemDto {
    data = typeof data === 'object' ? data : {};
    let result = new ProductListItemDto();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data['id'] = this.id;
    data['title'] = this.title;
    data['productType'] = this.productType;
    data['lastStockUpdatedAt'] = this.lastStockUpdatedAt
      ? formatDate(this.lastStockUpdatedAt)
      : <any>undefined;
    return data;
  }
}

export interface IProductListItemDto {
  id: number;
  title: string;
  productType: ProductType;
  lastStockUpdatedAt: Date;
}

export enum SortOrder {
  Asc = 'Asc',
  Desc = 'Desc',
}

export class TestPatchDto implements ITestPatchDto {
  value!: string;

  constructor(data?: ITestPatchDto) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.value = _data['value'];
    }
  }

  static fromJS(data: any): TestPatchDto {
    data = typeof data === 'object' ? data : {};
    let result = new TestPatchDto();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data['value'] = this.value;
    return data;
  }
}

export interface ITestPatchDto {
  value: string;
}

function formatDate(d: Date) {
  return (
    d.getFullYear() +
    '-' +
    (d.getMonth() < 9 ? '0' + (d.getMonth() + 1) : d.getMonth() + 1) +
    '-' +
    (d.getDate() < 10 ? '0' + d.getDate() : d.getDate())
  );
}

import nock, {
  Options,
  RequestBodyMatcher,
  Interceptor,
  DataMatcherArray,
  DataMatcherMap,
  ReplyHeaders,
  ReplyFnContext,
  ReplyFnResult,
  ReplyBody,
  Scope,
  StatusCode,
} from 'nock';

/*
Removes passed interceptor from Nock
*/
export function removeInterceptor(interceptor: Interceptor) {
  let beforeRemoveCount = nock.pendingMocks().length;
  let afterRemoveCount = 0;

  // We try to remove the interceptor until we find out
  // that the number of pendingMocks haven't changed after removal.
  // This means that all interceptors handling the URL were removed.
  // We have to do this trick, because `nock.removeInterceptor(interceptor);` could return `true`
  // even if there were no interceptors left for the URL.
  while (beforeRemoveCount != afterRemoveCount) {
    beforeRemoveCount = nock.pendingMocks().length;
    nock.removeInterceptor(interceptor);
    afterRemoveCount = nock.pendingMocks().length;
  }
}

let _baseUrl = '';
/*
Returns the base URL for http requests
*/
export function getBaseUrl(): string {
  return _baseUrl;
}

/*
Sets the base URL for http requests
*/
export function setBaseUrl(baseUrl: string) {
  _baseUrl = baseUrl;
}

type ReplyFnResultGeneric<T> =
  | readonly [StatusCode]
  | readonly [StatusCode, T]
  | readonly [StatusCode, T, ReplyHeaders];
