/* eslint-disable */

type UploadFileNockParameters = {
  petId: number;
};

type FindPetsByStatusNockParameters = {
  status?: Status[] | RegExp;
};

type FindPetsByTagsNockParameters = {
  tags?: string[] | RegExp;
};

type GetPetByIdNockParameters = {
  petId: number;
};

type UpdatePetWithFormNockParameters = {
  petId: number;
};

type DeletePetNockParameters = {
  petId: number;
};

type GetOrderByIdNockParameters = {
  orderId: number;
};

type DeleteOrderNockParameters = {
  orderId: number;
};

type GetUserByNameNockParameters = {
  username: string;
};

type UpdateUserNockParameters = {
  username: string;
};

type DeleteUserNockParameters = {
  username: string;
};

type LoginUserNockParameters = {
  username?: string | RegExp;
  password?: string | RegExp;
};

export const Nock = {
  /**
   * uploads an image
   */
  uploadFile: (
    queryParams: UploadFileNockParameters,
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
          result: ReplyFnResultGeneric<IApiResponse>,
        ) => void,
      ) => void,
    ): Scope;
    reply(
      replyFn: (
        this: ReplyFnContext,
        uri: string,
        body: Body,
      ) =>
        | ReplyFnResultGeneric<IApiResponse>
        | Promise<ReplyFnResultGeneric<IApiResponse>>,
    ): Scope;
    reply(
      statusCode: StatusCode,
      replyBodyFnWithCallback: (
        this: ReplyFnContext,
        uri: string,
        body: Body,
        callback: (
          err: NodeJS.ErrnoException | null,
          result: IApiResponse,
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
      ) => IApiResponse | Promise<IApiResponse>,
      headers?: ReplyHeaders,
    ): Scope;
    reply(
      responseCode?: StatusCode,
      body?: IApiResponse,
      headers?: ReplyHeaders,
    ): Scope;
  } => {
    let url_ = '/pet/{petId}/uploadImage';
    if (queryParams.petId !== null && queryParams.petId !== undefined)
      url_ = url_.replace(
        '{petId}',
        encodeURIComponent('' + queryParams.petId),
      );
    else url_ = url_.replace('{petId}', '');
    const interceptor = nock(getBaseUrl()).post(
      new RegExp('^' + url_),
      requestBody as RequestBodyMatcher,
      interceptorOptions,
    );
    if (!interceptorOptions?.preservePreviousInterceptors) {
      removeInterceptor(interceptor);
    }
    return interceptor as any;
  },

  parseUploadFileUrl(url: string) {
    let regex = '/pet/{petId}/uploadImage([?]|$)';
    regex = regex.replace('{petId}', '(?<petId>.*?)');
    const match = new RegExp(regex).exec(url);
    return {
      petId: match?.groups?.['petId'],
    };
  },

  /**
   * Add a new pet to the store
   */
  addPet: (
    requestBody?:
      | string
      | Buffer
      | RegExp
      | DataMatcherArray
      | DataMatcherMap
      | Pet
      | ((body: Pet) => boolean),
    interceptorOptions?: Options & { preservePreviousInterceptors?: boolean },
  ): Omit<Interceptor, 'reply'> & {
    reply(
      replyFnWithCallback: (
        this: ReplyFnContext,
        uri: string,
        body: Pet,
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
        body: Pet,
      ) => ReplyFnResultGeneric<void> | Promise<ReplyFnResultGeneric<void>>,
    ): Scope;
    reply(
      statusCode: StatusCode,
      replyBodyFnWithCallback: (
        this: ReplyFnContext,
        uri: string,
        body: Pet,
        callback: (err: NodeJS.ErrnoException | null, result: void) => void,
      ) => void,
      headers?: ReplyHeaders,
    ): Scope;
    reply(
      statusCode: StatusCode,
      replyBodyFn: (
        this: ReplyFnContext,
        uri: string,
        body: Pet,
      ) => void | Promise<void>,
      headers?: ReplyHeaders,
    ): Scope;
    reply(
      responseCode?: StatusCode,
      body?: void,
      headers?: ReplyHeaders,
    ): Scope;
  } => {
    let url_ = '/pet';
    const interceptor = nock(getBaseUrl()).post(
      new RegExp('^' + url_),
      requestBody as RequestBodyMatcher,
      interceptorOptions,
    );
    if (!interceptorOptions?.preservePreviousInterceptors) {
      removeInterceptor(interceptor);
    }
    return interceptor as any;
  },

  parseAddPetUrl(url: string) {
    return {};
  },

  /**
   * Update an existing pet
   */
  updatePet: (
    requestBody?:
      | string
      | Buffer
      | RegExp
      | DataMatcherArray
      | DataMatcherMap
      | Pet
      | ((body: Pet) => boolean),
    interceptorOptions?: Options & { preservePreviousInterceptors?: boolean },
  ): Omit<Interceptor, 'reply'> & {
    reply(
      replyFnWithCallback: (
        this: ReplyFnContext,
        uri: string,
        body: Pet,
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
        body: Pet,
      ) => ReplyFnResultGeneric<void> | Promise<ReplyFnResultGeneric<void>>,
    ): Scope;
    reply(
      statusCode: StatusCode,
      replyBodyFnWithCallback: (
        this: ReplyFnContext,
        uri: string,
        body: Pet,
        callback: (err: NodeJS.ErrnoException | null, result: void) => void,
      ) => void,
      headers?: ReplyHeaders,
    ): Scope;
    reply(
      statusCode: StatusCode,
      replyBodyFn: (
        this: ReplyFnContext,
        uri: string,
        body: Pet,
      ) => void | Promise<void>,
      headers?: ReplyHeaders,
    ): Scope;
    reply(
      responseCode?: StatusCode,
      body?: void,
      headers?: ReplyHeaders,
    ): Scope;
  } => {
    let url_ = '/pet';
    const interceptor = nock(getBaseUrl()).put(
      new RegExp('^' + url_),
      requestBody as RequestBodyMatcher,
      interceptorOptions,
    );
    if (!interceptorOptions?.preservePreviousInterceptors) {
      removeInterceptor(interceptor);
    }
    return interceptor as any;
  },

  parseUpdatePetUrl(url: string) {
    return {};
  },

  /**
   * Finds Pets by status
   */
  findPetsByStatus: (
    queryParams: FindPetsByStatusNockParameters,
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
          result: ReplyFnResultGeneric<Pet[]>,
        ) => void,
      ) => void,
    ): Scope;
    reply(
      replyFn: (
        this: ReplyFnContext,
        uri: string,
        body: Body,
      ) => ReplyFnResultGeneric<Pet[]> | Promise<ReplyFnResultGeneric<Pet[]>>,
    ): Scope;
    reply(
      statusCode: StatusCode,
      replyBodyFnWithCallback: (
        this: ReplyFnContext,
        uri: string,
        body: Body,
        callback: (err: NodeJS.ErrnoException | null, result: Pet[]) => void,
      ) => void,
      headers?: ReplyHeaders,
    ): Scope;
    reply(
      statusCode: StatusCode,
      replyBodyFn: (
        this: ReplyFnContext,
        uri: string,
        body: Body,
      ) => Pet[] | Promise<Pet[]>,
      headers?: ReplyHeaders,
    ): Scope;
    reply(
      responseCode?: StatusCode,
      body?: Pet[],
      headers?: ReplyHeaders,
    ): Scope;
  } => {
    let url_ = '/pet/findByStatus';
    const interceptor = nock(getBaseUrl())
      .get(
        new RegExp('^' + url_),
        requestBody as RequestBodyMatcher,
        interceptorOptions,
      )
      .query({
        status:
          queryParams.status === null || queryParams.status === undefined
            ? /./
            : queryParams.status instanceof RegExp
            ? queryParams.status
            : queryParams.status.length > 1
            ? queryParams.status.map((item) => encodeURIComponent('' + item))
            : encodeURIComponent('' + queryParams.status),
      });
    if (!interceptorOptions?.preservePreviousInterceptors) {
      removeInterceptor(interceptor);
    }
    return interceptor as any;
  },

  parseFindPetsByStatusUrl(url: string) {
    const parsedUrl = new URL(url);
    return {
      status: parsedUrl.searchParams.get('status'),
    };
  },

  /**
   * Finds Pets by tags
   * @deprecated
   */
  findPetsByTags: (
    queryParams: FindPetsByTagsNockParameters,
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
          result: ReplyFnResultGeneric<Pet[]>,
        ) => void,
      ) => void,
    ): Scope;
    reply(
      replyFn: (
        this: ReplyFnContext,
        uri: string,
        body: Body,
      ) => ReplyFnResultGeneric<Pet[]> | Promise<ReplyFnResultGeneric<Pet[]>>,
    ): Scope;
    reply(
      statusCode: StatusCode,
      replyBodyFnWithCallback: (
        this: ReplyFnContext,
        uri: string,
        body: Body,
        callback: (err: NodeJS.ErrnoException | null, result: Pet[]) => void,
      ) => void,
      headers?: ReplyHeaders,
    ): Scope;
    reply(
      statusCode: StatusCode,
      replyBodyFn: (
        this: ReplyFnContext,
        uri: string,
        body: Body,
      ) => Pet[] | Promise<Pet[]>,
      headers?: ReplyHeaders,
    ): Scope;
    reply(
      responseCode?: StatusCode,
      body?: Pet[],
      headers?: ReplyHeaders,
    ): Scope;
  } => {
    let url_ = '/pet/findByTags';
    const interceptor = nock(getBaseUrl())
      .get(
        new RegExp('^' + url_),
        requestBody as RequestBodyMatcher,
        interceptorOptions,
      )
      .query({
        tags:
          queryParams.tags === null || queryParams.tags === undefined
            ? /./
            : queryParams.tags instanceof RegExp
            ? queryParams.tags
            : queryParams.tags.length > 1
            ? queryParams.tags.map((item) => encodeURIComponent('' + item))
            : encodeURIComponent('' + queryParams.tags),
      });
    if (!interceptorOptions?.preservePreviousInterceptors) {
      removeInterceptor(interceptor);
    }
    return interceptor as any;
  },

  parseFindPetsByTagsUrl(url: string) {
    const parsedUrl = new URL(url);
    return {
      tags: parsedUrl.searchParams.get('tags'),
    };
  },

  /**
   * Find pet by ID
   */
  getPetById: (
    queryParams: GetPetByIdNockParameters,
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
          result: ReplyFnResultGeneric<IPet>,
        ) => void,
      ) => void,
    ): Scope;
    reply(
      replyFn: (
        this: ReplyFnContext,
        uri: string,
        body: Body,
      ) => ReplyFnResultGeneric<IPet> | Promise<ReplyFnResultGeneric<IPet>>,
    ): Scope;
    reply(
      statusCode: StatusCode,
      replyBodyFnWithCallback: (
        this: ReplyFnContext,
        uri: string,
        body: Body,
        callback: (err: NodeJS.ErrnoException | null, result: IPet) => void,
      ) => void,
      headers?: ReplyHeaders,
    ): Scope;
    reply(
      statusCode: StatusCode,
      replyBodyFn: (
        this: ReplyFnContext,
        uri: string,
        body: Body,
      ) => IPet | Promise<IPet>,
      headers?: ReplyHeaders,
    ): Scope;
    reply(
      responseCode?: StatusCode,
      body?: IPet,
      headers?: ReplyHeaders,
    ): Scope;
  } => {
    let url_ = '/pet/{petId}';
    if (queryParams.petId !== null && queryParams.petId !== undefined)
      url_ = url_.replace(
        '{petId}',
        encodeURIComponent('' + queryParams.petId),
      );
    else url_ = url_.replace('{petId}', '');
    const interceptor = nock(getBaseUrl()).get(
      new RegExp('^' + url_),
      requestBody as RequestBodyMatcher,
      interceptorOptions,
    );
    if (!interceptorOptions?.preservePreviousInterceptors) {
      removeInterceptor(interceptor);
    }
    return interceptor as any;
  },

  parseGetPetByIdUrl(url: string) {
    let regex = '/pet/{petId}([?]|$)';
    regex = regex.replace('{petId}', '(?<petId>.*?)');
    const match = new RegExp(regex).exec(url);
    return {
      petId: match?.groups?.['petId'],
    };
  },

  /**
   * Updates a pet in the store with form data
   */
  updatePetWithForm: (
    queryParams: UpdatePetWithFormNockParameters,
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
    let url_ = '/pet/{petId}';
    if (queryParams.petId !== null && queryParams.petId !== undefined)
      url_ = url_.replace(
        '{petId}',
        encodeURIComponent('' + queryParams.petId),
      );
    else url_ = url_.replace('{petId}', '');
    const interceptor = nock(getBaseUrl()).post(
      new RegExp('^' + url_),
      requestBody as RequestBodyMatcher,
      interceptorOptions,
    );
    if (!interceptorOptions?.preservePreviousInterceptors) {
      removeInterceptor(interceptor);
    }
    return interceptor as any;
  },

  parseUpdatePetWithFormUrl(url: string) {
    let regex = '/pet/{petId}([?]|$)';
    regex = regex.replace('{petId}', '(?<petId>.*?)');
    const match = new RegExp(regex).exec(url);
    return {
      petId: match?.groups?.['petId'],
    };
  },

  /**
   * Deletes a pet
   */
  deletePet: (
    queryParams: DeletePetNockParameters,
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
    let url_ = '/pet/{petId}';
    if (queryParams.petId !== null && queryParams.petId !== undefined)
      url_ = url_.replace(
        '{petId}',
        encodeURIComponent('' + queryParams.petId),
      );
    else url_ = url_.replace('{petId}', '');
    const interceptor = nock(getBaseUrl()).delete(
      new RegExp('^' + url_),
      requestBody as RequestBodyMatcher,
      interceptorOptions,
    );
    if (!interceptorOptions?.preservePreviousInterceptors) {
      removeInterceptor(interceptor);
    }
    return interceptor as any;
  },

  parseDeletePetUrl(url: string) {
    let regex = '/pet/{petId}([?]|$)';
    regex = regex.replace('{petId}', '(?<petId>.*?)');
    const match = new RegExp(regex).exec(url);
    return {
      petId: match?.groups?.['petId'],
    };
  },

  /**
   * Returns pet inventories by status
   */
  getInventory: (
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
          result: ReplyFnResultGeneric<{ [key: string]: number }>,
        ) => void,
      ) => void,
    ): Scope;
    reply(
      replyFn: (
        this: ReplyFnContext,
        uri: string,
        body: Body,
      ) =>
        | ReplyFnResultGeneric<{ [key: string]: number }>
        | Promise<ReplyFnResultGeneric<{ [key: string]: number }>>,
    ): Scope;
    reply(
      statusCode: StatusCode,
      replyBodyFnWithCallback: (
        this: ReplyFnContext,
        uri: string,
        body: Body,
        callback: (
          err: NodeJS.ErrnoException | null,
          result: { [key: string]: number },
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
      ) => { [key: string]: number } | Promise<{ [key: string]: number }>,
      headers?: ReplyHeaders,
    ): Scope;
    reply(
      responseCode?: StatusCode,
      body?: { [key: string]: number },
      headers?: ReplyHeaders,
    ): Scope;
  } => {
    let url_ = '/store/inventory';
    const interceptor = nock(getBaseUrl()).get(
      new RegExp('^' + url_),
      requestBody as RequestBodyMatcher,
      interceptorOptions,
    );
    if (!interceptorOptions?.preservePreviousInterceptors) {
      removeInterceptor(interceptor);
    }
    return interceptor as any;
  },

  parseGetInventoryUrl(url: string) {
    return {};
  },

  /**
   * Place an order for a pet
   */
  placeOrder: (
    requestBody?:
      | string
      | Buffer
      | RegExp
      | DataMatcherArray
      | DataMatcherMap
      | Order
      | ((body: Order) => boolean),
    interceptorOptions?: Options & { preservePreviousInterceptors?: boolean },
  ): Omit<Interceptor, 'reply'> & {
    reply(
      replyFnWithCallback: (
        this: ReplyFnContext,
        uri: string,
        body: Order,
        callback: (
          err: NodeJS.ErrnoException | null,
          result: ReplyFnResultGeneric<IOrder>,
        ) => void,
      ) => void,
    ): Scope;
    reply(
      replyFn: (
        this: ReplyFnContext,
        uri: string,
        body: Order,
      ) => ReplyFnResultGeneric<IOrder> | Promise<ReplyFnResultGeneric<IOrder>>,
    ): Scope;
    reply(
      statusCode: StatusCode,
      replyBodyFnWithCallback: (
        this: ReplyFnContext,
        uri: string,
        body: Order,
        callback: (err: NodeJS.ErrnoException | null, result: IOrder) => void,
      ) => void,
      headers?: ReplyHeaders,
    ): Scope;
    reply(
      statusCode: StatusCode,
      replyBodyFn: (
        this: ReplyFnContext,
        uri: string,
        body: Order,
      ) => IOrder | Promise<IOrder>,
      headers?: ReplyHeaders,
    ): Scope;
    reply(
      responseCode?: StatusCode,
      body?: IOrder,
      headers?: ReplyHeaders,
    ): Scope;
  } => {
    let url_ = '/store/order';
    const interceptor = nock(getBaseUrl()).post(
      new RegExp('^' + url_),
      requestBody as RequestBodyMatcher,
      interceptorOptions,
    );
    if (!interceptorOptions?.preservePreviousInterceptors) {
      removeInterceptor(interceptor);
    }
    return interceptor as any;
  },

  parsePlaceOrderUrl(url: string) {
    return {};
  },

  /**
   * Find purchase order by ID
   */
  getOrderById: (
    queryParams: GetOrderByIdNockParameters,
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
          result: ReplyFnResultGeneric<IOrder>,
        ) => void,
      ) => void,
    ): Scope;
    reply(
      replyFn: (
        this: ReplyFnContext,
        uri: string,
        body: Body,
      ) => ReplyFnResultGeneric<IOrder> | Promise<ReplyFnResultGeneric<IOrder>>,
    ): Scope;
    reply(
      statusCode: StatusCode,
      replyBodyFnWithCallback: (
        this: ReplyFnContext,
        uri: string,
        body: Body,
        callback: (err: NodeJS.ErrnoException | null, result: IOrder) => void,
      ) => void,
      headers?: ReplyHeaders,
    ): Scope;
    reply(
      statusCode: StatusCode,
      replyBodyFn: (
        this: ReplyFnContext,
        uri: string,
        body: Body,
      ) => IOrder | Promise<IOrder>,
      headers?: ReplyHeaders,
    ): Scope;
    reply(
      responseCode?: StatusCode,
      body?: IOrder,
      headers?: ReplyHeaders,
    ): Scope;
  } => {
    let url_ = '/store/order/{orderId}';
    if (queryParams.orderId !== null && queryParams.orderId !== undefined)
      url_ = url_.replace(
        '{orderId}',
        encodeURIComponent('' + queryParams.orderId),
      );
    else url_ = url_.replace('{orderId}', '');
    const interceptor = nock(getBaseUrl()).get(
      new RegExp('^' + url_),
      requestBody as RequestBodyMatcher,
      interceptorOptions,
    );
    if (!interceptorOptions?.preservePreviousInterceptors) {
      removeInterceptor(interceptor);
    }
    return interceptor as any;
  },

  parseGetOrderByIdUrl(url: string) {
    let regex = '/store/order/{orderId}([?]|$)';
    regex = regex.replace('{orderId}', '(?<orderId>.*?)');
    const match = new RegExp(regex).exec(url);
    return {
      orderId: match?.groups?.['orderId'],
    };
  },

  /**
   * Delete purchase order by ID
   */
  deleteOrder: (
    queryParams: DeleteOrderNockParameters,
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
    let url_ = '/store/order/{orderId}';
    if (queryParams.orderId !== null && queryParams.orderId !== undefined)
      url_ = url_.replace(
        '{orderId}',
        encodeURIComponent('' + queryParams.orderId),
      );
    else url_ = url_.replace('{orderId}', '');
    const interceptor = nock(getBaseUrl()).delete(
      new RegExp('^' + url_),
      requestBody as RequestBodyMatcher,
      interceptorOptions,
    );
    if (!interceptorOptions?.preservePreviousInterceptors) {
      removeInterceptor(interceptor);
    }
    return interceptor as any;
  },

  parseDeleteOrderUrl(url: string) {
    let regex = '/store/order/{orderId}([?]|$)';
    regex = regex.replace('{orderId}', '(?<orderId>.*?)');
    const match = new RegExp(regex).exec(url);
    return {
      orderId: match?.groups?.['orderId'],
    };
  },

  /**
   * Creates list of users with given input array
   */
  createUsersWithListInput: (
    requestBody?:
      | string
      | Buffer
      | RegExp
      | DataMatcherArray
      | DataMatcherMap
      | User[]
      | ((body: User[]) => boolean),
    interceptorOptions?: Options & { preservePreviousInterceptors?: boolean },
  ): Omit<Interceptor, 'reply'> & {
    reply(
      replyFnWithCallback: (
        this: ReplyFnContext,
        uri: string,
        body: User[],
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
        body: User[],
      ) => ReplyFnResultGeneric<void> | Promise<ReplyFnResultGeneric<void>>,
    ): Scope;
    reply(
      statusCode: StatusCode,
      replyBodyFnWithCallback: (
        this: ReplyFnContext,
        uri: string,
        body: User[],
        callback: (err: NodeJS.ErrnoException | null, result: void) => void,
      ) => void,
      headers?: ReplyHeaders,
    ): Scope;
    reply(
      statusCode: StatusCode,
      replyBodyFn: (
        this: ReplyFnContext,
        uri: string,
        body: User[],
      ) => void | Promise<void>,
      headers?: ReplyHeaders,
    ): Scope;
    reply(
      responseCode?: StatusCode,
      body?: void,
      headers?: ReplyHeaders,
    ): Scope;
  } => {
    let url_ = '/user/createWithList';
    const interceptor = nock(getBaseUrl()).post(
      new RegExp('^' + url_),
      requestBody as RequestBodyMatcher,
      interceptorOptions,
    );
    if (!interceptorOptions?.preservePreviousInterceptors) {
      removeInterceptor(interceptor);
    }
    return interceptor as any;
  },

  parseCreateUsersWithListInputUrl(url: string) {
    return {};
  },

  /**
   * Get user by user name
   */
  getUserByName: (
    queryParams: GetUserByNameNockParameters,
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
          result: ReplyFnResultGeneric<IUser>,
        ) => void,
      ) => void,
    ): Scope;
    reply(
      replyFn: (
        this: ReplyFnContext,
        uri: string,
        body: Body,
      ) => ReplyFnResultGeneric<IUser> | Promise<ReplyFnResultGeneric<IUser>>,
    ): Scope;
    reply(
      statusCode: StatusCode,
      replyBodyFnWithCallback: (
        this: ReplyFnContext,
        uri: string,
        body: Body,
        callback: (err: NodeJS.ErrnoException | null, result: IUser) => void,
      ) => void,
      headers?: ReplyHeaders,
    ): Scope;
    reply(
      statusCode: StatusCode,
      replyBodyFn: (
        this: ReplyFnContext,
        uri: string,
        body: Body,
      ) => IUser | Promise<IUser>,
      headers?: ReplyHeaders,
    ): Scope;
    reply(
      responseCode?: StatusCode,
      body?: IUser,
      headers?: ReplyHeaders,
    ): Scope;
  } => {
    let url_ = '/user/{username}';
    if (queryParams.username !== null && queryParams.username !== undefined)
      url_ = url_.replace(
        '{username}',
        encodeURIComponent('' + queryParams.username),
      );
    else url_ = url_.replace('{username}', '');
    const interceptor = nock(getBaseUrl()).get(
      new RegExp('^' + url_),
      requestBody as RequestBodyMatcher,
      interceptorOptions,
    );
    if (!interceptorOptions?.preservePreviousInterceptors) {
      removeInterceptor(interceptor);
    }
    return interceptor as any;
  },

  parseGetUserByNameUrl(url: string) {
    let regex = '/user/{username}([?]|$)';
    regex = regex.replace('{username}', '(?<username>.*?)');
    const match = new RegExp(regex).exec(url);
    return {
      username: match?.groups?.['username'],
    };
  },

  /**
   * Updated user
   */
  updateUser: (
    queryParams: UpdateUserNockParameters,
    requestBody?:
      | string
      | Buffer
      | RegExp
      | DataMatcherArray
      | DataMatcherMap
      | User
      | ((body: User) => boolean),
    interceptorOptions?: Options & { preservePreviousInterceptors?: boolean },
  ): Omit<Interceptor, 'reply'> & {
    reply(
      replyFnWithCallback: (
        this: ReplyFnContext,
        uri: string,
        body: User,
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
        body: User,
      ) => ReplyFnResultGeneric<void> | Promise<ReplyFnResultGeneric<void>>,
    ): Scope;
    reply(
      statusCode: StatusCode,
      replyBodyFnWithCallback: (
        this: ReplyFnContext,
        uri: string,
        body: User,
        callback: (err: NodeJS.ErrnoException | null, result: void) => void,
      ) => void,
      headers?: ReplyHeaders,
    ): Scope;
    reply(
      statusCode: StatusCode,
      replyBodyFn: (
        this: ReplyFnContext,
        uri: string,
        body: User,
      ) => void | Promise<void>,
      headers?: ReplyHeaders,
    ): Scope;
    reply(
      responseCode?: StatusCode,
      body?: void,
      headers?: ReplyHeaders,
    ): Scope;
  } => {
    let url_ = '/user/{username}';
    if (queryParams.username !== null && queryParams.username !== undefined)
      url_ = url_.replace(
        '{username}',
        encodeURIComponent('' + queryParams.username),
      );
    else url_ = url_.replace('{username}', '');
    const interceptor = nock(getBaseUrl()).put(
      new RegExp('^' + url_),
      requestBody as RequestBodyMatcher,
      interceptorOptions,
    );
    if (!interceptorOptions?.preservePreviousInterceptors) {
      removeInterceptor(interceptor);
    }
    return interceptor as any;
  },

  parseUpdateUserUrl(url: string) {
    let regex = '/user/{username}([?]|$)';
    regex = regex.replace('{username}', '(?<username>.*?)');
    const match = new RegExp(regex).exec(url);
    return {
      username: match?.groups?.['username'],
    };
  },

  /**
   * Delete user
   */
  deleteUser: (
    queryParams: DeleteUserNockParameters,
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
    let url_ = '/user/{username}';
    if (queryParams.username !== null && queryParams.username !== undefined)
      url_ = url_.replace(
        '{username}',
        encodeURIComponent('' + queryParams.username),
      );
    else url_ = url_.replace('{username}', '');
    const interceptor = nock(getBaseUrl()).delete(
      new RegExp('^' + url_),
      requestBody as RequestBodyMatcher,
      interceptorOptions,
    );
    if (!interceptorOptions?.preservePreviousInterceptors) {
      removeInterceptor(interceptor);
    }
    return interceptor as any;
  },

  parseDeleteUserUrl(url: string) {
    let regex = '/user/{username}([?]|$)';
    regex = regex.replace('{username}', '(?<username>.*?)');
    const match = new RegExp(regex).exec(url);
    return {
      username: match?.groups?.['username'],
    };
  },

  /**
   * Logs user into the system
   */
  loginUser: (
    queryParams: LoginUserNockParameters,
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
    let url_ = '/user/login';
    const interceptor = nock(getBaseUrl())
      .get(
        new RegExp('^' + url_),
        requestBody as RequestBodyMatcher,
        interceptorOptions,
      )
      .query({
        username:
          queryParams.username === null || queryParams.username === undefined
            ? /./
            : queryParams.username instanceof RegExp
            ? queryParams.username
            : encodeURIComponent('' + queryParams.username),
        password:
          queryParams.password === null || queryParams.password === undefined
            ? /./
            : queryParams.password instanceof RegExp
            ? queryParams.password
            : encodeURIComponent('' + queryParams.password),
      });
    if (!interceptorOptions?.preservePreviousInterceptors) {
      removeInterceptor(interceptor);
    }
    return interceptor as any;
  },

  parseLoginUserUrl(url: string) {
    const parsedUrl = new URL(url);
    return {
      username: parsedUrl.searchParams.get('username'),
      password: parsedUrl.searchParams.get('password'),
    };
  },

  /**
   * Logs out current logged in user session
   */
  logoutUser: (
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
    let url_ = '/user/logout';
    const interceptor = nock(getBaseUrl()).get(
      new RegExp('^' + url_),
      requestBody as RequestBodyMatcher,
      interceptorOptions,
    );
    if (!interceptorOptions?.preservePreviousInterceptors) {
      removeInterceptor(interceptor);
    }
    return interceptor as any;
  },

  parseLogoutUserUrl(url: string) {
    return {};
  },

  /**
   * Creates list of users with given input array
   */
  createUsersWithArrayInput: (
    requestBody?:
      | string
      | Buffer
      | RegExp
      | DataMatcherArray
      | DataMatcherMap
      | User[]
      | ((body: User[]) => boolean),
    interceptorOptions?: Options & { preservePreviousInterceptors?: boolean },
  ): Omit<Interceptor, 'reply'> & {
    reply(
      replyFnWithCallback: (
        this: ReplyFnContext,
        uri: string,
        body: User[],
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
        body: User[],
      ) => ReplyFnResultGeneric<void> | Promise<ReplyFnResultGeneric<void>>,
    ): Scope;
    reply(
      statusCode: StatusCode,
      replyBodyFnWithCallback: (
        this: ReplyFnContext,
        uri: string,
        body: User[],
        callback: (err: NodeJS.ErrnoException | null, result: void) => void,
      ) => void,
      headers?: ReplyHeaders,
    ): Scope;
    reply(
      statusCode: StatusCode,
      replyBodyFn: (
        this: ReplyFnContext,
        uri: string,
        body: User[],
      ) => void | Promise<void>,
      headers?: ReplyHeaders,
    ): Scope;
    reply(
      responseCode?: StatusCode,
      body?: void,
      headers?: ReplyHeaders,
    ): Scope;
  } => {
    let url_ = '/user/createWithArray';
    const interceptor = nock(getBaseUrl()).post(
      new RegExp('^' + url_),
      requestBody as RequestBodyMatcher,
      interceptorOptions,
    );
    if (!interceptorOptions?.preservePreviousInterceptors) {
      removeInterceptor(interceptor);
    }
    return interceptor as any;
  },

  parseCreateUsersWithArrayInputUrl(url: string) {
    return {};
  },

  /**
   * Create user
   */
  createUser: (
    requestBody?:
      | string
      | Buffer
      | RegExp
      | DataMatcherArray
      | DataMatcherMap
      | User
      | ((body: User) => boolean),
    interceptorOptions?: Options & { preservePreviousInterceptors?: boolean },
  ): Omit<Interceptor, 'reply'> & {
    reply(
      replyFnWithCallback: (
        this: ReplyFnContext,
        uri: string,
        body: User,
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
        body: User,
      ) => ReplyFnResultGeneric<void> | Promise<ReplyFnResultGeneric<void>>,
    ): Scope;
    reply(
      statusCode: StatusCode,
      replyBodyFnWithCallback: (
        this: ReplyFnContext,
        uri: string,
        body: User,
        callback: (err: NodeJS.ErrnoException | null, result: void) => void,
      ) => void,
      headers?: ReplyHeaders,
    ): Scope;
    reply(
      statusCode: StatusCode,
      replyBodyFn: (
        this: ReplyFnContext,
        uri: string,
        body: User,
      ) => void | Promise<void>,
      headers?: ReplyHeaders,
    ): Scope;
    reply(
      responseCode?: StatusCode,
      body?: void,
      headers?: ReplyHeaders,
    ): Scope;
  } => {
    let url_ = '/user';
    const interceptor = nock(getBaseUrl()).post(
      new RegExp('^' + url_),
      requestBody as RequestBodyMatcher,
      interceptorOptions,
    );
    if (!interceptorOptions?.preservePreviousInterceptors) {
      removeInterceptor(interceptor);
    }
    return interceptor as any;
  },

  parseCreateUserUrl(url: string) {
    return {};
  },
};

