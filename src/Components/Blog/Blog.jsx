import React, { useEffect } from "react";
import Navigation from "../Navigation/Navigation";
import BlogContent from "../Home/Blog/BlogContent/BlogContent";
import { Container, Row, Col } from "reactstrap";
import BlogData from "../../JSON/BlogComponent.json";
import BigContent from "./BigContent/BigContent";

function BlogComponent() {
  useEffect(() => {
    document.title = "Dental App | Blog";
  }, [])
  return (
    <div className="blog-component">
      <Navigation navHeading="Blog" navTitle="Our Blog" />
      <BigContent obj={BlogData[0]}/>
      <Container className="my-5">
        <Row>
          <Col md="12">
            <Row>
              {BlogData.map((blog) => (
                <BlogContent
                  key={blog.id}
                  src={blog.image}
                  author={blog.author}
                  date={blog.date}
                  comments={blog.comments}
                  likes={blog.likes}
                  blogTitle={blog.blogTitle}
                  blogContent={blog.blogContent}
                />
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BlogComponent;
