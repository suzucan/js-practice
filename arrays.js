const fruits = ['りんご', 'バナナ', 'さくらんぼ', 'パイナップル', 'ブルーベリー','いちご','みかん'];

const result = fruits.filter((fruit) => fruit.length >= 4);

const withEmoji = fruits.map((fruit) => '🍎' + fruit);
  console.log(result);
  console.log(withEmoji);
