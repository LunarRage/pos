
import { BigInt } from "@graphprotocol/graph-ts";

// ====================================================== //
// ====================== CONSTANTS ===================== //
// ====================================================== //

export const ETHTRANSFER = "ETH";
export const REFTRANSFER = "REF";
export const AXIECONTRACT = "32950db2a7164ae833121501c797d79e7b79d74c";
export const SETTREASURY="setTreasury";
export const SETREFERRAL="setReferral";
export const REFINDICATOR = "0344c54c66d30";
export const SETBUYER="setBuyer";
export const AXIETRANSFER = "AXIE";
export const TREASURYACC = "0x245db945c485b68fdc429e4f7085a1761aa4d45d";
export const getClassMap = new Map<string,string>();

getClassMap.set("00000","Beast");
getClassMap.set("00001","Bug");
getClassMap.set("00010","Bird");
getClassMap.set("00011","Plant");
getClassMap.set("00100","Aquatic");
getClassMap.set("00101","Reptile");
getClassMap.set("10000","Mech");
getClassMap.set("10001","Dusk");
getClassMap.set("10010","Dawn");

// ====================================================== //
// ================== SCHEMA CONSTANTS ================== //
// ====================================================== //

export const RONINACCOUNT_ID = "roninID";
export const RONINACCOUNT_TRANSFERTOTAL = "roninAccountTransferTotal";

export const AXIE_ID = "axieID";
export const AXIE_TOTALSOLD = "axieTotalSold";
export const AXIE_CLASS = "axieClass";

export const REFERRALS_ID = "referralID";
export const REFERRALS_RONINID =  "referralRoninID";
export const REFERRALS_AMOUNT = "referralAmount";

export const BUYERHISTORY_ID = "buyerHistoryID";
export const BUYERHISTORY_TXHASH = "buyerHistoryHash";
export const BUYERHISTORY_TIMESTAMP = "buyerHistoryTimeStamp";
export const BUYERHISTORY_AMOUNT = "buyerHistoryAmount";
export const BUYERHISTORY_AXIEID = "buyerHistoryAxie";
export const BUYERHISTORY_BUYER = "buyerHistoryBuyer";
export const BUYERHISTORY_SELLER = "buyerHistorySeller";

export const SELLERHISTORY_ID = "sellerHistoryID";
export const SELLERHISTORY_TXHASH = "sellerHistoryHash";
export const SELLERHISTORY_TIMESTAMP = "sellerHistoryTimeStamp";
export const SELLERHISTORY_AMOUNT = "sellerHistoryAmount";
export const SELLERHISTORY_AXIEID = "sellerHistoryAxie";
export const SELLERHISTORY_BUYER = "sellerHistoryBuyer";
export const SELLERHISTORY_SELLER = "sellerHistorySeller";


// ====================================================== //
// ======================= Headers ====================== //
// ====================================================== //

export const PURCHASE_H = new Set<string>();
PURCHASE_H.add('0x95a4ec00');