import Image from "next/image";
import Link from "next/link";

const RelatedPost = () => {
  const relatedPosts = [
    {
      id: 1,
      title: "Sybot Integration Guide for Rwanda E-Commerce",
      image: "/images/blog/sycom-ecommerce.jpg",
      slug: "sybot-integration-guide-rwanda-ecommerce",
      date: "10 May 2025"
    },
    {
      id: 2,
      title: "Machine Learning Applications in Kigali Smart City",
      image: "/images/blog/sycom-kigali-smart-city.jpg",
      slug: "machine-learning-applications-kigali-smart-city",
      date: "02 May 2025"
    },
    {
      id: 3,
      title: "Natural Language Processing for Kinyarwanda",
      image: "/images/blog/sycom-nlp-kinyarwanda.jpg",
      slug: "natural-language-processing-kinyarwanda",
      date: "28 Apr 2025"
    },
  ];

  return (
    <div className="rounded-md bg-white p-6 shadow-md dark:bg-gray-dark">
      <h3 className="border-b border-sycom-border/20 pb-4 text-xl font-semibold text-sycom-primary dark:border-white/10 dark:text-white">
        Related Articles
      </h3>

      <div className="mt-6 flex flex-col gap-6">
        {relatedPosts.map((post) => (
          <div key={post.id} className="flex items-center">
            <div className="mr-4 h-16 w-16 overflow-hidden rounded">
              <Image
                src={post.image}
                alt={post.title}
                className="h-full w-full object-cover"
                width={64}
                height={64}
              />
            </div>
            <div>
              <h4>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mb-1 inline-block text-sm font-medium leading-snug text-sycom-primary hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
                >
                  {post.title}
                </Link>
              </h4>
              <p className="text-xs text-sycom-body">{post.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedPost;