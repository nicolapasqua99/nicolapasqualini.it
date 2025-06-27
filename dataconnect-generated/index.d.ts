import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;


export interface AddCardData {
  card_insert: Card_Key;
}

export interface AddCardToOfferData {
  offer_insert: Offer_Key;
}

export interface AddCardToOfferVariables {
  cardId: UUIDString;
}

export interface AddCardToRequestData {
  request_insert: Request_Key;
}

export interface AddCardToRequestVariables {
  cardId: UUIDString;
}

export interface AddCardToUserData {
  userCard_insert: UserCard_Key;
}

export interface AddCardToUserVariables {
  cardId: UUIDString;
}

export interface AddCardVariables {
  displayName?: string | null;
  cardNumber?: string | null;
  rarityId?: UUIDString | null;
}

export interface AddCardsPackData {
  cardPack_insert: CardPack_Key;
}

export interface AddCardsPackVariables {
  cardId?: UUIDString | null;
  packId?: UUIDString | null;
}

export interface AddPackData {
  query?: {
    sets: ({
      id: UUIDString;
    } & Set_Key)[];
  };
    pack_insert: Pack_Key;
}

export interface AddPackVariables {
  displayName?: string | null;
  setCode?: string | null;
}

export interface AddRarityData {
  rarity_insert: Rarity_Key;
}

export interface AddRarityVariables {
  chanceMultiplier: number;
  displayName?: string | null;
  code?: string | null;
  description?: string | null;
}

export interface AddRelatedCardData {
  relatedCard_insert: RelatedCard_Key;
}

export interface AddRelatedCardVariables {
  cardId: UUIDString;
  relatedCardId: UUIDString;
}

export interface AddSetData {
  set_insert: Set_Key;
}

export interface AddSetVariables {
  displayName?: string | null;
  code?: string | null;
  releaseDate?: DateString | null;
}

export interface AddUserData {
  user_insert: User_Key;
}

export interface CardPack_Key {
  cardId: UUIDString;
  packId: UUIDString;
  __typename?: 'CardPack_Key';
}

export interface Card_Key {
  id: UUIDString;
  __typename?: 'Card_Key';
}

export interface ChangeUserDisplayNameData {
  user_update?: User_Key | null;
}

export interface ChangeUserDisplayNameVariables {
  displayName: string;
}

export interface ChangeUserEmailData {
  user_update?: User_Key | null;
}

export interface ChangeUserEmailVariables {
  email: string;
}

export interface ChangeUserLastLoginData {
  user_update?: User_Key | null;
}

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

export interface GetCardByIdVariables {
  id: UUIDString;
}

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

export interface GetCardsBySetCodeVariables {
  setCode: string;
}

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

export interface GetPacksData {
  packs: ({
    displayName: string;
    set: {
      code: string;
    };
  })[];
}

export interface GetRaritiesData {
  rarities: ({
    code: string;
    displayName: string;
    description?: string | null;
  })[];
}

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

export interface GetRelatedCardsVariables {
  cardId: UUIDString;
}

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

export interface GetSetsData {
  sets: ({
    id: UUIDString;
    displayName: string;
    code: string;
    releaseDate: DateString;
  } & Set_Key)[];
}

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

export interface Offer_Key {
  userUid: string;
  cardId: UUIDString;
  __typename?: 'Offer_Key';
}

export interface Pack_Key {
  id: UUIDString;
  __typename?: 'Pack_Key';
}

export interface Rarity_Key {
  id: UUIDString;
  __typename?: 'Rarity_Key';
}

export interface RelatedCard_Key {
  cardId: UUIDString;
  relatedCardId: UUIDString;
  __typename?: 'RelatedCard_Key';
}

export interface RemoveCardFromOfferData {
  offer_delete?: Offer_Key | null;
}

export interface RemoveCardFromOfferVariables {
  cardId: UUIDString;
}

export interface RemoveCardFromRequestData {
  request_delete?: Request_Key | null;
}

