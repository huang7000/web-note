<template>
  <ul>
    <li v-for="folder in folders">
      <tree-folder v-bind:folder="folder"></tree-folder>
    </li>
  </ul>
</template>
<script>
  import TreeFolder from './tree-folder'
  export default {
    data: function () {
      return {
        folders:  [{
        "id": "1",
        "name": "基础管理",
        "code": "10",
        "children": [{
                "name": "用户管理",
                "code": "11"
            },
            {
                "name": "角色管理",
                "code": "12",
                "children": [{
                        "name": "管理员",
                        "code": "121"
                    },
                    {
                        "name": "CEO",
                        "code": "122"
                    },
                    {
                        "name": "普通人",
                        "code": "124"
                    }
                ]
            },
        ]
    },
    {
        "id": "2",
        "name": "商品管理",
        "code": ""
    }
]
      }
    },
    components: {
      TreeFolder
    }
  }
</script>