:::snippet 绑定 HTML Class 对象语法

> `v-bind:class` 指令也可以与普通的 class 属性共存。

```javascript
let app01data = {
    isActive: true,
    hasError: false,divclass:undefined
}
let app01=new Vue({
    el:"#app01",
    data:app01data,
})
//id="app01"div的class="test active divclass"
app01.hasError=true;//id="app01"div的class="test active text-danger divclass"

let app02data = {
    obj:{
        divclass:true,
        pclass:false,
        objclass:1,
        testclass:0,
        spanclass:undefined,
    }
}
let app02 = new Vue({
    el: "#app02",
    data: app02data,

})
```

```html
<div id="app01" class="test" v-bind:class="{active:isActive, 'text-danger':hasError,'divclass':true}">
</div>

<div  id="app02" class="test" v-bind:class="obj">
这个 div的class="test divclass objclass"
</div>
```

:::

:::snippet 绑定 HTML Class 数组语法

```javascript
let app03data = {
    classname1:"divclass",
    classname2:"main"
}
let app03 = new Vue({
    el: "#app03",
    data: app03data,
})
```

```html
<div id="app03" class="test" v-bind:class="[classname1,classname2]">
这个 div的class="test divclass main"
</div>
```

:::

:::snippet 绑定 HTML Class 数组语法使用对象语法

```javascript
let app04data = {
    classname1:"divclass",
    classname2:"main",
    isActive:false
}
let app04 = new Vue({
    el: "#app04",
    data: app04data,
})
//id="app04"div的class="test main"
app04.isActive=true;//id="app01"div的class="test main divclass"
```

```html
<div id="app04" class="test" v-bind:class="[{main:isActive},classname2]">

</div>
```

:::

:::snippet 绑定 HTML Class组件上

```javascript
Vue.component('my-component',
{
    data:function (){
        return {
            name:"羲皇",
            age:'18',
        }
    },
    template: '<div class="divClass"><p class="classFirst">Hello World! </p>'
                +'<p class="classSecond">姓名：{{name}}</p><p class="classThird">年龄：{{age}}</p></div>'
})
let app08 = new Vue({
    el: '#app08',
    data:{
        isActive:true,
        active:"ceshi",
        classname1: "divclass",
    }
 })
//id=app08的div里面div的class 渲染加上my-component的样式
```

```html
<div id="app08">
    <my-component class="baz boo" id="components-demo" v-bind:class="{active: isActive }"></my-component>
    <my-component class="baz boo" id="components-demo" v-bind:class="[active,classname1]"></my-component>
</div>
```

:::

:::snippet 绑定内联样式对象语法

```javascript
let app05data = {
    colorValue: "red",
    widthValue: 550,
    fontSize: 25
}
let app05 = new Vue({
    el: "#app05",
    data: app05data,
})
```

```html
<div id="app05" class="test" v-bind:style="{ color: colorValue, fontSize: fontSize + 'px',width:widthValue+'px' }">
app05  style="color: red; font-size: 25px; width: 550px;"
</div>
```

:::

:::snippet 绑定内联样式对象语法

```javascript
let app06data = {
    styleObject: {
        color: "red",
        width: '550px',
        fontSize: '25px'
    }
}
let app06 = new Vue({
    el: "#app06",
    data: app06data,
})
```

```html
<div id="app06" class="test" v-bind:style="styleObject">
app06  style="color: red; font-size: 25px; width: 550px;"
</div>
```

:::

:::snippet 绑定内联样式数组语法

```javascript
let app07data = {
    styleObject: {
        color: "red",
        width: '550px',
        fontSize: '18px'
    },
    mainObejct: {
        border: '1px',
        fontSize: '36px'
    }
}
let app07 = new Vue({
    el: "#app07",
    data: app07data,
})
```

```html
<div id="app07" class="test" v-bind:style="[styleObject,mainObejct]">
 app07 style="color: red; width: 550px; font-size: 36px; border: 1px;"
 </div>
```

:::

:::snippet 绑定内联样式组件上

```javascript
Vue.component('component-demo', {
    data: function () {
        return {
            name: "羲皇",
            age: '18',
        }
    },
    template: '<div class="divClass"><p class="classFirst">Hello World! </p>' +
        '<p class="classSecond">姓名：{{name}}</p><p class="classThird">年龄：{{age}}</p></div>'
    })
let app09 = new Vue({
    el: '#app09',
    data: {
        styleObject: {
            color: "red",
            width: '550px',
            fontSize: '18px'
        },
        mainObejct: {
            border: '1px',
            fontSize: '36px'
        },
        colorValue: "red",
        widthValue: 550,
        fontSize: 25
    }
})
```

```html
<div id="app09">
    <component-demo class="baz boo" id="components-demo" v-bind:style="[styleObject,mainObejct]"></component-demo>
    <component-demo class="baz boo" id="components-demo" v-bind:style="{ color: colorValue, fontSize: fontSize + 'px',width:widthValue+'px' }"></component-demo>
</div>
```

:::snippet 自动添加前缀

> 当`v-bind:style`使用需要添加浏览器引擎前缀的`CSS`属性时，如`transform`，`Vue.js`会自动侦测并添加相应的前缀。

:::

:::snippet 多重值

> style 绑定中的属性提供一个包含多个值的数组，常用于提供多个带前缀的值。

```html
<div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }">

</div>
```

:::

:::snippet truthy 不是 true

> 在 JavaScript 中，Truthy (真值)指的是在 布尔值 上下文中转换后的值为真的值。所有值都是真值，除非它们被定义为 falsy (即除了 false，0，""，''，``,document.all，null，undefined 和 NaN 外)。

:::