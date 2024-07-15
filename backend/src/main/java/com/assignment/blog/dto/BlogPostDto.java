package com.assignment.blog.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class BlogPostDto {
    private int id;
    private String title;
    private String description;
    private String category;
    private String status ;
    private String slug;
}
