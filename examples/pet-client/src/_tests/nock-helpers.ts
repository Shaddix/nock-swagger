/* eslint-disable */

type UploadFileNockParameters = {
  petId: number;
};

type FindPetsByStatusNockParameters = {
  status: Status[];
};

type FindPetsByTagsNockParameters = {
  tags: string[];
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
  username: string;
  password: string;
};

export const Nock = {
  /**
   * uploads an image
   */
  uploadFile: (
    queryParams: UploadFileNockParameters,
    requestBody?: RequestBodyMatcher,
    interceptorOptions?: Options,
  ) => {
    const { petId } = queryParams;

    const getUrl = function (this: { baseUrl: string }) {
      let url_ = this.baseUrl + '/pet/{petId}/uploadImage';
      if (petId === undefined || petId === null)
        throw new Error("The parameter 'petId' must be defined.");
      url_ = url_.replace('{petId}', encodeURIComponent('' + petId));
      url_ = url_.replace(/[?&]$/, '');
      return url_;
    }.bind({ baseUrl: '' });
    const url = getUrl();
    return nock(getBaseUrl()).post(
      url,
      requestBody as RequestBodyMatcher,
      interceptorOptions,
    );
  },

  /**
   * uploads an image
   * @param response successful operation
   */
  uploadFileReply: (
    queryParams: UploadFileNockParameters,
    response: IApiResponse,
    removePreviousInterceptors = true,
    requestBody?: RequestBodyMatcher,
    interceptorOptions?: Options,
  ) => {
    const interceptor = Nock.uploadFile(
      queryParams,
      requestBody,
      interceptorOptions,
    );
    if (removePreviousInterceptors) {
      removeInterceptor(interceptor);
    }
    return interceptor.reply(200, new ApiResponse(response));
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
    interceptorOptions?: Options,
  ) => {
    const getUrl = function (this: { baseUrl: string }) {
      let url_ = this.baseUrl + '/pet';
      url_ = url_.replace(/[?&]$/, '');
      return url_;
    }.bind({ baseUrl: '' });
    const url = getUrl();
    return nock(getBaseUrl()).post(
      url,
      requestBody as RequestBodyMatcher,
      interceptorOptions,
    );
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
    interceptorOptions?: Options,
  ) => {
    const getUrl = function (this: { baseUrl: string }) {
      let url_ = this.baseUrl + '/pet';
      url_ = url_.replace(/[?&]$/, '');
      return url_;
    }.bind({ baseUrl: '' });
    const url = getUrl();
    return nock(getBaseUrl()).put(
      url,
      requestBody as RequestBodyMatcher,
      interceptorOptions,
    );
  },

  /**
   * Finds Pets by status
   */
  findPetsByStatus: (
    queryParams: FindPetsByStatusNockParameters,
    requestBody?: RequestBodyMatcher,
    interceptorOptions?: Options,
  ) => {
    const { status } = queryParams;

    const getUrl = function (this: { baseUrl: string }) {
      let url_ = this.baseUrl + '/pet/findByStatus?';
      if (status === undefined || status === null)
        throw new Error(
          "The parameter 'status' must be defined and cannot be null.",
        );
      else
        status &&
          status.forEach((item) => {
            url_ += 'status=' + encodeURIComponent('' + item) + '&';
          });
      url_ = url_.replace(/[?&]$/, '');
      return url_;
    }.bind({ baseUrl: '' });
    const url = getUrl();
    return nock(getBaseUrl()).get(
      url,
      requestBody as RequestBodyMatcher,
      interceptorOptions,
    );
  },

  /**
   * Finds Pets by status
   * @param response successful operation
   */
  findPetsByStatusReply: (
    queryParams: FindPetsByStatusNockParameters,
    response: Pet[],
    removePreviousInterceptors = true,
    requestBody?: RequestBodyMatcher,
    interceptorOptions?: Options,
  ) => {
    const interceptor = Nock.findPetsByStatus(
      queryParams,
      requestBody,
      interceptorOptions,
    );
    if (removePreviousInterceptors) {
      removeInterceptor(interceptor);
    }
    return interceptor.reply(200, response);
  },

  /**
   * Finds Pets by tags
   * @deprecated
   */
  findPetsByTags: (
    queryParams: FindPetsByTagsNockParameters,
    requestBody?: RequestBodyMatcher,
    interceptorOptions?: Options,
  ) => {
    const { tags } = queryParams;

    const getUrl = function (this: { baseUrl: string }) {
      let url_ = this.baseUrl + '/pet/findByTags?';
      if (tags === undefined || tags === null)
        throw new Error(
          "The parameter 'tags' must be defined and cannot be null.",
        );
      else
        tags &&
          tags.forEach((item) => {
            url_ += 'tags=' + encodeURIComponent('' + item) + '&';
          });
      url_ = url_.replace(/[?&]$/, '');
      return url_;
    }.bind({ baseUrl: '' });
    const url = getUrl();
    return nock(getBaseUrl()).get(
      url,
      requestBody as RequestBodyMatcher,
      interceptorOptions,
    );
  },

  /**
   * Finds Pets by tags
   * @param response successful operation
   * @deprecated
   */
  findPetsByTagsReply: (
    queryParams: FindPetsByTagsNockParameters,
    response: Pet[],
    removePreviousInterceptors = true,
    requestBody?: RequestBodyMatcher,
    interceptorOptions?: Options,
  ) => {
    const interceptor = Nock.findPetsByTags(
      queryParams,
      requestBody,
      interceptorOptions,
    );
    if (removePreviousInterceptors) {
      removeInterceptor(interceptor);
    }
    return interceptor.reply(200, response);
  },

  /**
   * Find pet by ID
   */
  getPetById: (
    queryParams: GetPetByIdNockParameters,
    requestBody?: RequestBodyMatcher,
    interceptorOptions?: Options,
  ) => {
    const { petId } = queryParams;

    const getUrl = function (this: { baseUrl: string }) {
      let url_ = this.baseUrl + '/pet/{petId}';
      if (petId === undefined || petId === null)
        throw new Error("The parameter 'petId' must be defined.");
      url_ = url_.replace('{petId}', encodeURIComponent('' + petId));
      url_ = url_.replace(/[?&]$/, '');
      return url_;
    }.bind({ baseUrl: '' });
    const url = getUrl();
    return nock(getBaseUrl()).get(
      url,
      requestBody as RequestBodyMatcher,
      interceptorOptions,
    );
  },

  /**
   * Find pet by ID
   * @param response successful operation
   */
  getPetByIdReply: (
    queryParams: GetPetByIdNockParameters,
    response: IPet,
    removePreviousInterceptors = true,
    requestBody?: RequestBodyMatcher,
    interceptorOptions?: Options,
  ) => {
    const interceptor = Nock.getPetById(
      queryParams,
      requestBody,
      interceptorOptions,
    );
    if (removePreviousInterceptors) {
      removeInterceptor(interceptor);
    }
    return interceptor.reply(200, new Pet(response));
  },

  /**
   * Updates a pet in the store with form data
   */
  updatePetWithForm: (
    queryParams: UpdatePetWithFormNockParameters,
    requestBody?: RequestBodyMatcher,
    interceptorOptions?: Options,
  ) => {
    const { petId } = queryParams;

    const getUrl = function (this: { baseUrl: string }) {
      let url_ = this.baseUrl + '/pet/{petId}';
      if (petId === undefined || petId === null)
        throw new Error("The parameter 'petId' must be defined.");
      url_ = url_.replace('{petId}', encodeURIComponent('' + petId));
      url_ = url_.replace(/[?&]$/, '');
      return url_;
    }.bind({ baseUrl: '' });
    const url = getUrl();
    return nock(getBaseUrl()).post(
      url,
      requestBody as RequestBodyMatcher,
      interceptorOptions,
    );
  },

  /**
   * Deletes a pet
   */
  deletePet: (
    queryParams: DeletePetNockParameters,
    requestBody?: RequestBodyMatcher,
    interceptorOptions?: Options,
  ) => {
    const { petId } = queryParams;

    const getUrl = function (this: { baseUrl: string }) {
      let url_ = this.baseUrl + '/pet/{petId}';
      if (petId === undefined || petId === null)
        throw new Error("The parameter 'petId' must be defined.");
      url_ = url_.replace('{petId}', encodeURIComponent('' + petId));
      url_ = url_.replace(/[?&]$/, '');
      return url_;
    }.bind({ baseUrl: '' });
    const url = getUrl();
    return nock(getBaseUrl()).delete(
      url,
      requestBody as RequestBodyMatcher,
      interceptorOptions,
    );
  },

  /**
   * Returns pet inventories by status
   */
  getInventory: (
    requestBody?: RequestBodyMatcher,
    interceptorOptions?: Options,
  ) => {
    const getUrl = function (this: { baseUrl: string }) {
      let url_ = this.baseUrl + '/store/inventory';
      url_ = url_.replace(/[?&]$/, '');
      return url_;
    }.bind({ baseUrl: '' });
    const url = getUrl();
    return nock(getBaseUrl()).get(
      url,
      requestBody as RequestBodyMatcher,
      interceptorOptions,
    );
  },

  /**
   * Returns pet inventories by status
   * @param response successful operation
   */
  getInventoryReply: (
    response: { [key: string]: number },
    removePreviousInterceptors = true,
    requestBody?: RequestBodyMatcher,
    interceptorOptions?: Options,
  ) => {
    const interceptor = Nock.getInventory(requestBody, interceptorOptions);
    if (removePreviousInterceptors) {
      removeInterceptor(interceptor);
    }
    return interceptor.reply(200, response);
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
    interceptorOptions?: Options,
  ) => {
    const getUrl = function (this: { baseUrl: string }) {
      let url_ = this.baseUrl + '/store/order';
      url_ = url_.replace(/[?&]$/, '');
      return url_;
    }.bind({ baseUrl: '' });
    const url = getUrl();
    return nock(getBaseUrl()).post(
      url,
      requestBody as RequestBodyMatcher,
      interceptorOptions,
    );
  },

  /**
   * Place an order for a pet
   * @param response successful operation
   */
  placeOrderReply: (
    response: IOrder,
    removePreviousInterceptors = true,
    requestBody?: RequestBodyMatcher,
    interceptorOptions?: Options,
  ) => {
    const interceptor = Nock.placeOrder(requestBody, interceptorOptions);
    if (removePreviousInterceptors) {
      removeInterceptor(interceptor);
    }
    return interceptor.reply(200, new Order(response));
  },

  /**
   * Find purchase order by ID
   */
  getOrderById: (
    queryParams: GetOrderByIdNockParameters,
    requestBody?: RequestBodyMatcher,
    interceptorOptions?: Options,
  ) => {
    const { orderId } = queryParams;

    const getUrl = function (this: { baseUrl: string }) {
      let url_ = this.baseUrl + '/store/order/{orderId}';
      if (orderId === undefined || orderId === null)
        throw new Error("The parameter 'orderId' must be defined.");
      url_ = url_.replace('{orderId}', encodeURIComponent('' + orderId));
      url_ = url_.replace(/[?&]$/, '');
      return url_;
    }.bind({ baseUrl: '' });
    const url = getUrl();
    return nock(getBaseUrl()).get(
      url,
      requestBody as RequestBodyMatcher,
      interceptorOptions,
    );
  },

  /**
   * Find purchase order by ID
   * @param response successful operation
   */
  getOrderByIdReply: (
    queryParams: GetOrderByIdNockParameters,
    response: IOrder,
    removePreviousInterceptors = true,
    requestBody?: RequestBodyMatcher,
    interceptorOptions?: Options,
  ) => {
    const interceptor = Nock.getOrderById(
      queryParams,
      requestBody,
      interceptorOptions,
    );
    if (removePreviousInterceptors) {
      removeInterceptor(interceptor);
    }
    return interceptor.reply(200, new Order(response));
  },

  /**
   * Delete purchase order by ID
   */
  deleteOrder: (
    queryParams: DeleteOrderNockParameters,
    requestBody?: RequestBodyMatcher,
    interceptorOptions?: Options,
  ) => {
    const { orderId } = queryParams;

    const getUrl = function (this: { baseUrl: string }) {
      let url_ = this.baseUrl + '/store/order/{orderId}';
      if (orderId === undefined || orderId === null)
        throw new Error("The parameter 'orderId' must be defined.");
      url_ = url_.replace('{orderId}', encodeURIComponent('' + orderId));
      url_ = url_.replace(/[?&]$/, '');
      return url_;
    }.bind({ baseUrl: '' });
    const url = getUrl();
    return nock(getBaseUrl()).delete(
      url,
      requestBody as RequestBodyMatcher,
      interceptorOptions,
    );
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
    interceptorOptions?: Options,
  ) => {
    const getUrl = function (this: { baseUrl: string }) {
      let url_ = this.baseUrl + '/user/createWithList';
      url_ = url_.replace(/[?&]$/, '');
      return url_;
    }.bind({ baseUrl: '' });
    const url = getUrl();
    return nock(getBaseUrl()).post(
      url,
      requestBody as RequestBodyMatcher,
      interceptorOptions,
    );
  },

  /**
   * Get user by user name
   */
  getUserByName: (
    queryParams: GetUserByNameNockParameters,
    requestBody?: RequestBodyMatcher,
    interceptorOptions?: Options,
  ) => {
    const { username } = queryParams;

    const getUrl = function (this: { baseUrl: string }) {
      let url_ = this.baseUrl + '/user/{username}';
      if (username === undefined || username === null)
        throw new Error("The parameter 'username' must be defined.");
      url_ = url_.replace('{username}', encodeURIComponent('' + username));
      url_ = url_.replace(/[?&]$/, '');
      return url_;
    }.bind({ baseUrl: '' });
    const url = getUrl();
    return nock(getBaseUrl()).get(
      url,
      requestBody as RequestBodyMatcher,
      interceptorOptions,
    );
  },

  /**
   * Get user by user name
   * @param response successful operation
   */
  getUserByNameReply: (
    queryParams: GetUserByNameNockParameters,
    response: IUser,
    removePreviousInterceptors = true,
    requestBody?: RequestBodyMatcher,
    interceptorOptions?: Options,
  ) => {
    const interceptor = Nock.getUserByName(
      queryParams,
      requestBody,
      interceptorOptions,
    );
    if (removePreviousInterceptors) {
      removeInterceptor(interceptor);
    }
    return interceptor.reply(200, new User(response));
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
    interceptorOptions?: Options,
  ) => {
    const { username } = queryParams;

    const getUrl = function (this: { baseUrl: string }) {
      let url_ = this.baseUrl + '/user/{username}';
      if (username === undefined || username === null)
        throw new Error("The parameter 'username' must be defined.");
      url_ = url_.replace('{username}', encodeURIComponent('' + username));
      url_ = url_.replace(/[?&]$/, '');
      return url_;
    }.bind({ baseUrl: '' });
    const url = getUrl();
    return nock(getBaseUrl()).put(
      url,
      requestBody as RequestBodyMatcher,
      interceptorOptions,
    );
  },

  /**
   * Delete user
   */
  deleteUser: (
    queryParams: DeleteUserNockParameters,
    requestBody?: RequestBodyMatcher,
    interceptorOptions?: Options,
  ) => {
    const { username } = queryParams;

    const getUrl = function (this: { baseUrl: string }) {
      let url_ = this.baseUrl + '/user/{username}';
      if (username === undefined || username === null)
        throw new Error("The parameter 'username' must be defined.");
      url_ = url_.replace('{username}', encodeURIComponent('' + username));
      url_ = url_.replace(/[?&]$/, '');
      return url_;
    }.bind({ baseUrl: '' });
    const url = getUrl();
    return nock(getBaseUrl()).delete(
      url,
      requestBody as RequestBodyMatcher,
      interceptorOptions,
    );
  },

  /**
   * Logs user into the system
   */
  loginUser: (
    queryParams: LoginUserNockParameters,
    requestBody?: RequestBodyMatcher,
    interceptorOptions?: Options,
  ) => {
    const { username, password } = queryParams;

    const getUrl = function (this: { baseUrl: string }) {
      let url_ = this.baseUrl + '/user/login?';
      if (username === undefined || username === null)
        throw new Error(
          "The parameter 'username' must be defined and cannot be null.",
        );
      else url_ += 'username=' + encodeURIComponent('' + username) + '&';
      if (password === undefined || password === null)
        throw new Error(
          "The parameter 'password' must be defined and cannot be null.",
        );
      else url_ += 'password=' + encodeURIComponent('' + password) + '&';
      url_ = url_.replace(/[?&]$/, '');
      return url_;
    }.bind({ baseUrl: '' });
    const url = getUrl();
    return nock(getBaseUrl()).get(
      url,
      requestBody as RequestBodyMatcher,
      interceptorOptions,
    );
  },

  /**
   * Logs user into the system
   * @param response successful operation
   */
  loginUserReply: (
    queryParams: LoginUserNockParameters,
    response: string,
    removePreviousInterceptors = true,
    requestBody?: RequestBodyMatcher,
    interceptorOptions?: Options,
  ) => {
    const interceptor = Nock.loginUser(
      queryParams,
      requestBody,
      interceptorOptions,
    );
    if (removePreviousInterceptors) {
      removeInterceptor(interceptor);
    }
    return interceptor.reply(200, response);
  },

  /**
   * Logs out current logged in user session
   */
  logoutUser: (
    requestBody?: RequestBodyMatcher,
    interceptorOptions?: Options,
  ) => {
    const getUrl = function (this: { baseUrl: string }) {
      let url_ = this.baseUrl + '/user/logout';
      url_ = url_.replace(/[?&]$/, '');
      return url_;
    }.bind({ baseUrl: '' });
    const url = getUrl();
    return nock(getBaseUrl()).get(
      url,
      requestBody as RequestBodyMatcher,
      interceptorOptions,
    );
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
    interceptorOptions?: Options,
  ) => {
    const getUrl = function (this: { baseUrl: string }) {
      let url_ = this.baseUrl + '/user/createWithArray';
      url_ = url_.replace(/[?&]$/, '');
      return url_;
    }.bind({ baseUrl: '' });
    const url = getUrl();
    return nock(getBaseUrl()).post(
      url,
      requestBody as RequestBodyMatcher,
      interceptorOptions,
    );
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
    interceptorOptions?: Options,
  ) => {
    const getUrl = function (this: { baseUrl: string }) {
      let url_ = this.baseUrl + '/user';
      url_ = url_.replace(/[?&]$/, '');
      return url_;
    }.bind({ baseUrl: '' });
    const url = getUrl();
    return nock(getBaseUrl()).post(
      url,
      requestBody as RequestBodyMatcher,
      interceptorOptions,
    );
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
