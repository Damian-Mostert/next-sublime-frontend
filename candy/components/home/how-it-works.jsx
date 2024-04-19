import { Layout } from "@vendor/components";

export default function howItWorks({}) {
  return (
    <div className="w-full bg-quaternary">
      <Layout>
        <div className="w-full text-center text-white text-3xl font-thick">
          How it works
        </div>
        <div className="w-full flex flex-wrap justify-center page:justify-between">
          <div className="flex justify-center flex-wrap w-[200px]">
            <div className="p-24 bg-white rounded-full m-16" />
            <div className="w-full">
              <div className="w-full font-thick text-center text-white text-2xl">
                1. Hello world
              </div>
              <div className="w-full font-thin text-center text-white text-sm">
                Hello world, djcndjncdcdmsc, sd,fw,dfmfks vme cmdkcm ,dl, ld
                w,dlfdfldlfdf ldsmflkm
              </div>
            </div>
          </div>
          <div className="flex justify-center flex-wrap w-[200px]">
            <div className="p-24 bg-white rounded-full m-16" />
            <div className="w-full">
              <div className="w-full font-thick text-center text-white text-2xl">
                2. Hello world
              </div>
              <div className="w-full font-thin text-center text-white text-sm">
                Hello world, djcndjncdcdmsc, sd,fw,dfmfks vme cmdkcm ,dl, ld
                w,dlfdfldlfdf ldsmflkm
              </div>
            </div>
          </div>
          <div className="flex justify-center flex-wrap w-[200px]">
            <div className="p-24 bg-white rounded-full m-16" />
            <div className="w-full">
              <div className="w-full font-thick text-center text-white text-2xl">
                3. Hello world
              </div>
              <div className="w-full font-thin text-center text-white text-sm">
                Hello world, djcndjncdcdmsc, sd,fw,dfmfks vme cmdkcm ,dl, ld
                w,dlfdfldlfdf ldsmflkm
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

howItWorks.configuration = {
  title:"How it works"
}