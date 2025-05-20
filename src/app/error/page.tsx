import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | Sycom Industry",
  description: "The page you are looking for no longer exists or has been moved on the Sycom Industry website.",
};

const ErrorPage = () => {
  return (
    <>
      <section className="relative z-10 pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
        <div className="container">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[530px] text-center">
                {/* Logo */}
                <div className="mb-8">
                  <Image 
                    src="/logo.png" 
                    alt="Sycom Industry" 
                    width={96} 
                    height={96} 
                    className="mx-auto"
                    priority 
                  />
                </div>

                {/* 404 Icon */}
                <svg
                  width="150"
                  height="150"
                  viewBox="0 0 200 200"
                  className="mx-auto mb-8"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="100" cy="100" r="90" stroke="#0f172a" strokeWidth="12" fill="none" />
                  <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="48" fill="#0f172a">
                    404
                  </text>
                </svg>

                {/* Title */}
                <h3 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">
                  We could not find that page.
                </h3>

                {/* Description */}
                <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  It seems the page you are looking for no longer exists or has been moved. Please check the URL or return to the homepage.
                </p>

                {/* Action Button */}
                <Link
                  href="/"
                  className="px-8 py-3 text-base font-bold text-white duration-300 rounded-md bg-primary shadow-signUp hover:bg-white hover:text-primary md:px-9 lg:px-8 xl:px-9"
                >
                  Back to Sycom Homepage
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Background Decorations */}
        <div className="absolute top-0 left-0 z-[-1]">
          <svg
            width="400"
            height="400"
            viewBox="0 0 400 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="200" cy="200" r="200" fill="#f3f4f6" />
          </svg>
        </div>
        <div className="absolute bottom-0 right-0 z-[-1]">
          <svg
            width="300"
            height="300"
            viewBox="0 0 300 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="150" cy="150" r="150" fill="#e5e7eb" />
          </svg>
        </div>
      </section>
    </>
  );
};

export default ErrorPage;