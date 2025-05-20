import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Page | Sycom Industry – AI & App Development in Rwanda",
  description: "Explore insights, innovations, and updates from Sycom Industry – your trusted partner in artificial intelligence and smart application development in Rwanda.",
  // other metadata
};

const Blog = () => {
  return (
    <>
      <Breadcrumb
        pageName="Blog Grid"
        description="Discover the latest trends, insights, and updates in artificial intelligence and application development from Sycom Industry, proudly based in Rwanda."
      />

      <section className="pt-[120px] pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {blogData.map((blog) => (
              <div
                key={blog.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>

          <div className="-mx-4 flex flex-wrap" data-wow-delay=".15s">
            <div className="w-full px-4">
              <ul className="flex items-center justify-center pt-8">
                <li className="mx-1">
                  <Link
                    href="#"
                    className="bg-body-color/15 text-body-color hover:bg-primary flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm transition hover:text-white"
                    aria-label="Previous page"
                  >
                    Prev
                  </Link>
                </li>
                <li className="mx-1">
                  <Link
                    href="#"
                    className="bg-primary text-white flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm transition"
                    aria-current="page"
                  >
                    1
                  </Link>
                </li>
                <li className="mx-1">
                  <Link
                    href="#"
                    className="bg-body-color/15 text-body-color hover:bg-primary flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm transition hover:text-white"
                  >
                    2
                  </Link>
                </li>
                <li className="mx-1">
                  <Link
                    href="#"
                    className="bg-body-color/15 text-body-color hover:bg-primary flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm transition hover:text-white"
                  >
                    3
                  </Link>
                </li>
                <li className="mx-1">
                  <span className="bg-body-color/15 text-body-color flex h-9 min-w-[36px] cursor-not-allowed items-center justify-center rounded-md px-4 text-sm">
                    ...
                  </span>
                </li>
                <li className="mx-1">
                  <Link
                    href="#"
                    className="bg-body-color/15 text-body-color hover:bg-primary flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm transition hover:text-white"
                  >
                    12
                  </Link>
                </li>
                <li className="mx-1">
                  <Link
                    href="#"
                    className="bg-body-color/15 text-body-color hover:bg-primary flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm transition hover:text-white"
                    aria-label="Next page"
                  >
                    Next
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};


export default Blog;