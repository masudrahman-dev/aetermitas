import Button from "../ui/Button";
import "./Discount.css";
const DiscountRight = () => {
  return (
    <div className=" discount_right  h-[564.75px] grid grid-cols-2  items-center pl-[100px]">
      <div className=" text-white ">
        <h1 className="text-[53px] font-bold">10% <span className="text-[35px]">Discount</span> </h1>
        <p className=" text-[13px] leading-[19px] my-[21px] text-[#FFFFFFBA]">
          Lorem Ipsum is simply dummy text of the printing and <br /> 
          typesetting
          industry. Lorem Ipsum has been the <br />
           industrys standard dummy text ever
          since the 1500s, <br />
           when an unknown printer took a galley <br /> of type and 
          scrambled it to make a type specimen book.
        </p>
        <Button className={"bg-white text-black"}>BUY NOW</Button>
      </div>

      <div></div>
    </div>
  );
};

export default DiscountRight;
