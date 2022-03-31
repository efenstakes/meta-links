import { BigInt, log } from "@graphprotocol/graph-ts"
import {
  MetaLinks,
  AvatarAddressesAdded as AvatarAddressesAddedEvent,
  AvatarCreated as AvatarCreatedEvent,
  MetaLinkAdded as MetaLinkAddedEvent,
  OwnershipTransferred as OwnershipTransferredEvent
} from "../generated/MetaLinks/MetaLinks"


import { Avatar, MetaLink, Universe } from "../generated/schema"





// create the avatar
export function handleAvatarCreated(event: AvatarCreatedEvent): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let avatar = Avatar.load(event.params.avatarID.toString())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if ( !avatar ) {
    avatar = new Avatar(event.params.avatarID.toString())
  }

  log.info('event.params.name {} ', [ event.params.name ])
  // log.info('event.params.name.toHex() {} ', [ event.params.name.toHex() ])
  // log.info('event.params.name.toHexString() {} ', [ event.params.name.toHexString() ])
  // log.info('String.UTF16.decode(event.params.name).toString() {}', [ String.UTF16.decode(event.params.name).toString() ] )

  // Entity fields can be set based on event parameters
  avatar.assignedID = event.params.avatarID
  avatar.name = event.params.name
  avatar.aka = event.params.aka
  avatar.bio = event.params.bio
  avatar.avatarURI = event.params.avatar
  avatar.bgAvatarURI = event.params.bgAvatar
  avatar.addresses = [ event.transaction.from ]
  

  // Entities can be written to the store with `.save()`
  avatar.save()
}



// add new avatar addresses
export function handleAvatarAddressesAdded(event: AvatarAddressesAddedEvent): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let avatar = Avatar.load(event.params.avatarID.toString())

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


export function handleMetaLinkAdded(event: MetaLinkAddedEvent): void {
  let avatar = Avatar.load(event.params.avatarID.toString())

  if( !avatar ) return

  // load metalink
  let metaLink = MetaLink.load(event.params.newMetaLinkID.toString())

  if( metaLink ) return


  // create metalink entity
  let universe = Universe.load(event.params.universe)

  // set properties
  if( !metaLink ) {
    universe = new Universe(event.params.universe)
    universe.name = event.params.universe

    // save universe
    universe.save()
  }

  // create metalink entity
  metaLink = new MetaLink(event.params.newMetaLinkID.toString())
  
  // set properties
  metaLink.avatarID = event.params.avatarID
  metaLink.name = event.params.name
  metaLink.aka = event.params.aka
  metaLink.link = event.params.link
  metaLink.avatarURI = event.params.avatar
  metaLink.bgAvatarURI = event.params.bgAvatar
  metaLink.bio = event.params.bio
  metaLink.active = event.params.active
  
  metaLink.universe = event.params.universe
  metaLink.avatar = event.params.avatar
  

  // save metaLink
  metaLink.save()
}

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