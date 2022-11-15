import { createContext, useReducer } from "react";
import React from "react";
import { newsReducer } from "../Reducers/newsReducer";
import { NewsStateType, NewsType } from "./constants";

const fakeData: NewsType[] = [
  {
    image:
      "https://khoinguonsangtao.vn/wp-content/uploads/2022/07/avatar-gau-cute.jpg",
    title: "Các bệnh hô hấp thường khi trời trở lạnh ",
    description: "Các bệnh hô hấp thường gặp khi trời trở lạnh ",
    author: { name: "Modern", Date: "11/15/2022", Phone: "09123123132" },
    status: true,
    content: `<article  class="article-item  type-text short" article-id="1375476" topic-id="3784,4230" serie-id="">
      <p class="article-thumbnail">
              <a href="/google-mo-dich-vu-wallet-tai-viet-nam-post1375476.html" >
                  
                  <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://znews-photo.zingcdn.me/Uploaded/zugttw/2022_11_15/visa_google_wallet.jpg" alt="Google mo dich vu Wallet tai Viet Nam hinh anh" />
              </a>
          </p>
          <header>
              <p class="article-title">
                  <a href="/google-mo-dich-vu-wallet-tai-viet-nam-post1375476.html" >Google mở dịch vụ Wallet tại Việt Nam</a>
              </p>
              <p class="article-meta">
                  <span class="article-publish">
                      <span class="friendly-time">5 giờ trước</span>
                      <span class="time">16:59</span>
                      <span class="date">15/11/2022</span>
                  </span>
      
                  
                  <a href="/cong-nghe.html" title="Công nghệ">
                      <span class="category-parent">Công nghệ</span>
                  </a>
                  
      
                  
                  <a href="/mobile.html" title="Mobile">
                      <span class="category">Mobile</span>
                  </a>
                  
      
                  
              </p>
              <p class="article-count">
                  <span class="like-count"></span>
                  <span class="dislike-count"></span>
                  <span class="rating-count">0</span>
                  <span class="viral-count hide"></span>
                  <span class="comment-count hide"></span>
              </p>
              <p class="article-summary">Ngoài các loại thẻ ngân hàng, Google Wallet trong tương lai còn có thể tích hợp vé điện tử, thẻ thành viên của các dịch vụ.</p>
              
          </header>
      </article>`,
    tag: ["ho hap", "dinh duong"],
    shortdescription: "none",
  },
  {
    image:
      "https://khoinguonsangtao.vn/wp-content/uploads/2022/07/avatar-gau-cute.jpg",
    title: "Các bệnh hô hấp thường khi trời trở lạnh ",
    description: "Các bệnh hô hấp thường gặp khi trời trở lạnh ",
    author: { name: "Modern", Date: "11/15/2022", Phone: "09123123132" },
    status: true,
    content: `<article  class="article-item  type-text short" article-id="1375476" topic-id="3784,4230" serie-id="">
      <p class="article-thumbnail">
              <a href="/google-mo-dich-vu-wallet-tai-viet-nam-post1375476.html" >
                  
                  <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://znews-photo.zingcdn.me/Uploaded/zugttw/2022_11_15/visa_google_wallet.jpg" alt="Google mo dich vu Wallet tai Viet Nam hinh anh" />
              </a>
          </p>
          <header>
              <p class="article-title">
                  <a href="/google-mo-dich-vu-wallet-tai-viet-nam-post1375476.html" >Google mở dịch vụ Wallet tại Việt Nam</a>
              </p>
              <p class="article-meta">
                  <span class="article-publish">
                      <span class="friendly-time">5 giờ trước</span>
                      <span class="time">16:59</span>
                      <span class="date">15/11/2022</span>
                  </span>
      
                  
                  <a href="/cong-nghe.html" title="Công nghệ">
                      <span class="category-parent">Công nghệ</span>
                  </a>
                  
      
                  
                  <a href="/mobile.html" title="Mobile">
                      <span class="category">Mobile</span>
                  </a>
                  
      
                  
              </p>
              <p class="article-count">
                  <span class="like-count"></span>
                  <span class="dislike-count"></span>
                  <span class="rating-count">0</span>
                  <span class="viral-count hide"></span>
                  <span class="comment-count hide"></span>
              </p>
              <p class="article-summary">Ngoài các loại thẻ ngân hàng, Google Wallet trong tương lai còn có thể tích hợp vé điện tử, thẻ thành viên của các dịch vụ.</p>
              
          </header>
      </article>`,
    tag: ["ho hap", "dinh duong"],
    shortdescription: "none",
  },
  {
    image:
      "https://khoinguonsangtao.vn/wp-content/uploads/2022/07/avatar-gau-cute.jpg",
    title: "Các bệnh hô hấp thường khi trời trở lạnh ",
    description: "Các bệnh hô hấp thường gặp khi trời trở lạnh ",
    author: { name: "Modern", Date: "11/15/2022", Phone: "09123123132" },
    status: true,
    content: `<article  class="article-item  type-text short" article-id="1375476" topic-id="3784,4230" serie-id="">
      <p class="article-thumbnail">
              <a href="/google-mo-dich-vu-wallet-tai-viet-nam-post1375476.html" >
                  
                  <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://znews-photo.zingcdn.me/Uploaded/zugttw/2022_11_15/visa_google_wallet.jpg" alt="Google mo dich vu Wallet tai Viet Nam hinh anh" />
              </a>
          </p>
          <header>
              <p class="article-title">
                  <a href="/google-mo-dich-vu-wallet-tai-viet-nam-post1375476.html" >Google mở dịch vụ Wallet tại Việt Nam</a>
              </p>
              <p class="article-meta">
                  <span class="article-publish">
                      <span class="friendly-time">5 giờ trước</span>
                      <span class="time">16:59</span>
                      <span class="date">15/11/2022</span>
                  </span>
      
                  
                  <a href="/cong-nghe.html" title="Công nghệ">
                      <span class="category-parent">Công nghệ</span>
                  </a>
                  
      
                  
                  <a href="/mobile.html" title="Mobile">
                      <span class="category">Mobile</span>
                  </a>
                  
      
                  
              </p>
              <p class="article-count">
                  <span class="like-count"></span>
                  <span class="dislike-count"></span>
                  <span class="rating-count">0</span>
                  <span class="viral-count hide"></span>
                  <span class="comment-count hide"></span>
              </p>
              <p class="article-summary">Ngoài các loại thẻ ngân hàng, Google Wallet trong tương lai còn có thể tích hợp vé điện tử, thẻ thành viên của các dịch vụ.</p>
              
          </header>
      </article>`,
    tag: ["ho hap", "dinh duong"],
    shortdescription: "none",
  },
  {
    image:
      "https://khoinguonsangtao.vn/wp-content/uploads/2022/07/avatar-gau-cute.jpg",
    title: "Các bệnh hô hấp thường khi trời trở lạnh ",
    description: "Các bệnh hô hấp thường gặp khi trời trở lạnh ",
    author: { name: "Modern", Date: "11/15/2022", Phone: "09123123132" },
    status: true,
    content: `<article  class="article-item  type-text short" article-id="1375476" topic-id="3784,4230" serie-id="">
      <p class="article-thumbnail">
              <a href="/google-mo-dich-vu-wallet-tai-viet-nam-post1375476.html" >
                  
                  <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://znews-photo.zingcdn.me/Uploaded/zugttw/2022_11_15/visa_google_wallet.jpg" alt="Google mo dich vu Wallet tai Viet Nam hinh anh" />
              </a>
          </p>
          <header>
              <p class="article-title">
                  <a href="/google-mo-dich-vu-wallet-tai-viet-nam-post1375476.html" >Google mở dịch vụ Wallet tại Việt Nam</a>
              </p>
              <p class="article-meta">
                  <span class="article-publish">
                      <span class="friendly-time">5 giờ trước</span>
                      <span class="time">16:59</span>
                      <span class="date">15/11/2022</span>
                  </span>
      
                  
                  <a href="/cong-nghe.html" title="Công nghệ">
                      <span class="category-parent">Công nghệ</span>
                  </a>
                  
      
                  
                  <a href="/mobile.html" title="Mobile">
                      <span class="category">Mobile</span>
                  </a>
                  
      
                  
              </p>
              <p class="article-count">
                  <span class="like-count"></span>
                  <span class="dislike-count"></span>
                  <span class="rating-count">0</span>
                  <span class="viral-count hide"></span>
                  <span class="comment-count hide"></span>
              </p>
              <p class="article-summary">Ngoài các loại thẻ ngân hàng, Google Wallet trong tương lai còn có thể tích hợp vé điện tử, thẻ thành viên của các dịch vụ.</p>
              
          </header>
      </article>`,
    tag: ["ho hap", "dinh duong"],
    shortdescription: "none",
  },
  {
    image:
      "https://khoinguonsangtao.vn/wp-content/uploads/2022/07/avatar-gau-cute.jpg",
    title: "Các bệnh hô hấp thường khi trời trở lạnh ",
    description: "Các bệnh hô hấp thường gặp khi trời trở lạnh ",
    author: { name: "Modern", Date: "11/15/2022", Phone: "09123123132" },
    status: true,
    content: `<article  class="article-item  type-text short" article-id="1375476" topic-id="3784,4230" serie-id="">
      <p class="article-thumbnail">
              <a href="/google-mo-dich-vu-wallet-tai-viet-nam-post1375476.html" >
                  
                  <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://znews-photo.zingcdn.me/Uploaded/zugttw/2022_11_15/visa_google_wallet.jpg" alt="Google mo dich vu Wallet tai Viet Nam hinh anh" />
              </a>
          </p>
          <header>
              <p class="article-title">
                  <a href="/google-mo-dich-vu-wallet-tai-viet-nam-post1375476.html" >Google mở dịch vụ Wallet tại Việt Nam</a>
              </p>
              <p class="article-meta">
                  <span class="article-publish">
                      <span class="friendly-time">5 giờ trước</span>
                      <span class="time">16:59</span>
                      <span class="date">15/11/2022</span>
                  </span>
      
                  
                  <a href="/cong-nghe.html" title="Công nghệ">
                      <span class="category-parent">Công nghệ</span>
                  </a>
                  
      
                  
                  <a href="/mobile.html" title="Mobile">
                      <span class="category">Mobile</span>
                  </a>
                  
      
                  
              </p>
              <p class="article-count">
                  <span class="like-count"></span>
                  <span class="dislike-count"></span>
                  <span class="rating-count">0</span>
                  <span class="viral-count hide"></span>
                  <span class="comment-count hide"></span>
              </p>
              <p class="article-summary">Ngoài các loại thẻ ngân hàng, Google Wallet trong tương lai còn có thể tích hợp vé điện tử, thẻ thành viên của các dịch vụ.</p>
              
          </header>
      </article>`,
    tag: ["ho hap", "dinh duong"],
    shortdescription: "none",
  },
  {
    image:
      "https://khoinguonsangtao.vn/wp-content/uploads/2022/07/avatar-gau-cute.jpg",
    title: "Các bệnh hô hấp thường khi trời trở lạnh ",
    description: "Các bệnh hô hấp thường gặp khi trời trở lạnh ",
    author: { name: "Modern", Date: "11/15/2022", Phone: "09123123132" },
    status: true,
    content: `<article  class="article-item  type-text short" article-id="1375476" topic-id="3784,4230" serie-id="">
      <p class="article-thumbnail">
              <a href="/google-mo-dich-vu-wallet-tai-viet-nam-post1375476.html" >
                  
                  <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://znews-photo.zingcdn.me/Uploaded/zugttw/2022_11_15/visa_google_wallet.jpg" alt="Google mo dich vu Wallet tai Viet Nam hinh anh" />
              </a>
          </p>
          <header>
              <p class="article-title">
                  <a href="/google-mo-dich-vu-wallet-tai-viet-nam-post1375476.html" >Google mở dịch vụ Wallet tại Việt Nam</a>
              </p>
              <p class="article-meta">
                  <span class="article-publish">
                      <span class="friendly-time">5 giờ trước</span>
                      <span class="time">16:59</span>
                      <span class="date">15/11/2022</span>
                  </span>
      
                  
                  <a href="/cong-nghe.html" title="Công nghệ">
                      <span class="category-parent">Công nghệ</span>
                  </a>
                  
      
                  
                  <a href="/mobile.html" title="Mobile">
                      <span class="category">Mobile</span>
                  </a>
                  
      
                  
              </p>
              <p class="article-count">
                  <span class="like-count"></span>
                  <span class="dislike-count"></span>
                  <span class="rating-count">0</span>
                  <span class="viral-count hide"></span>
                  <span class="comment-count hide"></span>
              </p>
              <p class="article-summary">Ngoài các loại thẻ ngân hàng, Google Wallet trong tương lai còn có thể tích hợp vé điện tử, thẻ thành viên của các dịch vụ.</p>
              
          </header>
      </article>`,
    tag: ["ho hap", "dinh duong"],
    shortdescription: "none",
  },
  {
    image:
      "https://khoinguonsangtao.vn/wp-content/uploads/2022/07/avatar-gau-cute.jpg",
    title: "Các bệnh hô hấp thường khi trời trở lạnh ",
    description: "Các bệnh hô hấp thường gặp khi trời trở lạnh ",
    author: { name: "Modern", Date: "11/15/2022", Phone: "09123123132" },
    status: true,
    content: `<article  class="article-item  type-text short" article-id="1375476" topic-id="3784,4230" serie-id="">
      <p class="article-thumbnail">
              <a href="/google-mo-dich-vu-wallet-tai-viet-nam-post1375476.html" >
                  
                  <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://znews-photo.zingcdn.me/Uploaded/zugttw/2022_11_15/visa_google_wallet.jpg" alt="Google mo dich vu Wallet tai Viet Nam hinh anh" />
              </a>
          </p>
          <header>
              <p class="article-title">
                  <a href="/google-mo-dich-vu-wallet-tai-viet-nam-post1375476.html" >Google mở dịch vụ Wallet tại Việt Nam</a>
              </p>
              <p class="article-meta">
                  <span class="article-publish">
                      <span class="friendly-time">5 giờ trước</span>
                      <span class="time">16:59</span>
                      <span class="date">15/11/2022</span>
                  </span>
      
                  
                  <a href="/cong-nghe.html" title="Công nghệ">
                      <span class="category-parent">Công nghệ</span>
                  </a>
                  
      
                  
                  <a href="/mobile.html" title="Mobile">
                      <span class="category">Mobile</span>
                  </a>
                  
      
                  
              </p>
              <p class="article-count">
                  <span class="like-count"></span>
                  <span class="dislike-count"></span>
                  <span class="rating-count">0</span>
                  <span class="viral-count hide"></span>
                  <span class="comment-count hide"></span>
              </p>
              <p class="article-summary">Ngoài các loại thẻ ngân hàng, Google Wallet trong tương lai còn có thể tích hợp vé điện tử, thẻ thành viên của các dịch vụ.</p>
              
          </header>
      </article>`,
    tag: ["ho hap", "dinh duong"],
    shortdescription: "none",
  },
  {
    image:
      "https://khoinguonsangtao.vn/wp-content/uploads/2022/07/avatar-gau-cute.jpg",
    title: "Các bệnh hô hấp thường khi trời trở lạnh ",
    description: "Các bệnh hô hấp thường gặp khi trời trở lạnh ",
    author: { name: "Modern", Date: "11/15/2022", Phone: "09123123132" },
    status: true,
    content: `<article  class="article-item  type-text short" article-id="1375476" topic-id="3784,4230" serie-id="">
      <p class="article-thumbnail">
              <a href="/google-mo-dich-vu-wallet-tai-viet-nam-post1375476.html" >
                  
                  <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://znews-photo.zingcdn.me/Uploaded/zugttw/2022_11_15/visa_google_wallet.jpg" alt="Google mo dich vu Wallet tai Viet Nam hinh anh" />
              </a>
          </p>
          <header>
              <p class="article-title">
                  <a href="/google-mo-dich-vu-wallet-tai-viet-nam-post1375476.html" >Google mở dịch vụ Wallet tại Việt Nam</a>
              </p>
              <p class="article-meta">
                  <span class="article-publish">
                      <span class="friendly-time">5 giờ trước</span>
                      <span class="time">16:59</span>
                      <span class="date">15/11/2022</span>
                  </span>
      
                  
                  <a href="/cong-nghe.html" title="Công nghệ">
                      <span class="category-parent">Công nghệ</span>
                  </a>
                  
      
                  
                  <a href="/mobile.html" title="Mobile">
                      <span class="category">Mobile</span>
                  </a>
                  
      
                  
              </p>
              <p class="article-count">
                  <span class="like-count"></span>
                  <span class="dislike-count"></span>
                  <span class="rating-count">0</span>
                  <span class="viral-count hide"></span>
                  <span class="comment-count hide"></span>
              </p>
              <p class="article-summary">Ngoài các loại thẻ ngân hàng, Google Wallet trong tương lai còn có thể tích hợp vé điện tử, thẻ thành viên của các dịch vụ.</p>
              
          </header>
      </article>`,
    tag: ["ho hap", "dinh duong"],
    shortdescription: "none",
  },
  {
    image:
      "https://khoinguonsangtao.vn/wp-content/uploads/2022/07/avatar-gau-cute.jpg",
    title: "Các bệnh hô hấp thường khi trời trở lạnh ",
    description: "Các bệnh hô hấp thường gặp khi trời trở lạnh ",
    author: { name: "Modern", Date: "11/15/2022", Phone: "09123123132" },
    status: true,
    content: `<article  class="article-item  type-text short" article-id="1375476" topic-id="3784,4230" serie-id="">
      <p class="article-thumbnail">
              <a href="/google-mo-dich-vu-wallet-tai-viet-nam-post1375476.html" >
                  
                  <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://znews-photo.zingcdn.me/Uploaded/zugttw/2022_11_15/visa_google_wallet.jpg" alt="Google mo dich vu Wallet tai Viet Nam hinh anh" />
              </a>
          </p>
          <header>
              <p class="article-title">
                  <a href="/google-mo-dich-vu-wallet-tai-viet-nam-post1375476.html" >Google mở dịch vụ Wallet tại Việt Nam</a>
              </p>
              <p class="article-meta">
                  <span class="article-publish">
                      <span class="friendly-time">5 giờ trước</span>
                      <span class="time">16:59</span>
                      <span class="date">15/11/2022</span>
                  </span>
      
                  
                  <a href="/cong-nghe.html" title="Công nghệ">
                      <span class="category-parent">Công nghệ</span>
                  </a>
                  
      
                  
                  <a href="/mobile.html" title="Mobile">
                      <span class="category">Mobile</span>
                  </a>
                  
      
                  
              </p>
              <p class="article-count">
                  <span class="like-count"></span>
                  <span class="dislike-count"></span>
                  <span class="rating-count">0</span>
                  <span class="viral-count hide"></span>
                  <span class="comment-count hide"></span>
              </p>
              <p class="article-summary">Ngoài các loại thẻ ngân hàng, Google Wallet trong tương lai còn có thể tích hợp vé điện tử, thẻ thành viên của các dịch vụ.</p>
              
          </header>
      </article>`,
    tag: ["ho hap", "dinh duong"],
    shortdescription: "none",
  },
  {
    image:
      "https://khoinguonsangtao.vn/wp-content/uploads/2022/07/avatar-gau-cute.jpg",
    title: "Các bệnh hô hấp thường khi trời trở lạnh ",
    description: "Các bệnh hô hấp thường gặp khi trời trở lạnh ",
    author: { name: "Modern", Date: "11/15/2022", Phone: "09123123132" },
    status: true,
    content: `<article  class="article-item  type-text short" article-id="1375476" topic-id="3784,4230" serie-id="">
      <p class="article-thumbnail">
              <a href="/google-mo-dich-vu-wallet-tai-viet-nam-post1375476.html" >
                  
                  <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://znews-photo.zingcdn.me/Uploaded/zugttw/2022_11_15/visa_google_wallet.jpg" alt="Google mo dich vu Wallet tai Viet Nam hinh anh" />
              </a>
          </p>
          <header>
              <p class="article-title">
                  <a href="/google-mo-dich-vu-wallet-tai-viet-nam-post1375476.html" >Google mở dịch vụ Wallet tại Việt Nam</a>
              </p>
              <p class="article-meta">
                  <span class="article-publish">
                      <span class="friendly-time">5 giờ trước</span>
                      <span class="time">16:59</span>
                      <span class="date">15/11/2022</span>
                  </span>
      
                  
                  <a href="/cong-nghe.html" title="Công nghệ">
                      <span class="category-parent">Công nghệ</span>
                  </a>
                  
      
                  
                  <a href="/mobile.html" title="Mobile">
                      <span class="category">Mobile</span>
                  </a>
                  
      
                  
              </p>
              <p class="article-count">
                  <span class="like-count"></span>
                  <span class="dislike-count"></span>
                  <span class="rating-count">0</span>
                  <span class="viral-count hide"></span>
                  <span class="comment-count hide"></span>
              </p>
              <p class="article-summary">Ngoài các loại thẻ ngân hàng, Google Wallet trong tương lai còn có thể tích hợp vé điện tử, thẻ thành viên của các dịch vụ.</p>
              
          </header>
      </article>`,
    tag: ["ho hap", "dinh duong"],
    shortdescription: "none",
  },
  {
    image:
      "https://khoinguonsangtao.vn/wp-content/uploads/2022/07/avatar-gau-cute.jpg",
    title: "Các bệnh hô hấp thường khi trời trở lạnh ",
    description: "Các bệnh hô hấp thường gặp khi trời trở lạnh ",
    author: { name: "Modern", Date: "11/15/2022", Phone: "09123123132" },
    status: true,
    content: `<article  class="article-item  type-text short" article-id="1375476" topic-id="3784,4230" serie-id="">
      <p class="article-thumbnail">
              <a href="/google-mo-dich-vu-wallet-tai-viet-nam-post1375476.html" >
                  
                  <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://znews-photo.zingcdn.me/Uploaded/zugttw/2022_11_15/visa_google_wallet.jpg" alt="Google mo dich vu Wallet tai Viet Nam hinh anh" />
              </a>
          </p>
          <header>
              <p class="article-title">
                  <a href="/google-mo-dich-vu-wallet-tai-viet-nam-post1375476.html" >Google mở dịch vụ Wallet tại Việt Nam</a>
              </p>
              <p class="article-meta">
                  <span class="article-publish">
                      <span class="friendly-time">5 giờ trước</span>
                      <span class="time">16:59</span>
                      <span class="date">15/11/2022</span>
                  </span>
      
                  
                  <a href="/cong-nghe.html" title="Công nghệ">
                      <span class="category-parent">Công nghệ</span>
                  </a>
                  
      
                  
                  <a href="/mobile.html" title="Mobile">
                      <span class="category">Mobile</span>
                  </a>
                  
      
                  
              </p>
              <p class="article-count">
                  <span class="like-count"></span>
                  <span class="dislike-count"></span>
                  <span class="rating-count">0</span>
                  <span class="viral-count hide"></span>
                  <span class="comment-count hide"></span>
              </p>
              <p class="article-summary">Ngoài các loại thẻ ngân hàng, Google Wallet trong tương lai còn có thể tích hợp vé điện tử, thẻ thành viên của các dịch vụ.</p>
              
          </header>
      </article>`,
    tag: ["ho hap", "dinh duong"],
    shortdescription: "none",
  },
];

type NewsContextType = {
  newsState: NewsStateType;
  getNews: () => void;
};

const initialNewsState: NewsStateType = {
  news: fakeData,
  isLoading: false,
};
const initialContextState = {
  newsState: initialNewsState,
  getNews: () => {},
};
export const NewsContext = createContext<NewsContextType>(initialContextState);

interface Props {
  children: React.ReactNode;
}
const NewsContextProvider: React.FC<Props> = ({ children }) => {
  const [newsState, dispatch] = useReducer(newsReducer, initialNewsState);

  const dataNewsContext = {
    newsState,
    getNews: () => {},
  };
  return (
    <NewsContext.Provider value={dataNewsContext}>
      {children}
    </NewsContext.Provider>
  );
};

export default NewsContextProvider;
