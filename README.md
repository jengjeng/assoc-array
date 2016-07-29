# AssocArray
Associative array for javascript.


How to use
==================

```
var assoc = new AssocArray();
assoc.set('std001', {name : 'maboy'});
assoc.get('std001');                                // {name : 'maboy'}
assoc.data;                                         // {'std001': {name : 'maboy'} }
assoc.array();                                      // [{key:'std001', value: {name : 'maboy'}}]
assoc.keys();                                       // ["std001"]
assoc.val();                                        // [{name : 'maboy'}]
assoc.json();                                       // "[{key:'std001', value: {name : 'maboy'}}]"
assoc.jsonKeys();                                   // "['std001']"
assoc.jsonValues();                                 // "[{name : 'maboy'}]"
assoc.every(function(item, key, assocData){
  return key.indexOf('std') === 0;
});                                                 // true
assoc.filter(function(item, key, assocData){
  return key.indexOf('std') === 0;
});                                                 // AssocArray ([{key:'std001', value: {name : 'maboy'}}])

```

and more function
- remove(key)
- clear()
- clone()
- forEach(item, key, assocData)
- contains(key)
- indexOf(key)
- length()
- map(item, key, assocData)
- pop()
- reduce()
- reduce(sum, item, assocData)
- some(item, key, assocData)
- slice(number)
