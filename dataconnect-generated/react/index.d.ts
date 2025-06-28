import { AddCardToRequestData, AddCardToRequestVariables, RemoveCardFromRequestData, RemoveCardFromRequestVariables, AddSetData, AddSetVariables, GetSetsData, GetRaritiesData, AddCardToUserData, AddCardToUserVariables, RemoveCardFromUserData, RemoveCardFromUserVariables, UpdateCardQuantityData, UpdateCardQuantityVariables, GetCardsPossessedByUserData, AddCardsPackData, AddCardsPackVariables, GetCardsData, GetCardByIdData, GetCardByIdVariables, AddCardToOfferData, AddCardToOfferVariables, RemoveCardFromOfferData, RemoveCardFromOfferVariables, GetOfferedCardsData, GetRequestedCardsData, GetUserData, GetCardsBySetCodeData, GetCardsBySetCodeVariables, AddRelatedCardData, AddRelatedCardVariables, AddUserData, ChangeUserDisplayNameData, ChangeUserDisplayNameVariables, ChangeUserEmailData, ChangeUserEmailVariables, ChangeUserLastLoginData, AddCardData, AddCardVariables, AddPackData, AddPackVariables, GetPacksData, GetPacksAndCardsData, AddRarityData, AddRarityVariables, GetRelatedCardsData, GetRelatedCardsVariables } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useAddCardToRequest(options?: useDataConnectMutationOptions<AddCardToRequestData, FirebaseError, AddCardToRequestVariables>): UseDataConnectMutationResult<AddCardToRequestData, AddCardToRequestVariables>;
export function useAddCardToRequest(dc: DataConnect, options?: useDataConnectMutationOptions<AddCardToRequestData, FirebaseError, AddCardToRequestVariables>): UseDataConnectMutationResult<AddCardToRequestData, AddCardToRequestVariables>;

export function useRemoveCardFromRequest(options?: useDataConnectMutationOptions<RemoveCardFromRequestData, FirebaseError, RemoveCardFromRequestVariables>): UseDataConnectMutationResult<RemoveCardFromRequestData, RemoveCardFromRequestVariables>;
export function useRemoveCardFromRequest(dc: DataConnect, options?: useDataConnectMutationOptions<RemoveCardFromRequestData, FirebaseError, RemoveCardFromRequestVariables>): UseDataConnectMutationResult<RemoveCardFromRequestData, RemoveCardFromRequestVariables>;

export function useAddSet(options?: useDataConnectMutationOptions<AddSetData, FirebaseError, AddSetVariables | void>): UseDataConnectMutationResult<AddSetData, AddSetVariables>;
export function useAddSet(dc: DataConnect, options?: useDataConnectMutationOptions<AddSetData, FirebaseError, AddSetVariables | void>): UseDataConnectMutationResult<AddSetData, AddSetVariables>;

export function useGetSets(options?: useDataConnectQueryOptions<GetSetsData>): UseDataConnectQueryResult<GetSetsData, undefined>;
export function useGetSets(dc: DataConnect, options?: useDataConnectQueryOptions<GetSetsData>): UseDataConnectQueryResult<GetSetsData, undefined>;

export function useGetRarities(options?: useDataConnectQueryOptions<GetRaritiesData>): UseDataConnectQueryResult<GetRaritiesData, undefined>;
export function useGetRarities(dc: DataConnect, options?: useDataConnectQueryOptions<GetRaritiesData>): UseDataConnectQueryResult<GetRaritiesData, undefined>;

export function useAddCardToUser(options?: useDataConnectMutationOptions<AddCardToUserData, FirebaseError, AddCardToUserVariables>): UseDataConnectMutationResult<AddCardToUserData, AddCardToUserVariables>;
export function useAddCardToUser(dc: DataConnect, options?: useDataConnectMutationOptions<AddCardToUserData, FirebaseError, AddCardToUserVariables>): UseDataConnectMutationResult<AddCardToUserData, AddCardToUserVariables>;

export function useRemoveCardFromUser(options?: useDataConnectMutationOptions<RemoveCardFromUserData, FirebaseError, RemoveCardFromUserVariables>): UseDataConnectMutationResult<RemoveCardFromUserData, RemoveCardFromUserVariables>;
export function useRemoveCardFromUser(dc: DataConnect, options?: useDataConnectMutationOptions<RemoveCardFromUserData, FirebaseError, RemoveCardFromUserVariables>): UseDataConnectMutationResult<RemoveCardFromUserData, RemoveCardFromUserVariables>;

