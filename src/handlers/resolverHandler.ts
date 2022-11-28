import { ethereum } from "@graphprotocol/graph-ts";
import { Transfer as TransferEvent } from "../../generated/Axie/Axie";
import { Transfer as ETHTransferEvent } from "../../generated/ETH/ETH";
import { ReferralRewardTransferred } from "../../generated/Marketplace/Marketplace";
import { increasePurchaseTotal,registerAxie } from "../stores/axie";
import { registerBuyerHistory } from "../stores/buyerHistory";
import { increaseTotalEarned, registerReferral } from "../stores/referral";
import { registerReferralHistory } from "../stores/referralHistory";
import { increasePurchaseCount, increaseSoldCount, registerRoninAccount } from "../stores/roninaccount";
import { registerSellerHistory } from "../stores/sellerHistory";
import { isReferralAmountSet, isReferralTransaction, registerTransaction, setTransactionAmount } from "../stores/transaction";
import { AXIETRANSFER, ETHTRANSFER, REFTRANSFER, SETBUYER, SETREFERRAL, SETTREASURY } from "../utils/funcConstants";
import { isReferral, isTreasury } from "../utils/helperFunctions";

export function resolveHandler(event:ethereum.Event,type:string):void{

    let txHash = event.transaction.hash.toHexString();
    let referralStatus = isReferral(event.transaction.input);
    let timeStamp = event.block.timestamp;
    registerTransaction(txHash,timeStamp,referralStatus);

    
    if(type == ETHTRANSFER){
        let newEvent = changetype<ETHTransferEvent>(event);
        let recv = newEvent.params.to.toHexString();
        let amnt = newEvent.params.value;
        let txHash = newEvent.transaction.hash.toHexString();

        if(isReferralTransaction(txHash) && isReferralAmountSet(txHash)){
            setTransactionAmount(txHash,amnt,SETREFERRAL);
            return;
        }

        if(isTreasury(recv)){
            setTransactionAmount(txHash,amnt,SETTREASURY);
            return;
        }
        
        setTransactionAmount(txHash,amnt,SETBUYER);
    }   

    if(type == AXIETRANSFER){

        let newEvent = changetype<TransferEvent>(event);
        let seller = newEvent.params._from.toHexString();
        let buyer = newEvent.params._to.toHexString();
        let axie = newEvent.params._tokenId.toString();
        let txHash = newEvent.transaction.hash.toHexString();

        if(!registerRoninAccount(seller)){
            increaseSoldCount(seller);
        }

        if(!registerRoninAccount(buyer)){
            increasePurchaseCount(buyer);
        }   
        
        if(!registerAxie(axie,event.address)){
            increasePurchaseTotal(axie);
        }
        
        registerSellerHistory(txHash,seller,axie);
        registerBuyerHistory(txHash,buyer,axie);
    }

    if(type == REFTRANSFER){
        let newEvent = changetype<ReferralRewardTransferred>(event);
        let referralID = newEvent.params.referralAddr.toHexString();
        let amnt = newEvent.params.amount;
        let hash = newEvent.transaction.hash.toHexString();
        let transactionIndex = newEvent.transactionLogIndex.toString();

        if(!registerReferral(referralID)){
            increaseTotalEarned(referralID,amnt);
        }
        
        registerReferralHistory(hash,referralID,transactionIndex)
    }


}