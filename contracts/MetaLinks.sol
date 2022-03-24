// SPDX-License-Identifier: MIT
pragma solidity 0.8.11;

import "@openzeppelin/contracts@4.4.2/access/Ownable.sol";


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
        uint256[] links;
    }

    // meta link struct
    struct MetaLink {
        string name;
        string aka;
        string universe;
        string link;
        string avatar;
        bool active;
    }

    




}