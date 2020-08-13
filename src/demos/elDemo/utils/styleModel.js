/* eslint-disable prettier/prettier */
//转日期  年月日
const styleModel = {
    leftArr: ["left"],
    rightArr: ["right", "numFormat", "moneyFormat", "percentageFormat"],
    centerArr: ["center", "self",
        "dateFormat", "dateCNFormat", "timeFormat",
        "dateTimeFormat", "dateTimeCNFormat",
        "monthFormat", "monthCNFormat",
        "yearFormat", "yearCNFormat",
        "isFormat", "selectFormat", "selectListFormat"
    ],
    showArr: ["self", "numFormat", "moneyFormat", "percentageFormat",
        "dateFormat", "timeFormat", "dateTimeFormat", "yearFormat", "monthFormat",
        "dateCNFormat", "dateTimeCNFormat", "yearCNFormat", "monthCNFormat"
    ],
    headAlign: "center",
    align: "center",
    thBorder: 22,
    thFont: 14,
    thWeight: "bold",
    tdBorder: 22,
    tdFont: 14,
    tdWeight: "normal",
    moneyMark: ",",
    moneyFixed: "2",
    moneyDef: "0",
    numMark: ",",
    numFixed: "0",
    numDef: "0",
    percentageFixed: "0",
    percentageDef: "0",

}

export {
    styleModel
}