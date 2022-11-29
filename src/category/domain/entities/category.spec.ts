import Category from "./category";

describe("Category Tests", () => {
  test("constructor of category", () => {
    //Arrange
    const created_at = new Date();
    const props = {
      name: "Movie",
      description: "Description",
      is_active: true,
      created_at: created_at,
    };
    
    const category = new Category(props);
    
    expect(category.props).toStrictEqual({
        name: "Movie",
        description: "Description",
        is_active: true,
        created_at: created_at,
    });
    expect(category.name).toBe("Movie");
    expect(category.description).toBe("Description");
    expect(category.is_active).toBeTruthy()
    expect(category.created_at).toBe(created_at);
  });
});
