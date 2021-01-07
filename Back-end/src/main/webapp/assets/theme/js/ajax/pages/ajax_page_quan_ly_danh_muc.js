let listCategory;
$(async function () {
    //gọi api trả về 2 th then trả về thành công
    //catch trả về lỗi
    await categoryFindAll().then(rs => {
       if(rs.message == "success") {
            listCategory = rs.data;
       }  else {
           console.log(rs.data);
       }
   }).catch(err => {
       console.log(err);
   })
})