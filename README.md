# nock-swagger
This projects autogenerates strongly typed methods to easily set up [nock](https://github.com/nock/nock) mocks for API calls based on Swagger API definitions.
So, given that you have a [petstore-like API definition](https://petstore.swagger.io/), you could autogenerate a list of [nock helper methods](https://github.com/Shaddix/nock-swagger/blob/master/examples/pet-client/src/_tests/nock-helpers.ts), to easily mock methods from the API.


****This library requires, [dotnet runtime](https://dotnet.microsoft.com/download/dotnet/2.1) (2.1) installed on your machine! If you have .NET Core 3+ or 5+ you'll need to add a switch (e.g. /runtime:Net50) to all commands.****
## How to use
Check out [tests](https://github.com/Shaddix/nock-swagger/blob/963de857fd6abbe42ad1172f47cd118b2efe3a05/examples/pet-client/src/_tests/App.test.tsx#L11) for few examples.
Shortly, mocking GET requests will look like this:
```ts
Nock.getPetById({ id: 1 } /* GET parameters with type & intellisense */)
  .reply({ id:1, name: 'mypet' });
```
It's not that different from the Nock itself, just that:
- you don't have to remember/write the URL (it will be filled in automatically)
- you don't have to remember query parameters & their types (intellisense will help you)
- you will have intellisense for Reply as well (so you know the shape of the object to return)

Don't forget to set the base url by calling `setBaseUrl('https://localhost')`.
Also go read the [nock docs](https://github.com/nock/nock#nock) if you have any problem regarding how Nock works.

## Perks
### Auto-removing old interceptors 
Nock by default doesn't remove the 'old' interceptors when you define a new one for the same route/query params.
It wasn't convenient for me, so nock-swagger removes old interceptors by default.
If you want to preserve previously configured interceptors for the same root (God knows why are you adding a new Interceptor if you don't want it to work, but still),
you need to pass `preservePreviousInterceptors: true` as part of `interceptorOptions` (usually 3rd argument of every nock setup call).

## How to add
Install the package into your project using yarn/npm (as a dev-dependency). You'll also need to add react-query (which you probably already have if you are interested in this library).
```
yarn add -D nock-swagger
```
Then create/update your autogenerated hooks by calling (adjusting the URL and output path)
```
yarn nock-swagger /input:https://petstore.swagger.io/v2/swagger.json /output:__tests__/nock-helpers.ts
```
You would probably want to add this script to your package.json to call it every time your API changes.

## Configuration
##### setBaseUrl(baseUrl: string)
Sets base URL for all methods

## How does it work
Under the cover it's just 2 template files for [NSwag](https://github.com/RicoSuter/NSwag) and a small script to easily use them.

## Contributions and support
Issues and Pull Requests are welcome.

For any kind of private consulting or support you could contact [Artur Drobinskiy](https://github.com/Shaddix) directly via email.
