/* eslint-disable */

type UploadFileNockParameters = {
  petId: number;
  additionalMetadata: string | null | undefined;
};

type AddPetNockParameters = {
  body: Pet;
};

type UpdatePetNockParameters = {
  body: Pet;
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
  name: string | null | undefined;
  status: string | null | undefined;
};

type DeletePetNockParameters = {
  api_key: string | null | undefined;
  petId: number;
};

type PlaceOrderNockParameters = {
  body: Order;
};

type GetOrderByIdNockParameters = {
  orderId: number;
};

type DeleteOrderNockParameters = {
  orderId: number;
};

type CreateUsersWithListInputNockParameters = {
  body: User[];
};

type GetUserByNameNockParameters = {
  username: string;
};

type UpdateUserNockParameters = {
  username: string;
  body: User;
};

type DeleteUserNockParameters = {
  username: string;
};

type LoginUserNockParameters = {
  username: string;
  password: string;
};

type CreateUsersWithArrayInputNockParameters = {
  body: User[];
};

type CreateUserNockParameters = {
  body: User;
};

export const Nock = {
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
    return nock(getBaseUrl()).post(url, requestBody, interceptorOptions);
  },

  uploadFileReply: (
    queryParams: UploadFileNockParameters,
    response: ApiResponse,
    requestBody?: RequestBodyMatcher,
    interceptorOptions?: Options,
  ) => {
    return Nock.uploadFile(queryParams, requestBody, interceptorOptions).reply(
      200,
      response,
    );
  },

  addPet: (
    queryParams: AddPetNockParameters,
    requestBody?: RequestBodyMatcher,
    interceptorOptions?: Options,
  ) => {
    const {} = queryParams;

    const getUrl = function (this: { baseUrl: string }) {
      let url_ = this.baseUrl + '/pet';
      url_ = url_.replace(/[?&]$/, '');
      return url_;
    }.bind({ baseUrl: '' });
    const url = getUrl();
    return nock(getBaseUrl()).post(url, requestBody, interceptorOptions);
  },

  updatePet: (
    queryParams: UpdatePetNockParameters,
    requestBody?: RequestBodyMatcher,
    interceptorOptions?: Options,
  ) => {
    const {} = queryParams;

    const getUrl = function (this: { baseUrl: string }) {
      let url_ = this.baseUrl + '/pet';
      url_ = url_.replace(/[?&]$/, '');
      return url_;
    }.bind({ baseUrl: '' });
    const url = getUrl();
    return nock(getBaseUrl()).put(url, requestBody, interceptorOptions);
  },

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
    return nock(getBaseUrl()).get(url, requestBody, interceptorOptions);
  },

  findPetsByStatusReply: (
    queryParams: FindPetsByStatusNockParameters,
    response: Pet[],
    requestBody?: RequestBodyMatcher,
    interceptorOptions?: Options,
  ) => {
    return Nock.findPetsByStatus(
      queryParams,
      requestBody,
      interceptorOptions,
    ).reply(200, response);
  },

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
    return nock(getBaseUrl()).get(url, requestBody, interceptorOptions);
  },

  findPetsByTagsReply: (
    queryParams: FindPetsByTagsNockParameters,
    response: Pet[],
    requestBody?: RequestBodyMatcher,
    interceptorOptions?: Options,
  ) => {
    return Nock.findPetsByTags(
      queryParams,
      requestBody,
      interceptorOptions,
    ).reply(200, response);
  },

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
    return nock(getBaseUrl()).get(url, requestBody, interceptorOptions);
  },

  getPetByIdReply: (
    queryParams: GetPetByIdNockParameters,
    response: Pet,
    requestBody?: RequestBodyMatcher,
    interceptorOptions?: Options,
  ) => {
    return Nock.getPetById(queryParams, requestBody, interceptorOptions).reply(
      200,
      response,
    );
  },

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
    return nock(getBaseUrl()).post(url, requestBody, interceptorOptions);
  },

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
    return nock(getBaseUrl()).get(url, requestBody, interceptorOptions);
  },

  getInventoryReply: (
    response: { [key: string]: number },
    requestBody?: RequestBodyMatcher,
    interceptorOptions?: Options,
  ) => {
    return Nock.getInventory(requestBody, interceptorOptions).reply(
      200,
      response,
    );
  },

  placeOrder: (
    queryParams: PlaceOrderNockParameters,
    requestBody?: RequestBodyMatcher,
    interceptorOptions?: Options,
  ) => {
    const {} = queryParams;

    const getUrl = function (this: { baseUrl: string }) {
      let url_ = this.baseUrl + '/store/order';
      url_ = url_.replace(/[?&]$/, '');
      return url_;
    }.bind({ baseUrl: '' });
    const url = getUrl();
    return nock(getBaseUrl()).post(url, requestBody, interceptorOptions);
  },

  placeOrderReply: (
    queryParams: PlaceOrderNockParameters,
    response: Order,
    requestBody?: RequestBodyMatcher,
    interceptorOptions?: Options,
  ) => {
    return Nock.placeOrder(queryParams, requestBody, interceptorOptions).reply(
      200,
      response,
    );
  },

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
    return nock(getBaseUrl()).get(url, requestBody, interceptorOptions);
  },

  getOrderByIdReply: (
    queryParams: GetOrderByIdNockParameters,
    response: Order,
    requestBody?: RequestBodyMatcher,
    interceptorOptions?: Options,
  ) => {
    return Nock.getOrderById(
      queryParams,
      requestBody,
      interceptorOptions,
    ).reply(200, response);
  },

  createUsersWithListInput: (
    queryParams: CreateUsersWithListInputNockParameters,
    requestBody?: RequestBodyMatcher,
    interceptorOptions?: Options,
  ) => {
    const {} = queryParams;

    const getUrl = function (this: { baseUrl: string }) {
      let url_ = this.baseUrl + '/user/createWithList';
      url_ = url_.replace(/[?&]$/, '');
      return url_;
    }.bind({ baseUrl: '' });
    const url = getUrl();
    return nock(getBaseUrl()).post(url, requestBody, interceptorOptions);
  },

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
    return nock(getBaseUrl()).get(url, requestBody, interceptorOptions);
  },

  getUserByNameReply: (
    queryParams: GetUserByNameNockParameters,
    response: User,
    requestBody?: RequestBodyMatcher,
    interceptorOptions?: Options,
  ) => {
    return Nock.getUserByName(
      queryParams,
      requestBody,
      interceptorOptions,
    ).reply(200, response);
  },

  updateUser: (
    queryParams: UpdateUserNockParameters,
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
    return nock(getBaseUrl()).put(url, requestBody, interceptorOptions);
  },

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
    return nock(getBaseUrl()).get(url, requestBody, interceptorOptions);
  },

  loginUserReply: (
    queryParams: LoginUserNockParameters,
    response: string,
    requestBody?: RequestBodyMatcher,
    interceptorOptions?: Options,
  ) => {
    return Nock.loginUser(queryParams, requestBody, interceptorOptions).reply(
      200,
      response,
    );
  },

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
    return nock(getBaseUrl()).get(url, requestBody, interceptorOptions);
  },

  createUsersWithArrayInput: (
    queryParams: CreateUsersWithArrayInputNockParameters,
    requestBody?: RequestBodyMatcher,
    interceptorOptions?: Options,
  ) => {
    const {} = queryParams;

    const getUrl = function (this: { baseUrl: string }) {
      let url_ = this.baseUrl + '/user/createWithArray';
      url_ = url_.replace(/[?&]$/, '');
      return url_;
    }.bind({ baseUrl: '' });
    const url = getUrl();
    return nock(getBaseUrl()).post(url, requestBody, interceptorOptions);
  },

  createUser: (
    queryParams: CreateUserNockParameters,
    requestBody?: RequestBodyMatcher,
    interceptorOptions?: Options,
  ) => {
    const {} = queryParams;

    const getUrl = function (this: { baseUrl: string }) {
      let url_ = this.baseUrl + '/user';
      url_ = url_.replace(/[?&]$/, '');
      return url_;
    }.bind({ baseUrl: '' });
    const url = getUrl();
    return nock(getBaseUrl()).post(url, requestBody, interceptorOptions);
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

import nock, { Options, RequestBodyMatcher } from 'nock';

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
