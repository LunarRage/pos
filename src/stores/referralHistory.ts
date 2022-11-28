import { log } from "@graphprotocol/graph-ts";
import { ReferralHistory } from "../../generated/schema";

export function registerReferralHistory(transactionID:string, referralID:string, index:string):bool{
    
    let registeredReferralHistory:ReferralHistory|null = null;
    let id = transactionID.concat(`:${referralID}:${index}`);

    if(id == ""){
        log.critical("No ID found for registering referral history.",[]);
        return false;
    
    }

    registeredReferralHistory = isReferralHistory(id);

    if(!registeredReferralHistory){

        registeredReferralHistory = new ReferralHistory(id);
        registeredReferralHistory.transaction = transactionID;
        registeredReferralHistory.referral = referralID;
        registeredReferralHistory.save();
        return true;

    }else{
        log.info("Account already registered:{}",[id]);
        return false
    }

}

export function isReferralHistory(id:string):ReferralHistory | null {
    
    let newReferralHistory = ReferralHistory.load(id);

    if(newReferralHistory){
        return newReferralHistory;
    }

    return null;
}