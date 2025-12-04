import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";

const AuthSync = () => {
  const { user, isSignedIn } = useUser();

  useEffect(() => {
    const syncUser = async () => {
      if (isSignedIn && user) {
        try {
          const res = await fetch("/api/auth/sync", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              clerkId: user.id,
              name: user.fullName,
              email: user.primaryEmailAddress?.emailAddress,
            }),
          });

          if (!res.ok) {
            console.error("Failed to sync user");
          }
        } catch (error) {
          console.error("Error syncing user:", error);
        }
      }
    };

    syncUser();
  }, [isSignedIn, user]);

  return null;
};

export default AuthSync;
