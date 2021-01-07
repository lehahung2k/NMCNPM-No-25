//dịnh nghĩa các phần tử cần thao thác
let btnThem, selectSearchDanhMuc, selectSearchSapXep, textSearchTen, numberSearchGia, numberSearchDaBan, dateSearchNgayTao, selectSearchConHang, btnTimKiem, tableDuLieu, textTen, selectDanhMuc, numberGia, numberDaBan, numberBaoHanh, numberKhuyenMai, fileAnh, dateNgayTao, textareaGioiThieu, textareaThongSo, checkboxHetHang, btnLuu, btnXacNhanXoa;
let indexProduct, elementProduct;
//hàm này sẽ chạy các dòng lệnh ở trong nó khi các phần tử html đã được tải hết.
let listProduct = [
    {
        id: 1,
        name: "Iphone 11",
        price: 10000,
        createDate: "2020-08-20",
        image: "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/thumbnail/300x/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone11-purple-select-2019.png",
        introduction: "Iphone tai thỏ",
        specification: "Chip A11",
        soldOut: true,
        guarantee: 12,
        categoryId: 1,
        bouth: 1000,
        promotion: 10
    },
    {
        id: 2,
        name: "Iphone 11",
        price: 10000,
        createDate: "2020-08-20",
        image: "https://cdn.tgdd.vn/Products/Images/42/200533/iphone-11-pro-max-green-600x600.jpg",
        introduction: "Iphone tai thỏ",
        specification: "Chip A11",
        soldOut: true,
        guarantee: 12,
        categoryId: 2,
        bouth: 1000,
        promotion: 10
    },
];
$(function () {
    btnThem = $("#btn-them");
    selectSearchDanhMuc = $("#select-search-danh-muc");
    selectSearchSapXep = $("#select-search-sap-xep");
    textSearchTen = $("#input-search-ten");
    numberSearchGia = $("#input-search-gia");
    numberSearchDaBan = $("#input-search-da-ban");
    dateSearchNgayTao = $("#input-search-ngay-tao");
    selectSearchConHang = $("#select-search-het-hang");
    btnTimKiem = $("#btn-tim-kiem");
    tableDuLieu = $("tbody");
    textTen = $("#input-ten");
    selectDanhMuc = $("#select-loai-san-pham");
    numberGia = $("#input-gia");
    numberDaBan = $("#input-da-ban");
    numberBaoHanh = $("#input-bao-hanh");
    numberKhuyenMai = $("#input-khuyen-mai");
    fileAnh = $("#file-anh");
    dateNgayTao = $("#input-ngay-tao");
    textareaGioiThieu = $("#textarea-gioi-thieu");
    textareaThongSo = $("#textarea-thong-so");
    checkboxHetHang = $("#checkbox-het-hang");
    btnLuu = $("#btn-luu-lai");
    btnXacNhanXoa = $("#btn-xac-nhan-xoa");

    viewDanhSachSanPham();
    searchSanPham();
    xacNhanXoaSanPham();
    luuSanPham();
    themSanPham();
})

function viewDanhSachSanPham() {
    let view = "<tr><td colspan='8'><strong>Không có dữ liệu!</strong></td></tr>";
    if(listProduct && listProduct.length >0) {
        view = listProduct.map((data, index) => {
            //cú pháp temaplate string trong đấy cho phép thực hiện các phép toán
            return `<tr data-index="${index}">
                        <th scope="row">${index + 1}</th>
                        <td><img src="${data.image}" alt="" width="80px"></td>
                        <td>${viewField(data.name)}</td>
                        <td>${viewField(data.price)}</td>
                        <td>${viewField(data.bouth)}</td>
                        <td>${viewField(data.createDate)}</td>
                        <td class="text-center">${data.soldOut ? `<span class="badge badge-danger">Hết hàng</span>` : `<span class="badge badge-success">Còn hàng</span>`}</td>
                        <td>
                            <button type="button" class="btn btn-warning sua-san-pham"><i class="fas fa-pen"></i>
                                Sửa</button>
                            <button type="button" class="btn btn-danger xoa-san-pham"><i class="fas fa-trash-alt"></i>
                                Xóa</button>
                        </td>
                    </tr>`
        }).join("");
    }
    tableDuLieu.html(view);
    xoaSanPham();
    suaSanPham();
}

function searchSanPham() {
    btnTimKiem.click(function () {
        let valSearchTen = textSearchTen.val();
        let valSearchGia = numberSearchGia.val();
        valSearchGia = valSearchGia.length > 0 ? valSearchGia : -1;
        let valSearchDaBan = numberSearchDaBan.val();
        valSearchDaBan = valSearchDaBan.length > 0 ? valSearchDaBan : -1;
        let valSearchNgayTao = dateSearchNgayTao.val();
        valSearchNgayTao = valSearchNgayTao.length > 0 ? valSearchNgayTao : null;
        let valSearchConHang = selectSearchConHang.val();
        valSearchConHang = valSearchConHang != 0 ? valSearchConHang : null;
        // trước khi gọi hàm search thì phải kiểm tra các trường hợp đầu vào như
        //api quy định
        //call api truyền vào các tham số để tìm kiếm
        //api trả về kết quả là một list sản phẩm phù hợp với tìm kiếm
        //gán list trả về với listProduct và sau đấy view lại
        listProduct = [];
        viewDanhSachSanPham();
    })
}

