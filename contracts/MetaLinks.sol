// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;



import "@openzeppelin/contracts/access/Ownable.sol";


contract MetaLinks is Ownable {

    // total number of avatars so far
    uint256 public totalAvatars;

    // total number of links so far
    uint256 public totalMetaLinks;

    // map a metalink id to their addresses
    mapping( address => uint256 ) public addressesToMID;

    // map an id to avatar data
    mapping( uint256 => Avatar ) public midsToAvatars;
    
    // map an metalink id to links
    mapping( uint256 => MetaLink ) public midsToMetaLinks;


    // structs
    
    // main avatar
    struct Avatar {
        string name;
        string aka;
        string bio;
        string avatar;
        string bg_avatar;
        uint256[] links;
    }

    // meta link struct
    struct MetaLink {
        string name;
        string aka;
        string universe;
        string link;
        string bio;
        string avatar;
        string bg_avatar;
        bool active;
    }

    

    // events

    // when avatar is created
    event AvatarCreated(
        uint256 indexed avatarID,
        string indexed name,
        string indexed aka,
        string bio,
        string avatar,
        string bg_avatar
    );
    
    // when an avatar adds an address to their avatar
    event AvatarAddressAdded(
        uint256 indexed id,
        address[] indexed newAddresses
    );

    // when link is added
    event MetaLinkAdded(
        uint256 indexed avatarID,
        uint256 indexed newMetaLinkID,
        string indexed name,
        string aka,
        string universe,
        string link,
        string avatar,
        string bg_avatar,
        bool active
    );



    // constructor
    constructor() {

    }


    // modifiers

    // ensure address has an avatar
    modifier isMember() {
        require( addressesToMID[msg.sender] > 0, "You have to be a member" );
        _;
    }

    // ensure address has no avatar
    modifier isNotMember() {
        require( addressesToMID[msg.sender] == 0, "You are already a member" );
        _;
    }



    // create an avatar
    // generate new avatar id
    // associate address with generated avatar id
    // create avatar
    // add avatar to midsToAvatars
    // increase number of avatars by 1
    // emit event
    // return bool
    function createAvatar( string memory _name, string memory _aka, string memory _bio, string memory _avatar, string memory _bg_avatar ) external isNotMember returns (uint256) {
        // generate new avatar id
        uint256 id = totalAvatars + 1;

        // associate address with generated avatar id
        addressesToMID[msg.sender] = id;

        // create avatar
        Avatar memory newAvatar = Avatar({
            name: _name,
            aka: _aka,
            bio: _bio,
            avatar: _avatar,
            bg_avatar: _bg_avatar
            links: new uint256[](0)
        });
        
        // add avatar to midsToAvatars
        midsToAvatars[id] = newAvatar;

        // increase number of avatars by 1
        totalAvatars++;

        // emit event
        emit AvatarCreated( id, _name, _aka, _bio, _avatar, _bg_avatar );

        return id;
    }


    // add avatar address
    // get address avatar id
    // for each address, add it to addressesToMID
    // emit event
    // return bool
    function addAvatarAddress(address[] memory addresses) public isMember returns(bool) {
        // get address avatar id
        uint256 avatarID = addressesToMID[msg.sender];

        // for each address, add it to addressesToMID
        for( uint32 counter = 0; counter < addresses.length; counter++ ) {
            addressesToMID[addresses[counter]] = avatarID;
        }

        // emit event
        emit AvatarAddressAdded( avatarID, addresses );

        return true;
    }


    // add a link
    // create link
    // generate a link id from totalMetaLinks
    // use the id to save link to midToMetaLinks mapping
    // add link to users avatar links array
    // increase total metalinks with 1
    // emit event
    // return bool
    function addMetaLinkMetalink( string memory name, string memory aka, string memory universe, string memory avatar, string memory link, bool active ) external isMember returns (bool) {
        Avatar storage myAvatar = midsToAvatars[addressesToMID[msg.sender]];

        // generate a link id from totalMetaLinks
        uint256 newMetaLinkID = totalMetaLinks + 1;

        // create link
        MetaLink memory newLink = MetaLink({
            name: name,
            aka: aka,
            universe: universe,
            link: link,
            avatar: avatar,
            active: active
        });

        // use the id to save link to midToMetaLinks mapping
        midsToMetaLinks[newMetaLinkID] = newLink;

        // add link to users avatar links array
        myAvatar.links.push(newMetaLinkID);

        // increase total metalinks with 1
        totalMetaLinks++;

        // emit event
        emit MetaLinkAdded(
            newMetaLinkID,
            addressesToMID[msg.sender],
            name,
            aka,
            universe,
            link,
            avatar,
            active
        );

        return true;
    }



    // get my id given address
    function getMyAvatarID() public view returns(uint256) {
        return addressesToMID[msg.sender];
    }


    // get id given address
    function getAvatarID(address addrss) public view returns(uint256) {
        return addressesToMID[addrss];
    }

    
    // get an avatar given its id
    function getAvatar(uint256 id) public view returns(string memory, string memory, string memory, string memory, uint[] memory links) {
        Avatar memory avatar = midsToAvatars[id];

        return ( avatar.name, avatar.aka, avatar.bio, avatar.avatar, avatar.links );
    }




}