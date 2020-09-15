/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import api from "@/client/utils/api";
import {
    selectFormat,
    selectListFormat,
    numFormat,
    moneyFormat,
    percentageFormat,
} from "@/client/utils/format";
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
    let promise = api(opt);
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
            let promise = api(opt);
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
    let promise = api(opt);
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
 * 获取表格列宽度
 * @param tableData 表格数据
 * @param modelStyle 表格默认样式
 * @param tableTitle 表格标题
 */
function getTableWidth(tableData, modelStyle, tableTitle) {
    //headAlign,align,,thBorder,thFont,thWeight,tdBorder,tdFont,tdWeight
    tableTitle = tableTitle.map(function (colTitle) {

        colTitle = colWidth(tableData, modelStyle, colTitle);
        return colTitle;
    })
    return tableTitle;
}

/**
 * 获取列宽度
 * @param tableData 表格数据
 * @param modelStyle 默认样式
 * @param colTitle 列信息
 */
function colWidth(tableData, modelStyle, colTitle) {
    let leftArr = modelStyle.leftArr || [];
    let rightArr = modelStyle.rightArr || [];
    let centerArr = modelStyle.centerArr || [];
    let showArr = modelStyle.showArr || [];
    let thWidth = 0;
    let tdWidth = 0;
    let headAlign = modelStyle.headAlign || "center";
    let align = modelStyle.align || "center";
    colTitle.headAlign = headAlign;
    colTitle.align = align;

    if (leftArr.includes(colTitle.type)) {
        colTitle.align = "left";
    } else if (rightArr.includes(colTitle.type)) {
        colTitle.align = "right";
    } else if (centerArr.includes(colTitle.type)) {
        colTitle.align = "center";
    }

    if (isNaN(colTitle.width) && isNaN(colTitle.minWidth)) {
      
        thWidth = getThWidth(colTitle.label, modelStyle);
    } else {
        //一旦指定宽度不再计算宽度直接返回
        return colTitle;
    }


    let showAll = false;
    showAll = colTitle.showAll || showArr.includes(colTitle.type);
    if (showAll) {
        if (["numFormat", "moneyFormat", "percentageFormat", "self"].includes(colTitle.type)) {
            const arr = tableData.map(x => x[colTitle.prop]);
            tdWidth = getTdMaxWidth(arr, colTitle.type, modelStyle)
        } else if (colTitle.type === "dateFormat") {
            tdWidth = getTextWidth("2020-01-01", modelStyle.tdBorder, modelStyle.tdFont, modelStyle.tdWeight);
        } else if (colTitle.type === "timeFormat") {
            tdWidth = getTextWidth("12:01:01", modelStyle.tdBorder, modelStyle.tdFont, modelStyle.tdWeight);
        } else if (colTitle.type === "dateTimeFormat") {
            tdWidth = getTextWidth("2020-01-01 12:01:01", modelStyle.tdBorder, modelStyle.tdFont, modelStyle.tdWeight);
        } else if (colTitle.type === "yearFormat") {
            tdWidth = getTextWidth("2020", modelStyle.tdBorder, modelStyle.tdFont, modelStyle.tdWeight);
        } else if (colTitle.type === "monthFormat") {
            tdWidth = getTextWidth("2020-01", modelStyle.tdBorder, modelStyle.tdFont, modelStyle.tdWeight);
        } else if (colTitle.type === "dateCNFormat") {
            tdWidth = getTextWidth("2020年01月01日", modelStyle.tdBorder, modelStyle.tdFont, modelStyle.tdWeight);
        } else if (colTitle.type === "dateTimeCNFormat") {
            tdWidth = getTextWidth("2020年01月01日 12:01:01", modelStyle.tdBorder, modelStyle.tdFont, modelStyle.tdWeight);
        } else if (colTitle.type === "yearCNFormat") {
            tdWidth = getTextWidth("2020年", modelStyle.tdBorder, modelStyle.tdFont, modelStyle.tdWeight);
        } else if (colTitle.type === "monthCNFormat") {
            tdWidth = getTextWidth("2020年01", modelStyle.tdBorder, modelStyle.tdFont, modelStyle.tdWeight);
        }
    } else {
        colTitle.minWidth = tdWidth > thWidth ? tdWidth : thWidth;
        return colTitle;
    }
    colTitle.width = tdWidth > thWidth ? tdWidth : thWidth;
    return colTitle;
}

/**
 * 遍历td列的所有内容，获取最宽一列的宽度
 * @param rows rows数据
 * @param colTitle 列信息
 * @param tableTitle 表格标题
 */
function getTdMaxWidth(rows, colTitle, modelStyle) {
    return rows.reduce((acc, row) => {
        if (row) {
            let calcLen = getTdWidth(row, colTitle, modelStyle)
            if (acc < calcLen) {
                acc = calcLen
            }
        }
        return acc
    }, 0)
}

/**
 * 获取td宽度
 * @param value 数据
 * @param colTitle 列信息
 * @param modelStyle 默认样式
 */
function getTdWidth(value, colTitle, modelStyle) {
    let str = "";
    let type = colTitle.type;
    let mark = colTitle.type;
    let fixed = colTitle.fixed;
    let def = colTitle.def;
    if (value !== null && value !== undefined) {
        if (type === "moneyFormat") {
            mark = mark || modelStyle.moneyMark;
            fixed = fixed || modelStyle.moneyFixed;
            def = def || modelStyle.moneyDef;
            str = moneyFormat(value, mark, fixed, def)
        } else if (type === "numFormat") {
            mark = mark || modelStyle.numMark;
            fixed = fixed || modelStyle.numFixed;
            def = def || modelStyle.numDef;
            str = numFormat(value, mark, fixed, def)
        } else if (type === "percentageFormat") {
            fixed = fixed || modelStyle.percentageFixed;
            def = def || modelStyle.percentageDef;
            str = percentageFormat(value, fixed, def)
        } else {
            str = value.toString();
        }
    }

    return getTextWidth(str, modelStyle.tdBorder, modelStyle.tdFont, modelStyle.tdWeight);
}

/**
 * 遍历列的所有内容，获取最宽一列的宽度
 * @param value 数据
 * @param modelStyle 数据默认样式
 */
function getThWidth(value, modelStyle) {
    return getTextWidth(value, modelStyle.thBorder, modelStyle.thFont, modelStyle.thWeight);
}

/**
 * 使用span标签包裹内容，然后计算span的宽度 width： px
 * @param value 数据
 * @param border 边距
 * @param font 字体大小
 * @param weight 字体粗细
 */
function getTextWidth(value, border, font, weight) {
    if (isNaN(border)) {
        border = 22;
    }
    if (isNaN(font)) {
        font = 14;
    }
    weight = weight || "normal"
    let width = 0;
    const html = document.createElement('label');
    html.innerText = value;
    html.className = 'ABCDEFG';
    html.style.fontSize = font + 'px';
    html.style.fontWeight = weight;
    html.style.visibility = "hidden";
    document.querySelector("body").appendChild(html)
    width = document.querySelector(".ABCDEFG").offsetWidth;
    document.querySelector(".ABCDEFG").remove(); 
    let res=width + border;
    return res;
}

export {
    searchTableData,
    deleteTableData,
    exportData,
    getTableWidth
}