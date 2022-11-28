import { BigDecimal, BigInt, log } from "@graphprotocol/graph-ts";
import {Referral} from "../../generated/schema";
import { toDecimal } from "../utils/decimal";

export function registerReferral(id:string):bool{

    let registeredReferral: Referral | null = null;

    if(id == ""){
        log.critical("No referral id provided when registering.",[]);
        return false;
    
    }

    registeredReferral = isReferral(id);

    if(!registeredReferral){
        registeredReferral = new Referral(id);
        registeredReferral.totalEarned = BigDecimal.fromString("0");
        registeredReferral.save();
        return true;
    }else{
        log.info("Referral already registered:{}",[id]);
        return false;
    }

}

export function increaseTotalEarned(id:string, amount:BigInt):bool{
    
    let registeredReferral: Referral | null = null;

    if(id == ""){
        log.critical("No referral id provided when increasing total.",[]);
        return false;
    
    }

    registeredReferral = isReferral(id);

    if(registeredReferral){
        let tempAmount = registeredReferral.totalEarned;
        let convertedAmnt = toDecimal(amount);
        registeredReferral.totalEarned = tempAmount.plus(convertedAmnt);
        registeredReferral.save();
        return true; 
    }else{
        log.info("Referral not registered",[id]);
        return false;
    }
}

function isReferral(id:string):Referral | null{
    let newRefferal = Referral.load(id);
    if(newRefferal){
        return newRefferal;
    }

    return null;
}