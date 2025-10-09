import { redirect } from "next/navigation";

export default function HomeRedirect() {
  // Server-side redirect to the root route
  redirect("/");
}