export class ApiResponse implements IApiResponse {
  code?: number | undefined;
  type?: string | undefined;
  message?: string | undefined;

  constructor(data?: IApiResponse) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.code = _data['code'];
      this.type = _data['type'];
      this.message = _data['message'];
    }
  }

  static fromJS(data: any): ApiResponse {
    data = typeof data === 'object' ? data : {};
    let result = new ApiResponse();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data['code'] = this.code;
    data['type'] = this.type;
    data['message'] = this.message;
    return data;
  }
}

export interface IApiResponse {
  code?: number | undefined;
  type?: string | undefined;
  message?: string | undefined;
}

export class Category implements ICategory {
  id?: number | undefined;
  name?: string | undefined;

  constructor(data?: ICategory) {
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
      this.name = _data['name'];
    }
  }

  static fromJS(data: any): Category {
    data = typeof data === 'object' ? data : {};
    let result = new Category();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data['id'] = this.id;
    data['name'] = this.name;
    return data;
  }
}

export interface ICategory {
  id?: number | undefined;
  name?: string | undefined;
}

export class Pet implements IPet {
  id?: number | undefined;
  category?: Category | undefined;
  name!: string;
  photoUrls!: string[];
  tags?: Tag[] | undefined;
  /** pet status in the store */
  status?: PetStatus | undefined;

