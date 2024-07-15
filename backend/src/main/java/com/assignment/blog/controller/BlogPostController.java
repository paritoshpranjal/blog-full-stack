package com.assignment.blog.controller;

import com.assignment.blog.entity.BlogPost;
import com.assignment.blog.service.BlogPostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/blog")
@CrossOrigin(origins = {"*"}, methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE, RequestMethod.PUT, RequestMethod.PATCH}, allowedHeaders = "*", exposedHeaders = "Access-Control-Allow-Origin")
public class BlogPostController {

    @Autowired
    private BlogPostService blogPostService;

    @PostMapping
    public BlogPost createBlogPost(@RequestBody BlogPost blogPost){
        return blogPostService.createBlogPost(blogPost);
    }

    @GetMapping
    public List<BlogPost> getAllBlogPost(){
        return blogPostService.getAllBlogPost();
    }

    @DeleteMapping("/{id}")
    public void deleteBlogPost(@PathVariable int id){
        blogPostService.deleteBlogPost(id);
    }

    @GetMapping("/{slug}")
    public BlogPost getBlogBySlug(@PathVariable String slug){
        return blogPostService.getBlogPostBySlug(slug);
    }

    @PutMapping("/{id}")
    public BlogPost updateBlogPost(@PathVariable int id,@RequestBody BlogPost blogPost){
        return blogPostService.updateBlogPost(id,blogPost);
    }

}
