package com.assignment.blog.mapper;

import com.assignment.blog.dto.BlogPostDto;
import com.assignment.blog.dto.UserDto;
import com.assignment.blog.entity.BlogPost;
import com.assignment.blog.entity.User;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;

public class BlogPostMapper {
    @Autowired
    private static ModelMapper modelMapper;

    static{
        modelMapper = new ModelMapper();
    }
    public static BlogPost convertToEntity(BlogPostDto blogPostDto){
        modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
        return modelMapper.map(blogPostDto, BlogPost.class);
    }
    //
    public static BlogPostDto convertToDto(BlogPost blogPost){
        modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
        return modelMapper.map(blogPost, BlogPostDto.class);

    }
}
