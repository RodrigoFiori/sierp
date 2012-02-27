Ext.define('MSIERP.view.banco.List' ,{
    extend: 'MSIERP.view.AbstractList',
    alias : 'widget.bancoList',
    store: 'Banco',
    title : 'Lista de Banco',
    //selModel: {mode: 'MULTI'},
    selModel: Ext.create('Ext.selection.CheckboxModel'),
    columnLines: true,

    initComponent: function(){
        
        this.tbar = [];

        this.columns = [
            Ext.create('Ext.grid.RowNumberer'),
            {header: 'ID',  dataIndex: 'id',  flex: 1},
            {header: 'Código',  dataIndex: 'cdBanco',  flex: 2},
            {header: 'Banco',  dataIndex: 'dsBanco',  flex: 2},
            {header: 'Ativo',  dataIndex: 'stAtivo',  flex: 1}
        ];

        this.dockedItems = [{
            xtype: 'pagingtoolbar',
            store: 'Banco',
            dock: 'bottom',
            displayInfo: true
        }];
    
        this.callParent();
        this.getSelectionModel().on('selectionchange', this.onSelectChange, this);
    },
    
    onRender: function(){
        this.store.load();
        this.callParent(arguments);
    },
    
    onSelectChange: function(selModel, selections){
        this.down('#delete').setDisabled(selections.length === 0);
        this.down('#edit').setDisabled(selections.length !== 1);
    }
   
});