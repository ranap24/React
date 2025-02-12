import DataTable from 'react-data-table-component';

function ListTable({columns,data})
{
    return(
     <DataTable columns={columns} data={data}/>
    );
}

export default ListTable;