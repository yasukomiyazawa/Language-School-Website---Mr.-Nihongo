export interface BackgroundProps {

    backgrounds: string[],
    interval: number

}

export interface PageHeaderProps {

    title: string

}

export interface CoursesCardProps {

    courseImg: string,
    courseTitle: string,
    price: string,

}

export interface CourseInfoProps {

    instructorImg?: string,
    name?: string,
    courseTitle: string,
    coursePic: string,
    courseOverview: string,
    price:string

}