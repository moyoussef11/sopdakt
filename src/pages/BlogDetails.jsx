import MainSection from "../components/Tabs/MainSection";
import blogImg from "../assets/fashionTrends.png";
import userImg from "../assets/personblog.jpg";
import shareIcon from "../assets/shareBlog.png";
import faceIcon from "../assets/faceBlog.png";
import xIcon from "../assets/xBlog.png";
import linkedIcon from "../assets/linkedBlog.png";
import googleIcon from "../assets/googleBlog.png";
import { FaRegUser } from "react-icons/fa";
import CardBlog from "../components/cards/CardBlog";
import { useEffect } from "react";

const BlogDetails = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <>
      {" "}
      <MainSection breadcrumb={`BLOG > blog name`} title={"blog name"} />
      <section className="py-5 md:py-20 px-5 md:px-16 lg:px-32">
        <h4 className="text-[41px] text-center leading-[27px] md:tracking-[10px] uppercase font-medium">
          Fashion Trends
        </h4>
        <div className="my-8">
          <div
            style={{ backgroundImage: `url(${blogImg})` }}
            className="max-w-[1000px] h-[400px] md:h-[572px] mx-auto rounded-[11px] bg-no-repeat bg-cover"
          >
            {" "}
            {/* <img
              src={blogImg}
              className="rounded-[11px] w-full h-full"
              alt="blogImg"
            /> */}
          </div>
          <div className="info max-w-[1000px] flex text-center md:text-left flex-col gap-7 my-5 mx-auto text-[17px] leading-[24px] font-normal">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non
              placerat mi. Etiam non tellus sem. Aenean pretium convallis lorem,
              sitamet dapibus ante mollis a. Integer bibendum interdum sem, eget
              volutpat purus pulvinar in. Sed tristique augue vitae sagittis
              porta. Phasellus ullamcorper, dolor suscipit mattis viverra,
              sapien elit condimentum odio, ut imperdiet nisi risus sit amet
              ante. Sed sem lorem, laoreet et facilisis quis, tincidunt non
              lorem. Etiam tempus, dolor in sollicitudin faucibus, sem massa
              accumsan erat.
            </p>
            <p>
              “ Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model search for evolved over
              sometimes by accident, sometimes on purpose ”
            </p>
            <p className="text-[#777777]">
              Aenean lorem diam, venenatis nec venenatis id, adipiscing ac
              massa. Nam vel dui eget justo dictum pretium a rhoncus ipsum.
              Donec venenatis erat tincidunt nunc suscipit, sit amet bibendum
              lacus posuere. Sed scelerisque, dolor a pharetra sodales, mi augue
              consequat sapien, et interdum tellus leo et nunc. Nunc imperdiet
              eu libero ut imperdiet.
            </p>
          </div>
          <div className="max-w-[1000px] mx-auto text-[20px] leading-[25.6px] tracking-[-0.2px] uppercase font-medium">
            <p className="flex justify-center md:justify-start items-center gap-2">
              <img src={shareIcon} alt="shareIcon" /> Share this post
            </p>
            <div className="social flex items-center justify-center md:justify-start gap-3 my-5">
              <a href="#">
                <img
                  src={faceIcon}
                  className="h-7 w-7 object-cover"
                  alt="faceIcon"
                />
              </a>
              <a href="#">
                <img src={xIcon} className="h-7 w-7 object-cover" alt="xIcon" />
              </a>
              <a href="#">
                <img
                  src={linkedIcon}
                  className="h-7 w-7 object-cover"
                  alt="linkedIcon"
                />
              </a>
              <a href="#">
                <img
                  src={googleIcon}
                  className="h-7 w-7 object-cover"
                  alt="googleIcon"
                />
              </a>
            </div>
            <div className="Author text-center md:text-left">
              <p className="text-[20px] leading-[25.6px] uppercase tracking-[-0.2px] font-semibold flex items-center justify-center md:justify-start gap-2">
                <FaRegUser className="text-[#FF3200] text-[20px] font-bold" />{" "}
                Author
              </p>
              <div className="flex flex-col md:flex-row gap-5 my-5 items-center">
                <img
                  src={userImg}
                  alt="userImg"
                  className="h-16 w-16 rounded-full object-cover"
                />
                <div className="flex w-full items-center md:items-start flex-col gap-1">
                  <h4 className="leading-[25.6px] uppercase tracking-[-0.2px] font-semibold flex items-center gap-2">
                    mohamed
                  </h4>
                  <p className="text-[13px] leading-[22.1px] text-[#777777]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    viverra euismod odio, gravida pellentesque urna varius
                    vitae. Sed dui lorem, adipiscing in adipiscing et, interdum
                    nec metus. Mauris ultricies, justo eu convallis placerat,
                    felis enim ornare nisi, vitae mattis nulla ante id dui.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="RELATED BLOGS"
        className="px-5 overflow-hidden md:px-16 mx-auto lg:px-32 py-5 md:py-20"
      >
        <h4 className="font-bold uppercase text-[34.8px] leading-[24px] tracking-[3.36px] text-center">
          RELATED BLOGS
        </h4>
        <div className="cards my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          <CardBlog
            id={"1"}
            blogImg={blogImg}
            title={"Fashion Trends"}
            author="mohamed"
            blogPersonImg={userImg}
            desc=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  non placerat mi. Etiam non tellus sem. Aenean..."
            date="Jan 10, 2022"
            numRead="3"
          />
          <CardBlog
            id={"1"}
            blogImg={blogImg}
            title={"Fashion Trends"}
            author="mohamed"
            blogPersonImg={userImg}
            desc=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  non placerat mi. Etiam non tellus sem. Aenean..."
            date="Jan 10, 2022"
            numRead="3"
          />
          <CardBlog
            id={"1"}
            blogImg={blogImg}
            title={"Fashion Trends"}
            author="mohamed"
            blogPersonImg={userImg}
            desc=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  non placerat mi. Etiam non tellus sem. Aenean..."
            date="Jan 10, 2022"
            numRead="3"
          />
        </div>
      </section>
    </>
  );
};

export default BlogDetails;