  constructor(data?: IPet) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
    if (!data) {
      this.photoUrls = [];
    }
  }

  init(_data?: any) {
    if (_data) {
      this.id = _data['id'];
      this.category = _data['category']
        ? Category.fromJS(_data['category'])
        : <any>undefined;
      this.name = _data['name'];
      if (Array.isArray(_data['photoUrls'])) {
        this.photoUrls = [] as any;
        for (let item of _data['photoUrls']) this.photoUrls!.push(item);
      }
      if (Array.isArray(_data['tags'])) {
        this.tags = [] as any;
        for (let item of _data['tags']) this.tags!.push(Tag.fromJS(item));
      }
      this.status = _data['status'];
    }
  }

  static fromJS(data: any): Pet {
    data = typeof data === 'object' ? data : {};
    let result = new Pet();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data['id'] = this.id;
    data['category'] = this.category ? this.category.toJSON() : <any>undefined;
    data['name'] = this.name;
    if (Array.isArray(this.photoUrls)) {
      data['photoUrls'] = [];
      for (let item of this.photoUrls) data['photoUrls'].push(item);
    }
    if (Array.isArray(this.tags)) {
      data['tags'] = [];
      for (let item of this.tags) data['tags'].push(item.toJSON());
    }
    data['status'] = this.status;
    return data;
  }
}

export interface IPet {
  id?: number | undefined;
  category?: Category | undefined;
  name: string;
  photoUrls: string[];
  tags?: Tag[] | undefined;
  /** pet status in the store */
  status?: PetStatus | undefined;
}

export class Tag implements ITag {
  id?: number | undefined;
  name?: string | undefined;

  constructor(data?: ITag) {
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
      this.name = _data['name'];
    }
  }

  static fromJS(data: any): Tag {
    data = typeof data === 'object' ? data : {};
    let result = new Tag();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data['id'] = this.id;
    data['name'] = this.name;
    return data;
  }
}

export interface ITag {
  id?: number | undefined;
  name?: string | undefined;
}

export class Order implements IOrder {
  id?: number | undefined;
  petId?: number | undefined;
  quantity?: number | undefined;
  shipDate?: Date | undefined;
  /** Order Status */
  status?: OrderStatus | undefined;
  complete?: boolean | undefined;

  constructor(data?: IOrder) {
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
      this.petId = _data['petId'];
      this.quantity = _data['quantity'];
      this.shipDate = _data['shipDate']
        ? new Date(_data['shipDate'].toString())
        : <any>undefined;
      this.status = _data['status'];
      this.complete = _data['complete'];
    }
  }

  static fromJS(data: any): Order {
    data = typeof data === 'object' ? data : {};
    let result = new Order();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data['id'] = this.id;
    data['petId'] = this.petId;
    data['quantity'] = this.quantity;
    data['shipDate'] = this.shipDate
      ? this.shipDate.toISOString()
      : <any>undefined;
    data['status'] = this.status;
    data['complete'] = this.complete;
    return data;
  }
}

