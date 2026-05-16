import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import linkedin from './linkedin_logo.png';
import nexjs_icon from './nexjs_icon.png';
import html5 from './html-5.png';
import about_image from './about_image.png';

export const assets = {
    about_image,
    html5,
    nexjs_icon,
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    linkedin
};

export const workData = [
    {
        title: 'MechSEO - Mechanical Engineering Services',
        description: '"High-performance SEO platform with automated quoting system."',
        tags: ['Next.js', 'Tailwind CSS', 'Node.js', 'TypeScript'],
        bgImage: '/work-1.png',
        slug: 'mech-seo',
        details: {
            overview: {
                summary: "Hệ thống quản lý dịch vụ cơ khí tối ưu SEO, tích hợp báo giá tự động giúp doanh nghiệp tiếp cận khách hàng hiệu quả.",
                role: "Fullstack Developer (Cá nhân) - Chịu trách nhiệm từ thiết kế Database đến triển khai module SEO tự động.",
                techStack: ["Next.js", "Prisma", "PostgreSQL", "Cloudflare"]
            },
            challenges: [
                {
                    issue: "Tối ưu hóa SEO cho hàng trăm trang sản phẩm cơ khí mà không làm chậm tốc độ tải trang.",
                    solution: "Sử dụng Server-side Rendering (SSR) kết hợp với Dynamic Metadata API của Next.js."
                }
            ],
            architecture: {
                description: "Kiến trúc Monolith với Next.js App Router, sử dụng Prisma ORM để quản lý Database PostgreSQL chặt chẽ.",
                databaseSchema: null // Thêm link ảnh sơ đồ database vào đây
            },
            features: [
                "Hệ thống quản trị nội dung (CMS) chuẩn SEO.",
                "Tự động tạo file báo giá PDF chuyên nghiệp.",
                "Tích hợp Schema Markup hiển thị kết quả Google nổi bật."
            ],
            results: {
                performance: "95+ Lighthouse Score",
                lessons: "Hiểu sâu hơn về Technical SEO và cách tối ưu hóa dữ liệu ngành B2B."
            }
        }
    },
    {
        title: 'CollabTask Management ',
        description: '"Socket.io-powered collaboration platform for instant team communication & task sync."',
        tags: ['Next.js', 'Tailwind CSS', 'Nestjs.js', 'TypeScript', 'PostgreSQL'],
        bgImage: '/work-2.png',
        slug: 'collab-task-management',
        details: {
            overview: {
                summary: "Nền tảng quản lý công việc nhóm thời gian thực, tập trung vào sự tương tác tức thì và đồng bộ hóa dữ liệu.",
                role: "Backend Lead - Thiết kế hệ thống WebSocket và cấu trúc Database cho tính năng Real-time.",
                techStack: ["Next.js", "NestJS", "Socket.io", "PostgreSQL", "Redis"]
            },
            challenges: [
                {
                    issue: "Đồng bộ hóa dữ liệu giữa hàng trăm người dùng cùng lúc mà không gây xung đột.",
                    solution: "Sử dụng Redis Pub/Sub để phát tán sự kiện và triển khai cơ chế Optimistic UI ở Frontend."
                }
            ],
            architecture: {
                description: "Kiến trúc Client-Server tách biệt, Backend NestJS xử lý logic nghiệp vụ và WebSocket.",
                databaseSchema: null
            },
            features: [
                "Nhắn tin và cập nhật trạng thái Task thời gian thực.",
                "Kéo thả (Drag & Drop) quản lý bảng Kanban.",
                "Hệ thống thông báo đẩy (Push Notifications)."
            ],
            results: {
                performance: "< 50ms Latency for messages",
                lessons: "Kỹ năng xử lý concurrency và quản lý state phức tạp ở cả hai phía."
            }
        }
    },
    {
        title: 'CelebJoy Restaurant',
        description: '"Professional wedding & dining ERP with NestJS backend and intelligent menu generation algorithm."',
        tags: ['Next.js', 'Tailwind CSS', 'Nestjs.js', 'TypeScript', 'PostgreSQL'],
        bgImage: '/work-3.png',
        slug: 'celeb-joy',
        details: {
            overview: {
                summary: "Hệ thống ERP chuyên dụng cho nhà hàng tiệc cưới, tối ưu hóa quy trình đặt tiệc và quản lý nguyên liệu.",
                role: "Fullstack Developer - Phát triển thuật toán gợi ý thực đơn và module quản lý kho.",
                techStack: ["Next.js", "NestJS", "TypeScript", "PostgreSQL"]
            },
            challenges: [
                {
                    issue: "Tính toán định mức nguyên liệu phức tạp cho các bữa tiệc hàng nghìn khách.",
                    solution: "Xây dựng engine tính toán tự động dựa trên công thức nấu ăn và số lượng khách đặt."
                }
            ],
            architecture: {
                description: "Kiến trúc hướng Module (Modular Monolith) giúp dễ dàng bảo trì và mở rộng các tính năng mới.",
                databaseSchema: null
            },
            features: [
                "Thuật toán gợi ý thực đơn thông minh.",
                "Hệ thống quản lý kho và định mức nguyên liệu.",
                "Báo cáo doanh thu và thống kê chi tiết."
            ],
            results: {
                performance: "Giảm 30% thời gian lên thực đơn",
                lessons: "Kỹ năng phân tích nghiệp vụ (BA) và chuyển đổi logic kinh doanh vào code."
            }
        }
    },

]

export const serviceData = [
    { icon: assets.web_icon, title: 'Web design', description: 'Web development is the process of building, programming...', link: '' },
    { icon: assets.mobile_icon, title: 'Mobile app', description: 'Mobile app development involves creating software for mobile devices...', link: '' },
    { icon: assets.ui_icon, title: 'UI/UX design', description: 'UI/UX design focuses on creating a seamless user experience...', link: '' },
    { icon: assets.graphics_icon, title: 'Graphics design', description: 'Creative design solutions to enhance visual communication...', link: '' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML, CSS, JavaScript React Js, Next Js' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Tech in Computer Science' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' }
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git
];


export const skillData = [
    {
        title: 'Frontend',
        icon: assets.code_icon,
        skills: [
            { name: 'React/Next.js', icon: assets.nexjs_icon },
            { name: 'HTML5', icon: assets.html5 },
            { name: 'CSS3', icon: assets.vscode },
            { name: 'Tailwind CSS', icon: assets.vscode },
            { name: 'JavaScript', icon: assets.vscode },
            { name: 'TypeScript', icon: assets.vscode }
        ]
    },
    {
        title: 'Backend',
        icon: assets.project_icon,
        skills: [
            { name: 'Node.js/Nestjs', icon: assets.vscode },
            { name: 'PostgreSQL', icon: assets.vscode },
            { name: 'MySQL', icon: assets.vscode },
            { name: 'Socket.IO', icon: assets.vscode },

        ]
    },
    {
        title: 'Tools',
        icon: assets.project_icon,
        skills: [
            { name: 'Git', icon: assets.git },
            { name: 'GitHub Actions (CI/CD)', icon: assets.vscode },
            { name: 'Redis', icon: assets.vscode },
            { name: 'Docker', icon: assets.vscode },
            { name: 'Figma', icon: assets.figma },
            { name: 'AI-Assisted Coding', icon: assets.vscode }
        ]
    },
];
