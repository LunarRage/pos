import { log } from "@graphprotocol/graph-ts";
import { SellerHistory } from "../../generated/schema";

export function registerSellerHistory(transaction:string, seller:string, axieID:string):bool{
    
    
    let registeredSellerHistory:SellerHistory|null = null;

    if(transaction == "" && seller == ""){
        log.critical("No ID found for registering seller history.",[]);
        return false;
    
    }

    let id = transaction.concat(`:${seller}:${axieID}`);
    registeredSellerHistory = isSellerHistory(id);

    if(!registeredSellerHistory){
        
        registeredSellerHistory = new SellerHistory(id);
        registeredSellerHistory.transaction = transaction;
        registeredSellerHistory.seller = seller;
        registeredSellerHistory.axieID = axieID;
        registeredSellerHistory.save();
        return true;
        
    }else{
        log.info("Account already registered:{}",[id]);
        return false
    }

}

export function isSellerHistory(id:string):SellerHistory | null{
    let newSellerHistory = SellerHistory.load(id);

    if(newSellerHistory){
        return newSellerHistory;
    }

    return null;
}