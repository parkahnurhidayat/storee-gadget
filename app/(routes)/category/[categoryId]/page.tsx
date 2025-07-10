import getCategory from "@/actions/get-category";
import getProducts from "@/actions/get-products";
import Banner from "@/components/banner";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import NoResult from "@/components/ui/no-result";
import ProductCard from "@/components/ui/product-card";

interface CategoryPageProps {
  params: {
    categoryId: string;
  };
}
const CategoryPage: React.FC<CategoryPageProps> = async ({ params }) => {
  const products = await getProducts({ categoryId: params.categoryId });
  const category = await getCategory(params.categoryId);
  return (
    <div className="bg-white">
      <Container>
        <Banner data={category?.banner} />
        <div className="flex my-10 flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            <h3 className="font-bold text-3xl">{category?.name}</h3>
            {products.length === 0 && <NoResult />}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {products.map((item) => (
                <ProductCard key={item.id} data={item} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;
