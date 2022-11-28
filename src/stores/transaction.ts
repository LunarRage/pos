import { BigDecimal, BigInt, log } from "@graphprotocol/graph-ts";
import {Transaction} from "../../generated/schema";
import { toDecimal } from "../utils/decimal";
import { SETBUYER, SETREFERRAL, SETTREASURY } from "../utils/funcConstants";

export function registerTransaction(id:string, timeStamp:BigInt, isReferral:bool):bool{

    let registeredTransaction:Transaction |null = null;

    if(id == ""){
        log.critical("No transaction hash found when registering.",[]);
        return false;
    
    }

    registeredTransaction = isTransaction(id);

    if(!registeredTransaction){
        registeredTransaction = new Transaction(id);
        registeredTransaction.timeStamp = timeStamp;
        registeredTransaction.buyer = BigDecimal.fromString('0');
        registeredTransaction.treasury = BigDecimal.fromString('0');
        registeredTransaction.referral = BigDecimal.fromString('0');
        registeredTransaction.isReferral = isReferral?true:false;
        registeredTransaction.save();
    }else{
        log.info("Transaction already registered:{}",[id]);
        return false;
    }

    return true;

}

export function isReferralTransaction(id:string):bool{
    let result = false;
    let transaction: Transaction|null = null;

    transaction = isTransaction(id);

    if(transaction){
        result =  transaction.isReferral
        return result;
    }

    return result;
}

export function isReferralAmountSet(id:string):bool{
    let transaction: Transaction|null = null;

    transaction = isTransaction(id);

    if(transaction){
        let tempValue  =  transaction.referral;
        if(tempValue){
            return true;
        }
    }

    return false;
}

export function setTransactionAmount(id:string,amount:BigInt,type:string):bool{

    let registeredTransaction:Transaction |null = null;

    if(id == ""){
        log.critical("No transaction hash found when setting amount.",[]);
        return false;
    
    }

    registeredTransaction = isTransaction(id);

    if(registeredTransaction){
        if(type == SETREFERRAL){
            registeredTransaction.referral = toDecimal(amount);
        }

        if(type == SETBUYER){
            registeredTransaction.buyer = toDecimal(amount);
        }

        if(type == SETTREASURY){
            registeredTransaction.treasury = toDecimal(amount);
        }

        registeredTransaction.save();
        return true;

    }else{
        log.warning("Transaction was not registered:{}",[id]);
        return false;
    }
}
function isTransaction(id:string):Transaction|null{
    let newTransaction = Transaction.load(id);

    if(newTransaction){
        return newTransaction;
    }

    return null;
}