function xoaSanPham() {
    //xóa có 2 bước/
    //click xóa sản phẩm thì sẽ thực hiện chức nằng là ra id của sản phảm đấy
    //sau khi đã lấy ra được id thì mới được mở modal xác nhận xóa lên
    //khi người dùng chấp nhận xóa thì mới gọi api và nếu xóa thành công
    //thì cập nhập lại list và view lại.
    $(".xoa-san-pham").click(function () {
        //khi click vào một nút nào đấy thì từ khóa this hiện tại chính là phần tử vừa click
        //.parents cho phép tìm kiếm các phần tử cha của phần tử hiện tại
        //.attr("name") name ở đây là key của một giá trị cần lấy.
        indexProduct = $(this).parents("tr").attr("data-index");
        $("#exampleModal1").modal("show");
    })
}

function xacNhanXoaSanPham() {
    btnXacNhanXoa.click(function () {
        let idProduct = listProduct[indexProduct - 0].id;
        //gọi api xóa sản phẩm nếu thành công tức trả vể true;
        //thực hiện xóa sản phẩm có index tường tứng trong mảng
        listProduct = listProduct.filter((data, index) => {
            return index != indexProduct;
        })
        viewDanhSachSanPham();
        $("#exampleModal1").modal("hide");
    })
}

function suaSanPham() {
    $(".sua-san-pham").click(function () {
        elementProduct = listProduct[$(this).parents("tr").attr("data-index") - 0];
        textTen.val(elementProduct.name);
        selectDanhMuc.val(elementProduct.categoryId);
        numberGia.val(elementProduct.price);
        numberDaBan.val(elementProduct.bouth);
        numberBaoHanh.val(elementProduct.guarantee);
        numberKhuyenMai.val(elementProduct.promotion);
        dateNgayTao.val(elementProduct.createDate);
        textareaGioiThieu.val(elementProduct.introduction);
        textareaThongSo.val(elementProduct.specification);
        checkboxHetHang.prop("checked", elementProduct.soldOut);
        $("#exampleModal").modal("show");
    })
}

function checkData(selector, textError) {
    let val = $(selector).val();
    let check = false;
    if(val.length > 0) {
        check = true;
        hiddenError(selector);
    } else {
        viewError(selector, textError);
    }
    //trả về đối tượng có 2 thộc tính val và check thuộc tính val mang giá trị của val
    //thuộc tính check mang giá trị của check;
    return {val, check};
}

function luuSanPham() {
    btnLuu.click(function () {
        // mỗi trường người dùng nhập vào đều phải kiểm tra bằng hàm checkData
        //hàng check data trả về 2 giá trị val và check
        // ở mỗi trả về ví dụ valTen sẽ mang giá trị của checkData cho ô tên
        let {val:valTen, check:checkTen} = checkData(textTen, "Định dạng tên chưa đúng");
        let valDanhMuc = selectDanhMuc.val();
        let {val:valGia, check:checkGia}= checkData(numberGia, "Giá bán phải là số");
        let {val:valDaBan, check:checkDaBan}= checkData(numberDaBan, "Nhập số lượng đã bán");
        let {val:valBaoHanh, check:checkBaoHanh}= checkData(numberBaoHanh, "Nhập thời gian bảo hành");
        let {val:valKhuyenMai, check:checkKhuyenMai}= checkData(numberKhuyenMai, "Nhập phần trăm khuyến mãi");
        let valGioiThieu = textareaGioiThieu.val();
        let valThongSo = textareaThongSo.val();
        let valHetHang = checkboxHetHang.is(":checked");
        //nếu tất cả chính xác định dạng thì gán lại các thuộc tính cho phần tử cần sửa
        if(checkTen && checkGia && checkDaBan && checkBaoHanh && checkKhuyenMai) {
            let checkAction = false; // true là sửa, false là thêm
            if(elementProduct) {
                checkAction = true;
            } else {
                elementProduct = {};
            }
            elementProduct.name = valTen;
            elementProduct.categoryId = valDanhMuc;
            elementProduct.price = valGia;
            elementProduct.bouth = valDaBan;
            elementProduct.guarantee = valBaoHanh;
            elementProduct.promotion = valKhuyenMai;
            elementProduct.introduction = valGioiThieu;
            elementProduct.specification = valThongSo;
            elementProduct.soldOut = valHetHang;
            if(checkAction) {
                // sửa sản phẩm
                //Sau khi thay đổi các trường xong gọi đến api nếu api trả về truu thì
                //gán đối tượng api trả về vào listProduct ứng với index của nó lúc đầu.
                listProduct[indexProduct] = elementProduct;
                console.log("save");
                //sau khi save thành công thì phải đóng modal
            } else {
                // thêm sản phẩm
                // gọi api thêm sản phẩm nếu thành công api sẽ trả về một đối tượng
                //vừa đươc thêm vào đã có id
                // nếu thành công push đối tượng mới vào mảng listProduct và
                // thực hiện hiện view lại danh sách.
                listProduct.push(elementProduct); //elementProduct là đối tượng api trả về
            }
            //Sau khi thay đổi các trường xong gọi đến api nếu api trả về truu thì
            //gán đối tượng api trả về vào listProduct ứng với index của nó lúc đầu.
            listProduct[indexProduct] = elementProduct;
            //sau đấy gọi lại view danh sách sản phẩm
            viewDanhSachSanPham();
            console.log("save");
            //sau khi save thành công thì phải đóng modal
            $("#exampleModal").modal("hide");
        }

    })
}

function themSanPham() {
    btnThem.click(function () {
        elementProduct = null;
        $("#exampleModal").modal("show");
    })
}