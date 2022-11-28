import { Address, BigInt, log } from "@graphprotocol/graph-ts";
import { Axie } from "../../generated/schema";
import { getAxieType } from "../utils/helperFunctions";


export function registerAxie(id:string, eventAddr:Address):bool{

    let registeredAxie:Axie |null = null;

    if(id == ""){
        
        log.critical("No axie id found when registering.",[]);
        return false;
    }

    registeredAxie = isAxieExist(id);

    if(!registeredAxie){
        
        registeredAxie = new Axie(id);
        registeredAxie.purchaseTotal = BigInt.fromString("1");
        registeredAxie.type = getAxieType(id,eventAddr);
        registeredAxie.save();
        return true;

    }else{
        log.info("Axie already registered:{}",[id]);
        return false;
    }
    
}

export function increasePurchaseTotal(id:string):bool{

    let registeredAxie:Axie |null =null;

    if(id == ""){
        log.critical("No axie id found when trying to increase.",[]);
        return false;
    }

    registeredAxie = isAxieExist(id);

    if(registeredAxie){
        
        let tempSold = registeredAxie.purchaseTotal;
        let newCount = tempSold.plus(BigInt.fromString("1"));
        registeredAxie.purchaseTotal = newCount;
        registeredAxie.save();
        return true;

    }else{
        log.info("Unable to find the axie:{}",[id]);
        return false;
    }

}

function isAxieExist(id:string):Axie|null{
    let newAxie = Axie.load(id);
    if(newAxie){
        return newAxie;
    }

    return null;
}