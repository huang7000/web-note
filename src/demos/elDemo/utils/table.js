/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import request from "@/demos/elDemo/utils/request";
import {
    dateFormat,
    dateTimeFormat,
    toThousandFormat,
    percentageFormat,
} from "@/demos/elDemo/utils/format";
// multiple查询方法
function searchTableData(selfThis, isPage) {
    selfThis.loading = true;
    let data = selfThis.searchModel;
    if (isPage) {
        data.pageSize = selfThis.pageInfo.pageSize;
        data.pageNum = selfThis.pageInfo.pageNum;
    }
    let opt = {
        url: selfThis.searchOpt.url,
        method: selfThis.searchOpt.method
    };
    if (selfThis.searchOpt.method == "post") {
        opt["data"] = data;
    } else {
        opt["params"] = data;
    }
    let promise = request(opt);
    promise.then(function (res) {
        let statusTrue = selfThis.statusTrue;
        let status = res[selfThis.searchRes.status];
        let tableData = res[selfThis.searchRes.tableData];
        let totalCount = res[selfThis.searchRes.totalCount];
        let message = res[selfThis.searchRes.message];
        if (status === statusTrue) {
            if (isPage) {
                selfThis.pageInfo.tatal = totalCount;
            }
            if (Array.isArray(tableData) && tableData.length > 0) {
                selfThis.tableData = tableData;
            } else {
                selfThis.tableData = [];
            }
            let selectData = res[selfThis.searchRes.selectData];
            if (selfThis.echoMark && selfThis.reserve && Array.isArray(selectData)) {
                //多行回显记忆
                let memoryAdd = selfThis.memoryAdd;
                let memoryDelete = selfThis.memoryDelete;
                let memoryKey = selfThis.memoryKey;
                selfThis.$nextTick(function () {
                    selectData = selectData.push(...memoryAdd) //或者arr1 = [...arr1,...arr2]
                    selectData = selectData.filter(item => !memoryDelete.some(ele => ele[memoryKey] === item[memoryKey]))
                    selfThis.multipleSelection = selectData;
                    selfThis.multipleSelection.forEach(row => {
                        selfThis.$refs.multipleTable.toggleRowSelection(row, true);
                    });
                });
            }
        } else {
            selfThis.$message.warning(message);
        }
    });
};


function deleteTableData(selfThis, data) {
    selfThis
        .$confirm("确定删除选中项吗？", "操作提示", {
            confirmButtonText: "确定",
            cancelButtonText: "确定",
            type: "warning"
        })
        .then(() => {
            let opt = {
                url: selfThis.deleteOpt.url,
                method: selfThis.deleteOpt.method
            };
            if (selfThis.deleteOpt.method == "post") {
                opt["data"] = data;
            } else {
                opt["params"] = data;
            }
            let promise = request(opt);
            promise.then(function (res) {
                let status = res[selfThis.searchRes.status];
                let statusTrue = selfThis.statusTrue;
                let message = res[selfThis.searchRes.message];
                if (status === statusTrue) {
                    selfThis.$message.success(message);
                } else {
                    selfThis.$message.warning(message);
                }
            });
        });
}

function exportData(selfThis, text, data, url, method, name) {
    text = text || "数据导出中，请稍后...";
    selfThis.$loading({
        text: text,
        fullscreen: true
    });
    let opt = {
        url: url,
        method: method,
        responseType: "blob",
    };
    if (selfThis.exportOpt.method == "post") {
        opt["data"] = data;
    } else {
        opt["params"] = data;
    }
    let promise = request(opt);
    promise
        .then(function (res) {
            const link = document.create.createElement("a");
            const blob = new Blob([res], {
                type: "application/vnd.ms-excel"
            });
            if ("download" in link) {
                link.style.display = "none";
                link.href = URL.createObjectURL(blob);
                link.setAttribute("download", name);
                document.body.append(link);
                link.click();
                document.body.removeChild(link);
            } else {
                // IE10+下载
                window.navigator.msSaveOrOpenBlob(blob, name);
            }
            selfThis.$loading().close();
        })
        .catch(function () {
            selfThis.$loading().close();
        });
}
/**
 * 遍历列的所有内容，获取最宽一列的宽度
 * @param arr
 */
function getTdMaxLength(arr, type, fontModel, formatModel) {
    return arr.reduce((acc, item) => {
        if (item) {
            let calcLen = getTdWidth(item, type, fontModel, formatModel)
            if (acc < calcLen) {
                acc = calcLen
            }
        }
        return acc
    }, 0)
}

/**
 * 使用span标签包裹内容，然后计算span的宽度 width： px
 * @param valArr
 */
function getTdWidth(value, type, fontModel, formatModel) {
    let str = "";
    if (value !== null && value !== undefined) {
        if (type === "moneyFormat") {
            str = toThousandFormat(value, formatModel.moneyMark, formatModel.moneyFixed, formatModel.moneyText)
        } else if (type === "numFormat") {
            str = toThousandFormat(value, formatModel.numMark, formatModel.numFixed, formatModel.numText)
        } else if (type === "percentageFormat") {
            str = percentageFormat(value, formatModel.percentageFixed, formatModel.percentageText)
        } else {
            str = value.toString();
        }
    }
    return getTextWidth(str, fontModel.tdBorder, fontModel.tdFont, fontModel.tdWeight);
}


