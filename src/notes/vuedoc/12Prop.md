:::snippet Prop 大小写 (camelCase vs kebab-case)

> 使用 DOM 中的模板时，camelCase (驼峰命名法) 的 prop 名需要使用其等价的 kebab-case (短横线分隔命名) 命名
> 字符串模板，那么这个限制就不存在了。

```html
<div id="app01">
  <blog-post post-title="hello!"></blog-post>
</div>
<div id="app02"></div>
```

```javascript
Vue.component("blog-post", {
  // 在 JavaScript 中是 camelCase 的
  props: ["PostTitle"],
  template: "<h3>{{ PostTitle }}</h3>"
});
new Vue({
  el: "#app01"
});
new Vue({
  el: "#app02",
  template: '<blog-post PostTitle="hello 字符串模板!"></blog-post>'
});
```

:::

:::snippet Prop 类型

> 属性的名称和值分别是 prop 各自的名称和类型

```javascript
props: {
  title: String,
  likes: Number,
  isPublished: Boolean,
  commentIds: Array,
  author: Object,
  testDate:Date,
  testFun:Function,
  testSym:Symbol
}
```

:::

:::snippet 传递静态或动态 Prop

```html
<blog-post title="My journey with Vue"></blog-post>
<blog-post v-bind:title="post.title"></blog-post>
```

:::

:::snippet 传递 Prop

> 传入一个数字

```html
<!-- 即便 `42` 是静态的，我们仍然需要 `v-bind` 来告诉 Vue -->
<!-- 这是一个 JavaScript 表达式而不是一个字符串。-->
<blog-post v-bind:likes="42"></blog-post>

<!-- 用一个变量进行动态赋值。-->
<blog-post v-bind:likes="post.likes"></blog-post>
```

> 传入一个布尔值

```html
<!-- 包含该 prop 没有值的情况在内，都意味着 `true`。-->
<blog-post is-published></blog-post>
<!-- 即便 `false` 是静态的，我们仍然需要 `v-bind` 来告诉 Vue -->
<!-- 这是一个 JavaScript 表达式而不是一个字符串。-->
<blog-post v-bind:is-published="false"></blog-post>

<!-- 用一个变量进行动态赋值。-->
<blog-post v-bind:is-published="post.isPublished"></blog-post>
```

> 传入一个数组

```html
<!-- 即便数组是静态的，我们仍然需要 `v-bind` 来告诉 Vue -->
<!-- 这是一个 JavaScript 表达式而不是一个字符串。-->
<blog-post v-bind:comment-ids="[234, 266, 273]"></blog-post>

<!-- 用一个变量进行动态赋值。-->
<blog-post v-bind:comment-ids="post.commentIds"></blog-post>
```

> 传入一个对象

```html
<!-- 即便对象是静态的，我们仍然需要 `v-bind` 来告诉 Vue -->
<!-- 这是一个 JavaScript 表达式而不是一个字符串。-->
<blog-post
  v-bind:author="{ name: 'Veronica', company: 'Veridian Dynamics' }"
></blog-post>

<!-- 用一个变量进行动态赋值。-->
<blog-post v-bind:author="post.author"></blog-post>

<!-- 一个对象的所有属性-->
<blog-post v-bind="post"></blog-post>
```

:::

:::snippet 单向数据流

> 所有的 prop 都使得其父子 prop 之间形成了一个单向下行绑定：父级 prop 的更新会向下流动到子组件中，但是反过来则不行。

1. 这个 prop 用来传递一个初始值；这个子组件接下来希望将其作为一个本地的 prop 数据来使用。

```javascript
props: ['initialCounter'],
data: function () {
  return {
    counter: this.initialCounter
  }
}
```

2. 这个 prop 以一种原始的值传入且需要进行转换。

```javascript
props: ['size'],
computed: {
  normalizedSize: function () {
    return this.size.trim().toLowerCase()
  }
}
```

:::

:::snippet 非 Prop 的特性

> 一个非 prop 特性是指传向一个组件，但是该组件并没有相应 prop 定义的特性。

```html
<!-- 一个 Bootstrap 插件使用了一个第三方的 <bootstrap-date-input> 组件，这个插件需要在其 <input> 上用到一个 data-date-picker 特性。我们可以将这个特性添加到你的组件实例上.
这个 data-date-picker="activated" 特性就会自动添加到 <bootstrap-date-input> 的根元素上。
-->
<bootstrap-date-input data-date-picker="activated"></bootstrap-date-input>
```

:::

:::snippet 禁用特性继承

> 不希望组件的根元素继承特性，你可以在组件的选项中设置 inheritAttrs: false。

```javascript
Vue.component("my-component", {
  inheritAttrs: false
  // ...
});
```

> 适合配合实例的 \$attrs 属性使用，该属性包含了传递给一个组件的特性名和特性值

```javascript
Vue.component("base-input", {
  inheritAttrs: false,
  props: ["label", "value"],
  template: `
    <label>
      {{ label }}
      <input
        v-bind="$attrs"
        v-bind:value="value"
        v-on:input="$emit('input', $event.target.value)"
      >
    </label>
  `
});
```

```html
<base-input
  v-model="username"
  class="username-input"
  placeholder="Enter your username"
></base-input>
```

:::
