import React from "react";
import { Container, Row, Col } from "reactstrap";
import BlogContent from "./BlogContent/BlogContent";
import BlogData from "../../../JSON/BlogData.json";
import "./Blog.scss";

function Blog() {
  return (
    <div className="blog">
      <Container>
        <Row>
          <Col md="12">
            <h3>Our Blog</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio
              in et, lectus sit lorem id integer.
            </p>
          </Col>
          <Col md="12">
            <Row>
              {BlogData.map(blog => (
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

export default Blog;