export interface RemoveCardFromRequestVariables {
  cardId: UUIDString;
}

export interface RemoveCardFromUserData {
  userCard_delete?: UserCard_Key | null;
}

export interface RemoveCardFromUserVariables {
  cardId: UUIDString;
}

export interface Request_Key {
  userUid: string;
  cardId: UUIDString;
  __typename?: 'Request_Key';
}

export interface Set_Key {
  id: UUIDString;
  __typename?: 'Set_Key';
}

export interface UpdateCardQuantityData {
  userCard_update?: UserCard_Key | null;
}

export interface UpdateCardQuantityVariables {
  cardId: UUIDString;
  quantity: number;
}

export interface UserCard_Key {
  userUid: string;
  cardId: UUIDString;
  __typename?: 'UserCard_Key';
}

export interface User_Key {
  uid: string;
  __typename?: 'User_Key';
}

interface GetOfferedCardsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetOfferedCardsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetOfferedCardsData, undefined>;
  operationName: string;
}
export const getOfferedCardsRef: GetOfferedCardsRef;

export function getOfferedCards(): QueryPromise<GetOfferedCardsData, undefined>;
export function getOfferedCards(dc: DataConnect): QueryPromise<GetOfferedCardsData, undefined>;

interface AddRelatedCardRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: AddRelatedCardVariables): MutationRef<AddRelatedCardData, AddRelatedCardVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: AddRelatedCardVariables): MutationRef<AddRelatedCardData, AddRelatedCardVariables>;
  operationName: string;
}
export const addRelatedCardRef: AddRelatedCardRef;

export function addRelatedCard(vars: AddRelatedCardVariables): MutationPromise<AddRelatedCardData, AddRelatedCardVariables>;
export function addRelatedCard(dc: DataConnect, vars: AddRelatedCardVariables): MutationPromise<AddRelatedCardData, AddRelatedCardVariables>;

interface GetRelatedCardsRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetRelatedCardsVariables): QueryRef<GetRelatedCardsData, GetRelatedCardsVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetRelatedCardsVariables): QueryRef<GetRelatedCardsData, GetRelatedCardsVariables>;
  operationName: string;
}
export const getRelatedCardsRef: GetRelatedCardsRef;

export function getRelatedCards(vars: GetRelatedCardsVariables): QueryPromise<GetRelatedCardsData, GetRelatedCardsVariables>;
export function getRelatedCards(dc: DataConnect, vars: GetRelatedCardsVariables): QueryPromise<GetRelatedCardsData, GetRelatedCardsVariables>;

interface AddUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<AddUserData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<AddUserData, undefined>;
  operationName: string;
}
export const addUserRef: AddUserRef;

export function addUser(): MutationPromise<AddUserData, undefined>;
export function addUser(dc: DataConnect): MutationPromise<AddUserData, undefined>;

interface ChangeUserDisplayNameRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: ChangeUserDisplayNameVariables): MutationRef<ChangeUserDisplayNameData, ChangeUserDisplayNameVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: ChangeUserDisplayNameVariables): MutationRef<ChangeUserDisplayNameData, ChangeUserDisplayNameVariables>;
  operationName: string;
}
export const changeUserDisplayNameRef: ChangeUserDisplayNameRef;

export function changeUserDisplayName(vars: ChangeUserDisplayNameVariables): MutationPromise<ChangeUserDisplayNameData, ChangeUserDisplayNameVariables>;
export function changeUserDisplayName(dc: DataConnect, vars: ChangeUserDisplayNameVariables): MutationPromise<ChangeUserDisplayNameData, ChangeUserDisplayNameVariables>;

interface ChangeUserEmailRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: ChangeUserEmailVariables): MutationRef<ChangeUserEmailData, ChangeUserEmailVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: ChangeUserEmailVariables): MutationRef<ChangeUserEmailData, ChangeUserEmailVariables>;
  operationName: string;
}
export const changeUserEmailRef: ChangeUserEmailRef;

