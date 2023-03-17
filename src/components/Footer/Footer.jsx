import "./footer.css";
import { GoLocation } from "react-icons/go";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="footer text-[13px]">
      <section
        className="pt-4 pb-2 grid grid-cols-2 gap-4 
                          ml-8 md:flex md:justify-between 
                          md:mx-8 cursor-pointer"
      >
        <div className="footer__col md:pl-8">
          <ul className="footer__list-menu">
            <li className="pb-2">Tích điểm Quà Tặng Vip</li>
            <li className="pb-2">Lịch sử mua hàng</li>
            <li className="pb-2">Tìm hiểu về mua trả góp</li>
            <li className="pb-2"> Chính sách bảo hành</li>
            <li className="pb-2">Xem thêm</li>
          </ul>
        </div>
        <div className="footer__col pr-2">
          <ul className="footer__list-menu">
            <li className="pb-2">Giới thiệu công ty</li>
            <li className="pb-2">Tuyển dụng</li>
            <li className="pb-2">Gửi góp ý, khiếu nại</li>
            <li className="pb-2">Tìm siêu thị</li>
          </ul>
        </div>
        <div className="footer__col pr-2">
          <ul className="footer__list-menu  ">
            <li className="pb-2">Tổng đài hỗ trợ (Miễn phí gọi)</li>
            <li className="pb-2">
              <span>Gọi mua: </span>
              <a href="tel:+1800.1000" className="text-blue-600 font-bolds">
                1800.1000
              </a>{" "}
              (7:30 - 22:00)
            </li>
            <li className="pb-2">
              <span>Kỹ thuật: </span>
              <a href="tel:+1800.1001" className="text-blue-600 font-bold">
                1800.1001
              </a>{" "}
              (7:30 - 22:00)
            </li>
            <li className="pb-2">
              <span>Khiếu nại: </span>
              <a href="tel:+1800.1002" className="text-blue-600 font-bold">
                1800.1002
              </a>{" "}
              (7:30 - 22:00)
            </li>
            <li className="pb-2 ">
              <span>Bảo hành: </span>
              <a href="tel:+1800.1003" className="text-blue-600 font-bold">
                1800.1003
              </a>{" "}
              (7:30 - 22:00)
            </li>
          </ul>
        </div>
        <div className="footer__col md:py-0">
          <ul className="footer__list-menu">
            <li className="flex flex-row items-center ">
              <span className="px-2">
                <GoLocation className="text-xl " />
              </span>
              <a href="#">123 Lý Thường Kiệt, P.12, Q.10, TP.Hồ Chí Minh</a>
            </li>
            <li className="flex flex-row items-center py-4">
              <span className="px-2">
                <HiOutlineMail className="text-xl" />
              </span>
              <a href="mailto:helendo@gmail.com">
                Gửi email đóng góp cho chúng tôi
              </a>
            </li>
          </ul>
        </div>
      </section>
      <div className="copyright py-4">
        <section>
          <p className="text-center">© 2023. Công ty cổ phần Helendo.</p>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