export function useUpdateCardQuantity(options?: useDataConnectMutationOptions<UpdateCardQuantityData, FirebaseError, UpdateCardQuantityVariables>): UseDataConnectMutationResult<UpdateCardQuantityData, UpdateCardQuantityVariables>;
export function useUpdateCardQuantity(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateCardQuantityData, FirebaseError, UpdateCardQuantityVariables>): UseDataConnectMutationResult<UpdateCardQuantityData, UpdateCardQuantityVariables>;

export function useGetCardsPossessedByUser(options?: useDataConnectQueryOptions<GetCardsPossessedByUserData>): UseDataConnectQueryResult<GetCardsPossessedByUserData, undefined>;
export function useGetCardsPossessedByUser(dc: DataConnect, options?: useDataConnectQueryOptions<GetCardsPossessedByUserData>): UseDataConnectQueryResult<GetCardsPossessedByUserData, undefined>;

export function useAddCardsPack(options?: useDataConnectMutationOptions<AddCardsPackData, FirebaseError, AddCardsPackVariables | void>): UseDataConnectMutationResult<AddCardsPackData, AddCardsPackVariables>;
export function useAddCardsPack(dc: DataConnect, options?: useDataConnectMutationOptions<AddCardsPackData, FirebaseError, AddCardsPackVariables | void>): UseDataConnectMutationResult<AddCardsPackData, AddCardsPackVariables>;

export function useGetCards(options?: useDataConnectQueryOptions<GetCardsData>): UseDataConnectQueryResult<GetCardsData, undefined>;
export function useGetCards(dc: DataConnect, options?: useDataConnectQueryOptions<GetCardsData>): UseDataConnectQueryResult<GetCardsData, undefined>;

export function useGetCardById(vars: GetCardByIdVariables, options?: useDataConnectQueryOptions<GetCardByIdData>): UseDataConnectQueryResult<GetCardByIdData, GetCardByIdVariables>;
export function useGetCardById(dc: DataConnect, vars: GetCardByIdVariables, options?: useDataConnectQueryOptions<GetCardByIdData>): UseDataConnectQueryResult<GetCardByIdData, GetCardByIdVariables>;

export function useAddCardToOffer(options?: useDataConnectMutationOptions<AddCardToOfferData, FirebaseError, AddCardToOfferVariables>): UseDataConnectMutationResult<AddCardToOfferData, AddCardToOfferVariables>;
export function useAddCardToOffer(dc: DataConnect, options?: useDataConnectMutationOptions<AddCardToOfferData, FirebaseError, AddCardToOfferVariables>): UseDataConnectMutationResult<AddCardToOfferData, AddCardToOfferVariables>;

export function useRemoveCardFromOffer(options?: useDataConnectMutationOptions<RemoveCardFromOfferData, FirebaseError, RemoveCardFromOfferVariables>): UseDataConnectMutationResult<RemoveCardFromOfferData, RemoveCardFromOfferVariables>;
export function useRemoveCardFromOffer(dc: DataConnect, options?: useDataConnectMutationOptions<RemoveCardFromOfferData, FirebaseError, RemoveCardFromOfferVariables>): UseDataConnectMutationResult<RemoveCardFromOfferData, RemoveCardFromOfferVariables>;

export function useGetOfferedCards(options?: useDataConnectQueryOptions<GetOfferedCardsData>): UseDataConnectQueryResult<GetOfferedCardsData, undefined>;
export function useGetOfferedCards(dc: DataConnect, options?: useDataConnectQueryOptions<GetOfferedCardsData>): UseDataConnectQueryResult<GetOfferedCardsData, undefined>;

export function useGetRequestedCards(options?: useDataConnectQueryOptions<GetRequestedCardsData>): UseDataConnectQueryResult<GetRequestedCardsData, undefined>;
export function useGetRequestedCards(dc: DataConnect, options?: useDataConnectQueryOptions<GetRequestedCardsData>): UseDataConnectQueryResult<GetRequestedCardsData, undefined>;

export function useGetUser(options?: useDataConnectQueryOptions<GetUserData>): UseDataConnectQueryResult<GetUserData, undefined>;
export function useGetUser(dc: DataConnect, options?: useDataConnectQueryOptions<GetUserData>): UseDataConnectQueryResult<GetUserData, undefined>;

export function useGetCardsBySetCode(vars: GetCardsBySetCodeVariables, options?: useDataConnectQueryOptions<GetCardsBySetCodeData>): UseDataConnectQueryResult<GetCardsBySetCodeData, GetCardsBySetCodeVariables>;
export function useGetCardsBySetCode(dc: DataConnect, vars: GetCardsBySetCodeVariables, options?: useDataConnectQueryOptions<GetCardsBySetCodeData>): UseDataConnectQueryResult<GetCardsBySetCodeData, GetCardsBySetCodeVariables>;

