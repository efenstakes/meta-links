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
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let avatar = Avatar.load(event.params.id.toString())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if ( !avatar ) return

  for (let index = 0; index < event.params.newAddresses.length; index++) {
    const nowAddress = event.params.newAddresses[index];
    
    avatar.links.push( nowAddress.toString() )    
  }

  // update avatar in the store with `.save()`
  avatar.save()
}

export function handleAvatarCreated(event: AvatarCreatedEvent): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let avatar = Avatar.load(event.params.avatarID.toString())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if ( !avatar ) {
    avatar = new Avatar(event.params.avatarID.toString())
  }

  // Entity fields can be set based on event parameters
  avatar.assignedID = event.params.avatarID
  avatar.name = event.params.name.toString()
  avatar.aka = event.params.aka.toString()
  avatar.bio = event.params.bio.toString()
  avatar.avatarURI = event.params.avatar.toString()
  avatar.addresses = [ event.transaction.from.toString() ]
  

  // Entities can be written to the store with `.save()`
  avatar.save()
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