export interface IOrder {
  id?: number | undefined;
  petId?: number | undefined;
  quantity?: number | undefined;
  shipDate?: Date | undefined;
  /** Order Status */
  status?: OrderStatus | undefined;
  complete?: boolean | undefined;
}

export class User implements IUser {
  id?: number | undefined;
  username?: string | undefined;
  firstName?: string | undefined;
  lastName?: string | undefined;
  email?: string | undefined;
  password?: string | undefined;
  phone?: string | undefined;
  /** User Status */
  userStatus?: number | undefined;

  constructor(data?: IUser) {
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
      this.username = _data['username'];
      this.firstName = _data['firstName'];
      this.lastName = _data['lastName'];
      this.email = _data['email'];
      this.password = _data['password'];
      this.phone = _data['phone'];
      this.userStatus = _data['userStatus'];
    }
  }

  static fromJS(data: any): User {
    data = typeof data === 'object' ? data : {};
    let result = new User();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data['id'] = this.id;
    data['username'] = this.username;
    data['firstName'] = this.firstName;
    data['lastName'] = this.lastName;
    data['email'] = this.email;
    data['password'] = this.password;
    data['phone'] = this.phone;
    data['userStatus'] = this.userStatus;
    return data;
  }
}

export interface IUser {
  id?: number | undefined;
  username?: string | undefined;
  firstName?: string | undefined;
  lastName?: string | undefined;
  email?: string | undefined;
  password?: string | undefined;
  phone?: string | undefined;
  /** User Status */
  userStatus?: number | undefined;
}

export enum Status {
  Available = 'available',
  Pending = 'pending',
  Sold = 'sold',
}

export enum PetStatus {
  Available = 'available',
  Pending = 'pending',
  Sold = 'sold',
}

export enum OrderStatus {
  Placed = 'placed',
  Approved = 'approved',
  Delivered = 'delivered',
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
