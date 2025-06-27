# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*GetOfferedCards*](#getofferedcards)
  - [*GetRelatedCards*](#getrelatedcards)
  - [*GetCardsBySetCode*](#getcardsbysetcode)
  - [*GetPacks*](#getpacks)
  - [*GetPacksAndCards*](#getpacksandcards)
  - [*GetRarities*](#getrarities)
  - [*GetRequestedCards*](#getrequestedcards)
  - [*GetSets*](#getsets)
  - [*GetCardsPossessedByUser*](#getcardspossessedbyuser)
  - [*GetUser*](#getuser)
  - [*GetCards*](#getcards)
  - [*GetCardById*](#getcardbyid)
- [**Mutations**](#mutations)
  - [*AddRelatedCard*](#addrelatedcard)
  - [*AddUser*](#adduser)
  - [*ChangeUserDisplayName*](#changeuserdisplayname)
  - [*ChangeUserEmail*](#changeuseremail)
  - [*ChangeUserLastLogin*](#changeuserlastlogin)
  - [*AddCardsPack*](#addcardspack)
  - [*AddPack*](#addpack)
  - [*AddSet*](#addset)
  - [*AddCardToUser*](#addcardtouser)
  - [*RemoveCardFromUser*](#removecardfromuser)
  - [*UpdateCardQuantity*](#updatecardquantity)
  - [*AddCard*](#addcard)
  - [*AddCardToOffer*](#addcardtooffer)
  - [*RemoveCardFromOffer*](#removecardfromoffer)
  - [*AddRarity*](#addrarity)
  - [*AddCardToRequest*](#addcardtorequest)
  - [*RemoveCardFromRequest*](#removecardfromrequest)

# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `default`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

You can use this generated SDK by importing from the package `@firebasegen/default-connector` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `default`.

You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@firebasegen/default-connector';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@firebasegen/default-connector';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `default` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## GetOfferedCards
You can execute the `GetOfferedCards` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getOfferedCards(): QueryPromise<GetOfferedCardsData, undefined>;

interface GetOfferedCardsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetOfferedCardsData, undefined>;
}
export const getOfferedCardsRef: GetOfferedCardsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getOfferedCards(dc: DataConnect): QueryPromise<GetOfferedCardsData, undefined>;

interface GetOfferedCardsRef {
  ...
  (dc: DataConnect): QueryRef<GetOfferedCardsData, undefined>;
}
export const getOfferedCardsRef: GetOfferedCardsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getOfferedCardsRef:
```typescript
const name = getOfferedCardsRef.operationName;
console.log(name);
```

### Variables
The `GetOfferedCards` query has no variables.
### Return Type
Recall that executing the `GetOfferedCards` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetOfferedCardsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetOfferedCardsData {
  offers: ({
    card: {
      id: UUIDString;
      cardNumber: string;
      displayName: string;
      rarity: {
        code: string;
      };
        packs_via_CardPack: ({
          set: {
            code: string;
            displayName: string;
            releaseDate: DateString;
          };
        })[];
    } & Card_Key;
      createdAt: TimestampString;
  })[];
}
```
### Using `GetOfferedCards`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getOfferedCards } from '@firebasegen/default-connector';


// Call the `getOfferedCards()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getOfferedCards();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getOfferedCards(dataConnect);

console.log(data.offers);

// Or, you can use the `Promise` API.
getOfferedCards().then((response) => {
  const data = response.data;
  console.log(data.offers);
});
```

### Using `GetOfferedCards`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getOfferedCardsRef } from '@firebasegen/default-connector';


// Call the `getOfferedCardsRef()` function to get a reference to the query.
const ref = getOfferedCardsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getOfferedCardsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.offers);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.offers);
});
```

## GetRelatedCards
You can execute the `GetRelatedCards` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getRelatedCards(vars: GetRelatedCardsVariables): QueryPromise<GetRelatedCardsData, GetRelatedCardsVariables>;

interface GetRelatedCardsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetRelatedCardsVariables): QueryRef<GetRelatedCardsData, GetRelatedCardsVariables>;
}
export const getRelatedCardsRef: GetRelatedCardsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getRelatedCards(dc: DataConnect, vars: GetRelatedCardsVariables): QueryPromise<GetRelatedCardsData, GetRelatedCardsVariables>;

interface GetRelatedCardsRef {
  ...
  (dc: DataConnect, vars: GetRelatedCardsVariables): QueryRef<GetRelatedCardsData, GetRelatedCardsVariables>;
}
export const getRelatedCardsRef: GetRelatedCardsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getRelatedCardsRef:
```typescript
const name = getRelatedCardsRef.operationName;
console.log(name);
```

### Variables
The `GetRelatedCards` query requires an argument of type `GetRelatedCardsVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetRelatedCardsVariables {
  cardId: UUIDString;
}
```
### Return Type
Recall that executing the `GetRelatedCards` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetRelatedCardsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetRelatedCardsData {
  relatedCards: ({
    relatedCard: {
      id: UUIDString;
      cardNumber: string;
      displayName: string;
      rarity: {
        code: string;
      };
        packs_via_CardPack: ({
          set: {
            code: string;
            displayName: string;
            releaseDate: DateString;
          };
        })[];
    } & Card_Key;
  })[];
}
```
### Using `GetRelatedCards`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getRelatedCards, GetRelatedCardsVariables } from '@firebasegen/default-connector';

// The `GetRelatedCards` query requires an argument of type `GetRelatedCardsVariables`:
const getRelatedCardsVars: GetRelatedCardsVariables = {
  cardId: ..., 
};

// Call the `getRelatedCards()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getRelatedCards(getRelatedCardsVars);
// Variables can be defined inline as well.
const { data } = await getRelatedCards({ cardId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getRelatedCards(dataConnect, getRelatedCardsVars);

console.log(data.relatedCards);

// Or, you can use the `Promise` API.
getRelatedCards(getRelatedCardsVars).then((response) => {
  const data = response.data;
  console.log(data.relatedCards);
});
```

### Using `GetRelatedCards`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getRelatedCardsRef, GetRelatedCardsVariables } from '@firebasegen/default-connector';

// The `GetRelatedCards` query requires an argument of type `GetRelatedCardsVariables`:
const getRelatedCardsVars: GetRelatedCardsVariables = {
  cardId: ..., 
};

// Call the `getRelatedCardsRef()` function to get a reference to the query.
const ref = getRelatedCardsRef(getRelatedCardsVars);
// Variables can be defined inline as well.
const ref = getRelatedCardsRef({ cardId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getRelatedCardsRef(dataConnect, getRelatedCardsVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.relatedCards);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.relatedCards);
});
```

## GetCardsBySetCode
You can execute the `GetCardsBySetCode` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getCardsBySetCode(vars: GetCardsBySetCodeVariables): QueryPromise<GetCardsBySetCodeData, GetCardsBySetCodeVariables>;

interface GetCardsBySetCodeRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetCardsBySetCodeVariables): QueryRef<GetCardsBySetCodeData, GetCardsBySetCodeVariables>;
}
export const getCardsBySetCodeRef: GetCardsBySetCodeRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getCardsBySetCode(dc: DataConnect, vars: GetCardsBySetCodeVariables): QueryPromise<GetCardsBySetCodeData, GetCardsBySetCodeVariables>;

interface GetCardsBySetCodeRef {
  ...
  (dc: DataConnect, vars: GetCardsBySetCodeVariables): QueryRef<GetCardsBySetCodeData, GetCardsBySetCodeVariables>;
}
export const getCardsBySetCodeRef: GetCardsBySetCodeRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getCardsBySetCodeRef:
```typescript
const name = getCardsBySetCodeRef.operationName;
console.log(name);
```

### Variables
The `GetCardsBySetCode` query requires an argument of type `GetCardsBySetCodeVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetCardsBySetCodeVariables {
  setCode: string;
}
```
### Return Type
Recall that executing the `GetCardsBySetCode` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetCardsBySetCodeData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetCardsBySetCodeData {
  cardPacks: ({
    card: {
      id: UUIDString;
      cardNumber: string;
      displayName: string;
      rarity: {
        code: string;
      };
    } & Card_Key;
      pack: {
        set: {
          code: string;
          displayName: string;
          releaseDate: DateString;
        };
      };
  })[];
}
```
### Using `GetCardsBySetCode`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getCardsBySetCode, GetCardsBySetCodeVariables } from '@firebasegen/default-connector';

// The `GetCardsBySetCode` query requires an argument of type `GetCardsBySetCodeVariables`:
const getCardsBySetCodeVars: GetCardsBySetCodeVariables = {
  setCode: ..., 
};

// Call the `getCardsBySetCode()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getCardsBySetCode(getCardsBySetCodeVars);
// Variables can be defined inline as well.
const { data } = await getCardsBySetCode({ setCode: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getCardsBySetCode(dataConnect, getCardsBySetCodeVars);

console.log(data.cardPacks);

// Or, you can use the `Promise` API.
getCardsBySetCode(getCardsBySetCodeVars).then((response) => {
  const data = response.data;
  console.log(data.cardPacks);
});
```

### Using `GetCardsBySetCode`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getCardsBySetCodeRef, GetCardsBySetCodeVariables } from '@firebasegen/default-connector';

// The `GetCardsBySetCode` query requires an argument of type `GetCardsBySetCodeVariables`:
const getCardsBySetCodeVars: GetCardsBySetCodeVariables = {
  setCode: ..., 
};

// Call the `getCardsBySetCodeRef()` function to get a reference to the query.
const ref = getCardsBySetCodeRef(getCardsBySetCodeVars);
// Variables can be defined inline as well.
const ref = getCardsBySetCodeRef({ setCode: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getCardsBySetCodeRef(dataConnect, getCardsBySetCodeVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.cardPacks);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.cardPacks);
});
```

## GetPacks
You can execute the `GetPacks` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getPacks(): QueryPromise<GetPacksData, undefined>;

interface GetPacksRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetPacksData, undefined>;
}
export const getPacksRef: GetPacksRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getPacks(dc: DataConnect): QueryPromise<GetPacksData, undefined>;

interface GetPacksRef {
  ...
  (dc: DataConnect): QueryRef<GetPacksData, undefined>;
}
export const getPacksRef: GetPacksRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getPacksRef:
```typescript
const name = getPacksRef.operationName;
console.log(name);
```

### Variables
The `GetPacks` query has no variables.
### Return Type
Recall that executing the `GetPacks` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetPacksData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetPacksData {
  packs: ({
    displayName: string;
    set: {
      code: string;
    };
  })[];
}
```
### Using `GetPacks`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getPacks } from '@firebasegen/default-connector';


// Call the `getPacks()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getPacks();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getPacks(dataConnect);

console.log(data.packs);

// Or, you can use the `Promise` API.
getPacks().then((response) => {
  const data = response.data;
  console.log(data.packs);
});
```

### Using `GetPacks`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getPacksRef } from '@firebasegen/default-connector';


// Call the `getPacksRef()` function to get a reference to the query.
const ref = getPacksRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getPacksRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.packs);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.packs);
});
```

## GetPacksAndCards
You can execute the `GetPacksAndCards` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getPacksAndCards(): QueryPromise<GetPacksAndCardsData, undefined>;

interface GetPacksAndCardsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetPacksAndCardsData, undefined>;
}
export const getPacksAndCardsRef: GetPacksAndCardsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getPacksAndCards(dc: DataConnect): QueryPromise<GetPacksAndCardsData, undefined>;

interface GetPacksAndCardsRef {
  ...
  (dc: DataConnect): QueryRef<GetPacksAndCardsData, undefined>;
}
export const getPacksAndCardsRef: GetPacksAndCardsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getPacksAndCardsRef:
```typescript
const name = getPacksAndCardsRef.operationName;
console.log(name);
```

### Variables
The `GetPacksAndCards` query has no variables.
### Return Type
Recall that executing the `GetPacksAndCards` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetPacksAndCardsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetPacksAndCardsData {
  packs: ({
    displayName: string;
    set: {
      code: string;
      displayName: string;
      releaseDate: DateString;
    };
      cards_via_CardPack: ({
        id: UUIDString;
        cardNumber: string;
        displayName: string;
        rarity: {
          code: string;
        };
      } & Card_Key)[];
  })[];
}
```
### Using `GetPacksAndCards`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getPacksAndCards } from '@firebasegen/default-connector';


// Call the `getPacksAndCards()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getPacksAndCards();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getPacksAndCards(dataConnect);

console.log(data.packs);

// Or, you can use the `Promise` API.
getPacksAndCards().then((response) => {
  const data = response.data;
  console.log(data.packs);
});
```

### Using `GetPacksAndCards`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getPacksAndCardsRef } from '@firebasegen/default-connector';


// Call the `getPacksAndCardsRef()` function to get a reference to the query.
const ref = getPacksAndCardsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getPacksAndCardsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.packs);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.packs);
});
```

## GetRarities
You can execute the `GetRarities` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getRarities(): QueryPromise<GetRaritiesData, undefined>;

interface GetRaritiesRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetRaritiesData, undefined>;
}
export const getRaritiesRef: GetRaritiesRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getRarities(dc: DataConnect): QueryPromise<GetRaritiesData, undefined>;

interface GetRaritiesRef {
  ...
  (dc: DataConnect): QueryRef<GetRaritiesData, undefined>;
}
export const getRaritiesRef: GetRaritiesRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getRaritiesRef:
```typescript
const name = getRaritiesRef.operationName;
console.log(name);
```

### Variables
The `GetRarities` query has no variables.
### Return Type
Recall that executing the `GetRarities` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetRaritiesData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetRaritiesData {
  rarities: ({
    code: string;
    displayName: string;
    description?: string | null;
  })[];
}
```
### Using `GetRarities`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getRarities } from '@firebasegen/default-connector';


// Call the `getRarities()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getRarities();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getRarities(dataConnect);

console.log(data.rarities);

// Or, you can use the `Promise` API.
getRarities().then((response) => {
  const data = response.data;
  console.log(data.rarities);
});
```

### Using `GetRarities`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getRaritiesRef } from '@firebasegen/default-connector';


// Call the `getRaritiesRef()` function to get a reference to the query.
const ref = getRaritiesRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getRaritiesRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.rarities);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.rarities);
});
```

## GetRequestedCards
You can execute the `GetRequestedCards` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getRequestedCards(): QueryPromise<GetRequestedCardsData, undefined>;

interface GetRequestedCardsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetRequestedCardsData, undefined>;
}
export const getRequestedCardsRef: GetRequestedCardsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getRequestedCards(dc: DataConnect): QueryPromise<GetRequestedCardsData, undefined>;

interface GetRequestedCardsRef {
  ...
  (dc: DataConnect): QueryRef<GetRequestedCardsData, undefined>;
}
export const getRequestedCardsRef: GetRequestedCardsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getRequestedCardsRef:
```typescript
const name = getRequestedCardsRef.operationName;
console.log(name);
```

### Variables
The `GetRequestedCards` query has no variables.
### Return Type
Recall that executing the `GetRequestedCards` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetRequestedCardsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetRequestedCardsData {
  requests: ({
    card: {
      id: UUIDString;
      cardNumber: string;
      displayName: string;
      rarity: {
        code: string;
      };
        packs_via_CardPack: ({
          set: {
            code: string;
            displayName: string;
            releaseDate: DateString;
          };
        })[];
    } & Card_Key;
      createdAt: TimestampString;
  })[];
}
```
### Using `GetRequestedCards`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getRequestedCards } from '@firebasegen/default-connector';


// Call the `getRequestedCards()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getRequestedCards();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getRequestedCards(dataConnect);

console.log(data.requests);

// Or, you can use the `Promise` API.
getRequestedCards().then((response) => {
  const data = response.data;
  console.log(data.requests);
});
```

### Using `GetRequestedCards`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getRequestedCardsRef } from '@firebasegen/default-connector';


// Call the `getRequestedCardsRef()` function to get a reference to the query.
const ref = getRequestedCardsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getRequestedCardsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.requests);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.requests);
});
```

## GetSets
You can execute the `GetSets` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getSets(): QueryPromise<GetSetsData, undefined>;

interface GetSetsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetSetsData, undefined>;
}
export const getSetsRef: GetSetsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getSets(dc: DataConnect): QueryPromise<GetSetsData, undefined>;

interface GetSetsRef {
  ...
  (dc: DataConnect): QueryRef<GetSetsData, undefined>;
}
export const getSetsRef: GetSetsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getSetsRef:
```typescript
const name = getSetsRef.operationName;
console.log(name);
```

### Variables
The `GetSets` query has no variables.
### Return Type
Recall that executing the `GetSets` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetSetsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetSetsData {
  sets: ({
    id: UUIDString;
    displayName: string;
    code: string;
    releaseDate: DateString;
  } & Set_Key)[];
}
```
### Using `GetSets`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getSets } from '@firebasegen/default-connector';


// Call the `getSets()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getSets();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getSets(dataConnect);

console.log(data.sets);

// Or, you can use the `Promise` API.
getSets().then((response) => {
  const data = response.data;
  console.log(data.sets);
});
```

### Using `GetSets`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getSetsRef } from '@firebasegen/default-connector';


// Call the `getSetsRef()` function to get a reference to the query.
const ref = getSetsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getSetsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.sets);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.sets);
});
```

## GetCardsPossessedByUser
You can execute the `GetCardsPossessedByUser` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getCardsPossessedByUser(): QueryPromise<GetCardsPossessedByUserData, undefined>;

interface GetCardsPossessedByUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetCardsPossessedByUserData, undefined>;
}
export const getCardsPossessedByUserRef: GetCardsPossessedByUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getCardsPossessedByUser(dc: DataConnect): QueryPromise<GetCardsPossessedByUserData, undefined>;

interface GetCardsPossessedByUserRef {
  ...
  (dc: DataConnect): QueryRef<GetCardsPossessedByUserData, undefined>;
}
export const getCardsPossessedByUserRef: GetCardsPossessedByUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getCardsPossessedByUserRef:
```typescript
const name = getCardsPossessedByUserRef.operationName;
console.log(name);
```

### Variables
The `GetCardsPossessedByUser` query has no variables.
### Return Type
Recall that executing the `GetCardsPossessedByUser` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetCardsPossessedByUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetCardsPossessedByUserData {
  userCards: ({
    quantity: number;
    card: {
      id: UUIDString;
      cardNumber: string;
      description?: string | null;
      displayName: string;
      rarity: {
        displayName: string;
      };
        packs_via_CardPack: ({
          set: {
            code: string;
          };
        })[];
    } & Card_Key;
  })[];
}
```
### Using `GetCardsPossessedByUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getCardsPossessedByUser } from '@firebasegen/default-connector';


// Call the `getCardsPossessedByUser()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getCardsPossessedByUser();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getCardsPossessedByUser(dataConnect);

console.log(data.userCards);

// Or, you can use the `Promise` API.
getCardsPossessedByUser().then((response) => {
  const data = response.data;
  console.log(data.userCards);
});
```

### Using `GetCardsPossessedByUser`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getCardsPossessedByUserRef } from '@firebasegen/default-connector';


// Call the `getCardsPossessedByUserRef()` function to get a reference to the query.
const ref = getCardsPossessedByUserRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getCardsPossessedByUserRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.userCards);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.userCards);
});
```

## GetUser
You can execute the `GetUser` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getUser(): QueryPromise<GetUserData, undefined>;

interface GetUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetUserData, undefined>;
}
export const getUserRef: GetUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getUser(dc: DataConnect): QueryPromise<GetUserData, undefined>;

interface GetUserRef {
  ...
  (dc: DataConnect): QueryRef<GetUserData, undefined>;
}
export const getUserRef: GetUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getUserRef:
```typescript
const name = getUserRef.operationName;
console.log(name);
```

### Variables
The `GetUser` query has no variables.
### Return Type
Recall that executing the `GetUser` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetUserData {
  user?: {
    uid: string;
    createdAt: TimestampString;
    displayName?: string | null;
    email?: string | null;
    lastLogin?: TimestampString | null;
    lastUpdate?: TimestampString | null;
  } & User_Key;
}
```
### Using `GetUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getUser } from '@firebasegen/default-connector';


// Call the `getUser()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getUser();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getUser(dataConnect);

console.log(data.user);

// Or, you can use the `Promise` API.
getUser().then((response) => {
  const data = response.data;
  console.log(data.user);
});
```

### Using `GetUser`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getUserRef } from '@firebasegen/default-connector';


// Call the `getUserRef()` function to get a reference to the query.
const ref = getUserRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getUserRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.user);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.user);
});
```

## GetCards
You can execute the `GetCards` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getCards(): QueryPromise<GetCardsData, undefined>;

interface GetCardsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetCardsData, undefined>;
}
export const getCardsRef: GetCardsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getCards(dc: DataConnect): QueryPromise<GetCardsData, undefined>;

interface GetCardsRef {
  ...
  (dc: DataConnect): QueryRef<GetCardsData, undefined>;
}
export const getCardsRef: GetCardsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getCardsRef:
```typescript
const name = getCardsRef.operationName;
console.log(name);
```

### Variables
The `GetCards` query has no variables.
### Return Type
Recall that executing the `GetCards` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetCardsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetCardsData {
  cards: ({
    id: UUIDString;
    cardNumber: string;
    displayName: string;
    rarity: {
      code: string;
    };
      packs_via_CardPack: ({
        set: {
          code: string;
        };
      })[];
  } & Card_Key)[];
}
```
### Using `GetCards`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getCards } from '@firebasegen/default-connector';


// Call the `getCards()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getCards();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getCards(dataConnect);

console.log(data.cards);

// Or, you can use the `Promise` API.
getCards().then((response) => {
  const data = response.data;
  console.log(data.cards);
});
```

### Using `GetCards`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getCardsRef } from '@firebasegen/default-connector';


// Call the `getCardsRef()` function to get a reference to the query.
const ref = getCardsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getCardsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.cards);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.cards);
});
```

## GetCardById
You can execute the `GetCardById` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getCardById(vars: GetCardByIdVariables): QueryPromise<GetCardByIdData, GetCardByIdVariables>;

interface GetCardByIdRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetCardByIdVariables): QueryRef<GetCardByIdData, GetCardByIdVariables>;
}
export const getCardByIdRef: GetCardByIdRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getCardById(dc: DataConnect, vars: GetCardByIdVariables): QueryPromise<GetCardByIdData, GetCardByIdVariables>;

interface GetCardByIdRef {
  ...
  (dc: DataConnect, vars: GetCardByIdVariables): QueryRef<GetCardByIdData, GetCardByIdVariables>;
}
export const getCardByIdRef: GetCardByIdRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getCardByIdRef:
```typescript
const name = getCardByIdRef.operationName;
console.log(name);
```

### Variables
The `GetCardById` query requires an argument of type `GetCardByIdVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetCardByIdVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `GetCardById` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetCardByIdData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetCardByIdData {
  card?: {
    id: UUIDString;
    cardNumber: string;
    description?: string | null;
    displayName: string;
    rarity: {
      displayName: string;
    };
      packs_via_CardPack: ({
        displayName: string;
        set: {
          code: string;
          displayName: string;
          releaseDate: DateString;
        };
      })[];
  } & Card_Key;
}
```
### Using `GetCardById`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getCardById, GetCardByIdVariables } from '@firebasegen/default-connector';

// The `GetCardById` query requires an argument of type `GetCardByIdVariables`:
const getCardByIdVars: GetCardByIdVariables = {
  id: ..., 
};

// Call the `getCardById()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getCardById(getCardByIdVars);
// Variables can be defined inline as well.
const { data } = await getCardById({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getCardById(dataConnect, getCardByIdVars);

console.log(data.card);

// Or, you can use the `Promise` API.
getCardById(getCardByIdVars).then((response) => {
  const data = response.data;
  console.log(data.card);
});
```

### Using `GetCardById`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getCardByIdRef, GetCardByIdVariables } from '@firebasegen/default-connector';

// The `GetCardById` query requires an argument of type `GetCardByIdVariables`:
const getCardByIdVars: GetCardByIdVariables = {
  id: ..., 
};

// Call the `getCardByIdRef()` function to get a reference to the query.
const ref = getCardByIdRef(getCardByIdVars);
// Variables can be defined inline as well.
const ref = getCardByIdRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getCardByIdRef(dataConnect, getCardByIdVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.card);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.card);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `default` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## AddRelatedCard
You can execute the `AddRelatedCard` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
addRelatedCard(vars: AddRelatedCardVariables): MutationPromise<AddRelatedCardData, AddRelatedCardVariables>;

interface AddRelatedCardRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: AddRelatedCardVariables): MutationRef<AddRelatedCardData, AddRelatedCardVariables>;
}
export const addRelatedCardRef: AddRelatedCardRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
addRelatedCard(dc: DataConnect, vars: AddRelatedCardVariables): MutationPromise<AddRelatedCardData, AddRelatedCardVariables>;

interface AddRelatedCardRef {
  ...
  (dc: DataConnect, vars: AddRelatedCardVariables): MutationRef<AddRelatedCardData, AddRelatedCardVariables>;
}
export const addRelatedCardRef: AddRelatedCardRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the addRelatedCardRef:
```typescript
const name = addRelatedCardRef.operationName;
console.log(name);
```

### Variables
The `AddRelatedCard` mutation requires an argument of type `AddRelatedCardVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface AddRelatedCardVariables {
  cardId: UUIDString;
  relatedCardId: UUIDString;
}
```
### Return Type
Recall that executing the `AddRelatedCard` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `AddRelatedCardData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface AddRelatedCardData {
  relatedCard_insert: RelatedCard_Key;
}
```
### Using `AddRelatedCard`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, addRelatedCard, AddRelatedCardVariables } from '@firebasegen/default-connector';

// The `AddRelatedCard` mutation requires an argument of type `AddRelatedCardVariables`:
const addRelatedCardVars: AddRelatedCardVariables = {
  cardId: ..., 
  relatedCardId: ..., 
};

// Call the `addRelatedCard()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await addRelatedCard(addRelatedCardVars);
// Variables can be defined inline as well.
const { data } = await addRelatedCard({ cardId: ..., relatedCardId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await addRelatedCard(dataConnect, addRelatedCardVars);

console.log(data.relatedCard_insert);

// Or, you can use the `Promise` API.
addRelatedCard(addRelatedCardVars).then((response) => {
  const data = response.data;
  console.log(data.relatedCard_insert);
});
```

### Using `AddRelatedCard`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, addRelatedCardRef, AddRelatedCardVariables } from '@firebasegen/default-connector';

// The `AddRelatedCard` mutation requires an argument of type `AddRelatedCardVariables`:
const addRelatedCardVars: AddRelatedCardVariables = {
  cardId: ..., 
  relatedCardId: ..., 
};

// Call the `addRelatedCardRef()` function to get a reference to the mutation.
const ref = addRelatedCardRef(addRelatedCardVars);
// Variables can be defined inline as well.
const ref = addRelatedCardRef({ cardId: ..., relatedCardId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = addRelatedCardRef(dataConnect, addRelatedCardVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.relatedCard_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.relatedCard_insert);
});
```

## AddUser
You can execute the `AddUser` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
addUser(): MutationPromise<AddUserData, undefined>;

interface AddUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<AddUserData, undefined>;
}
export const addUserRef: AddUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
addUser(dc: DataConnect): MutationPromise<AddUserData, undefined>;

interface AddUserRef {
  ...
  (dc: DataConnect): MutationRef<AddUserData, undefined>;
}
export const addUserRef: AddUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the addUserRef:
```typescript
const name = addUserRef.operationName;
console.log(name);
```

### Variables
The `AddUser` mutation has no variables.
### Return Type
Recall that executing the `AddUser` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `AddUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface AddUserData {
  user_insert: User_Key;
}
```
### Using `AddUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, addUser } from '@firebasegen/default-connector';


// Call the `addUser()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await addUser();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await addUser(dataConnect);

console.log(data.user_insert);

// Or, you can use the `Promise` API.
addUser().then((response) => {
  const data = response.data;
  console.log(data.user_insert);
});
```

### Using `AddUser`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, addUserRef } from '@firebasegen/default-connector';


// Call the `addUserRef()` function to get a reference to the mutation.
const ref = addUserRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = addUserRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.user_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.user_insert);
});
```

## ChangeUserDisplayName
You can execute the `ChangeUserDisplayName` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
changeUserDisplayName(vars: ChangeUserDisplayNameVariables): MutationPromise<ChangeUserDisplayNameData, ChangeUserDisplayNameVariables>;

interface ChangeUserDisplayNameRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: ChangeUserDisplayNameVariables): MutationRef<ChangeUserDisplayNameData, ChangeUserDisplayNameVariables>;
}
export const changeUserDisplayNameRef: ChangeUserDisplayNameRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
changeUserDisplayName(dc: DataConnect, vars: ChangeUserDisplayNameVariables): MutationPromise<ChangeUserDisplayNameData, ChangeUserDisplayNameVariables>;

interface ChangeUserDisplayNameRef {
  ...
  (dc: DataConnect, vars: ChangeUserDisplayNameVariables): MutationRef<ChangeUserDisplayNameData, ChangeUserDisplayNameVariables>;
}
export const changeUserDisplayNameRef: ChangeUserDisplayNameRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the changeUserDisplayNameRef:
```typescript
const name = changeUserDisplayNameRef.operationName;
console.log(name);
```

### Variables
The `ChangeUserDisplayName` mutation requires an argument of type `ChangeUserDisplayNameVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface ChangeUserDisplayNameVariables {
  displayName: string;
}
```
### Return Type
Recall that executing the `ChangeUserDisplayName` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ChangeUserDisplayNameData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ChangeUserDisplayNameData {
  user_update?: User_Key | null;
}
```
### Using `ChangeUserDisplayName`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, changeUserDisplayName, ChangeUserDisplayNameVariables } from '@firebasegen/default-connector';

// The `ChangeUserDisplayName` mutation requires an argument of type `ChangeUserDisplayNameVariables`:
const changeUserDisplayNameVars: ChangeUserDisplayNameVariables = {
  displayName: ..., 
};

// Call the `changeUserDisplayName()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await changeUserDisplayName(changeUserDisplayNameVars);
// Variables can be defined inline as well.
const { data } = await changeUserDisplayName({ displayName: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await changeUserDisplayName(dataConnect, changeUserDisplayNameVars);

console.log(data.user_update);

// Or, you can use the `Promise` API.
changeUserDisplayName(changeUserDisplayNameVars).then((response) => {
  const data = response.data;
  console.log(data.user_update);
});
```

### Using `ChangeUserDisplayName`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, changeUserDisplayNameRef, ChangeUserDisplayNameVariables } from '@firebasegen/default-connector';

// The `ChangeUserDisplayName` mutation requires an argument of type `ChangeUserDisplayNameVariables`:
const changeUserDisplayNameVars: ChangeUserDisplayNameVariables = {
  displayName: ..., 
};

// Call the `changeUserDisplayNameRef()` function to get a reference to the mutation.
const ref = changeUserDisplayNameRef(changeUserDisplayNameVars);
// Variables can be defined inline as well.
const ref = changeUserDisplayNameRef({ displayName: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = changeUserDisplayNameRef(dataConnect, changeUserDisplayNameVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.user_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.user_update);
});
```

## ChangeUserEmail
You can execute the `ChangeUserEmail` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
changeUserEmail(vars: ChangeUserEmailVariables): MutationPromise<ChangeUserEmailData, ChangeUserEmailVariables>;

interface ChangeUserEmailRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: ChangeUserEmailVariables): MutationRef<ChangeUserEmailData, ChangeUserEmailVariables>;
}
export const changeUserEmailRef: ChangeUserEmailRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
changeUserEmail(dc: DataConnect, vars: ChangeUserEmailVariables): MutationPromise<ChangeUserEmailData, ChangeUserEmailVariables>;

interface ChangeUserEmailRef {
  ...
  (dc: DataConnect, vars: ChangeUserEmailVariables): MutationRef<ChangeUserEmailData, ChangeUserEmailVariables>;
}
export const changeUserEmailRef: ChangeUserEmailRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the changeUserEmailRef:
```typescript
const name = changeUserEmailRef.operationName;
console.log(name);
```

### Variables
The `ChangeUserEmail` mutation requires an argument of type `ChangeUserEmailVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface ChangeUserEmailVariables {
  email: string;
}
```
### Return Type
Recall that executing the `ChangeUserEmail` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ChangeUserEmailData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ChangeUserEmailData {
  user_update?: User_Key | null;
}
```
### Using `ChangeUserEmail`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, changeUserEmail, ChangeUserEmailVariables } from '@firebasegen/default-connector';

// The `ChangeUserEmail` mutation requires an argument of type `ChangeUserEmailVariables`:
const changeUserEmailVars: ChangeUserEmailVariables = {
  email: ..., 
};

// Call the `changeUserEmail()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await changeUserEmail(changeUserEmailVars);
// Variables can be defined inline as well.
const { data } = await changeUserEmail({ email: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await changeUserEmail(dataConnect, changeUserEmailVars);

console.log(data.user_update);

// Or, you can use the `Promise` API.
changeUserEmail(changeUserEmailVars).then((response) => {
  const data = response.data;
  console.log(data.user_update);
});
```

### Using `ChangeUserEmail`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, changeUserEmailRef, ChangeUserEmailVariables } from '@firebasegen/default-connector';

// The `ChangeUserEmail` mutation requires an argument of type `ChangeUserEmailVariables`:
const changeUserEmailVars: ChangeUserEmailVariables = {
  email: ..., 
};

// Call the `changeUserEmailRef()` function to get a reference to the mutation.
const ref = changeUserEmailRef(changeUserEmailVars);
// Variables can be defined inline as well.
const ref = changeUserEmailRef({ email: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = changeUserEmailRef(dataConnect, changeUserEmailVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.user_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.user_update);
});
```

## ChangeUserLastLogin
You can execute the `ChangeUserLastLogin` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
changeUserLastLogin(): MutationPromise<ChangeUserLastLoginData, undefined>;

interface ChangeUserLastLoginRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<ChangeUserLastLoginData, undefined>;
}
export const changeUserLastLoginRef: ChangeUserLastLoginRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
changeUserLastLogin(dc: DataConnect): MutationPromise<ChangeUserLastLoginData, undefined>;

interface ChangeUserLastLoginRef {
  ...
  (dc: DataConnect): MutationRef<ChangeUserLastLoginData, undefined>;
}
export const changeUserLastLoginRef: ChangeUserLastLoginRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the changeUserLastLoginRef:
```typescript
const name = changeUserLastLoginRef.operationName;
console.log(name);
```

### Variables
The `ChangeUserLastLogin` mutation has no variables.
### Return Type
Recall that executing the `ChangeUserLastLogin` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ChangeUserLastLoginData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ChangeUserLastLoginData {
  user_update?: User_Key | null;
}
```
### Using `ChangeUserLastLogin`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, changeUserLastLogin } from '@firebasegen/default-connector';


// Call the `changeUserLastLogin()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await changeUserLastLogin();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await changeUserLastLogin(dataConnect);

console.log(data.user_update);

// Or, you can use the `Promise` API.
changeUserLastLogin().then((response) => {
  const data = response.data;
  console.log(data.user_update);
});
```

### Using `ChangeUserLastLogin`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, changeUserLastLoginRef } from '@firebasegen/default-connector';


// Call the `changeUserLastLoginRef()` function to get a reference to the mutation.
const ref = changeUserLastLoginRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = changeUserLastLoginRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.user_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.user_update);
});
```

## AddCardsPack
You can execute the `AddCardsPack` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
addCardsPack(vars?: AddCardsPackVariables): MutationPromise<AddCardsPackData, AddCardsPackVariables>;

interface AddCardsPackRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars?: AddCardsPackVariables): MutationRef<AddCardsPackData, AddCardsPackVariables>;
}
export const addCardsPackRef: AddCardsPackRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
addCardsPack(dc: DataConnect, vars?: AddCardsPackVariables): MutationPromise<AddCardsPackData, AddCardsPackVariables>;

interface AddCardsPackRef {
  ...
  (dc: DataConnect, vars?: AddCardsPackVariables): MutationRef<AddCardsPackData, AddCardsPackVariables>;
}
export const addCardsPackRef: AddCardsPackRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the addCardsPackRef:
```typescript
const name = addCardsPackRef.operationName;
console.log(name);
```

### Variables
The `AddCardsPack` mutation has an optional argument of type `AddCardsPackVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface AddCardsPackVariables {
  cardId?: UUIDString | null;
  packId?: UUIDString | null;
}
```
### Return Type
Recall that executing the `AddCardsPack` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `AddCardsPackData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface AddCardsPackData {
  cardPack_insert: CardPack_Key;
}
```
### Using `AddCardsPack`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, addCardsPack, AddCardsPackVariables } from '@firebasegen/default-connector';

// The `AddCardsPack` mutation has an optional argument of type `AddCardsPackVariables`:
const addCardsPackVars: AddCardsPackVariables = {
  cardId: ..., // optional
  packId: ..., // optional
};

// Call the `addCardsPack()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await addCardsPack(addCardsPackVars);
// Variables can be defined inline as well.
const { data } = await addCardsPack({ cardId: ..., packId: ..., });
// Since all variables are optional for this mutation, you can omit the `AddCardsPackVariables` argument.
const { data } = await addCardsPack();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await addCardsPack(dataConnect, addCardsPackVars);

console.log(data.cardPack_insert);

// Or, you can use the `Promise` API.
addCardsPack(addCardsPackVars).then((response) => {
  const data = response.data;
  console.log(data.cardPack_insert);
});
```

### Using `AddCardsPack`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, addCardsPackRef, AddCardsPackVariables } from '@firebasegen/default-connector';

// The `AddCardsPack` mutation has an optional argument of type `AddCardsPackVariables`:
const addCardsPackVars: AddCardsPackVariables = {
  cardId: ..., // optional
  packId: ..., // optional
};

// Call the `addCardsPackRef()` function to get a reference to the mutation.
const ref = addCardsPackRef(addCardsPackVars);
// Variables can be defined inline as well.
const ref = addCardsPackRef({ cardId: ..., packId: ..., });
// Since all variables are optional for this mutation, you can omit the `AddCardsPackVariables` argument.
const ref = addCardsPackRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = addCardsPackRef(dataConnect, addCardsPackVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.cardPack_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.cardPack_insert);
});
```

## AddPack
You can execute the `AddPack` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
addPack(vars?: AddPackVariables): MutationPromise<AddPackData, AddPackVariables>;

interface AddPackRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars?: AddPackVariables): MutationRef<AddPackData, AddPackVariables>;
}
export const addPackRef: AddPackRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
addPack(dc: DataConnect, vars?: AddPackVariables): MutationPromise<AddPackData, AddPackVariables>;

interface AddPackRef {
  ...
  (dc: DataConnect, vars?: AddPackVariables): MutationRef<AddPackData, AddPackVariables>;
}
export const addPackRef: AddPackRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the addPackRef:
```typescript
const name = addPackRef.operationName;
console.log(name);
```

### Variables
The `AddPack` mutation has an optional argument of type `AddPackVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface AddPackVariables {
  displayName?: string | null;
  setCode?: string | null;
}
```
### Return Type
Recall that executing the `AddPack` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `AddPackData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface AddPackData {
  query?: {
    sets: ({
      id: UUIDString;
    } & Set_Key)[];
  };
    pack_insert: Pack_Key;
}
```
### Using `AddPack`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, addPack, AddPackVariables } from '@firebasegen/default-connector';

// The `AddPack` mutation has an optional argument of type `AddPackVariables`:
const addPackVars: AddPackVariables = {
  displayName: ..., // optional
  setCode: ..., // optional
};

// Call the `addPack()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await addPack(addPackVars);
// Variables can be defined inline as well.
const { data } = await addPack({ displayName: ..., setCode: ..., });
// Since all variables are optional for this mutation, you can omit the `AddPackVariables` argument.
const { data } = await addPack();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await addPack(dataConnect, addPackVars);

console.log(data.query);
console.log(data.pack_insert);

// Or, you can use the `Promise` API.
addPack(addPackVars).then((response) => {
  const data = response.data;
  console.log(data.query);
  console.log(data.pack_insert);
});
```

### Using `AddPack`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, addPackRef, AddPackVariables } from '@firebasegen/default-connector';

// The `AddPack` mutation has an optional argument of type `AddPackVariables`:
const addPackVars: AddPackVariables = {
  displayName: ..., // optional
  setCode: ..., // optional
};

// Call the `addPackRef()` function to get a reference to the mutation.
const ref = addPackRef(addPackVars);
// Variables can be defined inline as well.
const ref = addPackRef({ displayName: ..., setCode: ..., });
// Since all variables are optional for this mutation, you can omit the `AddPackVariables` argument.
const ref = addPackRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = addPackRef(dataConnect, addPackVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.query);
console.log(data.pack_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.query);
  console.log(data.pack_insert);
});
```

## AddSet
You can execute the `AddSet` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
addSet(vars?: AddSetVariables): MutationPromise<AddSetData, AddSetVariables>;

interface AddSetRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars?: AddSetVariables): MutationRef<AddSetData, AddSetVariables>;
}
export const addSetRef: AddSetRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
addSet(dc: DataConnect, vars?: AddSetVariables): MutationPromise<AddSetData, AddSetVariables>;

interface AddSetRef {
  ...
  (dc: DataConnect, vars?: AddSetVariables): MutationRef<AddSetData, AddSetVariables>;
}
export const addSetRef: AddSetRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the addSetRef:
```typescript
const name = addSetRef.operationName;
console.log(name);
```

### Variables
The `AddSet` mutation has an optional argument of type `AddSetVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface AddSetVariables {
  displayName?: string | null;
  code?: string | null;
  releaseDate?: DateString | null;
}
```
### Return Type
Recall that executing the `AddSet` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `AddSetData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface AddSetData {
  set_insert: Set_Key;
}
```
### Using `AddSet`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, addSet, AddSetVariables } from '@firebasegen/default-connector';

// The `AddSet` mutation has an optional argument of type `AddSetVariables`:
const addSetVars: AddSetVariables = {
  displayName: ..., // optional
  code: ..., // optional
  releaseDate: ..., // optional
};

// Call the `addSet()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await addSet(addSetVars);
// Variables can be defined inline as well.
const { data } = await addSet({ displayName: ..., code: ..., releaseDate: ..., });
// Since all variables are optional for this mutation, you can omit the `AddSetVariables` argument.
const { data } = await addSet();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await addSet(dataConnect, addSetVars);

console.log(data.set_insert);

// Or, you can use the `Promise` API.
addSet(addSetVars).then((response) => {
  const data = response.data;
  console.log(data.set_insert);
});
```

### Using `AddSet`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, addSetRef, AddSetVariables } from '@firebasegen/default-connector';

// The `AddSet` mutation has an optional argument of type `AddSetVariables`:
const addSetVars: AddSetVariables = {
  displayName: ..., // optional
  code: ..., // optional
  releaseDate: ..., // optional
};

// Call the `addSetRef()` function to get a reference to the mutation.
const ref = addSetRef(addSetVars);
// Variables can be defined inline as well.
const ref = addSetRef({ displayName: ..., code: ..., releaseDate: ..., });
// Since all variables are optional for this mutation, you can omit the `AddSetVariables` argument.
const ref = addSetRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = addSetRef(dataConnect, addSetVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.set_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.set_insert);
});
```

## AddCardToUser
You can execute the `AddCardToUser` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
addCardToUser(vars: AddCardToUserVariables): MutationPromise<AddCardToUserData, AddCardToUserVariables>;

interface AddCardToUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: AddCardToUserVariables): MutationRef<AddCardToUserData, AddCardToUserVariables>;
}
export const addCardToUserRef: AddCardToUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
addCardToUser(dc: DataConnect, vars: AddCardToUserVariables): MutationPromise<AddCardToUserData, AddCardToUserVariables>;

interface AddCardToUserRef {
  ...
  (dc: DataConnect, vars: AddCardToUserVariables): MutationRef<AddCardToUserData, AddCardToUserVariables>;
}
export const addCardToUserRef: AddCardToUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the addCardToUserRef:
```typescript
const name = addCardToUserRef.operationName;
console.log(name);
```

### Variables
The `AddCardToUser` mutation requires an argument of type `AddCardToUserVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface AddCardToUserVariables {
  cardId: UUIDString;
}
```
### Return Type
Recall that executing the `AddCardToUser` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `AddCardToUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface AddCardToUserData {
  userCard_insert: UserCard_Key;
}
```
### Using `AddCardToUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, addCardToUser, AddCardToUserVariables } from '@firebasegen/default-connector';

// The `AddCardToUser` mutation requires an argument of type `AddCardToUserVariables`:
const addCardToUserVars: AddCardToUserVariables = {
  cardId: ..., 
};

// Call the `addCardToUser()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await addCardToUser(addCardToUserVars);
// Variables can be defined inline as well.
const { data } = await addCardToUser({ cardId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await addCardToUser(dataConnect, addCardToUserVars);

console.log(data.userCard_insert);

// Or, you can use the `Promise` API.
addCardToUser(addCardToUserVars).then((response) => {
  const data = response.data;
  console.log(data.userCard_insert);
});
```

### Using `AddCardToUser`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, addCardToUserRef, AddCardToUserVariables } from '@firebasegen/default-connector';

// The `AddCardToUser` mutation requires an argument of type `AddCardToUserVariables`:
const addCardToUserVars: AddCardToUserVariables = {
  cardId: ..., 
};

// Call the `addCardToUserRef()` function to get a reference to the mutation.
const ref = addCardToUserRef(addCardToUserVars);
// Variables can be defined inline as well.
const ref = addCardToUserRef({ cardId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = addCardToUserRef(dataConnect, addCardToUserVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.userCard_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.userCard_insert);
});
```

## RemoveCardFromUser
You can execute the `RemoveCardFromUser` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
removeCardFromUser(vars: RemoveCardFromUserVariables): MutationPromise<RemoveCardFromUserData, RemoveCardFromUserVariables>;

interface RemoveCardFromUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: RemoveCardFromUserVariables): MutationRef<RemoveCardFromUserData, RemoveCardFromUserVariables>;
}
export const removeCardFromUserRef: RemoveCardFromUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
removeCardFromUser(dc: DataConnect, vars: RemoveCardFromUserVariables): MutationPromise<RemoveCardFromUserData, RemoveCardFromUserVariables>;

interface RemoveCardFromUserRef {
  ...
  (dc: DataConnect, vars: RemoveCardFromUserVariables): MutationRef<RemoveCardFromUserData, RemoveCardFromUserVariables>;
}
export const removeCardFromUserRef: RemoveCardFromUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the removeCardFromUserRef:
```typescript
const name = removeCardFromUserRef.operationName;
console.log(name);
```

### Variables
The `RemoveCardFromUser` mutation requires an argument of type `RemoveCardFromUserVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface RemoveCardFromUserVariables {
  cardId: UUIDString;
}
```
### Return Type
Recall that executing the `RemoveCardFromUser` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `RemoveCardFromUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface RemoveCardFromUserData {
  userCard_delete?: UserCard_Key | null;
}
```
### Using `RemoveCardFromUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, removeCardFromUser, RemoveCardFromUserVariables } from '@firebasegen/default-connector';

// The `RemoveCardFromUser` mutation requires an argument of type `RemoveCardFromUserVariables`:
const removeCardFromUserVars: RemoveCardFromUserVariables = {
  cardId: ..., 
};

// Call the `removeCardFromUser()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await removeCardFromUser(removeCardFromUserVars);
// Variables can be defined inline as well.
const { data } = await removeCardFromUser({ cardId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await removeCardFromUser(dataConnect, removeCardFromUserVars);

console.log(data.userCard_delete);

// Or, you can use the `Promise` API.
removeCardFromUser(removeCardFromUserVars).then((response) => {
  const data = response.data;
  console.log(data.userCard_delete);
});
```

### Using `RemoveCardFromUser`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, removeCardFromUserRef, RemoveCardFromUserVariables } from '@firebasegen/default-connector';

// The `RemoveCardFromUser` mutation requires an argument of type `RemoveCardFromUserVariables`:
const removeCardFromUserVars: RemoveCardFromUserVariables = {
  cardId: ..., 
};

// Call the `removeCardFromUserRef()` function to get a reference to the mutation.
const ref = removeCardFromUserRef(removeCardFromUserVars);
// Variables can be defined inline as well.
const ref = removeCardFromUserRef({ cardId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = removeCardFromUserRef(dataConnect, removeCardFromUserVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.userCard_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.userCard_delete);
});
```

## UpdateCardQuantity
You can execute the `UpdateCardQuantity` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateCardQuantity(vars: UpdateCardQuantityVariables): MutationPromise<UpdateCardQuantityData, UpdateCardQuantityVariables>;

interface UpdateCardQuantityRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateCardQuantityVariables): MutationRef<UpdateCardQuantityData, UpdateCardQuantityVariables>;
}
export const updateCardQuantityRef: UpdateCardQuantityRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateCardQuantity(dc: DataConnect, vars: UpdateCardQuantityVariables): MutationPromise<UpdateCardQuantityData, UpdateCardQuantityVariables>;

interface UpdateCardQuantityRef {
  ...
  (dc: DataConnect, vars: UpdateCardQuantityVariables): MutationRef<UpdateCardQuantityData, UpdateCardQuantityVariables>;
}
export const updateCardQuantityRef: UpdateCardQuantityRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateCardQuantityRef:
```typescript
const name = updateCardQuantityRef.operationName;
console.log(name);
```

### Variables
The `UpdateCardQuantity` mutation requires an argument of type `UpdateCardQuantityVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateCardQuantityVariables {
  cardId: UUIDString;
  quantity: number;
}
```
### Return Type
Recall that executing the `UpdateCardQuantity` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateCardQuantityData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateCardQuantityData {
  userCard_update?: UserCard_Key | null;
}
```
### Using `UpdateCardQuantity`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateCardQuantity, UpdateCardQuantityVariables } from '@firebasegen/default-connector';

// The `UpdateCardQuantity` mutation requires an argument of type `UpdateCardQuantityVariables`:
const updateCardQuantityVars: UpdateCardQuantityVariables = {
  cardId: ..., 
  quantity: ..., 
};

// Call the `updateCardQuantity()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateCardQuantity(updateCardQuantityVars);
// Variables can be defined inline as well.
const { data } = await updateCardQuantity({ cardId: ..., quantity: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateCardQuantity(dataConnect, updateCardQuantityVars);

console.log(data.userCard_update);

// Or, you can use the `Promise` API.
updateCardQuantity(updateCardQuantityVars).then((response) => {
  const data = response.data;
  console.log(data.userCard_update);
});
```

### Using `UpdateCardQuantity`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateCardQuantityRef, UpdateCardQuantityVariables } from '@firebasegen/default-connector';

// The `UpdateCardQuantity` mutation requires an argument of type `UpdateCardQuantityVariables`:
const updateCardQuantityVars: UpdateCardQuantityVariables = {
  cardId: ..., 
  quantity: ..., 
};

// Call the `updateCardQuantityRef()` function to get a reference to the mutation.
const ref = updateCardQuantityRef(updateCardQuantityVars);
// Variables can be defined inline as well.
const ref = updateCardQuantityRef({ cardId: ..., quantity: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateCardQuantityRef(dataConnect, updateCardQuantityVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.userCard_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.userCard_update);
});
```

## AddCard
You can execute the `AddCard` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
addCard(vars?: AddCardVariables): MutationPromise<AddCardData, AddCardVariables>;

interface AddCardRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars?: AddCardVariables): MutationRef<AddCardData, AddCardVariables>;
}
export const addCardRef: AddCardRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
addCard(dc: DataConnect, vars?: AddCardVariables): MutationPromise<AddCardData, AddCardVariables>;

interface AddCardRef {
  ...
  (dc: DataConnect, vars?: AddCardVariables): MutationRef<AddCardData, AddCardVariables>;
}
export const addCardRef: AddCardRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the addCardRef:
```typescript
const name = addCardRef.operationName;
console.log(name);
```

### Variables
The `AddCard` mutation has an optional argument of type `AddCardVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface AddCardVariables {
  displayName?: string | null;
  cardNumber?: string | null;
  rarityId?: UUIDString | null;
}
```
### Return Type
Recall that executing the `AddCard` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `AddCardData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface AddCardData {
  card_insert: Card_Key;
}
```
### Using `AddCard`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, addCard, AddCardVariables } from '@firebasegen/default-connector';

// The `AddCard` mutation has an optional argument of type `AddCardVariables`:
const addCardVars: AddCardVariables = {
  displayName: ..., // optional
  cardNumber: ..., // optional
  rarityId: ..., // optional
};

// Call the `addCard()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await addCard(addCardVars);
// Variables can be defined inline as well.
const { data } = await addCard({ displayName: ..., cardNumber: ..., rarityId: ..., });
// Since all variables are optional for this mutation, you can omit the `AddCardVariables` argument.
const { data } = await addCard();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await addCard(dataConnect, addCardVars);

console.log(data.card_insert);

// Or, you can use the `Promise` API.
addCard(addCardVars).then((response) => {
  const data = response.data;
  console.log(data.card_insert);
});
```

### Using `AddCard`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, addCardRef, AddCardVariables } from '@firebasegen/default-connector';

// The `AddCard` mutation has an optional argument of type `AddCardVariables`:
const addCardVars: AddCardVariables = {
  displayName: ..., // optional
  cardNumber: ..., // optional
  rarityId: ..., // optional
};

// Call the `addCardRef()` function to get a reference to the mutation.
const ref = addCardRef(addCardVars);
// Variables can be defined inline as well.
const ref = addCardRef({ displayName: ..., cardNumber: ..., rarityId: ..., });
// Since all variables are optional for this mutation, you can omit the `AddCardVariables` argument.
const ref = addCardRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = addCardRef(dataConnect, addCardVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.card_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.card_insert);
});
```

## AddCardToOffer
You can execute the `AddCardToOffer` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
addCardToOffer(vars: AddCardToOfferVariables): MutationPromise<AddCardToOfferData, AddCardToOfferVariables>;

interface AddCardToOfferRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: AddCardToOfferVariables): MutationRef<AddCardToOfferData, AddCardToOfferVariables>;
}
export const addCardToOfferRef: AddCardToOfferRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
addCardToOffer(dc: DataConnect, vars: AddCardToOfferVariables): MutationPromise<AddCardToOfferData, AddCardToOfferVariables>;

interface AddCardToOfferRef {
  ...
  (dc: DataConnect, vars: AddCardToOfferVariables): MutationRef<AddCardToOfferData, AddCardToOfferVariables>;
}
export const addCardToOfferRef: AddCardToOfferRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the addCardToOfferRef:
```typescript
const name = addCardToOfferRef.operationName;
console.log(name);
```

### Variables
The `AddCardToOffer` mutation requires an argument of type `AddCardToOfferVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface AddCardToOfferVariables {
  cardId: UUIDString;
}
```
### Return Type
Recall that executing the `AddCardToOffer` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `AddCardToOfferData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface AddCardToOfferData {
  offer_insert: Offer_Key;
}
```
### Using `AddCardToOffer`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, addCardToOffer, AddCardToOfferVariables } from '@firebasegen/default-connector';

// The `AddCardToOffer` mutation requires an argument of type `AddCardToOfferVariables`:
const addCardToOfferVars: AddCardToOfferVariables = {
  cardId: ..., 
};

// Call the `addCardToOffer()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await addCardToOffer(addCardToOfferVars);
// Variables can be defined inline as well.
const { data } = await addCardToOffer({ cardId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await addCardToOffer(dataConnect, addCardToOfferVars);

console.log(data.offer_insert);

// Or, you can use the `Promise` API.
addCardToOffer(addCardToOfferVars).then((response) => {
  const data = response.data;
  console.log(data.offer_insert);
});
```

### Using `AddCardToOffer`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, addCardToOfferRef, AddCardToOfferVariables } from '@firebasegen/default-connector';

// The `AddCardToOffer` mutation requires an argument of type `AddCardToOfferVariables`:
const addCardToOfferVars: AddCardToOfferVariables = {
  cardId: ..., 
};

// Call the `addCardToOfferRef()` function to get a reference to the mutation.
const ref = addCardToOfferRef(addCardToOfferVars);
// Variables can be defined inline as well.
const ref = addCardToOfferRef({ cardId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = addCardToOfferRef(dataConnect, addCardToOfferVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.offer_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.offer_insert);
});
```

## RemoveCardFromOffer
You can execute the `RemoveCardFromOffer` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
removeCardFromOffer(vars: RemoveCardFromOfferVariables): MutationPromise<RemoveCardFromOfferData, RemoveCardFromOfferVariables>;

interface RemoveCardFromOfferRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: RemoveCardFromOfferVariables): MutationRef<RemoveCardFromOfferData, RemoveCardFromOfferVariables>;
}
export const removeCardFromOfferRef: RemoveCardFromOfferRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
removeCardFromOffer(dc: DataConnect, vars: RemoveCardFromOfferVariables): MutationPromise<RemoveCardFromOfferData, RemoveCardFromOfferVariables>;

interface RemoveCardFromOfferRef {
  ...
  (dc: DataConnect, vars: RemoveCardFromOfferVariables): MutationRef<RemoveCardFromOfferData, RemoveCardFromOfferVariables>;
}
export const removeCardFromOfferRef: RemoveCardFromOfferRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the removeCardFromOfferRef:
```typescript
const name = removeCardFromOfferRef.operationName;
console.log(name);
```

### Variables
The `RemoveCardFromOffer` mutation requires an argument of type `RemoveCardFromOfferVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface RemoveCardFromOfferVariables {
  cardId: UUIDString;
}
```
### Return Type
Recall that executing the `RemoveCardFromOffer` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `RemoveCardFromOfferData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface RemoveCardFromOfferData {
  offer_delete?: Offer_Key | null;
}
```
### Using `RemoveCardFromOffer`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, removeCardFromOffer, RemoveCardFromOfferVariables } from '@firebasegen/default-connector';

// The `RemoveCardFromOffer` mutation requires an argument of type `RemoveCardFromOfferVariables`:
const removeCardFromOfferVars: RemoveCardFromOfferVariables = {
  cardId: ..., 
};

// Call the `removeCardFromOffer()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await removeCardFromOffer(removeCardFromOfferVars);
// Variables can be defined inline as well.
const { data } = await removeCardFromOffer({ cardId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await removeCardFromOffer(dataConnect, removeCardFromOfferVars);

console.log(data.offer_delete);

// Or, you can use the `Promise` API.
removeCardFromOffer(removeCardFromOfferVars).then((response) => {
  const data = response.data;
  console.log(data.offer_delete);
});
```

### Using `RemoveCardFromOffer`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, removeCardFromOfferRef, RemoveCardFromOfferVariables } from '@firebasegen/default-connector';

// The `RemoveCardFromOffer` mutation requires an argument of type `RemoveCardFromOfferVariables`:
const removeCardFromOfferVars: RemoveCardFromOfferVariables = {
  cardId: ..., 
};

// Call the `removeCardFromOfferRef()` function to get a reference to the mutation.
const ref = removeCardFromOfferRef(removeCardFromOfferVars);
// Variables can be defined inline as well.
const ref = removeCardFromOfferRef({ cardId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = removeCardFromOfferRef(dataConnect, removeCardFromOfferVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.offer_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.offer_delete);
});
```

## AddRarity
You can execute the `AddRarity` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
addRarity(vars: AddRarityVariables): MutationPromise<AddRarityData, AddRarityVariables>;

interface AddRarityRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: AddRarityVariables): MutationRef<AddRarityData, AddRarityVariables>;
}
export const addRarityRef: AddRarityRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
addRarity(dc: DataConnect, vars: AddRarityVariables): MutationPromise<AddRarityData, AddRarityVariables>;

interface AddRarityRef {
  ...
  (dc: DataConnect, vars: AddRarityVariables): MutationRef<AddRarityData, AddRarityVariables>;
}
export const addRarityRef: AddRarityRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the addRarityRef:
```typescript
const name = addRarityRef.operationName;
console.log(name);
```

### Variables
The `AddRarity` mutation requires an argument of type `AddRarityVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface AddRarityVariables {
  chanceMultiplier: number;
  displayName?: string | null;
  code?: string | null;
  description?: string | null;
}
```
### Return Type
Recall that executing the `AddRarity` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `AddRarityData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface AddRarityData {
  rarity_insert: Rarity_Key;
}
```
### Using `AddRarity`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, addRarity, AddRarityVariables } from '@firebasegen/default-connector';

// The `AddRarity` mutation requires an argument of type `AddRarityVariables`:
const addRarityVars: AddRarityVariables = {
  chanceMultiplier: ..., 
  displayName: ..., // optional
  code: ..., // optional
  description: ..., // optional
};

// Call the `addRarity()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await addRarity(addRarityVars);
// Variables can be defined inline as well.
const { data } = await addRarity({ chanceMultiplier: ..., displayName: ..., code: ..., description: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await addRarity(dataConnect, addRarityVars);

console.log(data.rarity_insert);

// Or, you can use the `Promise` API.
addRarity(addRarityVars).then((response) => {
  const data = response.data;
  console.log(data.rarity_insert);
});
```

### Using `AddRarity`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, addRarityRef, AddRarityVariables } from '@firebasegen/default-connector';

// The `AddRarity` mutation requires an argument of type `AddRarityVariables`:
const addRarityVars: AddRarityVariables = {
  chanceMultiplier: ..., 
  displayName: ..., // optional
  code: ..., // optional
  description: ..., // optional
};

// Call the `addRarityRef()` function to get a reference to the mutation.
const ref = addRarityRef(addRarityVars);
// Variables can be defined inline as well.
const ref = addRarityRef({ chanceMultiplier: ..., displayName: ..., code: ..., description: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = addRarityRef(dataConnect, addRarityVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.rarity_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.rarity_insert);
});
```

## AddCardToRequest
You can execute the `AddCardToRequest` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
addCardToRequest(vars: AddCardToRequestVariables): MutationPromise<AddCardToRequestData, AddCardToRequestVariables>;

interface AddCardToRequestRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: AddCardToRequestVariables): MutationRef<AddCardToRequestData, AddCardToRequestVariables>;
}
export const addCardToRequestRef: AddCardToRequestRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
addCardToRequest(dc: DataConnect, vars: AddCardToRequestVariables): MutationPromise<AddCardToRequestData, AddCardToRequestVariables>;

interface AddCardToRequestRef {
  ...
  (dc: DataConnect, vars: AddCardToRequestVariables): MutationRef<AddCardToRequestData, AddCardToRequestVariables>;
}
export const addCardToRequestRef: AddCardToRequestRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the addCardToRequestRef:
```typescript
const name = addCardToRequestRef.operationName;
console.log(name);
```

### Variables
The `AddCardToRequest` mutation requires an argument of type `AddCardToRequestVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface AddCardToRequestVariables {
  cardId: UUIDString;
}
```
### Return Type
Recall that executing the `AddCardToRequest` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `AddCardToRequestData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface AddCardToRequestData {
  request_insert: Request_Key;
}
```
### Using `AddCardToRequest`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, addCardToRequest, AddCardToRequestVariables } from '@firebasegen/default-connector';

// The `AddCardToRequest` mutation requires an argument of type `AddCardToRequestVariables`:
const addCardToRequestVars: AddCardToRequestVariables = {
  cardId: ..., 
};

// Call the `addCardToRequest()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await addCardToRequest(addCardToRequestVars);
// Variables can be defined inline as well.
const { data } = await addCardToRequest({ cardId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await addCardToRequest(dataConnect, addCardToRequestVars);

console.log(data.request_insert);

// Or, you can use the `Promise` API.
addCardToRequest(addCardToRequestVars).then((response) => {
  const data = response.data;
  console.log(data.request_insert);
});
```

### Using `AddCardToRequest`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, addCardToRequestRef, AddCardToRequestVariables } from '@firebasegen/default-connector';

// The `AddCardToRequest` mutation requires an argument of type `AddCardToRequestVariables`:
const addCardToRequestVars: AddCardToRequestVariables = {
  cardId: ..., 
};

// Call the `addCardToRequestRef()` function to get a reference to the mutation.
const ref = addCardToRequestRef(addCardToRequestVars);
// Variables can be defined inline as well.
const ref = addCardToRequestRef({ cardId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = addCardToRequestRef(dataConnect, addCardToRequestVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.request_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.request_insert);
});
```

## RemoveCardFromRequest
You can execute the `RemoveCardFromRequest` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
removeCardFromRequest(vars: RemoveCardFromRequestVariables): MutationPromise<RemoveCardFromRequestData, RemoveCardFromRequestVariables>;

interface RemoveCardFromRequestRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: RemoveCardFromRequestVariables): MutationRef<RemoveCardFromRequestData, RemoveCardFromRequestVariables>;
}
export const removeCardFromRequestRef: RemoveCardFromRequestRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
removeCardFromRequest(dc: DataConnect, vars: RemoveCardFromRequestVariables): MutationPromise<RemoveCardFromRequestData, RemoveCardFromRequestVariables>;

interface RemoveCardFromRequestRef {
  ...
  (dc: DataConnect, vars: RemoveCardFromRequestVariables): MutationRef<RemoveCardFromRequestData, RemoveCardFromRequestVariables>;
}
export const removeCardFromRequestRef: RemoveCardFromRequestRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the removeCardFromRequestRef:
```typescript
const name = removeCardFromRequestRef.operationName;
console.log(name);
```

### Variables
The `RemoveCardFromRequest` mutation requires an argument of type `RemoveCardFromRequestVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface RemoveCardFromRequestVariables {
  cardId: UUIDString;
}
```
### Return Type
Recall that executing the `RemoveCardFromRequest` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `RemoveCardFromRequestData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface RemoveCardFromRequestData {
  request_delete?: Request_Key | null;
}
```
### Using `RemoveCardFromRequest`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, removeCardFromRequest, RemoveCardFromRequestVariables } from '@firebasegen/default-connector';

// The `RemoveCardFromRequest` mutation requires an argument of type `RemoveCardFromRequestVariables`:
const removeCardFromRequestVars: RemoveCardFromRequestVariables = {
  cardId: ..., 
};

// Call the `removeCardFromRequest()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await removeCardFromRequest(removeCardFromRequestVars);
// Variables can be defined inline as well.
const { data } = await removeCardFromRequest({ cardId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await removeCardFromRequest(dataConnect, removeCardFromRequestVars);

console.log(data.request_delete);

// Or, you can use the `Promise` API.
removeCardFromRequest(removeCardFromRequestVars).then((response) => {
  const data = response.data;
  console.log(data.request_delete);
});
```

### Using `RemoveCardFromRequest`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, removeCardFromRequestRef, RemoveCardFromRequestVariables } from '@firebasegen/default-connector';

// The `RemoveCardFromRequest` mutation requires an argument of type `RemoveCardFromRequestVariables`:
const removeCardFromRequestVars: RemoveCardFromRequestVariables = {
  cardId: ..., 
};

// Call the `removeCardFromRequestRef()` function to get a reference to the mutation.
const ref = removeCardFromRequestRef(removeCardFromRequestVars);
// Variables can be defined inline as well.
const ref = removeCardFromRequestRef({ cardId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = removeCardFromRequestRef(dataConnect, removeCardFromRequestVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.request_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.request_delete);
});
```