/**
 * 遍历列的所有内容，获取最宽一列的宽度
 * @param arr
 */
function getTrLength(value, fontModel) {
    return getTextWidth(value, fontModel.thBorder, fontModel.thFont, fontModel.thWeight);
}

/**
 * 使用span标签包裹内容，然后计算span的宽度 width： px
 * @param valArr
 */
function getTextWidth(value, border, font, weight) {
    if (isNaN(border)) {
        border = 22;
    }
    if (isNaN(font)) {
        font = 14;
    }
    weight = weight || "normal"
    let width = "";
    const html = document.createComment('label');
    html.innerText = value;
    html.className = 'ABCDEDFG';
    html.style.fontSize = font + 'px';
    html.style.fontWeight = weight;
    html.style.visibility = "hidden";
    document.querySelector("body").appendChild(html)
    document.querySelector(".ABCDEDFG").offsetWidth;
    return width + border;
}


/**
 * 获取表格列宽度
 * @param tableData 表格数据
 * @param tableTitle 表格标题
 * @param fontModel 字体样式
 */
function getTableWidth(tableData, tableTitle, fontModel, formatModel, alignModel) {
    //,thBorder,thFont,thWeight,tdBorder,tdFont,tdWeight
    tableTitle = tableTitle.map(function (colTitle) {
        colTitle = colWidth(tableData, fontModel, formatModel, alignModel, colTitle);
        return colTitle;
    })
    return tableTitle;
}

/**
 * 获取列宽度
 * @param tableData 表格数据
 * @param tableTitle 表格标题
 * @param fontModel 字体样式
 */
function colWidth(tableData, fontModel, formatModel, alignModel, colTitle) {
    //,thBorder,thFont,thWeight,tdBorder,tdFont,tdWeight
    let thWidth = 0;
    let tdWidth = 0;
    let header = alignModel.header || "center";
    let align = alignModel.align || "center";
    colTitle.header = header;
    colTitle.align = align;
    const alignLeftArr = ["left"];
    const alignRightArr = ["right", "numFormat", "moneyFormat", "percentageFormat"];
    const alignCenterArr = ["center", "self",
        "dateFormat", "dateCNFormat", "timeFormat",
        "dateTimeFormat", "dateTimeCNFormat",
        "monthFormat", "monthCNFormat",
        "yearFormat", "yearCNFormat",
        "isFormat","selectFormat", "selectListFormat"
    ];

    if (alignLeftArr.includes(colTitle.type)) {
        colTitle.align =colTitle.align|| "left";
    } else if (alignRightArr.includes(colTitle.type)) {
        colTitle.align =colTitle.align|| "right";
    } else if (alignCenterArr.includes(colTitle.type)) {
        colTitle.align = colTitle.align||"center";
    }

    if (isNaN(colTitle.width) && isNaN(colTitle.minWidth)) {
        thWidth = getTrLength(colTitle, fontModel);
    } else {
        //一旦指定宽度不再计算宽度直接返回
        return colTitle;
    }
    if (["numFormat", "moneyFormat", "percentageFormat", "self"].includes(colTitle.type)) {
        const arr = tableData.map(x => x[colTitle.prop]);
        tdWidth = getTdMaxLength(arr, colTitle.type, fontModel, formatModel)
    } else if (colTitle.type === "dateFormat") {
        tdWidth = getTextWidth("2020-01-01", fontModel.tdBorder, fontModel.tdFont, fontModel.tdWeight);
    } else if (colTitle.type === "timeFormat") {
        tdWidth = getTextWidth("12:01:01", fontModel.tdBorder, fontModel.tdFont, fontModel.tdWeight);
    } else if (colTitle.type === "dateTimeFormat") {
        tdWidth = getTextWidth("2020-01-01 12:01:01", fontModel.tdBorder, fontModel.tdFont, fontModel.tdWeight);
    } else if (colTitle.type === "yearFormat") {
        tdWidth = getTextWidth("2020", fontModel.tdBorder, fontModel.tdFont, fontModel.tdWeight);
    } else if (colTitle.type === "monthFormat") {
        tdWidth = getTextWidth("2020-01", fontModel.tdBorder, fontModel.tdFont, fontModel.tdWeight);
    } else if (colTitle.type === "dateCNFormat") {
        tdWidth = getTextWidth("2020年01月01日", fontModel.tdBorder, fontModel.tdFont, fontModel.tdWeight);
    } else if (colTitle.type === "dateTimeCNFormat") {
        tdWidth = getTextWidth("2020年01月01日 12:01:01", fontModel.tdBorder, fontModel.tdFont, fontModel.tdWeight);
    } else if (colTitle.type === "yearCNFormat") {
        tdWidth = getTextWidth("2020年", fontModel.tdBorder, fontModel.tdFont, fontModel.tdWeight);
    } else if (colTitle.type === "monthCNFormat") {
        tdWidth = getTextWidth("2020年01", fontModel.tdBorder, fontModel.tdFont, fontModel.tdWeight);
    } else {
        colTitle.minWidth = tdWidth > thWidth ? tdWidth : thWidth;
        return colTitle;
    }
    colTitle.width = tdWidth > thWidth ? tdWidth : thWidth;
    return colTitle;
}

export {
    searchTableData,
    deleteTableData,
    exportData,
    getTableWidth
}