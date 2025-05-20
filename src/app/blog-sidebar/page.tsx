import RelatedPost from "@/components/Blog/RelatedPost";
import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import NewsLatterBox from "@/components/Contact/NewsLatterBox";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sycom Blog | Rwanda's Premier AI and Application Development Company",
  description: "Explore the latest AI innovations from Sycom, Rwanda's leading artificial intelligence and application development company and creators of Sybot chatbot.",
  keywords: "Sycom, Rwanda AI, Sybot chatbot, artificial intelligence Rwanda, Kigali tech hub, East Africa AI solutions",
  openGraph: {
    title: "Sycom - Rwanda's AI Innovation Leader",
    description: "Pioneering artificial intelligence solutions in Rwanda with Sybot chatbot technology",
    images: [{ url: "/images/blog/sycom-ai-banner.jpg" }],
  },
};

const SycomBlogDetailsPage = () => {
  return (
    <section className="overflow-hidden pt-[180px] pb-[120px] bg-sycom-background">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-8/12">
            <div>
              <h1 className="mb-8 text-3xl leading-tight font-bold text-sycom-primary sm:text-4xl sm:leading-tight dark:text-white">
                Sybot: How Rwanda's First Advanced AI Chatbot is Transforming Local Business
              </h1>
              <div className="border-sycom-border/10 mb-10 flex flex-wrap items-center justify-between border-b pb-4 dark:border-white/10">
                <div className="flex flex-wrap items-center">
                  <div className="mr-10 mb-5 flex items-center">
                    <div className="mr-4">
                      <div className="relative h-10 w-10 overflow-hidden rounded-full">
                        <Image
                          src="/images/blog/sycom-author.png"
                          alt="Sycom Author"
                          fill
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <span className="text-sycom-body mb-1 text-base font-medium">
                        By <span>Jean-Claude Ndoli</span>
                      </span>
                    </div>
                  </div>
                  <div className="mb-5 flex items-center">
                    <p className="text-sycom-body mr-5 flex items-center text-base font-medium">
                      <span className="mr-3">
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          className="fill-current"
                        >
                          <path d="M3.89531 8.67529H3.10666C2.96327 8.67529 2.86768 8.77089 2.86768 8.91428V9.67904C2.86768 9.82243 2.96327 9.91802 3.10666 9.91802H3.89531C4.03871 9.91802 4.1343 9.82243 4.1343 9.67904V8.91428C4.1343 8.77089 4.03871 8.67529 3.89531 8.67529Z" />
                          <path d="M6.429 8.67529H5.64035C5.49696 8.67529 5.40137 8.77089 5.40137 8.91428V9.67904C5.40137 9.82243 5.49696 9.91802 5.64035 9.91802H6.429C6.57239 9.91802 6.66799 9.82243 6.66799 9.67904V8.91428C6.66799 8.77089 6.5485 8.67529 6.429 8.67529Z" />
                          <path d="M8.93828 8.67529H8.14963C8.00624 8.67529 7.91064 8.77089 7.91064 8.91428V9.67904C7.91064 9.82243 8.00624 9.91802 8.14963 9.91802H8.93828C9.08167 9.91802 9.17727 9.82243 9.17727 9.67904V8.91428C9.17727 8.77089 9.08167 8.67529 8.93828 8.67529Z" />
                          <path d="M11.4715 8.67529H10.6828C10.5394 8.67529 10.4438 8.77089 10.4438 8.91428V9.67904C10.4438 9.82243 10.5394 9.91802 10.6828 9.91802H11.4715C11.6149 9.91802 11.7105 9.82243 11.7105 9.67904V8.91428C11.7105 8.77089 11.591 8.67529 11.4715 8.67529Z" />
                          <path d="M3.89531 11.1606H3.10666C2.96327 11.1606 2.86768 11.2562 2.86768 11.3996V12.1644C2.86768 12.3078 2.96327 12.4034 3.10666 12.4034H3.89531C4.03871 12.4034 4.1343 12.3078 4.1343 12.1644V11.3996C4.1343 11.2562 4.03871 11.1606 3.89531 11.1606Z" />
                        </svg>
                      </span>
                      15 May 2025
                    </p>
                    <p className="text-sycom-body mr-5 flex items-center text-base font-medium">
                      <span className="mr-3">
                        <svg
                          width="18"
                          height="13"
                          viewBox="0 0 18 13"
                          className="fill-current"
                        >
                          <path d="M15.6375 0H1.6875C0.759375 0 0 0.759375 0 1.6875V10.6875C0 11.3062 0.309375 11.8406 0.84375 12.15C1.09687 12.2906 1.40625 12.375 1.6875 12.375C1.96875 12.375 2.25 12.2906 2.53125 12.15L5.00625 10.7156C5.11875 10.6594 5.23125 10.6312 5.34375 10.6312H15.6094C16.5375 10.6312 17.2969 9.87187 17.2969 8.94375V1.6875C17.325 0.759375 16.5656 0 15.6375 0ZM16.3406 8.94375C16.3406 9.3375 16.0312 9.64687 15.6375 9.64687H5.37187C5.09062 9.64687 4.78125 9.73125 4.52812 9.87187L2.05313 11.3063C1.82812 11.4187 1.575 11.4187 1.35 11.3063C1.125 11.1938 1.0125 10.9688 1.0125 10.7156V1.6875C1.0125 1.29375 1.32188 0.984375 1.71563 0.984375H15.6656C16.0594 0.984375 16.3687 1.29375 16.3687 1.6875V8.94375H16.3406Z" />
                          <path d="M12.2342 3.375H4.69668C4.41543 3.375 4.19043 3.6 4.19043 3.88125C4.19043 4.1625 4.41543 4.3875 4.69668 4.3875H12.2623C12.5435 4.3875 12.7685 4.1625 12.7685 3.88125C12.7685 3.6 12.5154 3.375 12.2342 3.375Z" />
                        </svg>
                      </span>
                      Conversational AI
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-10">
                <Image
                  src="/images/blog/sycom-ai-rwanda.jpg"
                  alt="Sybot AI Chatbot Rwanda"
                  width={1024}
                  height={512}
                  className="rounded-lg"
                />
              </div>
              <div className="mb-10 text-sycom-body text-base font-medium leading-relaxed">
                <p className="mb-5">
                  Sycom is proud to announce the launch of Sybot, Rwanda's first advanced AI chatbot designed specifically for the East African market. As Kigali's leading artificial intelligence company, we've developed Sybot to address the unique challenges and opportunities in Rwanda's rapidly growing digital landscape.
                </p>
                
                <h2 className="text-2xl font-bold text-sycom-primary mb-4 mt-8 dark:text-white">Rwanda's AI Technology Leadership</h2>
                <p className="mb-5">
                  As East Africa's premier AI solutions provider, Sycom is positioning Rwanda as a technological hub for artificial intelligence innovation. Our team of local AI specialists has developed Sybot using state-of-the-art natural language processing and machine learning integration techniques, tailored for African markets.
                </p>
                
                <h2 className="text-2xl font-bold text-sycom-primary mb-4 mt-8 dark:text-white">Multilingual African Language Support</h2>
                <p className="mb-5">
                  What sets Sybot apart is its robust support for Kinyarwanda, English, French, and Swahili. Our neural network architecture has been custom-trained on regional dialects, making it the first truly culturally responsive AI assistant built for Rwanda. This multilingual capability ensures businesses can communicate effectively with all segments of the population.
                </p>
                
                <h2 className="text-2xl font-bold text-sycom-primary mb-4 mt-8 dark:text-white">Business Applications Across Industries</h2>
                <p className="mb-5">
                  From financial technology integration to agricultural intelligence solutions, Sybot is transforming customer experiences across multiple sectors in Rwanda. Our cognitive computing solution enables:
                </p>
                
                <ul className="list-disc pl-6 mb-5 space-y-2">
                  <li>24/7 customer support automation</li>
                  <li>Data-driven decision making with predictive analytics</li>
                  <li>Process optimization through intelligent automation</li>
                  <li>Personalized customer interactions</li>
                  <li>Reduced operational costs and increased efficiency</li>
                </ul>
                
                <h2 className="text-2xl font-bold text-sycom-primary mb-4 mt-8 dark:text-white">African Solutions for African Challenges</h2>
                <p className="mb-5">
                  At Sycom, we believe in creating technology that addresses local needs. Sybot represents our commitment to sustainable AI development in Rwanda, designed specifically to overcome local challenges while leveraging global AI advancements. Made in Rwanda but built to scale globally, Sybot demonstrates how African innovation can lead technological advancement.
                </p>
                
                <blockquote className="bg-gray-50 dark:bg-gray-800 p-6 border-l-4 border-sycom-primary italic mb-8">
                  "With Sybot, we're not just implementing AI technology—we're creating a digital transformation accelerator specifically designed for Rwanda's unique business environment. Our mission is to empower local businesses with globally competitive AI solutions."
                  <footer className="text-right font-medium mt-2">- Jean-Claude Ndoli, CTO of Sycom</footer>
                </blockquote>
                
                <h2 className="text-2xl font-bold text-sycom-primary mb-4 mt-8 dark:text-white">The Future of AI in Rwanda</h2>
                <p className="mb-5">
                  As Rwanda continues its impressive digital transformation journey, Sycom is proud to be at the forefront of AI innovation in Kigali. Our deep learning algorithms and computer vision technology are helping build the foundation for smart city implementations and enhanced government service optimization throughout the country.
                </p>
                
                <p>
                  To learn more about how Sybot can transform your business or to schedule a demonstration of our conversational AI capabilities, contact Sycom today. Join us in building Rwanda's AI-powered future.
                </p>
              </div>

              {/* Tags Section */}
              <div className="mb-10 flex items-center justify-start flex-wrap">
                <span className="mr-3 text-sycom-body text-sm font-medium">
                  Tags:
                </span>
                <TagButton text="Sybot" />
                <TagButton text="Rwanda AI" />
                <TagButton text="Kinyarwanda NLP" />
                <TagButton text="East Africa Tech" />
                <TagButton text="Conversational AI" />
              </div>
              
              {/* Author Bio */}
              <div className="mb-10 rounded-md bg-gray-50 dark:bg-gray-800 p-8">
                <div className="flex items-center">
                  <div className="mr-4">
                    <div className="relative h-16 w-16 overflow-hidden rounded-full">
                      <Image
                        src="/images/blog/sycom-author.png"
                        alt="Jean-Claude Ndoli"
                        fill
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-sycom-primary dark:text-white">
                      Jean-Claude Ndoli
                    </h4>
                    <p className="text-sm text-sycom-body">
                      Chief Technology Officer, Sycom Rwanda
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sycom-body">
                  Jean-Claude leads Sycom's AI development team in Kigali, focusing on creating artificial intelligence solutions tailored for African markets. With over 10 years of experience in machine learning and software development, he is passionate about using technology to solve local challenges.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full px-4 lg:w-4/12">
            <div className="sticky top-[100px]">
              {/* About Sycom */}
              <div className="mb-10 rounded-md bg-white p-6 shadow-md dark:bg-gray-dark">
                <h3 className="border-b border-sycom-border/20 pb-4 text-xl font-semibold text-sycom-primary dark:border-white/10 dark:text-white">
                  About Sycom
                </h3>
                <div className="mt-4">
                  <p className="mb-4 text-sycom-body">
                    Sycom is Rwanda's leading AI technology hub, specializing in artificial intelligence solutions and application development, including our flagship product Sybot.
                  </p>
                  <button className="bg-sycom-primary rounded-md py-2 px-4 text-white transition hover:bg-opacity-90">
                    Learn More
                  </button>
                </div>
              </div>
              
              {/* Recent Posts */}
              <div className="mb-10">
                <RelatedPost />
              </div>
              
              {/* Share Post */}
              <div className="mb-10">
                <SharePost />
              </div>
              
              {/* Newsletter Box */}
              <div>
                <NewsLatterBox />
              </div>
              
              {/* Sybot Demo CTA */}
              <div className="rounded-md bg-gradient-to-r from-sycom-primary to-blue-700 p-6 text-white mt-10">
                <h3 className="mb-4 text-xl font-semibold">
                  Experience Sybot Today
                </h3>
                <p className="mb-4">
                  Schedule a free demonstration of Rwanda's most advanced AI chatbot for your business.
                </p>
                <button className="bg-white text-sycom-primary rounded-md py-2 px-6 text-sm font-medium transition hover:bg-opacity-90">
                  Request Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SycomBlogDetailsPage;