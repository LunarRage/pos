import { BigInt, log } from "@graphprotocol/graph-ts";
import {RoninAccount} from "../../generated/schema";


export function registerRoninAccount(id:string):bool{

    let registeredRoninAccount:RoninAccount |null = null;
    
    if(id == ""){
        log.critical("No ronin account found when registering.",[]);
        return false;
    
    }

    registeredRoninAccount = isRoninAccount(id);
    
    if(!registeredRoninAccount){
        registeredRoninAccount = new RoninAccount(id);
        registeredRoninAccount.totalPurchased = BigInt.fromString('0');
        registeredRoninAccount.totalSold = BigInt.fromString('0');
        registeredRoninAccount.save();
        return true;
    }else{
        log.info("Account already registered:{}",[id]);
        return false
    }
}

export function increasePurchaseCount(id:string):bool{

    let registeredRoninAccount:RoninAccount |null = null;

    registeredRoninAccount = isRoninAccount(id);

    if(registeredRoninAccount){
        let tempCount = registeredRoninAccount.totalPurchased;
        let newCount = tempCount.plus(BigInt.fromString("1"));
        registeredRoninAccount.totalPurchased = newCount;
        registeredRoninAccount.save();
        return true;
    }else{
        log.warning("no ronin account found when increasing purchase count.",[]);
        return false;
    }
}

export function increaseSoldCount(id:string):bool{

    let registeredRoninAccount:RoninAccount |null = null;

    registeredRoninAccount = isRoninAccount(id);

    if(registeredRoninAccount){
        let tempCount = registeredRoninAccount.totalSold;
        let newCount = tempCount.plus(BigInt.fromString("1"));
        registeredRoninAccount.totalSold = newCount;
        registeredRoninAccount.save();
        return true;
    }else{
        log.warning("no ronin account found when increasing sold count.",[]);
        return false;
    }
}

function isRoninAccount(id:string): RoninAccount | null{
    let newRoninAccount = RoninAccount.load(id);

    if(newRoninAccount){
        return newRoninAccount;
    }

    return null;
}
