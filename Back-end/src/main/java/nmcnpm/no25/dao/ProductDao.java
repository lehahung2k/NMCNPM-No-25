package nmcnpm.no25.dao;

import nmcnpm.no25.model.Product;

import java.sql.SQLException;
import java.util.List;

public interface ProductDao extends BaseDao<Product> {
    List<Product> sortByCreateDate() throws SQLException;

    List<Product> sortBy(String field, boolean isAsc) throws SQLException;

    List<Product> findByCategory(int idCategory) throws Exception;

    List<Product> search(String name, String startDate, String endDate, int category) throws Exception;
}
