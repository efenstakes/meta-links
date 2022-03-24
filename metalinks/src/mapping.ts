import { BigInt,  } from "@graphprotocol/graph-ts"
import {
  MetaLinks,
  AvatarAddressAdded as AvatarAddressAddedEvent,
  AvatarCreated as AvatarCreatedEvent,
  MetaLinkAdded as MetaLinkAddedEvent,
  OwnershipTransferred as OwnershipTransferredEvent
} from "../generated/MetaLinks/MetaLinks"
import { Avatar, MetaLink } from "../generated/schema"




// create the avatar
export function handleAvatarAddressAdded(event: AvatarAddressAddedEvent): void {
}

export function handleAvatarCreated(event: AvatarCreatedEvent): void {
}

export function handleMetaLinkAdded(event: MetaLinkAddedEvent): void {}

export function handleOwnershipTransferred(event: OwnershipTransferredEvent): void {}




// BigInt and BigDecimal math are supported
// entity.count + BigInt.fromI32(1)

// update avatar in the store with `.save()`
// avatar.save()

// Note: If a handler doesn't require existing field values, it is faster
// _not_ to load the entity from the store. Instead, create it fresh with
// `new Entity(...)`, set the fields that should be updated and save the
// entity back to the store. Fields that were not set or unset remain
// unchanged, allowing for partial updates to be applied.

// It is also possible to access smart contracts from mappings. For
// example, the contract that has emitted the event can be connected to
// with:
//
// let contract = Contract.bind(event.address)
//
// The following functions can then be called on this contract to access
// state variables and other data:
//
// - contract.addAvatarAddress(...)
// - contract.addMetaLinkMetalink(...)
// - contract.addressesToMID(...)
// - contract.createAvatar(...)
// - contract.getAvatar(...)
// - contract.getAvatarID(...)
// - contract.getMyAvatarID(...)
// - contract.midsToAvatars(...)
// - contract.midsToMetaLinks(...)
// - contract.owner(...)
// - contract.totalAvatars(...)
// - contract.totalMetaLinks(...)