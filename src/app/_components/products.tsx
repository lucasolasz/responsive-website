import Card from "./Card";

export default function Products() {
  return (
    <div className="w-full py-[10rem] bg-white px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <Card
          src={"/assets/singleuser.png"}
          type="Single User"
          price="$149"
          extraClassName={"my-4"}
        >
          <p className="py-2 border-b border-gray-400 mx-8 mt-8">
            500 GB Storage
          </p>
          <p className="py-2 border-b border-gray-400 mx-8">1 User Allowed</p>
          <p className="py-2 border-b border-gray-400 mx-8">Send up to 2 GB</p>
        </Card>
        <Card
          src={"/assets/partnership.png"}
          type="Partnership"
          price="$199"
          extraClassName={"md:my-0 my-8 bg-gray-100"}
        >
          <p className="py-2 border-b border-gray-400 mx-8 mt-8">1TB Storage</p>
          <p className="py-2 border-b border-gray-400 mx-8">3 User Allowed</p>
          <p className="py-2 border-b border-gray-400 mx-8">Send up to 10 GB</p>
        </Card>
        <Card
          src={"/assets/groupaccount.png"}
          type="Grop Account"
          price="$149"
          extraClassName={"my-4"}
        >
          <p className="py-2 border-b border-gray-400 mx-8 mt-8">
            5TB GB Storage
          </p>
          <p className="py-2 border-b border-gray-400 mx-8">10 User Allowed</p>
          <p className="py-2 border-b border-gray-400 mx-8">Send up to 20 GB</p>
        </Card>
      </div>
    </div>
  );
}
