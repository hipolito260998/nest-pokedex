import { IsNumber, IsOptional, IsPositive, Min } from "class-validator";


export class paginationDto {
    
    @IsOptional()
    @IsPositive()
    @IsNumber()
    @Min(1)
    offset?:number

    @IsOptional()
    @IsPositive()
    @IsNumber()
    limit?:number


}