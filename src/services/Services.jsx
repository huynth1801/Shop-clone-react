import { BsTruck } from "react-icons/bs";
import { BiRefresh } from "react-icons/bi";
import { MdPayment, MdCurrencyExchange } from "react-icons/md";
import "./services.css";

const serviceData = [
  {
    icon: <BsTruck />,
    title: "Free Shipping",
    subtitle: "Lorem ipsum dolor sit amet.",
    bg: "#fdefe6",
  },
  {
    icon: <BiRefresh />,
    title: "Easy Returns",
    subtitle: "Lorem ipsum dolor sit amet.",
    bg: "#ceebe9",
  },
  {
    icon: <MdPayment />,
    title: "Secure Payment",
    subtitle: "Lorem ipsum dolor sit amet.",
    bg: "#e2f2b2",
  },
  {
    icon: <MdCurrencyExchange />,
    title: " Back Guarantee",
    subtitle: "Lorem ipsum dolor sit amet.",
    bg: "#d6e5fb",
  },
];

const Services = () => {
  return (
    <section>
      <div>
        <div className="grid gap-4 md:grid-cols-4 p-8 items-center">
          {serviceData.map((item, index) => (
            <div className="m-4" key={index}>
              <div
                className="service__item p-[20px] rounded-xl flex items-center"
                style={{ background: `${item.bg}` }}
              >
                <span className="text-2xl rounded-full p-[10px] text-white">
                  {item.icon}
                </span>
                <div className="px-2">
                  <h3 className="text-[18px] font-semibold">{item.title}</h3>
                  <p>{item.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
