import { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'default',
  service: 'np-portfolio-service',
  location: 'europe-west8'
};

export const getCardsBySetCodeRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetCardsBySetCode', inputVars);
}
getCardsBySetCodeRef.operationName = 'GetCardsBySetCode';

export function getCardsBySetCode(dcOrVars, vars) {
  return executeQuery(getCardsBySetCodeRef(dcOrVars, vars));
}

export const addCardToOfferRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AddCardToOffer', inputVars);
}
addCardToOfferRef.operationName = 'AddCardToOffer';

export function addCardToOffer(dcOrVars, vars) {
  return executeMutation(addCardToOfferRef(dcOrVars, vars));
}

export const removeCardFromOfferRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'RemoveCardFromOffer', inputVars);
}
removeCardFromOfferRef.operationName = 'RemoveCardFromOffer';

export function removeCardFromOffer(dcOrVars, vars) {
  return executeMutation(removeCardFromOfferRef(dcOrVars, vars));
}

export const getOfferedCardsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetOfferedCards');
}
getOfferedCardsRef.operationName = 'GetOfferedCards';

export function getOfferedCards(dc) {
  return executeQuery(getOfferedCardsRef(dc));
}

export const addRelatedCardRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AddRelatedCard', inputVars);
}
addRelatedCardRef.operationName = 'AddRelatedCard';

export function addRelatedCard(dcOrVars, vars) {
  return executeMutation(addRelatedCardRef(dcOrVars, vars));
}

export const addCardToRequestRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AddCardToRequest', inputVars);
}
addCardToRequestRef.operationName = 'AddCardToRequest';

export function addCardToRequest(dcOrVars, vars) {
  return executeMutation(addCardToRequestRef(dcOrVars, vars));
}

export const removeCardFromRequestRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'RemoveCardFromRequest', inputVars);
}
removeCardFromRequestRef.operationName = 'RemoveCardFromRequest';

export function removeCardFromRequest(dcOrVars, vars) {
  return executeMutation(removeCardFromRequestRef(dcOrVars, vars));
}

export const addUserRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AddUser');
}
addUserRef.operationName = 'AddUser';

export function addUser(dc) {
  return executeMutation(addUserRef(dc));
}

export const changeUserDisplayNameRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'ChangeUserDisplayName', inputVars);
}
changeUserDisplayNameRef.operationName = 'ChangeUserDisplayName';

export function changeUserDisplayName(dcOrVars, vars) {
  return executeMutation(changeUserDisplayNameRef(dcOrVars, vars));
}

export const changeUserEmailRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'ChangeUserEmail', inputVars);
}
changeUserEmailRef.operationName = 'ChangeUserEmail';

export function changeUserEmail(dcOrVars, vars) {
  return executeMutation(changeUserEmailRef(dcOrVars, vars));
}

export const changeUserLastLoginRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'ChangeUserLastLogin');
}
changeUserLastLoginRef.operationName = 'ChangeUserLastLogin';

export function changeUserLastLogin(dc) {
  return executeMutation(changeUserLastLoginRef(dc));
}

export const getRaritiesRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetRarities');
}
getRaritiesRef.operationName = 'GetRarities';

export function getRarities(dc) {
  return executeQuery(getRaritiesRef(dc));
}

export const getRelatedCardsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetRelatedCards', inputVars);
}
getRelatedCardsRef.operationName = 'GetRelatedCards';

export function getRelatedCards(dcOrVars, vars) {
  return executeQuery(getRelatedCardsRef(dcOrVars, vars));
}

export const addSetRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AddSet', inputVars);
}
addSetRef.operationName = 'AddSet';

export function addSet(dcOrVars, vars) {
  return executeMutation(addSetRef(dcOrVars, vars));
}

export const getUserRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetUser');
}
getUserRef.operationName = 'GetUser';

export function getUser(dc) {
  return executeQuery(getUserRef(dc));
}

export const getCardsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetCards');
}
getCardsRef.operationName = 'GetCards';

export function getCards(dc) {
  return executeQuery(getCardsRef(dc));
}

export const getCardByIdRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetCardById', inputVars);
}
getCardByIdRef.operationName = 'GetCardById';

export function getCardById(dcOrVars, vars) {
  return executeQuery(getCardByIdRef(dcOrVars, vars));
}

export const addPackRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AddPack', inputVars);
}
addPackRef.operationName = 'AddPack';

export function addPack(dcOrVars, vars) {
  return executeMutation(addPackRef(dcOrVars, vars));
}

export const addRarityRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AddRarity', inputVars);
}
addRarityRef.operationName = 'AddRarity';

export function addRarity(dcOrVars, vars) {
  return executeMutation(addRarityRef(dcOrVars, vars));
}

export const getSetsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetSets');
}
getSetsRef.operationName = 'GetSets';

export function getSets(dc) {
  return executeQuery(getSetsRef(dc));
}

export const addCardToUserRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AddCardToUser', inputVars);
}
addCardToUserRef.operationName = 'AddCardToUser';

export function addCardToUser(dcOrVars, vars) {
  return executeMutation(addCardToUserRef(dcOrVars, vars));
}

export const removeCardFromUserRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'RemoveCardFromUser', inputVars);
}
removeCardFromUserRef.operationName = 'RemoveCardFromUser';

export function removeCardFromUser(dcOrVars, vars) {
  return executeMutation(removeCardFromUserRef(dcOrVars, vars));
}

export const updateCardQuantityRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateCardQuantity', inputVars);
}
updateCardQuantityRef.operationName = 'UpdateCardQuantity';

export function updateCardQuantity(dcOrVars, vars) {
  return executeMutation(updateCardQuantityRef(dcOrVars, vars));
}

export const addCardsPackRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AddCardsPack', inputVars);
}
addCardsPackRef.operationName = 'AddCardsPack';

export function addCardsPack(dcOrVars, vars) {
  return executeMutation(addCardsPackRef(dcOrVars, vars));
}

export const addCardRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AddCard', inputVars);
}
addCardRef.operationName = 'AddCard';

export function addCard(dcOrVars, vars) {
  return executeMutation(addCardRef(dcOrVars, vars));
}

export const getPacksRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetPacks');
}
getPacksRef.operationName = 'GetPacks';

export function getPacks(dc) {
  return executeQuery(getPacksRef(dc));
}

export const getPacksAndCardsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetPacksAndCards');
}
getPacksAndCardsRef.operationName = 'GetPacksAndCards';

export function getPacksAndCards(dc) {
  return executeQuery(getPacksAndCardsRef(dc));
}

export const getRequestedCardsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetRequestedCards');
}
getRequestedCardsRef.operationName = 'GetRequestedCards';

export function getRequestedCards(dc) {
  return executeQuery(getRequestedCardsRef(dc));
}

export const getCardsPossessedByUserRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetCardsPossessedByUser');
}
getCardsPossessedByUserRef.operationName = 'GetCardsPossessedByUser';

export function getCardsPossessedByUser(dc) {
  return executeQuery(getCardsPossessedByUserRef(dc));
}

