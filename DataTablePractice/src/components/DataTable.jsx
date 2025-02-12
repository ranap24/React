import DataTable from 'react-data-table-component';

function DataTableDemo()
{

    const columns = [
        {
           name : 'ID',
           selector : row => row.id,
           sortable : true
        },
        {
            name : 'Title',
            selector : row => row.title
        },
        {
            name : 'Year',
            selector :row => row.year

        },
        {
            name : '',
            selector : row => row.edit
        }

    ];

    const data = [
        {
            id : 1,
            title : 'bomb',
            year : 2015,
            edit : <button >Edit</button>
        }, 
        {
            id : 2,
            title : 'explosive',
            year : 2011
        }
    ]

    return(
       <DataTable columns={columns} data={data}/>
    );
}

export default DataTableDemo;