for(let i=99; i>0;i--){
  const beer = 99;
  let less = i-1;
  const count=+1;
if (i > 52) console.log( i +' bottles of beer on the wall, ' + i + ' bottles of beer.\nTake one down and pass it around, ' + less + ' bottles of beer on the wall.' );
else if(i===50)console.log (i+' bottless of beer on the wall, ' + i + ' bottlesh of beer.\nTake one down and pass it around. ' + less + ' bottlesh of beer on the wall' );
else if(i===49)console.log (i+' bottlesh of beer on the wall, ' + i + ' bottlesh of beer.\nTake one down and pass it around. ' + less + ' bottlesh of beer on the wall' );
else if (i > 2) console.log(i+' bottlesh of beer on the wall, ' + i + ' bottles of beer.\nTake one down and pass it around. ' + less + ' bottlesh of beer on the wall' );
else if (i>1) console.log (i+ ' bottlelesh of beer on the wall, ' + i + ' bottlesh of beer.\nTake one down and pass it around, ' +less+ ' bottle of beer on the wall.');
else if (i===1)console.log(i+' bottle of beer on the wall, ' + i + ' bottle of beer.\nTake one down and pass it around, no more bottlesh of beer on the wall.')
else console.log('No more bottlesh of beer on the wall,no more bottlesh of beer.Go to the store and buy some more, ' + beer + ' bottlesh of beer on the wall');
}
