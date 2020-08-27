var treeData = [{
        "id": "1",
        "menuName": "基础管理",
        "menuCode": "10",
        "children": [{
                "menuName": "用户管理",
                "menuCode": "11"
            },
            {
                "menuName": "角色管理",
                "menuCode": "12",
                "children": [{
                        "menuName": "管理员",
                        "menuCode": "121"
                    },
                    {
                        "menuName": "CEO",
                        "menuCode": "122"
                    },
                    {
                        "menuName": "普通人",
                        "menuCode": "124"
                    }
                ]
            },
        ]
    },
    {
        "id": "2",
        "menuName": "商品管理",
        "menuCode": ""
    },
    {
        "id": "3",
        "menuName": "订单管理",
        "menuCode": "30",
        "children": [{
                "menuName": "订单列表",
                "menuCode": "31"
            },
            {
                "menuName": "退货列表",
                "menuCode": "32",
                "children": []
            }
        ]
    },
];

export default treeData;