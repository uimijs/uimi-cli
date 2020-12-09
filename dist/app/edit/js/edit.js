function unitConversion() {
    /**
     * 获取DPI
     * @returns {Array}
     */
    this.getDPI = function() {
        var arrDPI = new Array;
        if (window.screen.deviceXDPI) {
            arrDPI[0] = window.screen.deviceXDPI;
            arrDPI[1] = window.screen.deviceYDPI;
        } else {
            var tmpNode = document.createElement("DIV");
            tmpNode.style.cssText = "width:1in;height:1in;position:absolute;left:0px;top:0px;z-index:99;visibility:hidden";
            document.body.appendChild(tmpNode);
            arrDPI[0] = parseInt(tmpNode.offsetWidth);
            arrDPI[1] = parseInt(tmpNode.offsetHeight);
            tmpNode.parentNode.removeChild(tmpNode);
        }
        return arrDPI;
    };
    /**
     * px转换为mm
     * @param value
     * @returns {number}
     */
    this.tomm = function(value) {
        var inch = value / this.conversion_getDPI()[0];
        var c_value = inch * 25.4;
        //      console.log(c_value);
        return Math.round(c_value);
    };
    /**
     * mm转换为px
     * @param value
     * @returns {number}
     */
    this.toPx = function(value) {
        var inch = value / 25.4;
        var c_value = inch * this.getDPI()[0];
        //      console.log(c_value);
        return Math.round(c_value);
    }
}





elhtml = {
    "label": {
        "type": "label",
        "name": "文本标签",
        "html": '<div class="el"><label data-efb-control="label">文本标签</label></div>',
        "children": true
    },
    "input": {

        "type": "input",
        "name": "单行文本框",
        "html": '<div class="el"><label>单行文本框</label><input type="text" title="单行文本框" data-efb-control="input" class=""></div>',
        "children": true
    },
    "textarea": {
        "type": "textarea",
        "name": "多行文本框",
        "html": '<div class="el"><label>多行文本框</label><textarea title="多行文本框" data-efb-control="textarea" class=""></textarea></div>',
        "children": true
    },
    "radio": {
        "type": "radio",
        "name": "单选框",
        "html": '<div class="el"><input type="radio" title="单选框" data-efb-control="radio" class=""><label>单选框</label></div>',
        "children": true
    },
    "checkbox": {
        "type": "checkbox",
        "name": "复选框",
        "html": '<div class="el"><input type="checkbox" title="复选框" data-efb-control="checkbox" class=""><label>复选框</label></div>',
        "children": true
    },
    "table": {
        "type": "table",
        "name": "表格",
        "html": '<div class="el"  insert="after"><table title="表格"  width="100%" data-efb-control="table"><tr><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td></tr></table></div>',
        "children": true
    }

};

var Conversion = new unitConversion();
$(function() {
    new Vue({
        el: '.el-list ul',
        data: elhtml
    });
    $(".el-label").draggable({
        connectToSortable: ".page",
        cursor: "move",
        revert: "invalid",
        helper: function(event) {
            var tmp_type = $(this).attr("el-type")
            return $(elhtml[tmp_type].html);
        },
        start: function() {

        },
        drag: function() {

        },
        stop: function() {
            $(".el").draggable({
                containment: 'parent',
                drag: function() {

                }
            });
        }
    });
    $(".page").sortable({

    });
    // var stylearray = document.defaultView.getComputedStyle($(".page")[0])

    //console.log(stylearray)


});