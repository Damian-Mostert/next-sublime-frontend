import { Header } from "../../src/lib/navigation/header/header";
import { Nav } from "./components/nav";
import { Footer } from "../../src/lib/navigation/footer/footer";
export default function DashboardLayout({ children }) {
  return (
    <>
      <Header />
      <main className="flex flex-wrap">
        <div className="w-full p-4 flex flex-wrap page:flex-nowrap">{children}</div>
      </main>
      <Footer />
    </>
  );
}
