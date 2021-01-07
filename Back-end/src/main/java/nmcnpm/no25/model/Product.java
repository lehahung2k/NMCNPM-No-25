package nmcnpm.no25.model;

import java.util.Date;

public class Product {
    private int id;

    private String name;

    private Date createDate;

    private boolean deleted;

    private String image; // lưu trữ đường của hình ảnh

    private String introduction; // miêu tả về sản phẩm

    private int categoryId;

    @Override
    public String toString() {
        return "Product{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", createDate=" + createDate +
                ", deleted=" + deleted +
                ", image='" + image + '\'' +
                ", introduction='" + introduction + '\'' +
                ", categoryId=" + categoryId +
                '}';
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getCreateDate() {
        return createDate;
    }

    public void setCreateDate(Date createDate) {
        this.createDate = createDate;
    }

    public boolean isDeleted() {
        return deleted;
    }

    public void setDeleted(boolean deleted) {
        this.deleted = deleted;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getIntroduction() {
        return introduction;
    }

    public void setIntroduction(String introduction) {
        this.introduction = introduction;
    }

    public int getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(int categoryId) {
        this.categoryId = categoryId;
    }

    public Product() {
    }

    public Product(int id, String name, double price, Date createDate, boolean deleted, String image, String introduction, String specification, boolean soldOut, int guarantee, int categoryId, int bouth, int promotion) {
        this.id = id;
        this.name = name;
        this.createDate = createDate;
        this.deleted = deleted;
        this.image = image;
        this.introduction = introduction;
        this.categoryId = categoryId;
    }
}
