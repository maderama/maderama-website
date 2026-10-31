import { useEffect } from "react";
import { toast } from "sonner";
import IOSMessageToast from "./IOSMessage";
import SystemStyleToast from "./SystemMessage";

function Toasts() {
  useEffect(() => {
    toast.custom(() => (
      <IOSMessageToast
        sender="Mum"
        icon="💖"
        message="You made this?? You should tell that recruiter lady! 💼😘"
        avatarUrl="/images/mum.png"
        time="16m ago"
      />
    ), { duration: Infinity });

    toast.custom(() => (
      <SystemStyleToast
        title="Github"
        message="All green. We’re not sure how, but we’re not asking questions."
        iconUrl="/images/github_logo.png"
        time="4m ago"
      />
    ), { duration: Infinity });

    toast.custom(() => (
      <SystemStyleToast
        title="Boss"
        message="You're on fire today 🔥🔥 Thanks for pushing that out so fast!"
        iconUrl="/images/slack_icon.png"
        time="just now"
      />
    ), { duration: Infinity });

    // Clear these toasts when leaving the main page so they don't persist
    // across routes (they have duration: Infinity and the Toaster is global).
    return () => toast.dismiss();
  }, []);

  return null;
}

export default Toasts;
