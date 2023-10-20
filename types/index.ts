export interface BackgroundProps {

    backgrounds: string[],
    interval: number

}

export interface PageHeaderProps {

    title: string
    subLine: string
    headerImg: string
    catchPhrase: string
    desc: string,

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

export interface FAQProps {

    question: string,
    answer: string,

}

export interface BlogContainerProps {

    blogImg: string,
    blogTitle: string, 
    author: string, 
    date: string, 
    desc?: string, 

}