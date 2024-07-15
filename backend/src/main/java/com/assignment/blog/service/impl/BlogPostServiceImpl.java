package com.assignment.blog.service.impl;

import com.assignment.blog.entity.BlogPost;
import com.assignment.blog.repository.BlogPostRepository;
import com.assignment.blog.service.BlogPostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BlogPostServiceImpl implements BlogPostService {
    @Autowired
    private BlogPostRepository blogPostRepository;

    @Override
    public BlogPost createBlogPost(BlogPost blogPost) {
        blogPost.setSlug(generateSlug(blogPost.getTitle(),blogPost.getCategory()));
        return blogPostRepository.save(blogPost);
    }

    @Override
    public BlogPost updateBlogPost(int id, BlogPost blogPost) {
        Optional<BlogPost> existingBlogPost = blogPostRepository.findById(id);
        if(existingBlogPost.isPresent()){
            BlogPost updatePost = existingBlogPost.get();
            updatePost.setTitle(blogPost.getTitle());
            updatePost.setDescription(blogPost.getDescription());
            updatePost.setCategory(blogPost.getCategory());
            updatePost.setStatus(blogPost.getStatus());
            return blogPostRepository.save(updatePost);
        }
        return null;
    }

    @Override
    public void deleteBlogPost(int id) {
        blogPostRepository.deleteById(id);
    }

    @Override
    public BlogPost getBlogPostBySlug(String slug) {
        return blogPostRepository.findBySlug(slug).orElse(null);
    }

    @Override
    public List<BlogPost> getAllBlogPost() {
        return blogPostRepository.findAll();
    }

    private String generateSlug(String title, String category){
        return title.toLowerCase().replaceAll("[^a-z0-9]","-") + "-" + category.toLowerCase();
    }
}
