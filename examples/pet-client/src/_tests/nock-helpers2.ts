/* eslint-disable */

type CreateProductNockParameters = {};

type DeleteProductNockParameters = {
  id: number | undefined;
};

type SearchProductNockParameters = {
  search: string | null | undefined;
  productType: ProductType | null | undefined;
  offset: number | null | undefined;
  limit: number | null | undefined;
  sortBy: string | null | undefined;
  sortOrder: SortOrder | undefined;
};

type PatchProductNockParameters = {
  id: number;
};

type GetProductNockParameters = {
  id: number;
};

export const ProductNock = {
  create: (
    queryParams: CreateProductNockParameters,
    requestBody?: RequestBodyMatcher,
    interceptorOptions?: Options,
  ) => {
    const {} = queryParams;

    const getUrl = function (this: { baseUrl: string }) {
      let url_ = this.baseUrl + '/api/products';
      url_ = url_.replace(/[?&]$/, '');
      return url_;
    }.bind({ baseUrl: '' });
    const url = getUrl();
    return nock(getBaseUrl()).post(url, requestBody, interceptorOptions);
  },

  createReply: (
    queryParams: CreateProductNockParameters,
    response: IProductDto,
    removePreviousInterceptors = true,
    requestBody?: RequestBodyMatcher,
    interceptorOptions?: Options,
  ) => {
    const interceptor = ProductNock.create(
      queryParams,
      requestBody,
      interceptorOptions,
    );
    if (removePreviousInterceptors) {
      removeInterceptor(interceptor);
    }
    return interceptor.reply(200, new ProductDto(response));
  },

  delete: (
    queryParams: DeleteProductNockParameters,
    requestBody?: RequestBodyMatcher,
    interceptorOptions?: Options,
  ) => {
    const { id } = queryParams;

    const getUrl = function (this: { baseUrl: string }) {
      let url_ = this.baseUrl + '/api/products?';
      if (id === null) throw new Error("The parameter 'id' cannot be null.");
      else if (id !== undefined)
        url_ += 'id=' + encodeURIComponent('' + id) + '&';
      url_ = url_.replace(/[?&]$/, '');
      return url_;
    }.bind({ baseUrl: '' });
    const url = getUrl();
    return nock(getBaseUrl()).delete(url, requestBody, interceptorOptions);
  },

  /**
   */
  search: (
    queryParams: SearchProductNockParameters,
    requestBody?: RequestBodyMatcher,
    interceptorOptions?: Options,
  ) => {
    const { search, productType, offset, limit, sortBy, sortOrder } =
      queryParams;

    const getUrl = function (this: { baseUrl: string }) {
      let url_ = this.baseUrl + '/api/products?';
      if (search !== undefined && search !== null)
        url_ += 'Search=' + encodeURIComponent('' + search) + '&';
      if (productType !== undefined && productType !== null)
        url_ += 'ProductType=' + encodeURIComponent('' + productType) + '&';
      if (offset !== undefined && offset !== null)
        url_ += 'Offset=' + encodeURIComponent('' + offset) + '&';
      if (limit !== undefined && limit !== null)
        url_ += 'Limit=' + encodeURIComponent('' + limit) + '&';
      if (sortBy !== undefined && sortBy !== null)
        url_ += 'SortBy=' + encodeURIComponent('' + sortBy) + '&';
      if (sortOrder === null)
        throw new Error("The parameter 'sortOrder' cannot be null.");
      else if (sortOrder !== undefined)
        url_ += 'SortOrder=' + encodeURIComponent('' + sortOrder) + '&';
      url_ = url_.replace(/[?&]$/, '');
      return url_;
    }.bind({ baseUrl: '' });
    const url = getUrl();
    return nock(getBaseUrl()).get(url, requestBody, interceptorOptions);
  },

  /**
   */
  searchReply: (
    queryParams: SearchProductNockParameters,
    response: IPagedResultOfProductListItemDto,
    removePreviousInterceptors = true,
    requestBody?: RequestBodyMatcher,
    interceptorOptions?: Options,
  ) => {
    const interceptor = ProductNock.search(
      queryParams,
      requestBody,
      interceptorOptions,
    );
    if (removePreviousInterceptors) {
      removeInterceptor(interceptor);
    }
    return interceptor.reply(
      200,
      new PagedResultOfProductListItemDto(response),
    );
  },

  patch: (
    queryParams: PatchProductNockParameters,
    requestBody?: RequestBodyMatcher,
    interceptorOptions?: Options,
  ) => {
    const { id } = queryParams;

    const getUrl = function (this: { baseUrl: string }) {
      let url_ = this.baseUrl + '/api/products/{id}';
      if (id === undefined || id === null)
        throw new Error("The parameter 'id' must be defined.");
      url_ = url_.replace('{id}', encodeURIComponent('' + id));
      url_ = url_.replace(/[?&]$/, '');
      return url_;
    }.bind({ baseUrl: '' });
    const url = getUrl();
    return nock(getBaseUrl()).patch(url, requestBody, interceptorOptions);
  },

  patchReply: (
    queryParams: PatchProductNockParameters,
    response: IProductDto,
    removePreviousInterceptors = true,
    requestBody?: RequestBodyMatcher,
    interceptorOptions?: Options,
  ) => {
    const interceptor = ProductNock.patch(
      queryParams,
      requestBody,
      interceptorOptions,
    );
    if (removePreviousInterceptors) {
      removeInterceptor(interceptor);
    }
    return interceptor.reply(200, new ProductDto(response));
  },

  get: (
    queryParams: GetProductNockParameters,
    requestBody?: RequestBodyMatcher,
    interceptorOptions?: Options,
  ) => {
    const { id } = queryParams;

    const getUrl = function (this: { baseUrl: string }) {
      let url_ = this.baseUrl + '/api/products/{id}';
      if (id === undefined || id === null)
        throw new Error("The parameter 'id' must be defined.");
      url_ = url_.replace('{id}', encodeURIComponent('' + id));
      url_ = url_.replace(/[?&]$/, '');
      return url_;
    }.bind({ baseUrl: '' });
    const url = getUrl();
    return nock(getBaseUrl()).get(url, requestBody, interceptorOptions);
  },

  getReply: (
    queryParams: GetProductNockParameters,
    response: IProductDto,
    removePreviousInterceptors = true,
    requestBody?: RequestBodyMatcher,
    interceptorOptions?: Options,
  ) => {
    const interceptor = ProductNock.get(
      queryParams,
      requestBody,
      interceptorOptions,
    );
    if (removePreviousInterceptors) {
      removeInterceptor(interceptor);
    }
    return interceptor.reply(200, new ProductDto(response));
  },
};

