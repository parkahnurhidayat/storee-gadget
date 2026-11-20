import Link from "next/link";
import Container from "./ui/container";
import MainNav from "./main-nav";
import getCategories from "@/actions/get-categories";

export const revalidate = 0;

const Navbar = async () => {
  const categories = await getCategories();
  return (
    <header className="border-b bg-white sticky top-0 z-40">
      <Container>
        <div className="relative flex px-4 sm:px-6 lg:px-8 h-16 items-center gap-x-4">
          <Link href="/" className="flex shrink-0 items-center">
            <p className="font-bold text-lg sm:text-xl">TeknoMart</p>
          </Link>
          <MainNav data={categories} />
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
