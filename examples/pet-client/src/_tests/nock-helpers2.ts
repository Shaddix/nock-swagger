/* eslint-disable */

type DeleteProductNockParameters = {
  id?: number | undefined | RegExp;
};

type SearchProductNockParameters = {
  search?: string | null | undefined | RegExp;
  productType?: ProductType | null | undefined | RegExp;
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
    interceptorOptions?: Options,
  ) => {
    let url_ = '/api/products';
    return nock(getBaseUrl()).post(
      url_,
      requestBody as RequestBodyMatcher,
      interceptorOptions,
    );
  },

  createReply: (
    response: IProductDto,
    removePreviousInterceptors = true,
    requestBody?: RequestBodyMatcher,
    interceptorOptions?: Options,
  ) => {
    const interceptor = ProductNock.create(requestBody, interceptorOptions);
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
    let url_ = '/api/products';
    return nock(getBaseUrl())
      .delete(url_, requestBody as RequestBodyMatcher, interceptorOptions)
      .query({
        id:
          queryParams.id === null || queryParams.id === undefined
            ? /./
            : queryParams.id instanceof RegExp
            ? queryParams.id
            : encodeURIComponent('' + queryParams.id),
      });
  },

  /**
   */
  search: (
    queryParams: SearchProductNockParameters,
    requestBody?: RequestBodyMatcher,
    interceptorOptions?: Options,
  ) => {
    let url_ = '/api/products';
    return nock(getBaseUrl())
      .get(url_, requestBody as RequestBodyMatcher, interceptorOptions)
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
    requestBody?:
      | string
      | Buffer
      | RegExp
      | DataMatcherArray
      | DataMatcherMap
      | PatchProductDto
      | ((body: PatchProductDto) => boolean),
    interceptorOptions?: Options,
  ) => {
    let url_ = '/api/products/{id}';
    if (queryParams.id === undefined || queryParams.id === null)
      throw new Error("The parameter 'queryParams.id' must be defined.");
    url_ = url_.replace('{id}', encodeURIComponent('' + queryParams.id));
    return nock(getBaseUrl()).patch(
      url_,
      requestBody as RequestBodyMatcher,
      interceptorOptions,
    );
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
    let url_ = '/api/products/{id}';
    if (queryParams.id === undefined || queryParams.id === null)
      throw new Error("The parameter 'queryParams.id' must be defined.");
    url_ = url_.replace('{id}', encodeURIComponent('' + queryParams.id));
    return nock(getBaseUrl()).get(
      url_,
      requestBody as RequestBodyMatcher,
      interceptorOptions,
    );
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
    let url_ = '/_configuration/{clientId}';
    if (queryParams.clientId === undefined || queryParams.clientId === null)
      throw new Error("The parameter 'queryParams.clientId' must be defined.");
    url_ = url_.replace(
      '{clientId}',
      encodeURIComponent('' + queryParams.clientId),
    );
    return nock(getBaseUrl()).get(
      url_,
      requestBody as RequestBodyMatcher,
      interceptorOptions,
    );
  },
};

export const SignUrlNock = {
  getSignature: (
    requestBody?: RequestBodyMatcher,
    interceptorOptions?: Options,
  ) => {
    let url_ = '/api/sign-url/signature';
    return nock(getBaseUrl()).get(
      url_,
      requestBody as RequestBodyMatcher,
      interceptorOptions,
    );
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
    let url_ = '/api/sign-url/signature/cookie';
    return nock(getBaseUrl()).get(
      url_,
      requestBody as RequestBodyMatcher,
      interceptorOptions,
    );
  },
};

export const TestDataNock = {
  /**
   * Demonstrates an error response.
   */
  throwError: (
    requestBody?: RequestBodyMatcher,
    interceptorOptions?: Options,
  ) => {
    let url_ = '/error-test';
    return nock(getBaseUrl()).get(
      url_,
      requestBody as RequestBodyMatcher,
      interceptorOptions,
    );
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
    let url_ = '/send-email';
    return nock(getBaseUrl()).post(
      url_,
      requestBody as RequestBodyMatcher,
      interceptorOptions,
    );
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
    requestBody?:
      | string
      | Buffer
      | RegExp
      | DataMatcherArray
      | DataMatcherMap
      | TestPatchDto
      | ((body: TestPatchDto) => boolean),
    interceptorOptions?: Options,
  ) => {
    let url_ = '/patch';
    return nock(getBaseUrl()).post(
      url_,
      requestBody as RequestBodyMatcher,
      interceptorOptions,
    );
  },

  /**
   * Tests RequiredOrUndefined attribute
   */
  patchReply: (
    response: string,
    removePreviousInterceptors = true,
    requestBody?: RequestBodyMatcher,
    interceptorOptions?: Options,
  ) => {
    const interceptor = TestDataNock.patch(requestBody, interceptorOptions);
    if (removePreviousInterceptors) {
      removeInterceptor(interceptor);
    }
    return interceptor.reply(200, response);
  },

  /**
   * Try this in browser with language set to DE
   */
  formData: (
    requestBody?: RequestBodyMatcher,
    interceptorOptions?: Options,
  ) => {
    let url_ = '/formdata';
    return nock(getBaseUrl()).post(
      url_,
      requestBody as RequestBodyMatcher,
      interceptorOptions,
    );
  },

  /**
   * Try this in browser with language set to DE
   */
  formDataReply: (
    response: string,
    removePreviousInterceptors = true,
    requestBody?: RequestBodyMatcher,
    interceptorOptions?: Options,
  ) => {
    const interceptor = TestDataNock.formData(requestBody, interceptorOptions);
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
    let url_ = '/api';
    return nock(getBaseUrl()).get(
      url_,
      requestBody as RequestBodyMatcher,
      interceptorOptions,
    );
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