export function changeUserEmail(vars: ChangeUserEmailVariables): MutationPromise<ChangeUserEmailData, ChangeUserEmailVariables>;
export function changeUserEmail(dc: DataConnect, vars: ChangeUserEmailVariables): MutationPromise<ChangeUserEmailData, ChangeUserEmailVariables>;

interface ChangeUserLastLoginRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<ChangeUserLastLoginData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<ChangeUserLastLoginData, undefined>;
  operationName: string;
}
export const changeUserLastLoginRef: ChangeUserLastLoginRef;

export function changeUserLastLogin(): MutationPromise<ChangeUserLastLoginData, undefined>;
export function changeUserLastLogin(dc: DataConnect): MutationPromise<ChangeUserLastLoginData, undefined>;

interface AddCardsPackRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars?: AddCardsPackVariables): MutationRef<AddCardsPackData, AddCardsPackVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars?: AddCardsPackVariables): MutationRef<AddCardsPackData, AddCardsPackVariables>;
  operationName: string;
}
export const addCardsPackRef: AddCardsPackRef;

export function addCardsPack(vars?: AddCardsPackVariables): MutationPromise<AddCardsPackData, AddCardsPackVariables>;
export function addCardsPack(dc: DataConnect, vars?: AddCardsPackVariables): MutationPromise<AddCardsPackData, AddCardsPackVariables>;

interface GetCardsBySetCodeRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetCardsBySetCodeVariables): QueryRef<GetCardsBySetCodeData, GetCardsBySetCodeVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetCardsBySetCodeVariables): QueryRef<GetCardsBySetCodeData, GetCardsBySetCodeVariables>;
  operationName: string;
}
export const getCardsBySetCodeRef: GetCardsBySetCodeRef;

export function getCardsBySetCode(vars: GetCardsBySetCodeVariables): QueryPromise<GetCardsBySetCodeData, GetCardsBySetCodeVariables>;
export function getCardsBySetCode(dc: DataConnect, vars: GetCardsBySetCodeVariables): QueryPromise<GetCardsBySetCodeData, GetCardsBySetCodeVariables>;

interface AddPackRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars?: AddPackVariables): MutationRef<AddPackData, AddPackVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars?: AddPackVariables): MutationRef<AddPackData, AddPackVariables>;
  operationName: string;
}
export const addPackRef: AddPackRef;

export function addPack(vars?: AddPackVariables): MutationPromise<AddPackData, AddPackVariables>;
export function addPack(dc: DataConnect, vars?: AddPackVariables): MutationPromise<AddPackData, AddPackVariables>;

interface GetPacksRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetPacksData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetPacksData, undefined>;
  operationName: string;
}
export const getPacksRef: GetPacksRef;

export function getPacks(): QueryPromise<GetPacksData, undefined>;
export function getPacks(dc: DataConnect): QueryPromise<GetPacksData, undefined>;

interface GetPacksAndCardsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetPacksAndCardsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetPacksAndCardsData, undefined>;
  operationName: string;
}
export const getPacksAndCardsRef: GetPacksAndCardsRef;

export function getPacksAndCards(): QueryPromise<GetPacksAndCardsData, undefined>;
export function getPacksAndCards(dc: DataConnect): QueryPromise<GetPacksAndCardsData, undefined>;

interface GetRaritiesRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetRaritiesData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetRaritiesData, undefined>;
  operationName: string;
}
export const getRaritiesRef: GetRaritiesRef;

export function getRarities(): QueryPromise<GetRaritiesData, undefined>;
export function getRarities(dc: DataConnect): QueryPromise<GetRaritiesData, undefined>;

interface AddSetRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars?: AddSetVariables): MutationRef<AddSetData, AddSetVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars?: AddSetVariables): MutationRef<AddSetData, AddSetVariables>;
  operationName: string;
}
export const addSetRef: AddSetRef;

export function addSet(vars?: AddSetVariables): MutationPromise<AddSetData, AddSetVariables>;
export function addSet(dc: DataConnect, vars?: AddSetVariables): MutationPromise<AddSetData, AddSetVariables>;

