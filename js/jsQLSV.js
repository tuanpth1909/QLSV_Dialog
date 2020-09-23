$(document).ready(function () {
    $('#form-dialog').dialog({
        autoOpen: false,
        height: 550,
        width: 500,
        modal: true,
        show: {
            effect: 'scale',
            duration: 250,
        },
        hide: {
            effect: 'drop',
            duration: 200,
        }
    });

    $('#openDialog').click(function () {
        $('#form-dialog').dialog('open');
    });

    //Them moi sinh vien
    addStudents();

    //Xoa sinh vien
    deleteStudents();

    //Tim kiem sinh vien
    searchStudents();

    //Chinh sua sinh vien
    editStudents();

    //thoat
    cancelStudents();
});

//Hàm thêm mới hồ sơ sinh vien
function addStudents() {
    $('#btnSave').click(function () {
        //lay gia tri tu cac input
        let name = $('#txtName').val();
        let dob = $('#datBirthDay').val();
        let sex = $('input[name=sex]:checked').val();
        let add = $('#txtAddress').val();
        let tel = $('#numTel').val();
        let email = $('#emlEmail').val();

        //chen du lieu vao table
        $('tbody').prepend("<tr>" +
            "<td>" + name + "</td>" +
            "<td>" + dob + "</td>" +
            "<td>" + sex + "</td>" +
            "<td>" + add + "</td>" +
            "<td>" + tel + "</td>" +
            "<td>" + email + "</td>" +
            "<td><button type='button' name='btnEdit' class='btn btn-warning mr-1'>Edit</button><button type='button' name='btnDelete' class='btn btn-danger'>Delete</button></td>" +
            "</tr>");

        $('#txtName').val("");
        $('#datBirthDay').val("");
        $('#txtAddress').val("");
        $('#numTel').val("");
        $('#emlEmail').val("");

        $('#form-dialog').dialog('close');

        alert("Added successfully!");

        //xoa ban ghi
        deleteStudents();

        //tim kiem ban ghi
        searchStudents();

        //sua ban ghi
        editStudents();

        //thoat
        cancelStudents();

    });
}

//Hàm xóa hồ sơ sinh viên
function deleteStudents() {
    $('button[name=btnDelete]').click(function () {
        $(this).closest('tr').remove();
    });
}

//Hàm tìm kiếm hồ sơ 
function searchStudents() {
    $('#search').on('keyup', function () {
        let keyword = $(this).val().toLowerCase();
        $('tbody tr').filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(keyword) > -1);
        });
    });
}

//Hàm chỉnh sửa thông tin sinh viên
function editStudents() {

    let trEdit;

    //bat su kien khi nhap chuot vao Edit
    $('button[name=btnEdit]').click(function () {

        $('#form-dialog').dialog('open');

        trEdit = $(this).closest('tr');
        $('#btnSave').hide();
        $('#btnUpdate').show();

        let name = $(trEdit).find('td:eq(0)').text();
        let dob = $(trEdit).find('td:eq(1)').text();
        let sex = $(trEdit).find('td:eq(2)').text();
        let add = $(trEdit).find('td:eq(3)').text();
        let tel = $(trEdit).find('td:eq(4)').text();
        let email = $(trEdit).find('td:eq(5)').text();

        $('#txtName').val(name);
        $('#datBirthDay').val(dob);
        //$('input[name=sex]:checked').val(sex);
        $('input[name=sex][value=' + sex + ']').prop("checked", true);
        $('#txtAddress').val(add);
        $('#numTel').val(tel);
        $('#emlEmail').val(email);


    });

    //bat su kiem khi nhap chuot vao update
    $('#btnUpdate').click(function () {
        if (trEdit) {
            //lay du lieu da duoc chinh sua
            let name = $('#txtName').val();
            let dob = $('#datBirthDay').val();
            let sex = $('input[name=sex]:checked').val();
            let add = $('#txtAddress').val();
            let tel = $('#numTel').val();
            let email = $('#emlEmail').val();

            //thay the du lieu cu sau khi chinh sua
            $(trEdit).find('td:eq(0)').text(name);
            $(trEdit).find('td:eq(1)').text(dob);
            $(trEdit).find('td:eq(2)').text(sex);
            $(trEdit).find('td:eq(3)').text(add);
            $(trEdit).find('td:eq(4)').text(tel);
            $(trEdit).find('td:eq(5)').text(email);

            trEdit = null;

            $('#txtName').val("");
            $('#datBirthDay').val("");
            $('#txtAddress').val("");
            $('#numTel').val("");
            $('#emlEmail').val("");

            $('#btnSave').show();
            $('#btnUpdate').hide();

            //$('form-dialog').dialog('close');
            $('#form-dialog').dialog('close');

        }

    });

}

//Hàm thoát
function cancelStudents() {
    $('#btnCancel').click(function () {
        $('#txtName').val("");
        $('#datBirthDay').val("");
        $('#txtAddress').val("");
        $('#numTel').val("");
        $('#emlEmail').val("");
        $('#form-dialog').dialog('close');
    });
}