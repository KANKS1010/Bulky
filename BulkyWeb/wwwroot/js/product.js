var dataTable;

$(document).ready(function () {
    loadDataTable();
});

function loadDataTable() {
    dataTable = $('#tblData').DataTable({
        "ajax": { url:'/admin/product/getall'},
        "columns": [
            { data: 'title', "width": "25%" },
            { data: 'isbn', "width": "15%" },
            { data: 'listPrice', "width": "10%" },
            { data: 'author', "width": "15%" },
            { data: 'category.name', "width": "10%" },
            {
                data: 'id',
                "render": function (data) {
                    return `<div class="w-75 btn-group" role="group">
                     <a href="/admin/product/upsert?id=${data}"
                     style="background-color: #fafcff;color: #7b8ab8;
                     width: 94px;border-radius: 30px;padding: 5%;
                     text-decoration: none;font-weight: bold;box-shadow: 2px 3px 17px rgb(79, 87, 100), 5px -5px 10px rgb(206 214 229);
                     margin-right: 6%;">
                            <i class="bi bi-pen-fill"></i> Edit</a>   
                            <br/>
                     <a onClick=Delete('/admin/product/delete/${data}')
                        style="
                        cursor: pointer;
                        background-color: #e34f4f;color: white;
                        width: 94px;border-radius: 30px;padding:5%;
                        text-decoration: none;font-weight: bold;box-shadow: 2px 3px 17px rgb(79, 87, 100), 5px -5px 10px rgb(206 214 229);
                        margin-right: 6%;">
                            <i class="bi bi-trash-fill"></i> Delete</a>
                    </div>`
                },
                "width": "25%"
            }
        ]
    });
}
function Delete(url) {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: url,
                type: 'DELETE',
                success: function (data) {
                    dataTable.ajax.reload();
                    toastr.success(data.message);
                }
            })
        }
    })
}