import {
  AdminChanged as AdminChangedEvent,
  AdminRemoved as AdminRemovedEvent,
  Approval as ApprovalEvent,
  ApprovalForAll as ApprovalForAllEvent,
  AxieEvolved as AxieEvolvedEvent,
  AxieSpawn as AxieSpawnEvent,
  AxieggMinted as AxieggMintedEvent,
  MinterAdded as MinterAddedEvent,
  MinterRemoved as MinterRemovedEvent,
  NonceUpdated as NonceUpdatedEvent,
  Paused as PausedEvent,
  PermissionSet as PermissionSetEvent,
  PermissionSetAll as PermissionSetAllEvent,
  SeederAdded as SeederAddedEvent,
  SeederRemoved as SeederRemovedEvent,
  SpenderUnwhitelisted as SpenderUnwhitelistedEvent,
  SpenderWhitelisted as SpenderWhitelistedEvent,
  TokenOperatorSet as TokenOperatorSetEvent,
  TokenPermissionSet as TokenPermissionSetEvent,
  Transfer as TransferEvent,
  Unpaused as UnpausedEvent
} from "../generated/Axie/Axie"
import {
  AdminChanged,
  AdminRemoved,
  Approval,
  ApprovalForAll,
  AxieEvolved,
  AxieSpawn,
  AxieggMinted,
  MinterAdded,
  MinterRemoved,
  NonceUpdated,
  Paused,
  PermissionSet,
  PermissionSetAll,
  SeederAdded,
  SeederRemoved,
  SpenderUnwhitelisted,
  SpenderWhitelisted,
  TokenOperatorSet,
  TokenPermissionSet,
  Transfer,
  Unpaused
} from "../generated/schema"

export function handleAdminChanged(event: AdminChangedEvent): void {
  let entity = new AdminChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._oldAdmin = event.params._oldAdmin
  entity._newAdmin = event.params._newAdmin

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleAdminRemoved(event: AdminRemovedEvent): void {
  let entity = new AdminRemoved(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._oldAdmin = event.params._oldAdmin

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._owner = event.params._owner
  entity._approved = event.params._approved
  entity._tokenId = event.params._tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleApprovalForAll(event: ApprovalForAllEvent): void {
  let entity = new ApprovalForAll(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._owner = event.params._owner
  entity._operator = event.params._operator
  entity._approved = event.params._approved

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleAxieEvolved(event: AxieEvolvedEvent): void {
  let entity = new AxieEvolved(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._axieId = event.params._axieId
  entity._genes_x = event.params._genes.x
  entity._genes_y = event.params._genes.y

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleAxieSpawn(event: AxieSpawnEvent): void {
  let entity = new AxieSpawn(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._axieId = event.params._axieId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleAxieggMinted(event: AxieggMintedEvent): void {
  let entity = new AxieggMinted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._axieId = event.params._axieId
  entity._axie_sireId = event.params._axie.sireId
  entity._axie_matronId = event.params._axie.matronId
  entity._axie_birthDate = event.params._axie.birthDate
  entity._axie_genes_x = event.params._axie.genes.x
  entity._axie_genes_y = event.params._axie.genes.y
  entity._axie_breedCount = event.params._axie.breedCount
  entity._axie_level = event.params._axie.level
  entity._axiegg_sireGenes_x = event.params._axiegg.sireGenes.x
  entity._axiegg_sireGenes_y = event.params._axiegg.sireGenes.y
  entity._axiegg_matronGenes_x = event.params._axiegg.matronGenes.x
  entity._axiegg_matronGenes_y = event.params._axiegg.matronGenes.y

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMinterAdded(event: MinterAddedEvent): void {
  let entity = new MinterAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._minter = event.params._minter

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMinterRemoved(event: MinterRemovedEvent): void {
  let entity = new MinterRemoved(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._minter = event.params._minter

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNonceUpdated(event: NonceUpdatedEvent): void {
  let entity = new NonceUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._tokenId = event.params._tokenId
  entity._nonce = event.params._nonce

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePaused(event: PausedEvent): void {
  let entity = new Paused(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePermissionSet(event: PermissionSetEvent): void {
  let entity = new PermissionSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._owner = event.params._owner
  entity._operator = event.params._operator
  entity._funcSig = event.params._funcSig
  entity._approved = event.params._approved

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePermissionSetAll(event: PermissionSetAllEvent): void {
  let entity = new PermissionSetAll(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._owner = event.params._owner
  entity._operator = event.params._operator
  entity._approved = event.params._approved

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSeederAdded(event: SeederAddedEvent): void {
  let entity = new SeederAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._seeder = event.params._seeder

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSeederRemoved(event: SeederRemovedEvent): void {
  let entity = new SeederRemoved(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._seeder = event.params._seeder

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSpenderUnwhitelisted(
  event: SpenderUnwhitelistedEvent
): void {
  let entity = new SpenderUnwhitelisted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._spender = event.params._spender

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSpenderWhitelisted(event: SpenderWhitelistedEvent): void {
  let entity = new SpenderWhitelisted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._spender = event.params._spender

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTokenOperatorSet(event: TokenOperatorSetEvent): void {
  let entity = new TokenOperatorSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._tokenId = event.params._tokenId
  entity._operator = event.params._operator
  entity._approved = event.params._approved

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTokenPermissionSet(event: TokenPermissionSetEvent): void {
  let entity = new TokenPermissionSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._tokenId = event.params._tokenId
  entity._operator = event.params._operator
  entity._funcSig = event.params._funcSig
  entity._approved = event.params._approved

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._from = event.params._from
  entity._to = event.params._to
  entity._tokenId = event.params._tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUnpaused(event: UnpausedEvent): void {
  let entity = new Unpaused(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
