import Image from "next/image";
import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";

const BlogDetailsPage = () => {
  return (
    <>
      <section className="pt-35 lg:pt-45 xl:pt-50 pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col-reverse lg:flex-row gap-7.5 xl:gap-12.5">
            <div className="lg:w-[62%] border border-stroke dark:border-strokedark rounded-lg p-7.5 xl:p-15">
              <div className="animate_top mb-10">
                <h2 className="font-semibold text-3xl xl:text-sectiontitle3 text-black dark:text-white mb-5">
                  How AI is Transforming the Way We Develop Software
                </h2>

                <ul className="flex flex-wrap items-center gap-5 2xl:gap-7.5">
                  <li>
                    <span className="text-black dark:text-white">By:</span>{" "}
                    <a href="#" className="text-primary">
                      Jane Cooper
                    </a>
                  </li>
                  <li>
                    <span className="text-black dark:text-white">
                      Published On:
                    </span>{" "}
                    <span>Feb 23, 2025</span>
                  </li>
                  <li>
                    <span className="text-black dark:text-white">
                      Category:
                    </span>{" "}
                    <span>Technology</span>
                  </li>
                </ul>
              </div>

              <div className="animate_top mb-10">
                <div className="relative aspect-[97/60] mb-10 rounded-lg overflow-hidden">
                  <Image
                    fill
                    src={"/images/blog/blog-details-01.jpg"}
                    alt="Blog Details"
                    className="object-cover object-center"
                  />
                </div>

                <p className="text-base text-body-color dark:text-body-color-dark mb-8">
                  Artificial Intelligence (AI) is revolutionizing the software development landscape, transforming how developers work and significantly enhancing productivity. This technological shift is not just changing the tools we use but fundamentally altering the development process itself.
                </p>

                <h3 className="font-semibold text-xl xl:text-itemtitle2 text-black dark:text-white mb-5">
                  The Rise of AI-Powered Development Tools
                </h3>

                <p className="text-base text-body-color dark:text-body-color-dark mb-8">
                  In recent years, we've witnessed a proliferation of AI-powered development tools designed to assist coders at every stage of the software development lifecycle. These intelligent assistants can now generate code snippets, identify bugs, optimize performance, and even suggest architectural improvements.
                </p>

                <p className="text-base text-body-color dark:text-body-color-dark mb-8">
                  According to recent studies, developers utilizing AI coding assistants report up to a 40% increase in productivity. These tools not only speed up the coding process but also help maintain code quality and consistency across large projects.
                </p>

                <div className="relative aspect-[97/60] mb-10 rounded-lg overflow-hidden">
                  <Image
                    fill
                    src={"/images/blog/blog-details-02.jpg"}
                    alt="AI Coding"
                    className="object-cover object-center"
                  />
                </div>

                <h3 className="font-semibold text-xl xl:text-itemtitle2 text-black dark:text-white mb-5">
                  Predictive Analysis and Smart Debugging
                </h3>

                <p className="text-base text-body-color dark:text-body-color-dark mb-8">
                  One of the most significant impacts of AI on software development is in the area of debugging and testing. Advanced machine learning algorithms can now predict potential issues before they arise, identify patterns in bug occurrences, and suggest solutions based on similar problems solved in the past.
                </p>

                <p className="text-base text-body-color dark:text-body-color-dark mb-8">
                  This predictive approach to quality assurance has led to faster development cycles and more robust applications. Teams implementing AI-driven testing report catching up to 30% more bugs before they reach production environments.
                </p>

                <ul className="list-disc list-inside mb-8 text-body-color dark:text-body-color-dark">
                  <li className="mb-2">Automated code generation and refactoring</li>
                  <li className="mb-2">Intelligent code completion with contextual awareness</li>
                  <li className="mb-2">Machine learning-based bug prediction</li>
                  <li className="mb-2">Natural language processing for documentation</li>
                  <li>AI-optimized deployment strategies</li>
                </ul>

                <h3 className="font-semibold text-xl xl:text-itemtitle2 text-black dark:text-white mb-5">
                  The Future of AI in Software Development
                </h3>

                <p className="text-base text-body-color dark:text-body-color-dark mb-10">
                  Looking ahead, we can expect AI to become an even more integral part of the development process. As these systems continue to learn from vast repositories of code and developer behaviors, their capabilities will only increase. We're moving toward a future where AI doesn't just assist developers but collaborates with them as an intelligent partner in the creative process of building software.
                </p>

                <div className="relative mb-10">
                  <div className="absolute left-0 top-0 w-2 h-full bg-primary"></div>
                  <div className="pl-6">
                    <p className="text-body-color dark:text-body-color-dark text-base italic">
                      "The most powerful aspect of AI in development isn't just automating routine tasks—it's amplifying human creativity by handling the mechanical aspects of coding, allowing developers to focus on solving the core problems that require human ingenuity."
                    </p>
                    <h4 className="text-black dark:text-white font-medium text-md mt-5">
                      - Sarah Chen, CTO at Sybot
                    </h4>
                  </div>
                </div>

                <p className="text-base text-body-color dark:text-body-color-dark">
                  As we embrace these new AI-powered possibilities, the role of developers is evolving rather than diminishing. The future belongs to those who can effectively collaborate with these intelligent systems, leveraging their capabilities while providing the creative direction and ethical oversight that remains uniquely human.
                </p>
              </div>

              <div className="animate_top flex flex-col gap-7.5">
                {/* Share Post */}
                <SharePost />

                {/* Tag Buttons (you can customize or add more tags as needed) */}
                <div className="flex flex-wrap gap-4">
                  <TagButton text="AI" />
                  <TagButton text="Sybot" />
                  <TagButton text="Tech Innovation" />
                </div>
              </div>
            </div>

            <div className="lg:w-[38%] border border-stroke dark:border-strokedark rounded-lg p-7.5 xl:p-15">
              <div className="animate_top mb-10">
                <h4 className="text-black dark:text-white font-medium text-itemtitle2 mb-7.5">
                  Search
                </h4>

                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full h-15 px-5 rounded-lg bg-white dark:bg-black border border-stroke dark:border-strokedark focus:outline-none focus-visible:shadow-none"
                  />
                  <button
                    aria-label="search"
                    className="absolute top-0 right-0 h-full px-7 flex items-center justify-center"
                  >
                    <svg
                      className="fill-body-color dark:fill-body-color-dark"
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M20.7692 19.5383L16.6154 15.4483C18.0769 13.8198 18.9231 11.6537 18.9231 9.23075C18.9231 4.16144 14.7308 0 9.61538 0C4.5 0 0.307693 4.16144 0.307693 9.23075C0.307693 14.3001 4.5 18.4615 9.61538 18.4615C12.0385 18.4615 14.2308 17.6306 15.8462 16.1845L20 20.2745C20.2308 20.5029 20.5385 20.6171 20.8462 20.6171C21.1538 20.6171 21.4615 20.5029 21.6923 20.2745C22.1538 19.829 22.1538 19.0421 20.7692 19.5383ZM9.61538 16.6152C5.5 16.6152 2.17308 13.3152 2.17308 9.23075C2.17308 5.14629 5.5 1.84629 9.61538 1.84629C13.7308 1.84629 17.0577 5.14629 17.0577 9.23075C17.0577 13.3152 13.7308 16.6152 9.61538 16.6152Z" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="animate_top mb-10">
                <h4 className="text-black dark:text-white font-medium text-itemtitle2 mb-7.5">
                  Popular Articles
                </h4>

                <div className="flex flex-col gap-7.5">
                  <div className="flex gap-4 lg:gap-5 xl:gap-7.5">
                    <div className="relative max-w-[75px] h-[75px] rounded-lg overflow-hidden">
                      <Image
                        fill
                        src={"/images/blog/popular-article-01.jpg"}
                        alt="Popular Article"
                        className="object-cover object-center"
                      />
                    </div>
                    <div>
                      <h5 className="font-medium text-md mb-2.5 line-clamp-2">
                        <a
                          href="#"
                          className="text-black dark:text-white hover:text-primary dark:hover:text-primary"
                        >
                          The Future of Web Development with WebAssembly
                        </a>
                      </h5>
                      <p className="text-sm">January 14, 2025</p>
                    </div>
                  </div>

                  <div className="flex gap-4 lg:gap-5 xl:gap-7.5">
                    <div className="relative max-w-[75px] h-[75px] rounded-lg overflow-hidden">
                      <Image
                        fill
                        src={"/images/blog/popular-article-02.jpg"}
                        alt="Popular Article"
                        className="object-cover object-center"
                      />
                    </div>
                    <div>
                      <h5 className="font-medium text-md mb-2.5 line-clamp-2">
                        <a
                          href="#"
                          className="text-black dark:text-white hover:text-primary dark:hover:text-primary"
                        >
                          Building Scalable Microservices Architecture
                        </a>
                      </h5>
                      <p className="text-sm">December 20, 2024</p>
                    </div>
                  </div>

                  <div className="flex gap-4 lg:gap-5 xl:gap-7.5">
                    <div className="relative max-w-[75px] h-[75px] rounded-lg overflow-hidden">
                      <Image
                        fill
                        src={"/images/blog/popular-article-03.jpg"}
                        alt="Popular Article"
                        className="object-cover object-center"
                      />
                    </div>
                    <div>
                      <h5 className="font-medium text-md mb-2.5 line-clamp-2">
                        <a
                          href="#"
                          className="text-black dark:text-white hover:text-primary dark:hover:text-primary"
                        >
                          The Impact of Machine Learning on UX Design
                        </a>
                      </h5>
                      <p className="text-sm">November 5, 2024</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="animate_top mb-10">
                <h4 className="text-black dark:text-white font-medium text-itemtitle2 mb-7.5">
                  Categories
                </h4>

                <ul className="flex flex-col gap-4">
                  <li>
                    <a
                      href="#"
                      className="flex justify-between items-center font-medium group"
                    >
                      <span className="text-black dark:text-white group-hover:text-primary">
                        Technology
                      </span>
                      <span className="flex h-7.5 w-7.5 items-center justify-center rounded-full bg-stroke dark:bg-strokedark text-black dark:text-white group-hover:bg-primary group-hover:text-white">
                        23
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex justify-between items-center font-medium group"
                    >
                      <span className="text-black dark:text-white group-hover:text-primary">
                        Artificial Intelligence
                      </span>
                      <span className="flex h-7.5 w-7.5 items-center justify-center rounded-full bg-stroke dark:bg-strokedark text-black dark:text-white group-hover:bg-primary group-hover:text-white">
                        17
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex justify-between items-center font-medium group"
                    >
                      <span className="text-black dark:text-white group-hover:text-primary">
                        Web Development
                      </span>
                      <span className="flex h-7.5 w-7.5 items-center justify-center rounded-full bg-stroke dark:bg-strokedark text-black dark:text-white group-hover:bg-primary group-hover:text-white">
                        35
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex justify-between items-center font-medium group"
                    >
                      <span className="text-black dark:text-white group-hover:text-primary">
                        Cloud Computing
                      </span>
                      <span className="flex h-7.5 w-7.5 items-center justify-center rounded-full bg-stroke dark:bg-strokedark text-black dark:text-white group-hover:bg-primary group-hover:text-white">
                        14
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex justify-between items-center font-medium group"
                    >
                      <span className="text-black dark:text-white group-hover:text-primary">
                        DevOps
                      </span>
                      <span className="flex h-7.5 w-7.5 items-center justify-center rounded-full bg-stroke dark:bg-strokedark text-black dark:text-white group-hover:bg-primary group-hover:text-white">
                        28
                      </span>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="animate_top">
                <h4 className="text-black dark:text-white font-medium text-itemtitle2 mb-7.5">
                  Popular Tags
                </h4>

                <div className="flex flex-wrap gap-3">
                  <TagButton text="Technology" />
                  <TagButton text="Development" />
                  <TagButton text="API" />
                  <TagButton text="React" />
                  <TagButton text="Next.js" />
                  <TagButton text="Marketing" />
                  <TagButton text="Design" />
                  <TagButton text="SEO" />
                  <TagButton text="Writing" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsPage;