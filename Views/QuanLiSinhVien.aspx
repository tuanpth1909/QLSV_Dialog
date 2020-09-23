<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage/HomeMaster.Master" AutoEventWireup="true" CodeBehind="QuanLiSinhVien.aspx.cs" Inherits="QLSV_Dialog.Views.QLSV" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <link href="../css/myStyle.css" rel="stylesheet" />
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div id="form-dialog" class="bg-dark">
        <form action="/" method="post" id="form-dialong">
            <fieldset>
                <h3 class="text-center">Add student profile</h3>
                <hr class="bg-white" />
                <div class="form-group">
                    <label>Name:</label>
                    <input type="text" name="name" id="txtName" class="w-75 float-right" value="" required/>
                </div>
                <div class="form-group">
                    <label>Birth Day:</label>
                    <input type="date" name="date" id="datBirthDay" class="w-75 float-right" value="" required/>
                </div>
                <div class="form-group">
                    <label>Sex:</label><br />
                    <input type="radio" name="sex" value="Male" checked />
                    Male
                    <br />
                    <input type="radio" name="sex" value="Female" />
                    Female
                    <br />
                </div>
                <div class="form-group">
                    <label>Address:</label>
                    <input type="text" name="add" id="txtAddress" class="w-75 float-right" value="" required/>
                </div>
                <div class="form-group">
                    <label>Tel:</label>
                    <input type="number" name="tel" id="numTel" class="w-75 float-right" value="" required/>
                </div>
                <div class="form-group">
                    <label>Email:</label>
                    <input type="email" name="email" id="emlEmail" class="w-75 float-right" value="" required/>
                </div>
                <button type="button" name="btnSave" id="btnSave" class="btn btn-primary w-25 text-center">Save</button>
                <button type="button" name="btnUpdate" id="btnUpdate" class="btn btn-success w-25 text-center" style="display: none">Update</button>
                <button type="button" name="btnSave" id="btnCancel" class="btn btn-secondary w-25 text-center">Cancel</button>
            </fieldset>
        </form>
    </div>
    <div class="container mt-5">
        <div>
            <h2 class="text-center bg-info text-light p-2 rounded">LIST OF STUDENTS</h2>
            <div class="mt-4 mb-3 row">
                <div class="col-4">
                    <button type="button" name="open" id="openDialog" class="btn btn-primary">Add</button>
                </div>
                <div class="col-8">
                    <input type="search" name="name" id="search" class="float-right form-control w-50" value="" placeholder="Search..." />
                </div>
                
            </div>
            <table class="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Sex</th>
                        <th>Address</th>
                        <th>Tel</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Code</td>
                        <td>2020-09-22</td>
                        <td>Male</td>
                        <td>Ha Noi</td>
                        <td>0982513015</td>
                        <td>code@gmail.com</td>
                        <td>
                            <button type="button" name="btnEdit" class="btn btn-warning ">Edit</button>
                            <button type="button" name="btnDelete" class="btn btn-danger">Delete</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</asp:Content>
