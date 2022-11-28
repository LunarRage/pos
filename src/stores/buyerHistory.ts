import { log } from "@graphprotocol/graph-ts";
import { BuyerHistory } from "../../generated/schema";

export function registerBuyerHistory(transaction:string, buyer:string, axieID:string):bool{
    
    let registeredBuyerHistory:BuyerHistory|null = null;

    if(transaction == "" && buyer == ""){
        log.critical("No ID found for registering buyer history.",[]);
        return false;
    
    }
    let id = transaction.concat(`:${buyer}:${axieID}`);
    registeredBuyerHistory = isBuyerHistory(id);

    if(!registeredBuyerHistory){
        registeredBuyerHistory = new BuyerHistory(id);
        registeredBuyerHistory.transaction = transaction;
        registeredBuyerHistory.buyer = buyer;
        registeredBuyerHistory.axieID = axieID;
        registeredBuyerHistory.save();

        return true;
    }else{
        log.info("Account already registered:{}",[id]);
        return false
    }

}

export function isBuyerHistory(id:string):BuyerHistory | null{
    let newBuyerHistory = BuyerHistory.load(id);

    if(newBuyerHistory){
        return newBuyerHistory;
    }

    return null;
}