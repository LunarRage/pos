import { log } from "@graphprotocol/graph-ts";
import { Transfer as TransferEvent} from "../generated/Axie/Axie";
import {Transfer as ETHTransferEvent} from "../generated/ETH/ETH";
import {ReferralRewardTransferred} from "../generated/Marketplace/Marketplace";
import { resolveHandler } from "./handlers/resolverHandler";
import { AXIECONTRACT, AXIETRANSFER, ETHTRANSFER, REFTRANSFER } from "./utils/funcConstants";
import { isSale } from "./utils/helperFunctions";


export function handleTransfer(event: TransferEvent):void{
    
  let indexCode = event.transaction.input;

  if(isSale(indexCode)){
    resolveHandler(event,AXIETRANSFER);
  }
}

export function handlePurchase(event: ETHTransferEvent):void{
  
  let indexCode = event.transaction.input;
  if(isSale(indexCode)){
    resolveHandler(event,ETHTRANSFER);
  }
}

export function handleMarketSale(event:ReferralRewardTransferred):void{
   let indexCode = event.transaction.input;

   if(isSale(indexCode)){
    resolveHandler(event,REFTRANSFER);
   }
}
