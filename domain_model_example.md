## User Story Examples

1. _Unedited Story_
   - As a supermarket shopper,
   - So that I can buy items,
   - I'd like to add items to my basket.

2. _Identify intents_
   - As a supermarket shopper <- User 
   - So that I can buy items <- Objective 
   - I'd like to add items to my basket. <- Method ?? 

3. _Extract English_
    - Nouns: item, basket, shopper, supermarket
    - Verbs: buy, add

4. _Software Objects_
Convert English to Programming Concepts

- Objects: item, itemList, basket, basketCapacity, 
- Methods: addItem, removeItem, swapItem, checkPrice, 

---

## Domain Model Example 
Let's take the ideas we've extracted from the user story and recapitulate as a domain model. A domain model is useful for liasing with other areas of the business, documenting ideas. 

### Example 1

|Objects |Properties | Messages| Output| 
--- | --- | --- | --- | 
|item|name @String; category @String; location @String; price @Number| checkPrice(@number) |@String |
|itemList|items @array[@item]|addItem(@String), removeItem(@String), getNumItems(@number)|@array|

### Example 2

As a careful individual,
So that I can stay in good health,
I'd like to know if my basket if full before trying to add another item to my basket

|Objects |Properties | Messages| Output| 
--- | --- | --- | --- | 
|itemList|items @array[@item]|addItem(@ String)|@array|
|basket|itemMaxCapacity @number; itemList @array|checkFull(@ boolean) | @boolean|

## Reflection

 - Does item need to be an object to fulfil the objective given in the User Story?
 - 