interface AddCardToUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: AddCardToUserVariables): MutationRef<AddCardToUserData, AddCardToUserVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: AddCardToUserVariables): MutationRef<AddCardToUserData, AddCardToUserVariables>;
  operationName: string;
}
export const addCardToUserRef: AddCardToUserRef;

export function addCardToUser(vars: AddCardToUserVariables): MutationPromise<AddCardToUserData, AddCardToUserVariables>;
export function addCardToUser(dc: DataConnect, vars: AddCardToUserVariables): MutationPromise<AddCardToUserData, AddCardToUserVariables>;

interface RemoveCardFromUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: RemoveCardFromUserVariables): MutationRef<RemoveCardFromUserData, RemoveCardFromUserVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: RemoveCardFromUserVariables): MutationRef<RemoveCardFromUserData, RemoveCardFromUserVariables>;
  operationName: string;
}
export const removeCardFromUserRef: RemoveCardFromUserRef;

export function removeCardFromUser(vars: RemoveCardFromUserVariables): MutationPromise<RemoveCardFromUserData, RemoveCardFromUserVariables>;
export function removeCardFromUser(dc: DataConnect, vars: RemoveCardFromUserVariables): MutationPromise<RemoveCardFromUserData, RemoveCardFromUserVariables>;

interface UpdateCardQuantityRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateCardQuantityVariables): MutationRef<UpdateCardQuantityData, UpdateCardQuantityVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateCardQuantityVariables): MutationRef<UpdateCardQuantityData, UpdateCardQuantityVariables>;
  operationName: string;
}
export const updateCardQuantityRef: UpdateCardQuantityRef;

export function updateCardQuantity(vars: UpdateCardQuantityVariables): MutationPromise<UpdateCardQuantityData, UpdateCardQuantityVariables>;
export function updateCardQuantity(dc: DataConnect, vars: UpdateCardQuantityVariables): MutationPromise<UpdateCardQuantityData, UpdateCardQuantityVariables>;

interface AddCardRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars?: AddCardVariables): MutationRef<AddCardData, AddCardVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars?: AddCardVariables): MutationRef<AddCardData, AddCardVariables>;
  operationName: string;
}
export const addCardRef: AddCardRef;

export function addCard(vars?: AddCardVariables): MutationPromise<AddCardData, AddCardVariables>;
export function addCard(dc: DataConnect, vars?: AddCardVariables): MutationPromise<AddCardData, AddCardVariables>;

interface AddCardToOfferRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: AddCardToOfferVariables): MutationRef<AddCardToOfferData, AddCardToOfferVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: AddCardToOfferVariables): MutationRef<AddCardToOfferData, AddCardToOfferVariables>;
  operationName: string;
}
export const addCardToOfferRef: AddCardToOfferRef;

export function addCardToOffer(vars: AddCardToOfferVariables): MutationPromise<AddCardToOfferData, AddCardToOfferVariables>;
export function addCardToOffer(dc: DataConnect, vars: AddCardToOfferVariables): MutationPromise<AddCardToOfferData, AddCardToOfferVariables>;

interface RemoveCardFromOfferRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: RemoveCardFromOfferVariables): MutationRef<RemoveCardFromOfferData, RemoveCardFromOfferVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: RemoveCardFromOfferVariables): MutationRef<RemoveCardFromOfferData, RemoveCardFromOfferVariables>;
  operationName: string;
}
export const removeCardFromOfferRef: RemoveCardFromOfferRef;

export function removeCardFromOffer(vars: RemoveCardFromOfferVariables): MutationPromise<RemoveCardFromOfferData, RemoveCardFromOfferVariables>;
export function removeCardFromOffer(dc: DataConnect, vars: RemoveCardFromOfferVariables): MutationPromise<RemoveCardFromOfferData, RemoveCardFromOfferVariables>;

interface AddRarityRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: AddRarityVariables): MutationRef<AddRarityData, AddRarityVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: AddRarityVariables): MutationRef<AddRarityData, AddRarityVariables>;
  operationName: string;
}
export const addRarityRef: AddRarityRef;

