import { Nav } from "./components/nav";

export default function DASHBOARD() {
  return (
    <>
      <div>
        <Nav />
      </div>
      <div className="flex h-screen w-full">
        <div className="m-auto">Please select a title</div>
      </div>
    </>
  );
}
