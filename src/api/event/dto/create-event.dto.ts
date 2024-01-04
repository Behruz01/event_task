import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateEventDto {
    @ApiProperty({
        example: '2023-12-12T19:43:03.449Z',
    })
    @IsString()
    @IsNotEmpty()
    start_date: string

    @ApiProperty({
        example: '2023-12-12T19:43:03.449Z',
    })
    @IsString()
    @IsNotEmpty()
    end_date: string

    @ApiProperty({
        example: 'The event ...',
    })
    @IsString()
    @IsNotEmpty()
    event_name: string

    @ApiProperty({
        example: 'Event description ...',
    })
    @IsString()
    @IsNotEmpty()
    event_desc: string
}
