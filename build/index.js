"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var LinkedList_1 = require("./LinkedList");
var numbersCollection = new NumbersCollection_1.NumbersCollection([55, 1, 2, 33, 3, -1, 4]);
numbersCollection.sort();
var charactersCollection = new CharactersCollection_1.CharactersCollection("AshManToRos");
charactersCollection.sort();
var list = new LinkedList_1.LinkedList();
list.add(500);
list.add(700);
list.add(100);
list.add(-454);
// const sorter1 = new Sorter(numbersCollection);
// const sorter2 = new Sorter(charactersCollection);
// const sorter3 = new Sorter(list);
// sorter1.sort();
// sorter2.sort();
// sorter3.sort();
console.log(numbersCollection.data, "done");
console.log(charactersCollection.data);
list.sort();
list.print();