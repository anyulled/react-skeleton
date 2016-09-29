import React from "react";
import {expect} from "chai";
import ReactDOM from "react-dom";
import SortableTable from "../../app/components/UsersFixedDataTable2";

describe("<SortableTable/>", () => {

    const props = {
        dataLoad: function () {},
        onRemoveClick: function () {},
        onEditClick: function () {},
        tableColumnOrderSet: function () {},
        sortRowsBy: function () {},
        data: [],
        columns: [],
        rowSortKey: "",
        rowSortDesc: false,
        edit: false,
        reorderableColumns: false,
        rowHeight: 1
    };


    it("should mount with all prop variants", function () {
        for (var edit = 0; edit < 2; edit++) {
            for (var rowSortDesc = 0; rowSortDesc < 2; rowSortDesc++) {
                for (var reorderableColumns = 0; reorderableColumns < 2; reorderableColumns++) {
                    let propVariant = Object.assign(props);
                    propVariant.dataLoad = null;
                    propVariant.edit = (edit === 0);
                    propVariant.rowSortDesc = (rowSortDesc === 0);
                    propVariant.reorderableColumns = (reorderableColumns === 0);
                    var container = document.createElement('div');
                    var connectedApp = ReactDOM.render(<SortableTable {...propVariant}/>, container);
                    expect(connectedApp).to.exist;
                }
            }
        }
    });


});