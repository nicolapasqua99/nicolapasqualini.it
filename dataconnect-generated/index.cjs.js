const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'np-portfolio-service',
  location: 'europe-west8'
};
exports.connectorConfig = connectorConfig;

const getOfferedCardsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetOfferedCards');
}
getOfferedCardsRef.operationName = 'GetOfferedCards';
exports.getOfferedCardsRef = getOfferedCardsRef;

exports.getOfferedCards = function getOfferedCards(dc) {
  return executeQuery(getOfferedCardsRef(dc));
};

const addRelatedCardRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AddRelatedCard', inputVars);
}
addRelatedCardRef.operationName = 'AddRelatedCard';
exports.addRelatedCardRef = addRelatedCardRef;

exports.addRelatedCard = function addRelatedCard(dcOrVars, vars) {
  return executeMutation(addRelatedCardRef(dcOrVars, vars));
};

const getRelatedCardsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetRelatedCards', inputVars);
}
getRelatedCardsRef.operationName = 'GetRelatedCards';
exports.getRelatedCardsRef = getRelatedCardsRef;

exports.getRelatedCards = function getRelatedCards(dcOrVars, vars) {
  return executeQuery(getRelatedCardsRef(dcOrVars, vars));
};

const addUserRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AddUser');
}
addUserRef.operationName = 'AddUser';
exports.addUserRef = addUserRef;

exports.addUser = function addUser(dc) {
  return executeMutation(addUserRef(dc));
};

const changeUserDisplayNameRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'ChangeUserDisplayName', inputVars);
}
changeUserDisplayNameRef.operationName = 'ChangeUserDisplayName';
exports.changeUserDisplayNameRef = changeUserDisplayNameRef;

exports.changeUserDisplayName = function changeUserDisplayName(dcOrVars, vars) {
  return executeMutation(changeUserDisplayNameRef(dcOrVars, vars));
};

const changeUserEmailRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'ChangeUserEmail', inputVars);
}
changeUserEmailRef.operationName = 'ChangeUserEmail';
exports.changeUserEmailRef = changeUserEmailRef;

exports.changeUserEmail = function changeUserEmail(dcOrVars, vars) {
  return executeMutation(changeUserEmailRef(dcOrVars, vars));
};

const changeUserLastLoginRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'ChangeUserLastLogin');
}
changeUserLastLoginRef.operationName = 'ChangeUserLastLogin';
exports.changeUserLastLoginRef = changeUserLastLoginRef;

exports.changeUserLastLogin = function changeUserLastLogin(dc) {
  return executeMutation(changeUserLastLoginRef(dc));
};

const addCardsPackRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AddCardsPack', inputVars);
}
addCardsPackRef.operationName = 'AddCardsPack';
exports.addCardsPackRef = addCardsPackRef;

exports.addCardsPack = function addCardsPack(dcOrVars, vars) {
  return executeMutation(addCardsPackRef(dcOrVars, vars));
};

const getCardsBySetCodeRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetCardsBySetCode', inputVars);
}
getCardsBySetCodeRef.operationName = 'GetCardsBySetCode';
exports.getCardsBySetCodeRef = getCardsBySetCodeRef;

exports.getCardsBySetCode = function getCardsBySetCode(dcOrVars, vars) {
  return executeQuery(getCardsBySetCodeRef(dcOrVars, vars));
};

const addPackRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AddPack', inputVars);
}
addPackRef.operationName = 'AddPack';
exports.addPackRef = addPackRef;

exports.addPack = function addPack(dcOrVars, vars) {
  return executeMutation(addPackRef(dcOrVars, vars));
};

const getPacksRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetPacks');
}
getPacksRef.operationName = 'GetPacks';
exports.getPacksRef = getPacksRef;

exports.getPacks = function getPacks(dc) {
  return executeQuery(getPacksRef(dc));
};

const getPacksAndCardsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetPacksAndCards');
}
getPacksAndCardsRef.operationName = 'GetPacksAndCards';
exports.getPacksAndCardsRef = getPacksAndCardsRef;

exports.getPacksAndCards = function getPacksAndCards(dc) {
  return executeQuery(getPacksAndCardsRef(dc));
};

const getRaritiesRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetRarities');
}
getRaritiesRef.operationName = 'GetRarities';
exports.getRaritiesRef = getRaritiesRef;

exports.getRarities = function getRarities(dc) {
  return executeQuery(getRaritiesRef(dc));
};

const addSetRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AddSet', inputVars);
}
addSetRef.operationName = 'AddSet';
exports.addSetRef = addSetRef;

exports.addSet = function addSet(dcOrVars, vars) {
  return executeMutation(addSetRef(dcOrVars, vars));
};

const addCardToUserRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AddCardToUser', inputVars);
}
addCardToUserRef.operationName = 'AddCardToUser';
exports.addCardToUserRef = addCardToUserRef;

exports.addCardToUser = function addCardToUser(dcOrVars, vars) {
  return executeMutation(addCardToUserRef(dcOrVars, vars));
};

const removeCardFromUserRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'RemoveCardFromUser', inputVars);
}
removeCardFromUserRef.operationName = 'RemoveCardFromUser';
exports.removeCardFromUserRef = removeCardFromUserRef;

exports.removeCardFromUser = function removeCardFromUser(dcOrVars, vars) {
  return executeMutation(removeCardFromUserRef(dcOrVars, vars));
};

const updateCardQuantityRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateCardQuantity', inputVars);
}
updateCardQuantityRef.operationName = 'UpdateCardQuantity';
exports.updateCardQuantityRef = updateCardQuantityRef;

exports.updateCardQuantity = function updateCardQuantity(dcOrVars, vars) {
  return executeMutation(updateCardQuantityRef(dcOrVars, vars));
};

const addCardRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AddCard', inputVars);
}
addCardRef.operationName = 'AddCard';
exports.addCardRef = addCardRef;

exports.addCard = function addCard(dcOrVars, vars) {
  return executeMutation(addCardRef(dcOrVars, vars));
};

const addCardToOfferRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AddCardToOffer', inputVars);
}
addCardToOfferRef.operationName = 'AddCardToOffer';
exports.addCardToOfferRef = addCardToOfferRef;

exports.addCardToOffer = function addCardToOffer(dcOrVars, vars) {
  return executeMutation(addCardToOfferRef(dcOrVars, vars));
};

const removeCardFromOfferRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'RemoveCardFromOffer', inputVars);
}
removeCardFromOfferRef.operationName = 'RemoveCardFromOffer';
exports.removeCardFromOfferRef = removeCardFromOfferRef;

exports.removeCardFromOffer = function removeCardFromOffer(dcOrVars, vars) {
  return executeMutation(removeCardFromOfferRef(dcOrVars, vars));
};

const addRarityRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AddRarity', inputVars);
}
addRarityRef.operationName = 'AddRarity';
exports.addRarityRef = addRarityRef;

exports.addRarity = function addRarity(dcOrVars, vars) {
  return executeMutation(addRarityRef(dcOrVars, vars));
};

const addCardToRequestRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AddCardToRequest', inputVars);
}
addCardToRequestRef.operationName = 'AddCardToRequest';
exports.addCardToRequestRef = addCardToRequestRef;

exports.addCardToRequest = function addCardToRequest(dcOrVars, vars) {
  return executeMutation(addCardToRequestRef(dcOrVars, vars));
};

const removeCardFromRequestRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'RemoveCardFromRequest', inputVars);
}
removeCardFromRequestRef.operationName = 'RemoveCardFromRequest';
exports.removeCardFromRequestRef = removeCardFromRequestRef;

exports.removeCardFromRequest = function removeCardFromRequest(dcOrVars, vars) {
  return executeMutation(removeCardFromRequestRef(dcOrVars, vars));
};

const getRequestedCardsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetRequestedCards');
}
getRequestedCardsRef.operationName = 'GetRequestedCards';
exports.getRequestedCardsRef = getRequestedCardsRef;

exports.getRequestedCards = function getRequestedCards(dc) {
  return executeQuery(getRequestedCardsRef(dc));
};

const getSetsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetSets');
}
getSetsRef.operationName = 'GetSets';
exports.getSetsRef = getSetsRef;

exports.getSets = function getSets(dc) {
  return executeQuery(getSetsRef(dc));
};

const getCardsPossessedByUserRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetCardsPossessedByUser');
}
getCardsPossessedByUserRef.operationName = 'GetCardsPossessedByUser';
exports.getCardsPossessedByUserRef = getCardsPossessedByUserRef;

exports.getCardsPossessedByUser = function getCardsPossessedByUser(dc) {
  return executeQuery(getCardsPossessedByUserRef(dc));
};

const getUserRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetUser');
}
getUserRef.operationName = 'GetUser';
exports.getUserRef = getUserRef;

exports.getUser = function getUser(dc) {
  return executeQuery(getUserRef(dc));
};

const getCardsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetCards');
}
getCardsRef.operationName = 'GetCards';
exports.getCardsRef = getCardsRef;

exports.getCards = function getCards(dc) {
  return executeQuery(getCardsRef(dc));
};

const getCardByIdRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetCardById', inputVars);
}
getCardByIdRef.operationName = 'GetCardById';
exports.getCardByIdRef = getCardByIdRef;

exports.getCardById = function getCardById(dcOrVars, vars) {
  return executeQuery(getCardByIdRef(dcOrVars, vars));
};