type GetClientRequestParametersOidcConfigurationNockParameters = {
  clientId: string | null;
};

export const OidcConfigurationNock = {
  /**
   * Requests OIDC configuration for oAuth.
   */
  getClientRequestParameters: (
    queryParams: GetClientRequestParametersOidcConfigurationNockParameters,
    requestBody?: RequestBodyMatcher,
    interceptorOptions?: Options,
  ) => {
    const { clientId } = queryParams;

    const getUrl = function (this: { baseUrl: string }) {
      let url_ = this.baseUrl + '/_configuration/{clientId}';
      if (clientId === undefined || clientId === null)
        throw new Error("The parameter 'clientId' must be defined.");
      url_ = url_.replace('{clientId}', encodeURIComponent('' + clientId));
      url_ = url_.replace(/[?&]$/, '');
      return url_;
    }.bind({ baseUrl: '' });
    const url = getUrl();
    return nock(getBaseUrl()).get(url, requestBody, interceptorOptions);
  },
};

export const SignUrlNock = {
  getSignature: (
    requestBody?: RequestBodyMatcher,
    interceptorOptions?: Options,
  ) => {
    const getUrl = function (this: { baseUrl: string }) {
      let url_ = this.baseUrl + '/api/sign-url/signature';
      url_ = url_.replace(/[?&]$/, '');
      return url_;
    }.bind({ baseUrl: '' });
    const url = getUrl();
    return nock(getBaseUrl()).get(url, requestBody, interceptorOptions);
  },

  getSignatureReply: (
    response: string,
    removePreviousInterceptors = true,
    requestBody?: RequestBodyMatcher,
    interceptorOptions?: Options,
  ) => {
    const interceptor = SignUrlNock.getSignature(
      requestBody,
      interceptorOptions,
    );
    if (removePreviousInterceptors) {
      removeInterceptor(interceptor);
    }
    return interceptor.reply(200, response);
  },

  setSignatureCookie: (
    requestBody?: RequestBodyMatcher,
    interceptorOptions?: Options,
  ) => {
    const getUrl = function (this: { baseUrl: string }) {
      let url_ = this.baseUrl + '/api/sign-url/signature/cookie';
      url_ = url_.replace(/[?&]$/, '');
      return url_;
    }.bind({ baseUrl: '' });
    const url = getUrl();
    return nock(getBaseUrl()).get(url, requestBody, interceptorOptions);
  },
};

type PatchTestDataNockParameters = {};

type FormDataTestDataNockParameters = {};

