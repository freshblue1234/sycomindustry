"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // Check for authentication token first
    const authToken = localStorage.getItem('auth_token') || sessionStorage.getItem('auth_token');
    
    if (!authToken) {
      console.log("No auth token found, redirecting to signin");
      router.push("/signin");
      return;
    }
    
    // Only try to get user data if we have a token
    loadUserData(authToken);
  }, [router]);

  const loadUserData = async (authToken) => {
    try {
      // First try to get user data from localStorage
      const userData = localStorage.getItem("sycom_current_user");
      
      if (userData) {
        // Log success for debugging
        console.log("Found user data in localStorage");
        const parsedUser = JSON.parse(userData);
        setUser(parsedUser);
        setIsLoading(false);
        
        // Optionally validate the stored user data with a lightweight API call
        validateUserSession(authToken);
      } else {
        // No local data, fetch from server
        console.log("No user data in localStorage, fetching from server");
        await fetchUserProfile(authToken);
      }
    } catch (error) {
      console.error("Error loading user data:", error);
      setError("Failed to load your profile. Please try signing in again.");
      
      // Clear potentially corrupted data
      localStorage.removeItem("sycom_current_user");
      setIsLoading(false);
      
      // Don't auto-redirect on error, show the error message instead
      // This helps debug issues rather than creating redirect loops
    }
  };

  // Validate the user session is still valid on the server
  const validateUserSession = async (token) => {
    try {
      const response = await fetch('/api/auth/validate', {
        headers: {
          'Authorization': `Bearer ${token}`
        },
        cache: 'no-store'
      });
      
      if (!response.ok) {
        console.warn("Session validation failed, user may need to re-authenticate");
        // Don't immediately logout, just note the potential issue
        // This prevents aggressive session termination that might frustrate users
      }
    } catch (error) {
      console.warn("Session validation error:", error);
      // Again, don't immediately logout on network errors
    }
  };

  // Fetch user profile from the server
  const fetchUserProfile = async (token) => {
    try {
      console.log("Fetching user profile from API...");
      const response = await fetch('/api/user/profile', {
        headers: {
          'Authorization': `Bearer ${token}`
        },
        cache: 'no-store'
      });
      
      if (response.ok) {
        const userData = await response.json();
        console.log("User data fetched successfully:", userData);
        
        // Store minimal user data
        const userInfo = {
          name: userData.name || "User", // Provide fallbacks for missing data
          email: userData.email || "No email provided",
          id: userData.id || "unknown"
        };
        
        // Store in localStorage for future use
        localStorage.setItem("sycom_current_user", JSON.stringify(userInfo));
        setUser(userInfo);
      } else {
        console.error("API returned error status:", response.status);
        // Get more info about the error
        const errorData = await response.json().catch(() => ({}));
        console.error("Error details:", errorData);
        
        setError(`Failed to load profile: ${errorData.message || response.statusText || "Unknown error"}`);
        
        // Only redirect on authentication errors (401/403)
        if (response.status === 401 || response.status === 403) {
          handleLogout();
        }
      }
    } catch (error) {
      console.error("Failed to fetch user profile:", error);
      setError("Network error while fetching your profile. Please check your connection.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    // Clear all auth data
    localStorage.removeItem("auth_token");
    sessionStorage.removeItem("auth_token");
    localStorage.removeItem("sycom_current_user");
    
    // Use replace instead of push to prevent back navigation to dashboard after logout
    router.replace("/signin");
  };

  // Debug view to help diagnose the issue
  const handleDebugClick = () => {
    // Show localStorage contents in console for debugging
    console.log("Auth token:", localStorage.getItem('auth_token') || sessionStorage.getItem('auth_token'));
    console.log("User data in storage:", localStorage.getItem("sycom_current_user"));
    
    // Force refresh user data from server
    const token = localStorage.getItem('auth_token') || sessionStorage.getItem('auth_token');
    if (token) {
      fetchUserProfile(token);
    } else {
      setError("No authentication token found. Please sign in again.");
    }
  };

  // Show a minimal loading indicator
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin inline-block w-8 h-8 border-4 rounded-full border-gray-300 border-t-blue-500" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  // Show error message if there's an error
  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-white dark:bg-dark mx-auto max-w-[500px] rounded-lg px-8 py-10 shadow-lg text-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-red-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <h2 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-2">Authentication Problem</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">{error}</p>
          
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center">
            <button
              onClick={() => router.push("/signin")}
              className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-md transition-colors"
            >
              Sign In Again
            </button>
            
            <button
              onClick={handleDebugClick}
              className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white px-6 py-2 rounded-md transition-colors"
            >
              Debug Profile
            </button>
          </div>
        </div>
      </div>
    );
  }

  // If no user data, show a message with sign in link
  if (!user) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-white dark:bg-dark mx-auto max-w-[500px] rounded-lg px-8 py-10 shadow-lg text-center">
          <h2 className="text-2xl font-bold text-black dark:text-white mb-4">No User Data Found</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">We couldn't find your profile information. Please sign in again.</p>
          
          <Link href="/signin">
            <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-md transition-colors">
              Sign In
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="relative z-10 overflow-hidden pt-36 pb-16 md:pb-20 lg:pt-[180px] lg:pb-28">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="dark:bg-dark mx-auto max-w-[800px] rounded-lg bg-white px-8 py-10 shadow-lg sm:p-[60px]">
            <h1 className="mb-6 text-center text-3xl font-bold text-black dark:text-white">
              Welcome to Sycom AI Dashboard
            </h1>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">Your Profile</h2>
              <div className="space-y-3">
                <p><span className="font-medium">Name:</span> {user.name || "Not available"}</p>
                <p><span className="font-medium">Email:</span> {user.email || "Not available"}</p>
                <p><span className="font-medium">User ID:</span> {user.id || "Not available"}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">Quick Actions</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/projects/new" className="text-primary hover:underline">
                      Start new AI project
                    </Link>
                  </li>
                  <li>
                    <Link href="/assistant" className="text-primary hover:underline">
                      Access Sybot assistant
                    </Link>
                  </li>
                  <li>
                    <Link href="/analytics" className="text-primary hover:underline">
                      View analytics
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div className="bg-purple-50 dark:bg-purple-900/30 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">Recent Activity</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  No recent activity. Start using Sycom AI tools to see your activity here.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md transition-colors"
              >
                Logout
              </button>
              
              <button
                onClick={handleDebugClick}
                className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white px-6 py-2 rounded-md transition-colors"
              >
                Refresh Profile
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative SVG background - static, no performance impact */}
      <div className="absolute top-0 left-0 z-[-1]">
        <svg
          width="1440"
          height="969"
          viewBox="0 0 1440 969"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_95:1005"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="1440"
            height="969"
          >
            <rect width="1440" height="969" fill="#090E34" />
          </mask>
          <g mask="url(#mask0_95:1005)">
            <path
              opacity="0.1"
              d="M1086.96 297.978L632.959 554.978L935.625 535.926L1086.96 297.978Z"
              fill="url(#paint0_linear_95:1005)"
            />
            <path
              opacity="0.1"
              d="M1324.5 755.5L1450 687V886.5L1324.5 967.5L-10 288L1324.5 755.5Z"
              fill="url(#paint1_linear_95:1005)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_95:1005"
              x1="1178.4"
              y1="151.853"
              x2="780.959"
              y2="453.581"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_95:1005"
              x1="160.5"
              y1="220"
              x2="1099.45"
              y2="1192.04"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
}