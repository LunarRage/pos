import { Address, bigInt, Bytes, log } from "@graphprotocol/graph-ts";
import { AXIECONTRACT, getClassMap, PURCHASE_H, REFINDICATOR, TREASURYACC } from "./funcConstants";
import {Axie} from "../../generated/Axie/Axie";


export function isSale(indexCode:Bytes):bool{
    let inputCode = (changetype<Bytes>(indexCode.subarray(0,4))).toHexString();
    
    let isAxieSale = indexCode.toHexString().includes(AXIECONTRACT);

    return PURCHASE_H.has(inputCode) && isAxieSale;
}

export function isReferral(indexCode:Bytes):bool{
    let isReferral = indexCode.toHexString().includes(REFINDICATOR);

    return isReferral;
}

export function isTreasury(addr:string):bool{
    return addr == TREASURYACC? true:false 
}

export function getAxieType(id:string,eventAddr:Address):string{
    
    let result:string = "";
    let axieContract = Axie.bind(eventAddr);

    let axieID = bigInt.fromString(id);

    let xGene = axieContract.axie(axieID).value3.x.toHexString();
    let yGene = axieContract.axie(axieID).value3.y.toHexString();

    let hexString = (xGene.concat(`000`+yGene.slice(2))).replace('0x','');
    let binary ='';

    for(let i:i32=0; i<hexString.length; i++){
        let temp = parseInt(hexString.charAt(i),16) as i32;
        binary += temp.toString(2).padStart(4,'0');
    }
    let classString = binary.slice(0,5);

    log.info("Axie String:{}",[classString]);

    if(getClassMap.has(classString)){

        result = getClassMap.get(classString);
    }

    return result;
}