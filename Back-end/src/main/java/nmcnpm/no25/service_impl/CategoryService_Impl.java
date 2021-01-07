package nmcnpm.no25.service_impl;

import nmcnpm.no25.model.Category;
import nmcnpm.no25.service.CategoryService;

import java.sql.SQLException;
import java.util.List;

public class CategoryService_Impl implements CategoryService {
    @Override
    public List<Category> findAll() throws SQLException {
        return null;
    }

    @Override
    public Category findById(int id) throws SQLException {
        return null;
    }

    @Override
    public Category insert(String name) throws SQLException {
        return null;
    }

    @Override
    public boolean update(Category category) throws SQLException {
        return false;
    }

    @Override
    public boolean delete(int id) throws SQLException {
        return false;
    }
}
