package com.assignment.blog.mapper;

import com.assignment.blog.dto.UserDto;
import com.assignment.blog.entity.User;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;

public class UserMapper {
    @Autowired
    private static ModelMapper modelMapper;

    static{
        modelMapper = new ModelMapper();
    }

    public static User convertToEntity(UserDto userDto){
        modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
        return modelMapper.map(userDto, User.class);
    }
//
    public static UserDto convertToDto(User user){
        modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
        return modelMapper.map(user, UserDto.class);
    }

}