export function addRarity(vars: AddRarityVariables): MutationPromise<AddRarityData, AddRarityVariables>;
export function addRarity(dc: DataConnect, vars: AddRarityVariables): MutationPromise<AddRarityData, AddRarityVariables>;

interface AddCardToRequestRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: AddCardToRequestVariables): MutationRef<AddCardToRequestData, AddCardToRequestVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: AddCardToRequestVariables): MutationRef<AddCardToRequestData, AddCardToRequestVariables>;
  operationName: string;
}
export const addCardToRequestRef: AddCardToRequestRef;

export function addCardToRequest(vars: AddCardToRequestVariables): MutationPromise<AddCardToRequestData, AddCardToRequestVariables>;
export function addCardToRequest(dc: DataConnect, vars: AddCardToRequestVariables): MutationPromise<AddCardToRequestData, AddCardToRequestVariables>;

interface RemoveCardFromRequestRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: RemoveCardFromRequestVariables): MutationRef<RemoveCardFromRequestData, RemoveCardFromRequestVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: RemoveCardFromRequestVariables): MutationRef<RemoveCardFromRequestData, RemoveCardFromRequestVariables>;
  operationName: string;
}
export const removeCardFromRequestRef: RemoveCardFromRequestRef;

export function removeCardFromRequest(vars: RemoveCardFromRequestVariables): MutationPromise<RemoveCardFromRequestData, RemoveCardFromRequestVariables>;
export function removeCardFromRequest(dc: DataConnect, vars: RemoveCardFromRequestVariables): MutationPromise<RemoveCardFromRequestData, RemoveCardFromRequestVariables>;

interface GetRequestedCardsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetRequestedCardsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetRequestedCardsData, undefined>;
  operationName: string;
}
export const getRequestedCardsRef: GetRequestedCardsRef;

export function getRequestedCards(): QueryPromise<GetRequestedCardsData, undefined>;
export function getRequestedCards(dc: DataConnect): QueryPromise<GetRequestedCardsData, undefined>;

interface GetSetsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetSetsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetSetsData, undefined>;
  operationName: string;
}
export const getSetsRef: GetSetsRef;

export function getSets(): QueryPromise<GetSetsData, undefined>;
export function getSets(dc: DataConnect): QueryPromise<GetSetsData, undefined>;

interface GetCardsPossessedByUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetCardsPossessedByUserData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetCardsPossessedByUserData, undefined>;
  operationName: string;
}
export const getCardsPossessedByUserRef: GetCardsPossessedByUserRef;

export function getCardsPossessedByUser(): QueryPromise<GetCardsPossessedByUserData, undefined>;
export function getCardsPossessedByUser(dc: DataConnect): QueryPromise<GetCardsPossessedByUserData, undefined>;

interface GetUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetUserData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetUserData, undefined>;
  operationName: string;
}
export const getUserRef: GetUserRef;

export function getUser(): QueryPromise<GetUserData, undefined>;
export function getUser(dc: DataConnect): QueryPromise<GetUserData, undefined>;

interface GetCardsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetCardsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetCardsData, undefined>;
  operationName: string;
}
export const getCardsRef: GetCardsRef;

export function getCards(): QueryPromise<GetCardsData, undefined>;
export function getCards(dc: DataConnect): QueryPromise<GetCardsData, undefined>;

interface GetCardByIdRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetCardByIdVariables): QueryRef<GetCardByIdData, GetCardByIdVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetCardByIdVariables): QueryRef<GetCardByIdData, GetCardByIdVariables>;
  operationName: string;
}
export const getCardByIdRef: GetCardByIdRef;

export function getCardById(vars: GetCardByIdVariables): QueryPromise<GetCardByIdData, GetCardByIdVariables>;
export function getCardById(dc: DataConnect, vars: GetCardByIdVariables): QueryPromise<GetCardByIdData, GetCardByIdVariables>;

