/**
 * 返回数据的类型
 * classof([]) => "Array"
 */
export default function classof(o) {
  if (o === null) return "Null";
  if (o === undefined) return "Undefined";
  return Object.prototype.toString.call(o).slice(8, -1);
}
