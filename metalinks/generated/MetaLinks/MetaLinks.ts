// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class AvatarAddressAdded extends ethereum.Event {
  get params(): AvatarAddressAdded__Params {
    return new AvatarAddressAdded__Params(this);
  }
}

export class AvatarAddressAdded__Params {
  _event: AvatarAddressAdded;

  constructor(event: AvatarAddressAdded) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get newAddresses(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }
}

export class AvatarCreated extends ethereum.Event {
  get params(): AvatarCreated__Params {
    return new AvatarCreated__Params(this);
  }
}

export class AvatarCreated__Params {
  _event: AvatarCreated;

  constructor(event: AvatarCreated) {
    this._event = event;
  }

  get avatarID(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get name(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get aka(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get bio(): string {
    return this._event.parameters[3].value.toString();
  }

  get avatar(): string {
    return this._event.parameters[4].value.toString();
  }

  get bgAvatar(): string {
    return this._event.parameters[5].value.toString();
  }
}

export class MetaLinkAdded extends ethereum.Event {
  get params(): MetaLinkAdded__Params {
    return new MetaLinkAdded__Params(this);
  }
}

export class MetaLinkAdded__Params {
  _event: MetaLinkAdded;

  constructor(event: MetaLinkAdded) {
    this._event = event;
  }

  get avatarID(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get newMetaLinkID(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get name(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get aka(): string {
    return this._event.parameters[3].value.toString();
  }

  get bio(): string {
    return this._event.parameters[4].value.toString();
  }

  get universe(): string {
    return this._event.parameters[5].value.toString();
  }

  get link(): string {
    return this._event.parameters[6].value.toString();
  }

  get avatar(): string {
    return this._event.parameters[7].value.toString();
  }

  get bgAvatar(): string {
    return this._event.parameters[8].value.toString();
  }

  get active(): boolean {
    return this._event.parameters[9].value.toBoolean();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class MetaLinks__getAvatarResult {
  value0: string;
  value1: string;
  value2: string;
  value3: string;
  value4: Array<BigInt>;

  constructor(
    value0: string,
    value1: string,
    value2: string,
    value3: string,
    value4: Array<BigInt>
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromString(this.value0));
    map.set("value1", ethereum.Value.fromString(this.value1));
    map.set("value2", ethereum.Value.fromString(this.value2));
    map.set("value3", ethereum.Value.fromString(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigIntArray(this.value4));
    return map;
  }
}

export class MetaLinks__midsToAvatarsResult {
  value0: string;
  value1: string;
  value2: string;
  value3: string;
  value4: string;

  constructor(
    value0: string,
    value1: string,
    value2: string,
    value3: string,
    value4: string
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromString(this.value0));
    map.set("value1", ethereum.Value.fromString(this.value1));
    map.set("value2", ethereum.Value.fromString(this.value2));
    map.set("value3", ethereum.Value.fromString(this.value3));
    map.set("value4", ethereum.Value.fromString(this.value4));
    return map;
  }
}

export class MetaLinks__midsToMetaLinksResult {
  value0: string;
  value1: string;
  value2: string;
  value3: string;
  value4: string;
  value5: string;
  value6: string;
  value7: boolean;

  constructor(
    value0: string,
    value1: string,
    value2: string,
    value3: string,
    value4: string,
    value5: string,
    value6: string,
    value7: boolean
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromString(this.value0));
    map.set("value1", ethereum.Value.fromString(this.value1));
    map.set("value2", ethereum.Value.fromString(this.value2));
    map.set("value3", ethereum.Value.fromString(this.value3));
    map.set("value4", ethereum.Value.fromString(this.value4));
    map.set("value5", ethereum.Value.fromString(this.value5));
    map.set("value6", ethereum.Value.fromString(this.value6));
    map.set("value7", ethereum.Value.fromBoolean(this.value7));
    return map;
  }
}

export class MetaLinks extends ethereum.SmartContract {
  static bind(address: Address): MetaLinks {
    return new MetaLinks("MetaLinks", address);
  }

  addAvatarAddress(addresses: Array<Address>): boolean {
    let result = super.call(
      "addAvatarAddress",
      "addAvatarAddress(address[]):(bool)",
      [ethereum.Value.fromAddressArray(addresses)]
    );

    return result[0].toBoolean();
  }

  try_addAvatarAddress(
    addresses: Array<Address>
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "addAvatarAddress",
      "addAvatarAddress(address[]):(bool)",
      [ethereum.Value.fromAddressArray(addresses)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  addMetaLinkMetalink(
    _name: string,
    _aka: string,
    _universe: string,
    _avatar: string,
    _bg_avatar: string,
    _link: string,
    _bio: string,
    _active: boolean
  ): boolean {
    let result = super.call(
      "addMetaLinkMetalink",
      "addMetaLinkMetalink(string,string,string,string,string,string,string,bool):(bool)",
      [
        ethereum.Value.fromString(_name),
        ethereum.Value.fromString(_aka),
        ethereum.Value.fromString(_universe),
        ethereum.Value.fromString(_avatar),
        ethereum.Value.fromString(_bg_avatar),
        ethereum.Value.fromString(_link),
        ethereum.Value.fromString(_bio),
        ethereum.Value.fromBoolean(_active)
      ]
    );

    return result[0].toBoolean();
  }

  try_addMetaLinkMetalink(
    _name: string,
    _aka: string,
    _universe: string,
    _avatar: string,
    _bg_avatar: string,
    _link: string,
    _bio: string,
    _active: boolean
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "addMetaLinkMetalink",
      "addMetaLinkMetalink(string,string,string,string,string,string,string,bool):(bool)",
      [
        ethereum.Value.fromString(_name),
        ethereum.Value.fromString(_aka),
        ethereum.Value.fromString(_universe),
        ethereum.Value.fromString(_avatar),
        ethereum.Value.fromString(_bg_avatar),
        ethereum.Value.fromString(_link),
        ethereum.Value.fromString(_bio),
        ethereum.Value.fromBoolean(_active)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  addressesToMID(param0: Address): BigInt {
    let result = super.call(
      "addressesToMID",
      "addressesToMID(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toBigInt();
  }

  try_addressesToMID(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "addressesToMID",
      "addressesToMID(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  createAvatar(
    _name: string,
    _aka: string,
    _bio: string,
    _avatar: string,
    _bg_avatar: string
  ): BigInt {
    let result = super.call(
      "createAvatar",
      "createAvatar(string,string,string,string,string):(uint256)",
      [
        ethereum.Value.fromString(_name),
        ethereum.Value.fromString(_aka),
        ethereum.Value.fromString(_bio),
        ethereum.Value.fromString(_avatar),
        ethereum.Value.fromString(_bg_avatar)
      ]
    );

    return result[0].toBigInt();
  }

  try_createAvatar(
    _name: string,
    _aka: string,
    _bio: string,
    _avatar: string,
    _bg_avatar: string
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "createAvatar",
      "createAvatar(string,string,string,string,string):(uint256)",
      [
        ethereum.Value.fromString(_name),
        ethereum.Value.fromString(_aka),
        ethereum.Value.fromString(_bio),
        ethereum.Value.fromString(_avatar),
        ethereum.Value.fromString(_bg_avatar)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getAvatar(id: BigInt): MetaLinks__getAvatarResult {
    let result = super.call(
      "getAvatar",
      "getAvatar(uint256):(string,string,string,string,uint256[])",
      [ethereum.Value.fromUnsignedBigInt(id)]
    );

    return new MetaLinks__getAvatarResult(
      result[0].toString(),
      result[1].toString(),
      result[2].toString(),
      result[3].toString(),
      result[4].toBigIntArray()
    );
  }

  try_getAvatar(id: BigInt): ethereum.CallResult<MetaLinks__getAvatarResult> {
    let result = super.tryCall(
      "getAvatar",
      "getAvatar(uint256):(string,string,string,string,uint256[])",
      [ethereum.Value.fromUnsignedBigInt(id)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new MetaLinks__getAvatarResult(
        value[0].toString(),
        value[1].toString(),
        value[2].toString(),
        value[3].toString(),
        value[4].toBigIntArray()
      )
    );
  }

  getAvatarID(addrss: Address): BigInt {
    let result = super.call("getAvatarID", "getAvatarID(address):(uint256)", [
      ethereum.Value.fromAddress(addrss)
    ]);

    return result[0].toBigInt();
  }

  try_getAvatarID(addrss: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getAvatarID",
      "getAvatarID(address):(uint256)",
      [ethereum.Value.fromAddress(addrss)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getMyAvatarID(): BigInt {
    let result = super.call("getMyAvatarID", "getMyAvatarID():(uint256)", []);

    return result[0].toBigInt();
  }

  try_getMyAvatarID(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getMyAvatarID",
      "getMyAvatarID():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  midsToAvatars(param0: BigInt): MetaLinks__midsToAvatarsResult {
    let result = super.call(
      "midsToAvatars",
      "midsToAvatars(uint256):(string,string,string,string,string)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new MetaLinks__midsToAvatarsResult(
      result[0].toString(),
      result[1].toString(),
      result[2].toString(),
      result[3].toString(),
      result[4].toString()
    );
  }

  try_midsToAvatars(
    param0: BigInt
  ): ethereum.CallResult<MetaLinks__midsToAvatarsResult> {
    let result = super.tryCall(
      "midsToAvatars",
      "midsToAvatars(uint256):(string,string,string,string,string)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new MetaLinks__midsToAvatarsResult(
        value[0].toString(),
        value[1].toString(),
        value[2].toString(),
        value[3].toString(),
        value[4].toString()
      )
    );
  }

  midsToMetaLinks(param0: BigInt): MetaLinks__midsToMetaLinksResult {
    let result = super.call(
      "midsToMetaLinks",
      "midsToMetaLinks(uint256):(string,string,string,string,string,string,string,bool)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new MetaLinks__midsToMetaLinksResult(
      result[0].toString(),
      result[1].toString(),
      result[2].toString(),
      result[3].toString(),
      result[4].toString(),
      result[5].toString(),
      result[6].toString(),
      result[7].toBoolean()
    );
  }

  try_midsToMetaLinks(
    param0: BigInt
  ): ethereum.CallResult<MetaLinks__midsToMetaLinksResult> {
    let result = super.tryCall(
      "midsToMetaLinks",
      "midsToMetaLinks(uint256):(string,string,string,string,string,string,string,bool)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new MetaLinks__midsToMetaLinksResult(
        value[0].toString(),
        value[1].toString(),
        value[2].toString(),
        value[3].toString(),
        value[4].toString(),
        value[5].toString(),
        value[6].toString(),
        value[7].toBoolean()
      )
    );
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  totalAvatars(): BigInt {
    let result = super.call("totalAvatars", "totalAvatars():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalAvatars(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalAvatars", "totalAvatars():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  totalMetaLinks(): BigInt {
    let result = super.call("totalMetaLinks", "totalMetaLinks():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalMetaLinks(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "totalMetaLinks",
      "totalMetaLinks():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AddAvatarAddressCall extends ethereum.Call {
  get inputs(): AddAvatarAddressCall__Inputs {
    return new AddAvatarAddressCall__Inputs(this);
  }

  get outputs(): AddAvatarAddressCall__Outputs {
    return new AddAvatarAddressCall__Outputs(this);
  }
}

export class AddAvatarAddressCall__Inputs {
  _call: AddAvatarAddressCall;

  constructor(call: AddAvatarAddressCall) {
    this._call = call;
  }

  get addresses(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }
}

export class AddAvatarAddressCall__Outputs {
  _call: AddAvatarAddressCall;

  constructor(call: AddAvatarAddressCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class AddMetaLinkMetalinkCall extends ethereum.Call {
  get inputs(): AddMetaLinkMetalinkCall__Inputs {
    return new AddMetaLinkMetalinkCall__Inputs(this);
  }

  get outputs(): AddMetaLinkMetalinkCall__Outputs {
    return new AddMetaLinkMetalinkCall__Outputs(this);
  }
}

export class AddMetaLinkMetalinkCall__Inputs {
  _call: AddMetaLinkMetalinkCall;

  constructor(call: AddMetaLinkMetalinkCall) {
    this._call = call;
  }

  get _name(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _aka(): string {
    return this._call.inputValues[1].value.toString();
  }

  get _universe(): string {
    return this._call.inputValues[2].value.toString();
  }

  get _avatar(): string {
    return this._call.inputValues[3].value.toString();
  }

  get _bg_avatar(): string {
    return this._call.inputValues[4].value.toString();
  }

  get _link(): string {
    return this._call.inputValues[5].value.toString();
  }

  get _bio(): string {
    return this._call.inputValues[6].value.toString();
  }

  get _active(): boolean {
    return this._call.inputValues[7].value.toBoolean();
  }
}

export class AddMetaLinkMetalinkCall__Outputs {
  _call: AddMetaLinkMetalinkCall;

  constructor(call: AddMetaLinkMetalinkCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class CreateAvatarCall extends ethereum.Call {
  get inputs(): CreateAvatarCall__Inputs {
    return new CreateAvatarCall__Inputs(this);
  }

  get outputs(): CreateAvatarCall__Outputs {
    return new CreateAvatarCall__Outputs(this);
  }
}

export class CreateAvatarCall__Inputs {
  _call: CreateAvatarCall;

  constructor(call: CreateAvatarCall) {
    this._call = call;
  }

  get _name(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _aka(): string {
    return this._call.inputValues[1].value.toString();
  }

  get _bio(): string {
    return this._call.inputValues[2].value.toString();
  }

  get _avatar(): string {
    return this._call.inputValues[3].value.toString();
  }

  get _bg_avatar(): string {
    return this._call.inputValues[4].value.toString();
  }
}

export class CreateAvatarCall__Outputs {
  _call: CreateAvatarCall;

  constructor(call: CreateAvatarCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}
