/*

完成 getChildAttributes 函数，它接受一个 DOM 元素作为参数和一个属性名作为参数，
你需要返回这个 DOM 的 直接 子元素的特定属性列表。

例如：
<ul id='list'>
  <li data-name="Jerry" class="item"><span>1</span></li>
  <li data-name="Lucy" class="item"><span>2</span></li>
  <li data-name="Tomy"><span>3</span></li>
</ul>
getChildAttributes(el, 'data-name') // => ['Jerry', 'Lucy', 'Tomy']
getChildAttributes(el, 'class') // => ['item', 'item', null]
只需要完成 getChildAttributes 的编写。

*/

const getChildAttributes = (dom, prop) => {
  if (!dom || !prop) return;

  let childNodes = dom.childNodes;
  let arr = [];
  for (const childNode of childNodes) {
    if (childNode.nodeName === "#text") continue;
    /* childNode.getAttribute(prop) &&  */
    arr.push(childNode.getAttribute(prop))
  }
  console.log(arr);
  return arr;
};

const $ = selector => document.getElementById(selector);

getChildAttributes($("list"), "data-name"); // => ['Jerry', 'Lucy', 'Tomy']
getChildAttributes($("list"), "class"); // => ['item', 'item', null]
