## Installation

```
yarn
```

## Run locally

```
yarn serve
```

## ADR

I created two ways to store and consume data.
I will explain both the BST (Binary Search Tree), and the custom structure.
The custom structure could be named as a tree of different layers.
Even though both solutions work, the **preferred and default way is the custom one**,
which enjoys constant time in most of the actions.

## Data structure

### BST

Decremental BST by apdex.
If you want to try the BST structure, just try it with:

```js
yarn serve:bst
```

#### Frustration

1. Apdex can be repeated, so indexing is harder
2. Unbalanced tree can represent O(n)
3. Stored without thinking in the data consumtion

### Customised

#### Shape

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
o   o o   o    - app name
```

#### Motivation

1. By using objects, the sorting complexity is constant when assigning the apdex number or the app name.
2. Retrieving information of an app is constant O(1).
3. We avoid collisioning.
4. Layers keep data ordered.

## Big O notation

Traversing from 'apps with hosts' to 'hosts with apps' takes O(n\*h),
where n is the number of apps and h is the amount of different hosts.

S: Sorting Apps
I: Inserting Apps
R: Removing Apps
G: Getting Apps

### BST

S: O(n\*log(n))
I: O(log n)
R: O(log n)
G: O(log n)

### Customised

S: O(1)
I: O(h) ≈ O(1) where h is the height of the tree (and it's 4)
R: O(h) ≈ O(1) where k is the number of hosts of the app
G: O(k) where k is the desired amount of apps
