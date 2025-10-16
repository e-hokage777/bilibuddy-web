// app/page.js
import { redirect } from "next/navigation";

export default function HomePage() {
  redirect("/home"); // Redirect to your desired home page
  return null; // Or render a loading state during redirect
}
