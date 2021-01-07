package nmcnpm.no25.service;

import nmcnpm.no25.model.Category;

import java.sql.SQLException;
import java.util.List;

public interface CategoryService {
    List<Category> findAll() throws SQLException;

    Category findById(int id) throws SQLException;

    Category insert(String name) throws SQLException;

    boolean update(Category category) throws SQLException;

    boolean delete(int id) throws SQLException;
}