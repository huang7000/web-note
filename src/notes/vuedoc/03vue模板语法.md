:::snippet 文本

```html
<div id="app01">
    <p v-once>{{name}}</p>
    <p>{{age}}</p>
</div>
```

> 绑定的数据对象上 age 属性发生了改变，插值处的内容都会更新。
> 通过使用 v-once 指令，你也能执行一次性地插值，当数据改变时，插值处的内容不会更新。
:::

:::snippet 原始 HTML

```javascript
let rawHtml = {
    rawHtml: '<span> this is html</span>',
    age: 18
}
let app02 = new Vue({
    el:"#app02",
    data: rawHtml
})
```

```html
<div id="app02">
    <p>Using mustaches: {{ rawHtml }}</p>
    <p>Using v-html directive: <span v-html="rawHtml"></span></p>
</div>
```

:::

:::snippet 特性

```javascript
let appdata03 = {
    dynamicId:"ceshidynamicId",
    isButtonDisabled:true,
}
let app03 = new Vue({
    el: '#app03',
    data: appdata03
})
```

```html
<div id="app03">
    <button id="dynamicId">id是dynamicId </button>
    <button v-bind:id="dynamicId">id是ceshidynamicId</button>
    <button v-bind:disabled="isButtonDisabled">Button</button>
</div>
```

> Mustache 语法不能作用在 HTML 特性上，遇到这种情况应该使用 v-bind 指令
:::

:::snippet 使用 JavaScript 表达式

```javascript
let appdata04 = {
    number: 10,
    ok: true,
    message: "我是中国人，我爱中国",
    id:"ceshiid"

}
let app04 = new Vue({
    el: '#app04',
    data: appdata04
})
```

```html
<div id="app04">
    <p> {{ number + 1 }} </p>
    <p> {{ ok ? 'YES' : 'NO' }} </p>
    <p> {{ message.split('').reverse().join('') }}</p>
    <div v-bind:id="'list-' + id">wd</div>
    <p>
        <!-- 这是语句，不是表达式{{ var a = 1 }} -->
        {{ 1 }}
    </p>
     <p>
         <!-- 流控制也不会生效，请使用三元表达式{{ if (ok) { return message } }} -->
        {{ok?message:""}}
        {{Math.abs(number+1)  }}
        {{ new Date() }}
    </p>
</div>
```

:::

:::snippet 指令

> 指令 (Directives) 是带有 v- 前缀的特殊特性。指令特性的值预期是单个 JavaScript 表达式 (v-for 是例外情况)。

```javascript
let appdata05 = {
    seen: true,
    url: "www.baidu.com",
    id: "ceshiid",
    doSomething: function () {
        console.log("访问不了")
    }
}
let app05 = new Vue({
    el: '#app05',
    data: appdata05
})
```

```html
<div id="app05">
    <p v-if="seen">现在你看到我了</p>
    <div v-bind:id="'list-' + id">wd</div>
    <a v-bind:href="url">百度</a>
    <a v-on:click="doSomething">百度失败</a>
</div>
```

:::

:::snippet 修饰符

> 修饰符 (Modifiers) 是以半角句号 . 指明的特殊后缀，用于指出一个指令应该以特殊方式绑定。

```javascript
let appdata06 = {

    onSubmit: function () {
        console.log("表单提交前出发事件")
    }
}
let app06 = new Vue({
    el: '#app06',
    data: appdata06
})
```

```html
    <form v-on:submit.prevent="onSubmit" id="app06">...
        <button type="submit">表单提交</button>
    </form>
```

:::

:::snippet 缩写

> 修饰符 (Modifiers) 是以半角句号 . 指明的特殊后缀，用于指出一个指令应该以特殊方式绑定。

```javascript
let appdata06 = {

    onSubmit: function () {
        console.log("表单提交前出发事件")
    }
}
let app06 = new Vue({
    el: '#app06',
    data: appdata06
})
```

```html
<!-- 完整语法 -->
<a v-bind:href="url">...</a>
<!-- 缩写 -->
<a :href="url">...</a>

<!-- 完整语法 -->
<a v-on:click="doSomething">...</a>
<!-- 缩写 -->
<a @click="doSomething">...</a>
```

:::
