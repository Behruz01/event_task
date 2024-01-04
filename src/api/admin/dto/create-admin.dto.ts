import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateAdminDto {
    @ApiProperty({
        example: 'John Doe',
    })
    @IsString()
    @IsNotEmpty()
    full_name: string;

    @ApiProperty({
        example: 'johndoe@gmail.com',
    })
    @IsString()
    @IsNotEmpty()
    email: string;

    @ApiProperty({
        example: 'password',
    })
    @IsString()
    @IsNotEmpty()
    password: string;
}
