import Button from "../ui/Button";
import "./Discount.css";
const DiscountRight = () => {
  return (
    <div className=" discount_right  h-[564.75px] grid grid-cols-2  items-center pl-[100px]">
      <div className=" text-white ">
        <h1 className="text-[53px] font-bold">10% Discount</h1>
        <p className=" text-[13px] leading-[19px] my-[21px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <Button className={"bg-white text-black"}>BUY NOW</Button>
      </div>

      <div></div>
    </div>
  );
};

export default DiscountRight;