export const TestDataNock = {
  /**
   * Demonstrates an error response.
   */
  throwError: (
    requestBody?: RequestBodyMatcher,
    interceptorOptions?: Options,
  ) => {
    const getUrl = function (this: { baseUrl: string }) {
      let url_ = this.baseUrl + '/error-test';
      url_ = url_.replace(/[?&]$/, '');
      return url_;
    }.bind({ baseUrl: '' });
    const url = getUrl();
    return nock(getBaseUrl()).get(url, requestBody, interceptorOptions);
  },

  /**
   * Demonstrates an error response.
   */
  throwErrorReply: (
    response: string,
    removePreviousInterceptors = true,
    requestBody?: RequestBodyMatcher,
    interceptorOptions?: Options,
  ) => {
    const interceptor = TestDataNock.throwError(
      requestBody,
      interceptorOptions,
    );
    if (removePreviousInterceptors) {
      removeInterceptor(interceptor);
    }
    return interceptor.reply(200, response);
  },

  /**
   * Sends a dummy email
   */
  sendEmail: (
    requestBody?: RequestBodyMatcher,
    interceptorOptions?: Options,
  ) => {
    const getUrl = function (this: { baseUrl: string }) {
      let url_ = this.baseUrl + '/send-email';
      url_ = url_.replace(/[?&]$/, '');
      return url_;
    }.bind({ baseUrl: '' });
    const url = getUrl();
    return nock(getBaseUrl()).post(url, requestBody, interceptorOptions);
  },

  /**
   * Sends a dummy email
   */
  sendEmailReply: (
    response: string,
    removePreviousInterceptors = true,
    requestBody?: RequestBodyMatcher,
    interceptorOptions?: Options,
  ) => {
    const interceptor = TestDataNock.sendEmail(requestBody, interceptorOptions);
    if (removePreviousInterceptors) {
      removeInterceptor(interceptor);
    }
    return interceptor.reply(200, response);
  },

  /**
   * Tests RequiredOrUndefined attribute
   */
  patch: (
    queryParams: PatchTestDataNockParameters,
    requestBody?: RequestBodyMatcher,
    interceptorOptions?: Options,
  ) => {
    const {} = queryParams;

    const getUrl = function (this: { baseUrl: string }) {
      let url_ = this.baseUrl + '/patch';
      url_ = url_.replace(/[?&]$/, '');
      return url_;
    }.bind({ baseUrl: '' });
    const url = getUrl();
    return nock(getBaseUrl()).post(url, requestBody, interceptorOptions);
  },

  /**
   * Tests RequiredOrUndefined attribute
   */
  patchReply: (
    queryParams: PatchTestDataNockParameters,
    response: string,
    removePreviousInterceptors = true,
    requestBody?: RequestBodyMatcher,
    interceptorOptions?: Options,
  ) => {
    const interceptor = TestDataNock.patch(
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
   * Try this in browser with language set to DE
   */
  formData: (
    queryParams: FormDataTestDataNockParameters,
    requestBody?: RequestBodyMatcher,
    interceptorOptions?: Options,
  ) => {
    const {} = queryParams;

    const getUrl = function (this: { baseUrl: string }) {
      let url_ = this.baseUrl + '/formdata';
      url_ = url_.replace(/[?&]$/, '');
      return url_;
    }.bind({ baseUrl: '' });
    const url = getUrl();
    return nock(getBaseUrl()).post(url, requestBody, interceptorOptions);
  },

  /**
   * Try this in browser with language set to DE
   */
  formDataReply: (
    queryParams: FormDataTestDataNockParameters,
    response: string,
    removePreviousInterceptors = true,
    requestBody?: RequestBodyMatcher,
    interceptorOptions?: Options,
  ) => {
    const interceptor = TestDataNock.formData(
      queryParams,
      requestBody,
      interceptorOptions,
    );
    if (removePreviousInterceptors) {
      removeInterceptor(interceptor);
    }
    return interceptor.reply(200, response);
  },
};

export const VersionNock = {
  /**
   * Gets the version of the service.
   */
  version: (requestBody?: RequestBodyMatcher, interceptorOptions?: Options) => {
    const getUrl = function (this: { baseUrl: string }) {
      let url_ = this.baseUrl + '/api';
      url_ = url_.replace(/[?&]$/, '');
      return url_;
    }.bind({ baseUrl: '' });
    const url = getUrl();
    return nock(getBaseUrl()).get(url, requestBody, interceptorOptions);
  },

  /**
   * Gets the version of the service.
   * @param response A string representing the version.
   */
  versionReply: (
    response: string,
    removePreviousInterceptors = true,
    requestBody?: RequestBodyMatcher,
    interceptorOptions?: Options,
  ) => {
    const interceptor = VersionNock.version(requestBody, interceptorOptions);
    if (removePreviousInterceptors) {
      removeInterceptor(interceptor);
    }
    return interceptor.reply(200, response);
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
    return data;
  }
}

export interface IProductDto {
  id: number;
  title: string;
  productType: ProductType;
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
    return data;
  }
}

export interface ICreateProductDto {
  title: string;
  productType: ProductType;
}

export class PatchProductDto implements IPatchProductDto {
  title?: string;
  productType?: ProductType;

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
    return data;
  }
}

export interface IPatchProductDto {
  title?: string;
  productType?: ProductType;
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
    return data;
  }
}

export interface IProductListItemDto {
  id: number;
  title: string;
  productType: ProductType;
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

import nock, { Options, RequestBodyMatcher, Interceptor } from 'nock';

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
