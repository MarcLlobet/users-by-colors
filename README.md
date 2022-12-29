## Installation

```
yarn
```

## Run locally

```
yarn serve
```

## Data structure

Dictionary of hosts as keys and a dictionary as value.
Inside, app apdex as keys and a dictionary as value.
Inside, app name as keys and the app as value.

```js
this.hosts[hostName][app.apdex][app.name]
```

It can be seen as a tree of hosts with different layers:

```
     o         - host names
    / \
  o     o      - apdex number
 / \   / \
o   o o   o    - app name (with app as value)
```

### Motivation

-   By using objects, the sorting is implicit
    by assigning the apdex number and the app name
-   Our data is consumed either by:
    -   knowing the host
        -   getAppByHostname
        -   removeAppByHostname
        -   addAppByHostname
    -   or by passing the number of apps
        -   getAppsByHost (used to return 5 or 25 apps)
-   Retrieving information of an app is constant O(1)
-   Prevents collisioning

## Big O notation

Traversing from 'apps with hosts' to 'hosts with apps' takes `O(n*h)`,
where n is the number of apps and h is the amount of different hosts.

Sorting Apps: O(1) Implicit with object indexation
Inserting Apps: O(h) ≈ O(1) where h is the height of the tree (which it's 4)
Removing Apps: O(1)
Getting a concrete app: O(1)
Getting n apps by host: O(n\*h) where h are hosts and n is the number of apps