export function useAddRelatedCard(options?: useDataConnectMutationOptions<AddRelatedCardData, FirebaseError, AddRelatedCardVariables>): UseDataConnectMutationResult<AddRelatedCardData, AddRelatedCardVariables>;
export function useAddRelatedCard(dc: DataConnect, options?: useDataConnectMutationOptions<AddRelatedCardData, FirebaseError, AddRelatedCardVariables>): UseDataConnectMutationResult<AddRelatedCardData, AddRelatedCardVariables>;

export function useAddUser(options?: useDataConnectMutationOptions<AddUserData, FirebaseError, void>): UseDataConnectMutationResult<AddUserData, undefined>;
export function useAddUser(dc: DataConnect, options?: useDataConnectMutationOptions<AddUserData, FirebaseError, void>): UseDataConnectMutationResult<AddUserData, undefined>;

export function useChangeUserDisplayName(options?: useDataConnectMutationOptions<ChangeUserDisplayNameData, FirebaseError, ChangeUserDisplayNameVariables>): UseDataConnectMutationResult<ChangeUserDisplayNameData, ChangeUserDisplayNameVariables>;
export function useChangeUserDisplayName(dc: DataConnect, options?: useDataConnectMutationOptions<ChangeUserDisplayNameData, FirebaseError, ChangeUserDisplayNameVariables>): UseDataConnectMutationResult<ChangeUserDisplayNameData, ChangeUserDisplayNameVariables>;

export function useChangeUserEmail(options?: useDataConnectMutationOptions<ChangeUserEmailData, FirebaseError, ChangeUserEmailVariables>): UseDataConnectMutationResult<ChangeUserEmailData, ChangeUserEmailVariables>;
export function useChangeUserEmail(dc: DataConnect, options?: useDataConnectMutationOptions<ChangeUserEmailData, FirebaseError, ChangeUserEmailVariables>): UseDataConnectMutationResult<ChangeUserEmailData, ChangeUserEmailVariables>;

export function useChangeUserLastLogin(options?: useDataConnectMutationOptions<ChangeUserLastLoginData, FirebaseError, void>): UseDataConnectMutationResult<ChangeUserLastLoginData, undefined>;
export function useChangeUserLastLogin(dc: DataConnect, options?: useDataConnectMutationOptions<ChangeUserLastLoginData, FirebaseError, void>): UseDataConnectMutationResult<ChangeUserLastLoginData, undefined>;

export function useAddCard(options?: useDataConnectMutationOptions<AddCardData, FirebaseError, AddCardVariables | void>): UseDataConnectMutationResult<AddCardData, AddCardVariables>;
export function useAddCard(dc: DataConnect, options?: useDataConnectMutationOptions<AddCardData, FirebaseError, AddCardVariables | void>): UseDataConnectMutationResult<AddCardData, AddCardVariables>;

export function useAddPack(options?: useDataConnectMutationOptions<AddPackData, FirebaseError, AddPackVariables | void>): UseDataConnectMutationResult<AddPackData, AddPackVariables>;
export function useAddPack(dc: DataConnect, options?: useDataConnectMutationOptions<AddPackData, FirebaseError, AddPackVariables | void>): UseDataConnectMutationResult<AddPackData, AddPackVariables>;

export function useGetPacks(options?: useDataConnectQueryOptions<GetPacksData>): UseDataConnectQueryResult<GetPacksData, undefined>;
export function useGetPacks(dc: DataConnect, options?: useDataConnectQueryOptions<GetPacksData>): UseDataConnectQueryResult<GetPacksData, undefined>;

export function useGetPacksAndCards(options?: useDataConnectQueryOptions<GetPacksAndCardsData>): UseDataConnectQueryResult<GetPacksAndCardsData, undefined>;
export function useGetPacksAndCards(dc: DataConnect, options?: useDataConnectQueryOptions<GetPacksAndCardsData>): UseDataConnectQueryResult<GetPacksAndCardsData, undefined>;

export function useAddRarity(options?: useDataConnectMutationOptions<AddRarityData, FirebaseError, AddRarityVariables>): UseDataConnectMutationResult<AddRarityData, AddRarityVariables>;
export function useAddRarity(dc: DataConnect, options?: useDataConnectMutationOptions<AddRarityData, FirebaseError, AddRarityVariables>): UseDataConnectMutationResult<AddRarityData, AddRarityVariables>;

export function useGetRelatedCards(vars: GetRelatedCardsVariables, options?: useDataConnectQueryOptions<GetRelatedCardsData>): UseDataConnectQueryResult<GetRelatedCardsData, GetRelatedCardsVariables>;
export function useGetRelatedCards(dc: DataConnect, vars: GetRelatedCardsVariables, options?: useDataConnectQueryOptions<GetRelatedCardsData>): UseDataConnectQueryResult<GetRelatedCardsData, GetRelatedCardsVariables>;
