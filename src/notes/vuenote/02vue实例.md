:::snippet 创建一个 Vue 实例

```javascript
let vm = new Vue({
  // 选项
})
```

:::

:::snippet 数据与方法

```javascript
let data={name:'小明',age:18}
let vm=new Vue({
data:data

})
vm.name==data.name//true
vm.age=12;
data.age//12
data.name='xiaoming';
vm.name//xiaoming
```

:::

:::snippet 响应式理解

```javascript
let data = {
    name: '小明',
    age: 18,
    sex:null
}
let app02 = new Vue({
    el: "#app02",
    data: data
})
app02.sex='人妖';
vm.$data === data // => true
vm.$el === document.getElementById('app02') // => true
```

```html
<h3>vue实例</h3>
<div id="app02">
    <p>{{name}}</p>
    <p>{{age}}</p>
    <p>{{sex}}</p>
</div>
```

:::

:::snippet Object.freeze()

```javascript
let obj = {
  foo: 'bar'
}

Object.freeze(obj)

let app03=new Vue({
  el: '#app03',
  data: obj
})
obj.foo = '1233';//不会修改值
console.log( obj.foo ); //bar
app03.foo = '1233';//程序报错了
console.log( app03.foo ); //xiaoming
```

```html
<div id="app03">
  <p>{{ foo }}</p>
  <!-- 这里的 `foo` 不会更新！ -->
  <button v-on:click="foo = 'baz'">Change it</button>
</div>
```

:::

:::snippet 不要在选项属性或回调上使用箭头函数

不要在选项属性或回调上使用箭头函数，比如 created: () => console.log(this.a) 或 vm.$watch('a', newValue => this.myMethod())。因为箭头函数是和父级上下文绑定在一起的，this 不会是如你所预期的 Vue 实例，经常导致 Uncaught TypeError: Cannot read property of undefined 或 Uncaught TypeError: this.myMethod is not a function 之类的错误。

```javascript
let obj = {
  foo: '马勒戈壁'
}

let app04=new Vue({
  el: '#app04',
  data: obj,
  created: function () {
    // `this` 指向 vm 实例
    console.log('foo is: ' + this.foo)
  },
  watch('foo', function (newValue, oldValue) {
      console.log("原来的值："+oldValue+","+"现在的值："+newValue)
  // 这个回调将在 `vm.a` 改变后调用
  })
})
obj.foo = '1233';
console.log( obj.foo );
app04.foo='今天天气真好'
console.log( app04.foo );
```

```html
<div id="app04">
  <p>{{ foo }}</p>
  <button v-on:click="foo = 'baz'">Change it</button>
</div>
```

:::