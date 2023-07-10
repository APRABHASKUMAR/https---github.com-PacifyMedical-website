import React from "react";
import "./research.css";
import research_image from "../../assets/research-image.svg";
import cool_pic from "../../assets/cool-pic.svg";
import icon from "../../assets/Icon.svg";
const Research = () => {
  return (
    <div className="research">
      <h1 className="title-row">
        Recent
        <span className="stake"> Blogs</span>.
      </h1>
      <div className="blog-parent">
        <div className="blog-item">
          <img className="blog-image" alt="" src={research_image} />
          <div className="blog-title">Blog Title</div>
          <img className="cool-image" alt="" src={cool_pic} />
          <div className="blog-context">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </div>
        <div className="blog-item">
          <img className="blog-image" alt="" src={research_image} />
          <div className="blog-title">Blog Title</div>
          <img className="cool-image" alt="" src={cool_pic} />
          <div className="blog-context">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </div>
        <div className="blog-item">
          <img className="blog-image" alt="" src={research_image} />
          <div className="blog-title">Blog Title</div>
          <img className="cool-image" alt="" src={cool_pic} />
          <div className="blog-context">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </div>
      </div>

      <div className="view-all-parent">
        <div className="view-all">{`View all `}</div>
        <img className="icon" alt="" src={icon} />
      </div>
      <div className="title-row">Newsroom.</div>
      <div className="blog-parent">
        <div className="blog-item">
          <div className="blog-title">Blog Title</div>
          <div className="blog-context">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
          <div className="news-context">
          24 June 2022
          </div>
        </div>
        <div className="blog-item">
          <div className="blog-title">Blog Title</div>
          <div className="blog-context">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
          <div className="news-context">
          24 June 2022
          </div>
        </div>
        <div className="blog-item">
          <div className="blog-title">Blog Title</div>
          <div className="blog-context">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
          <div className="news-context" color="#FF9900">
          24 June 2022
          </div>
        </div>
      </div>
      <div className="title-row">Literature.</div>

      {/*   </div>
      <div className="group-div">
        <div className="group-child3" />
        <div className="news-title-long">News Title long</div>
        <div className="lorem-ipsum-dolor4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit.
        </div>
        <div className="june-2022">24 June 2022</div>
      </div>
      <div className="rectangle-parent1">
        <div className="group-child3" />
        <div className="news-title-long">News Title long</div>
        <div className="lorem-ipsum-dolor4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit.
        </div>
        <div className="june-2022">24 June 2022</div>
      </div>
      <div className="rectangle-parent2">
        <div className="group-child3" />
        <div className="news-title-long">News Title long</div>
        <div className="lorem-ipsum-dolor4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit.
        </div>
        <div className="june-2022">24 June 2022</div> */}
    </div>
  );
};

export default Research;
