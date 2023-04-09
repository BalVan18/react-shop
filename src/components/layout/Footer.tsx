import React from 'react'
import logo from "../../img/logo.svg";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__container">
          <div className="footer__aside">
            <Link to="/" className="footer__logo"><img className="logo" src={logo} alt="Logo" /></Link>
            <p className="footer__descr">Takeaway & Delivery template for small - medium businesses.</p>
          </div>
          <div className="footer-nav">
            <ul className="footer-nav__list">
              <li className="footer-nav__item">
                <Link to="/home" className="nav-link">Home</Link>
              </li>
              <li className="footer-nav__item">
                <Link to="/menu" className="nav-link">Menu</Link>
              </li>
              <li className="footer-nav__item">
                <Link to="/faq" className="nav-link">FAQ</Link>
              </li>
              <li className="footer-nav__item">
                <Link to="/contacts" className="nav-link">Contact</Link>
              </li>
              <li className="footer-nav__item">
                <a href="https://github.com/Edik1999/react-shop" target="_blank" rel="noreferrer" className="nav-link">Changelog</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__link">
          <p className="link__text">Built by: <a href="https://github.com/Edik1999" target='_blank' rel="noreferrer"><span className="link__dev text-color">Edik1999</span></a> and <a href="https://github.com/BalVan18" target="_blank" rel="noreferrer"><span className="link__dev text-color">BalVan18</span></a></p>
          <ul className="link__list">
            <li className="link-instagram">
              <a className='link__item' href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className="ico__path" d="M0.5 20C0.5 9.23045 9.23045 0.5 20 0.5C30.7696 0.5 39.5 9.23045 39.5 20C39.5 30.7696 30.7696 39.5 20 39.5C9.23045 39.5 0.5 30.7696 0.5 20Z" stroke="#7E828F" strokeOpacity="0.3" />
                  <g opacity="0.5">
                    <path className="ico__g" opacity="0.5" d="M22.9895 20.0002C22.992 19.6064 22.9157 19.2161 22.7651 18.8523C22.6144 18.4884 22.3924 18.1584 22.1122 17.8818C21.8367 17.6035 21.5086 17.3828 21.1469 17.2327C20.7853 17.0826 20.3974 17.006 20.0058 17.0074C19.6124 17.0043 19.2223 17.08 18.8586 17.23C18.4948 17.3799 18.1648 17.6012 17.8878 17.8807C17.6084 18.1577 17.3872 18.4879 17.2372 18.8517C17.0873 19.2155 17.0116 19.6057 17.0148 19.9992C17.01 20.3921 17.0837 20.7819 17.2317 21.1459C17.3796 21.5099 17.5988 21.8406 17.8763 22.1187C18.1545 22.3982 18.486 22.619 18.851 22.7681C19.2161 22.9172 19.6073 22.9915 20.0016 22.9867C20.3931 22.9883 20.7809 22.9119 21.1426 22.7619C21.5042 22.612 21.8324 22.3915 22.108 22.1134C22.3882 21.8368 22.6102 21.5068 22.7608 21.143C22.9115 20.7791 22.9878 20.3888 22.9853 19.995L22.9895 20.0002ZM24.6156 20.0002C24.6129 21.2252 24.1256 22.3992 23.2601 23.2659C22.3947 24.1289 21.2236 24.615 20.0016 24.6185C18.7769 24.6158 17.6031 24.1284 16.7367 23.2627C15.8712 22.3961 15.3839 21.222 15.3813 19.9971C15.3839 18.7721 15.8712 17.5981 16.7367 16.7314C17.603 15.8654 18.7768 15.3776 20.0016 15.3746C21.2262 15.3773 22.4 15.8647 23.2665 16.7304C24.1308 17.5975 24.6169 18.7715 24.6188 19.996L24.6156 20.0002ZM25.8794 15.2019C25.8767 15.4877 25.7635 15.7614 25.5635 15.9656C25.4635 16.0653 25.3442 16.1434 25.2128 16.1952C25.0815 16.2471 24.941 16.2714 24.7999 16.2669C24.6588 16.2714 24.5183 16.2471 24.387 16.1952C24.2556 16.1434 24.1363 16.0653 24.0363 15.9656C23.9367 15.8656 23.8585 15.7462 23.8067 15.6149C23.7549 15.4835 23.7306 15.343 23.7351 15.2019C23.7306 15.0607 23.7549 14.9202 23.8067 14.7888C23.8585 14.6575 23.9367 14.5381 24.0363 14.4381C24.1363 14.3384 24.2556 14.2603 24.387 14.2085C24.5183 14.1566 24.6588 14.1323 24.7999 14.1368C24.941 14.1323 25.0815 14.1566 25.2128 14.2085C25.3442 14.2603 25.4635 14.3384 25.5635 14.4381C25.7632 14.642 25.8765 14.9153 25.8794 15.2008V15.2019ZM20.0016 12.6294C19.2791 12.616 18.379 12.616 17.3012 12.6294C16.4213 12.6137 15.5443 12.7356 14.702 12.9907C14.5096 13.0669 14.3248 13.161 14.1501 13.272C13.9756 13.3848 13.8139 13.5162 13.6677 13.6638C13.5201 13.81 13.3887 13.9718 13.2759 14.1463C13.165 14.321 13.0709 14.5059 12.9947 14.6983C12.7397 15.5408 12.6178 16.418 12.6335 17.2982C12.6181 18.3762 12.6103 19.2769 12.6103 20.0002C12.6103 20.7236 12.617 21.6239 12.6303 22.7012C12.6153 23.5826 12.7383 24.4609 12.9947 25.3043C13.0709 25.4967 13.165 25.6815 13.2759 25.8563C13.3887 26.0308 13.5201 26.1925 13.6677 26.3387C13.8139 26.4864 13.9756 26.6178 14.1501 26.7306C14.3248 26.8416 14.5095 26.9357 14.702 27.0119C15.5443 27.267 16.4213 27.3889 17.3012 27.3732C18.3783 27.3866 19.2784 27.3932 20.0016 27.3932C20.7248 27.3932 21.6249 27.3866 22.702 27.3732C23.5819 27.3889 24.4589 27.267 25.3012 27.0119C25.4936 26.9357 25.6784 26.8416 25.8531 26.7306C26.0276 26.6178 26.1893 26.4864 26.3354 26.3387C26.4831 26.1925 26.6144 26.0308 26.7272 25.8563C26.8381 25.6815 26.9323 25.4967 27.0084 25.3043C27.2635 24.4618 27.3854 23.5846 27.3697 22.7044C27.383 21.6271 27.3897 20.7268 27.3897 20.0034C27.3897 19.28 27.3827 18.3783 27.3686 17.2982C27.3843 16.418 27.2624 15.5408 27.0074 14.6983C26.9312 14.5059 26.8371 14.321 26.7262 14.1463C26.6134 13.9718 26.482 13.81 26.3344 13.6638C26.1882 13.5162 26.0265 13.3848 25.852 13.272C25.6774 13.161 25.4926 13.0669 25.3002 12.9907C24.4578 12.7356 23.5809 12.6137 22.7009 12.6294C21.6217 12.616 20.722 12.616 20.0016 12.6294ZM28.9958 20.0034C29.0091 21.2352 28.9891 22.4733 28.9358 23.7178C28.9149 24.4078 28.7932 25.091 28.5745 25.7457C28.3447 26.3977 27.9669 26.9876 27.4708 27.4691C26.9879 27.9647 26.3967 28.3415 25.7436 28.5699C25.089 28.7887 24.406 28.9104 23.7162 28.9312C22.4685 28.9881 21.2303 29.0081 20.0016 28.9913C18.7701 29.0081 17.5319 28.9895 16.287 28.9355C15.597 28.9133 14.9139 28.7901 14.2596 28.5699C13.6055 28.3423 13.0131 27.9658 12.5292 27.4701C12.0326 26.9875 11.6547 26.3961 11.4255 25.7425C11.2068 25.0878 11.0851 24.4046 11.0643 23.7146C11.0102 22.4716 10.9902 21.2335 11.0042 20.0002C10.9909 18.7684 11.0109 17.5303 11.0643 16.2858C11.0851 15.5959 11.2068 14.9127 11.4255 14.258C11.6547 13.6044 12.0326 13.013 12.5292 12.5303C13.0115 12.0337 13.6024 11.6558 14.2554 11.4264C14.91 11.2076 15.593 11.0859 16.2828 11.065C17.5277 11.0117 18.7655 10.9916 19.9963 11.005C21.2278 10.9916 22.4657 11.0117 23.7099 11.065C24.3997 11.0859 25.0827 11.2076 25.7372 11.4264C26.389 11.6559 26.9788 12.0335 27.4603 12.5293C27.9568 13.0117 28.3346 13.6027 28.564 14.2559C28.7827 14.9106 28.9044 15.5938 28.9252 16.2837C28.98 17.5317 29.0007 18.7702 28.9874 19.9992L28.9958 20.0034Z" fill="#0C2050" />
                  </g>
                </svg>
              </a>
            </li>
            <li className="link-twitter">
              <a className='link__item' href="https://twitter.com/" target="_blank" rel="noreferrer">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className="ico__path" d="M0.5 20C0.5 9.23045 9.23045 0.5 20 0.5C30.7696 0.5 39.5 9.23045 39.5 20C39.5 30.7696 30.7696 39.5 20 39.5C9.23045 39.5 0.5 30.7696 0.5 20Z" stroke="#7E828F" strokeOpacity="0.3" />
                  <g opacity="0.5">
                    <path className="ico__g" opacity="0.5" d="M28.9999 13.7824C28.3247 14.085 27.6103 14.2854 26.8789 14.3775C27.2598 14.1406 27.5969 13.8367 27.8749 13.4797C28.1557 13.1195 28.3701 12.7098 28.5075 12.2707C27.7806 12.7156 26.9836 13.0268 26.1523 13.1902C25.814 12.8189 25.4063 12.5213 24.9534 12.3152C24.4831 12.1017 23.9737 11.994 23.4595 11.9992C22.9745 11.9976 22.494 12.0948 22.0458 12.2852C21.5977 12.4755 21.1908 12.7551 20.8488 13.1079C20.5049 13.4588 20.2323 13.8762 20.0468 14.3359C19.8612 14.7956 19.7665 15.2885 19.768 15.7861C19.7685 16.0772 19.7994 16.3674 19.8602 16.6517C18.3711 16.5714 16.9153 16.1687 15.5887 15.4701C14.3012 14.7886 13.1655 13.8406 12.2532 12.686C11.9347 13.2703 11.7654 13.9276 11.7607 14.597C11.7529 15.2296 11.9034 15.8537 12.1979 16.4095C12.4854 16.9511 12.8968 17.4131 13.3967 17.7557C12.8089 17.7383 12.2339 17.576 11.7202 17.2827V17.3186C11.7227 18.1994 12.0217 19.0523 12.5667 19.7329C13.1068 20.4035 13.856 20.8623 14.6877 21.0317C14.3691 21.1296 14.0383 21.1796 13.7056 21.1803C13.4751 21.1808 13.2452 21.1567 13.0195 21.1084C13.2488 21.8538 13.7004 22.5067 14.3106 22.9749C14.9338 23.4526 15.6861 23.7204 16.4639 23.7411C15.8235 24.2484 15.1072 24.6459 14.3428 24.918C13.5485 25.2033 12.7139 25.3525 11.8723 25.3598C11.5804 25.3592 11.2888 25.3409 10.999 25.3049C11.8251 25.8487 12.7217 26.2706 13.6623 26.5584C14.6348 26.8555 15.6446 27.0043 16.6594 27.0002C20.0702 26.8683 22.672 25.6991 24.4647 23.4923C26.1867 21.4776 27.1471 18.896 27.1713 16.2165C27.1713 16.0601 27.1654 15.8977 27.1537 15.7293C27.8734 15.1959 28.4975 14.5385 28.9981 13.7862L28.9999 13.7824Z" fill="#0C2050" />
                  </g>
                </svg>
              </a>
            </li>
            <li className="link-youtube">
              <a className='link__item' href="https://www.youtube.com/" target="_blank" rel="noreferrer">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className="ico__path" d="M0.5 20C0.5 9.23045 9.23045 0.5 20 0.5C30.7696 0.5 39.5 9.23045 39.5 20C39.5 30.7696 30.7696 39.5 20 39.5C9.23045 39.5 0.5 30.7696 0.5 20Z" stroke="#7E828F" strokeOpacity="0.3" />
                  <g opacity="0.5">
                    <path className="ico__g" opacity="0.5" d="M28.6135 15.0482C28.8005 15.9597 28.9092 16.8862 28.9383 17.8171C28.9794 18.8479 29 19.4114 29 19.5076C29 19.6039 28.9794 20.1671 28.9383 21.1973C28.9093 22.1285 28.8005 23.0553 28.6135 23.9671C28.5016 24.3562 28.3002 24.7121 28.0263 25.0048C27.7507 25.299 27.3998 25.5076 27.0139 25.6067C25.6823 25.8251 24.336 25.9364 22.9874 25.9397C21.2044 25.9819 20.2074 26.0029 19.9963 26.0029C19.7853 26.0029 18.7882 25.9819 17.0052 25.9397C15.6566 25.9364 14.3104 25.8251 12.9787 25.6067C12.5928 25.5076 12.2419 25.299 11.9664 25.0048C11.6954 24.7112 11.4969 24.3554 11.3875 23.9671C11.1998 23.0557 11.0905 22.1292 11.0607 21.1982C11.0202 20.1674 11 19.6039 11 19.5076C11 19.4114 11.0206 18.8479 11.0617 17.8171C11.0911 16.8861 11.2001 15.9596 11.3875 15.0482C11.4966 14.6579 11.6983 14.3014 11.9746 14.0105C12.2524 13.721 12.6027 13.5157 12.987 13.4171C14.3172 13.1847 15.6641 13.0673 17.0135 13.0661C18.7965 13.024 19.7935 13.0029 20.0046 13.0029C20.2157 13.0029 21.2127 13.024 22.9957 13.0661C24.3451 13.0673 25.692 13.1847 27.0222 13.4171C27.4065 13.5157 27.7568 13.721 28.0346 14.0105C28.3099 14.3017 28.5107 14.6582 28.619 15.0482H28.6135ZM18.1575 22.2407L22.8613 19.5048L18.1575 16.7567V22.2407Z" fill="#0C2050" />
                  </g>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer