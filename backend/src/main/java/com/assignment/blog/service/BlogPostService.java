package com.assignment.blog.service;

import com.assignment.blog.entity.BlogPost;

import java.util.List;

public interface BlogPostService {
    BlogPost createBlogPost(BlogPost blogPost);
    BlogPost updateBlogPost(int id,BlogPost blogPost);
    void deleteBlogPost(int id);
    BlogPost getBlogPostBySlug(String slug);
    List<BlogPost> getAllBlogPost();
}
