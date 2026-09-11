// IT007 UIT - Video Lecture System Logic (Operating Systems course)
// Authentic YouTube Watch & Playlist UI, auto-saves to LocalStorage (no login required)

const CHAPTERS_DATA = [
  {
    "id": 1,
    "title": "Chương 1: Tổng quan về Hệ điều hành",
    "desc": "Hệ điều hành là phần mềm quản lý các phần cứng của máy tính, cung cấp nền tảng cho các chương trình ứng dụng và làm trung gian giữa người dùng và phần cứng.",
    "videos": [
      {
        "id": "wVYpkUmprVo",
        "duration": 666,
        "title": "Video 1.1: Tổng quan về Hệ điều hành",
        "chapterId": 1,
        "chapterTitle": "Chương 1: Tổng quan về Hệ điều hành",
        "chapterDesc": "Hệ điều hành là phần mềm quản lý các phần cứng của máy tính, cung cấp nền tảng cho các chương trình ứng dụng và làm trung gian giữa người dùng và phần cứng.",
        "channel": "Duy Phan CE-UIT",
        "channelUrl": "https://www.youtube.com/@DuyPhanCE-UIT"
      },
      {
        "id": "z1ip2GQtiSQ",
        "duration": 524,
        "title": "Video 1.2: Hoạt động bên trong máy tính (Phần 1)",
        "chapterId": 1,
        "chapterTitle": "Chương 1: Tổng quan về Hệ điều hành",
        "chapterDesc": "Hệ điều hành là phần mềm quản lý các phần cứng của máy tính, cung cấp nền tảng cho các chương trình ứng dụng và làm trung gian giữa người dùng và phần cứng.",
        "channel": "Duy Phan CE-UIT",
        "channelUrl": "https://www.youtube.com/@DuyPhanCE-UIT"
      },
      {
        "id": "tl_65IvAkNw",
        "duration": 585,
        "title": "Video 1.2: Hoạt động bên trong máy tính (Phần 2)",
        "chapterId": 1,
        "chapterTitle": "Chương 1: Tổng quan về Hệ điều hành",
        "chapterDesc": "Hệ điều hành là phần mềm quản lý các phần cứng của máy tính, cung cấp nền tảng cho các chương trình ứng dụng và làm trung gian giữa người dùng và phần cứng.",
        "channel": "Duy Phan CE-UIT",
        "channelUrl": "https://www.youtube.com/@DuyPhanCE-UIT"
      },
      {
        "id": "rYHJptSiMVc",
        "duration": 683,
        "title": "Video 1.3: Kiến trúc hệ thống máy tính",
        "chapterId": 1,
        "chapterTitle": "Chương 1: Tổng quan về Hệ điều hành",
        "chapterDesc": "Hệ điều hành là phần mềm quản lý các phần cứng của máy tính, cung cấp nền tảng cho các chương trình ứng dụng và làm trung gian giữa người dùng và phần cứng.",
        "channel": "Duy Phan CE-UIT",
        "channelUrl": "https://www.youtube.com/@DuyPhanCE-UIT"
      },
      {
        "id": "sBAOMLkAS4k",
        "duration": 685,
        "title": "Video 1.4: Các thao tác trong hệ điều hành",
        "chapterId": 1,
        "chapterTitle": "Chương 1: Tổng quan về Hệ điều hành",
        "chapterDesc": "Hệ điều hành là phần mềm quản lý các phần cứng của máy tính, cung cấp nền tảng cho các chương trình ứng dụng và làm trung gian giữa người dùng và phần cứng.",
        "channel": "Duy Phan CE-UIT",
        "channelUrl": "https://www.youtube.com/@DuyPhanCE-UIT"
      }
    ]
  },
  {
    "id": 2,
    "title": "Chương 2: Các thành phần trong Hệ điều hành",
    "desc": "Hệ điều hành cung cấp môi trường để các chương trình có thể được thực thi. Tìm hiểu về các thành phần, dịch vụ, lời gọi hệ thống và cấu trúc hệ điều hành.",
    "videos": [
      {
        "id": "undOc0cK3q8",
        "duration": 709,
        "title": "Video 2.1: Các thành phần trong hệ điều hành (Phần 1)",
        "chapterId": 2,
        "chapterTitle": "Chương 2: Các thành phần trong Hệ điều hành",
        "chapterDesc": "Hệ điều hành cung cấp môi trường để các chương trình có thể được thực thi. Tìm hiểu về các thành phần, dịch vụ, lời gọi hệ thống và cấu trúc hệ điều hành.",
        "channel": "Duy Phan CE-UIT",
        "channelUrl": "https://www.youtube.com/@DuyPhanCE-UIT"
      },
      {
        "id": "Acxbkud6U5E",
        "duration": 444,
        "title": "Video 2.1: Các thành phần trong hệ điều hành (Phần 2)",
        "chapterId": 2,
        "chapterTitle": "Chương 2: Các thành phần trong Hệ điều hành",
        "chapterDesc": "Hệ điều hành cung cấp môi trường để các chương trình có thể được thực thi. Tìm hiểu về các thành phần, dịch vụ, lời gọi hệ thống và cấu trúc hệ điều hành.",
        "channel": "Duy Phan CE-UIT",
        "channelUrl": "https://www.youtube.com/@DuyPhanCE-UIT"
      },
      {
        "id": "oZfhp-fiNoE",
        "duration": 609,
        "title": "Video 2.1: Các thành phần trong hệ điều hành (Phần 3)",
        "chapterId": 2,
        "chapterTitle": "Chương 2: Các thành phần trong Hệ điều hành",
        "chapterDesc": "Hệ điều hành cung cấp môi trường để các chương trình có thể được thực thi. Tìm hiểu về các thành phần, dịch vụ, lời gọi hệ thống và cấu trúc hệ điều hành.",
        "channel": "Duy Phan CE-UIT",
        "channelUrl": "https://www.youtube.com/@DuyPhanCE-UIT"
      },
      {
        "id": "UkUUjlWDC7M",
        "duration": 334,
        "title": "Video 2.2: Các dịch vụ mà hệ điều hành cung cấp",
        "chapterId": 2,
        "chapterTitle": "Chương 2: Các thành phần trong Hệ điều hành",
        "chapterDesc": "Hệ điều hành cung cấp môi trường để các chương trình có thể được thực thi. Tìm hiểu về các thành phần, dịch vụ, lời gọi hệ thống và cấu trúc hệ điều hành.",
        "channel": "Duy Phan CE-UIT",
        "channelUrl": "https://www.youtube.com/@DuyPhanCE-UIT"
      },
      {
        "id": "7x0mJYpzkIw",
        "duration": 557,
        "title": "Video 2.3: Lời gọi hệ thống",
        "chapterId": 2,
        "chapterTitle": "Chương 2: Các thành phần trong Hệ điều hành",
        "chapterDesc": "Hệ điều hành cung cấp môi trường để các chương trình có thể được thực thi. Tìm hiểu về các thành phần, dịch vụ, lời gọi hệ thống và cấu trúc hệ điều hành.",
        "channel": "Duy Phan CE-UIT",
        "channelUrl": "https://www.youtube.com/@DuyPhanCE-UIT"
      },
      {
        "id": "zd_1aInR5Xc",
        "duration": 210,
        "title": "Video 2.4: Các chương trình hệ thống",
        "chapterId": 2,
        "chapterTitle": "Chương 2: Các thành phần trong Hệ điều hành",
        "chapterDesc": "Hệ điều hành cung cấp môi trường để các chương trình có thể được thực thi. Tìm hiểu về các thành phần, dịch vụ, lời gọi hệ thống và cấu trúc hệ điều hành.",
        "channel": "Duy Phan CE-UIT",
        "channelUrl": "https://www.youtube.com/@DuyPhanCE-UIT"
      },
      {
        "id": "jMTWwOy25n8",
        "duration": 670,
        "title": "Video 2.5: Cấu trúc của hệ điều hành",
        "chapterId": 2,
        "chapterTitle": "Chương 2: Các thành phần trong Hệ điều hành",
        "chapterDesc": "Hệ điều hành cung cấp môi trường để các chương trình có thể được thực thi. Tìm hiểu về các thành phần, dịch vụ, lời gọi hệ thống và cấu trúc hệ điều hành.",
        "channel": "Duy Phan CE-UIT",
        "channelUrl": "https://www.youtube.com/@DuyPhanCE-UIT"
      }
    ]
  },
  {
    "id": 3,
    "title": "Chương 3: Quản lý tiến trình",
    "desc": "Khái niệm tiến trình, trạng thái, PCB, định thời tiến trình, tác vụ tạo và kết thúc tiến trình, giao tiếp liên tiến trình và tiểu trình (threads).",
    "videos": [
      {
        "id": "csHlTe68uyg",
        "duration": 159,
        "title": "Video 3.1: Các khái niệm cơ bản (Phần 1)",
        "chapterId": 3,
        "chapterTitle": "Chương 3: Quản lý tiến trình",
        "chapterDesc": "Khái niệm tiến trình, trạng thái, PCB, định thời tiến trình, tác vụ tạo và kết thúc tiến trình, giao tiếp liên tiến trình và tiểu trình (threads).",
        "channel": "Trường Đại học Công nghệ Thông tin - UIT",
        "channelUrl": "https://www.youtube.com/@UITTV"
      },
      {
        "id": "bRnH-_EDq1Y",
        "duration": 829,
        "title": "Video 3.1: Các khái niệm cơ bản (Phần 2)",
        "chapterId": 3,
        "chapterTitle": "Chương 3: Quản lý tiến trình",
        "chapterDesc": "Khái niệm tiến trình, trạng thái, PCB, định thời tiến trình, tác vụ tạo và kết thúc tiến trình, giao tiếp liên tiến trình và tiểu trình (threads).",
        "channel": "Trường Đại học Công nghệ Thông tin - UIT",
        "channelUrl": "https://www.youtube.com/@UITTV"
      },
      {
        "id": "CsolmtCbMS0",
        "duration": 425,
        "title": "Video 3.1: Các khái niệm cơ bản (Phần 3)",
        "chapterId": 3,
        "chapterTitle": "Chương 3: Quản lý tiến trình",
        "chapterDesc": "Khái niệm tiến trình, trạng thái, PCB, định thời tiến trình, tác vụ tạo và kết thúc tiến trình, giao tiếp liên tiến trình và tiểu trình (threads).",
        "channel": "Trường Đại học Công nghệ Thông tin - UIT",
        "channelUrl": "https://www.youtube.com/@UITTV"
      },
      {
        "id": "7dFKz0buw-A",
        "duration": 578,
        "title": "Video 3.2: Trạng thái của tiến trình",
        "chapterId": 3,
        "chapterTitle": "Chương 3: Quản lý tiến trình",
        "chapterDesc": "Khái niệm tiến trình, trạng thái, PCB, định thời tiến trình, tác vụ tạo và kết thúc tiến trình, giao tiếp liên tiến trình và tiểu trình (threads).",
        "channel": "Trường Đại học Công nghệ Thông tin - UIT",
        "channelUrl": "https://www.youtube.com/@UITTV"
      },
      {
        "id": "cimxgJohQCs",
        "duration": 145,
        "title": "Video 3.3: Process Control Block",
        "chapterId": 3,
        "chapterTitle": "Chương 3: Quản lý tiến trình",
        "chapterDesc": "Khái niệm tiến trình, trạng thái, PCB, định thời tiến trình, tác vụ tạo và kết thúc tiến trình, giao tiếp liên tiến trình và tiểu trình (threads).",
        "channel": "Trường Đại học Công nghệ Thông tin - UIT",
        "channelUrl": "https://www.youtube.com/@UITTV"
      },
      {
        "id": "J2SDv8kKkq4",
        "duration": 392,
        "title": "Video 3.4: Định thời tiến trình (Phần 1/3)",
        "chapterId": 3,
        "chapterTitle": "Chương 3: Quản lý tiến trình",
        "chapterDesc": "Khái niệm tiến trình, trạng thái, PCB, định thời tiến trình, tác vụ tạo và kết thúc tiến trình, giao tiếp liên tiến trình và tiểu trình (threads).",
        "channel": "Trường Đại học Công nghệ Thông tin - UIT",
        "channelUrl": "https://www.youtube.com/@UITTV"
      },
      {
        "id": "o08NRlOOqjA",
        "duration": 263,
        "title": "Video 3.4: Định thời tiến trình (Phần 2/3)",
        "chapterId": 3,
        "chapterTitle": "Chương 3: Quản lý tiến trình",
        "chapterDesc": "Khái niệm tiến trình, trạng thái, PCB, định thời tiến trình, tác vụ tạo và kết thúc tiến trình, giao tiếp liên tiến trình và tiểu trình (threads).",
        "channel": "Trường Đại học Công nghệ Thông tin - UIT",
        "channelUrl": "https://www.youtube.com/@UITTV"
      },
      {
        "id": "h5E3M2jMvrQ",
        "duration": 528,
        "title": "Video 3.4: Định thời tiến trình (Phần 3/3)",
        "chapterId": 3,
        "chapterTitle": "Chương 3: Quản lý tiến trình",
        "chapterDesc": "Khái niệm tiến trình, trạng thái, PCB, định thời tiến trình, tác vụ tạo và kết thúc tiến trình, giao tiếp liên tiến trình và tiểu trình (threads).",
        "channel": "Trường Đại học Công nghệ Thông tin - UIT",
        "channelUrl": "https://www.youtube.com/@UITTV"
      },
      {
        "id": "cRRDE28dG8s",
        "duration": 122,
        "title": "Video 3.5.0: Giới thiệu Chương 3 - Phần 2",
        "chapterId": 3,
        "chapterTitle": "Chương 3: Quản lý tiến trình",
        "chapterDesc": "Khái niệm tiến trình, trạng thái, PCB, định thời tiến trình, tác vụ tạo và kết thúc tiến trình, giao tiếp liên tiến trình và tiểu trình (threads).",
        "channel": "Trường Đại học Công nghệ Thông tin - UIT",
        "channelUrl": "https://www.youtube.com/@UITTV"
      },
      {
        "id": "sCdVdlWnCLM",
        "duration": 504,
        "title": "Video 3.5.1: Tác vụ tạo tiến trình với hàm fork (Phần 1)",
        "chapterId": 3,
        "chapterTitle": "Chương 3: Quản lý tiến trình",
        "chapterDesc": "Khái niệm tiến trình, trạng thái, PCB, định thời tiến trình, tác vụ tạo và kết thúc tiến trình, giao tiếp liên tiến trình và tiểu trình (threads).",
        "channel": "Trường Đại học Công nghệ Thông tin - UIT",
        "channelUrl": "https://www.youtube.com/@UITTV"
      },
      {
        "id": "AHPe4tSNSTU",
        "duration": 421,
        "title": "Video 3.5.1: Tác vụ tạo tiến trình với họ hàm exec (Phần 2)",
        "chapterId": 3,
        "chapterTitle": "Chương 3: Quản lý tiến trình",
        "chapterDesc": "Khái niệm tiến trình, trạng thái, PCB, định thời tiến trình, tác vụ tạo và kết thúc tiến trình, giao tiếp liên tiến trình và tiểu trình (threads).",
        "channel": "Trường Đại học Công nghệ Thông tin - UIT",
        "channelUrl": "https://www.youtube.com/@UITTV"
      },
      {
        "id": "MvYa4Ht6wnQ",
        "duration": 543,
        "title": "Video 3.5.2: Các ví dụ tạo tiến trình (Phần 1)",
        "chapterId": 3,
        "chapterTitle": "Chương 3: Quản lý tiến trình",
        "chapterDesc": "Khái niệm tiến trình, trạng thái, PCB, định thời tiến trình, tác vụ tạo và kết thúc tiến trình, giao tiếp liên tiến trình và tiểu trình (threads).",
        "channel": "Trường Đại học Công nghệ Thông tin - UIT",
        "channelUrl": "https://www.youtube.com/@UITTV"
      },
      {
        "id": "hi3Dq9X2uCM",
        "duration": 470,
        "title": "Video 3.5.2: Các ví dụ tạo tiến trình (Phần 2)",
        "chapterId": 3,
        "chapterTitle": "Chương 3: Quản lý tiến trình",
        "chapterDesc": "Khái niệm tiến trình, trạng thái, PCB, định thời tiến trình, tác vụ tạo và kết thúc tiến trình, giao tiếp liên tiến trình và tiểu trình (threads).",
        "channel": "Trường Đại học Công nghệ Thông tin - UIT",
        "channelUrl": "https://www.youtube.com/@UITTV"
      },
      {
        "id": "4dTWHQg8oS4",
        "duration": 174,
        "title": "Video 3.5.3: Tác vụ kết thúc tiến trình",
        "chapterId": 3,
        "chapterTitle": "Chương 3: Quản lý tiến trình",
        "chapterDesc": "Khái niệm tiến trình, trạng thái, PCB, định thời tiến trình, tác vụ tạo và kết thúc tiến trình, giao tiếp liên tiến trình và tiểu trình (threads).",
        "channel": "Trường Đại học Công nghệ Thông tin - UIT",
        "channelUrl": "https://www.youtube.com/@UITTV"
      },
      {
        "id": "r2qIHbGGd2c",
        "duration": 589,
        "title": "Video 3.6: Giao tiếp liên tiến trình",
        "chapterId": 3,
        "chapterTitle": "Chương 3: Quản lý tiến trình",
        "chapterDesc": "Khái niệm tiến trình, trạng thái, PCB, định thời tiến trình, tác vụ tạo và kết thúc tiến trình, giao tiếp liên tiến trình và tiểu trình (threads).",
        "channel": "Trường Đại học Công nghệ Thông tin - UIT",
        "channelUrl": "https://www.youtube.com/@UITTV"
      },
      {
        "id": "5oATX7IsumQ",
        "duration": 639,
        "title": "Video 3.7: Tiểu trình (Phần 1)",
        "chapterId": 3,
        "chapterTitle": "Chương 3: Quản lý tiến trình",
        "chapterDesc": "Khái niệm tiến trình, trạng thái, PCB, định thời tiến trình, tác vụ tạo và kết thúc tiến trình, giao tiếp liên tiến trình và tiểu trình (threads).",
        "channel": "Trường Đại học Công nghệ Thông tin - UIT",
        "channelUrl": "https://www.youtube.com/@UITTV"
      },
      {
        "id": "Zp7no0XI258",
        "duration": 311,
        "title": "Video 3.7: Tiểu trình (Phần 2)",
        "chapterId": 3,
        "chapterTitle": "Chương 3: Quản lý tiến trình",
        "chapterDesc": "Khái niệm tiến trình, trạng thái, PCB, định thời tiến trình, tác vụ tạo và kết thúc tiến trình, giao tiếp liên tiến trình và tiểu trình (threads).",
        "channel": "Trường Đại học Công nghệ Thông tin - UIT",
        "channelUrl": "https://www.youtube.com/@UITTV"
      }
    ]
  },
  {
    "id": 4,
    "title": "Chương 4: Định thời CPU",
    "desc": "Lập lịch CPU là nền tảng cho các hệ điều hành đa chương. Tìm hiểu các tiêu chuẩn và giải thuật định thời CPU (FCFS, SJF, Priority, Round Robin, Multilevel Queue).",
    "videos": [
      {
        "id": "22cpo5_S8mk",
        "duration": 231,
        "title": "Video 4.1: Các khái niệm cơ bản về định thời (Phần 1)",
        "chapterId": 4,
        "chapterTitle": "Chương 4: Định thời CPU",
        "chapterDesc": "Lập lịch CPU là nền tảng cho các hệ điều hành đa chương. Tìm hiểu các tiêu chuẩn và giải thuật định thời CPU (FCFS, SJF, Priority, Round Robin, Multilevel Queue).",
        "channel": "Trường Đại học Công nghệ Thông tin - UIT",
        "channelUrl": "https://www.youtube.com/@UITTV"
      },
      {
        "id": "YUZa8NcjYMI",
        "duration": 576,
        "title": "Video 4.1: Các khái niệm cơ bản về định thời (Phần 2)",
        "chapterId": 4,
        "chapterTitle": "Chương 4: Định thời CPU",
        "chapterDesc": "Lập lịch CPU là nền tảng cho các hệ điều hành đa chương. Tìm hiểu các tiêu chuẩn và giải thuật định thời CPU (FCFS, SJF, Priority, Round Robin, Multilevel Queue).",
        "channel": "Trường Đại học Công nghệ Thông tin - UIT",
        "channelUrl": "https://www.youtube.com/@UITTV"
      },
      {
        "id": "nmR5gnO9TuQ",
        "duration": 397,
        "title": "Video 4.2: Các loại định thời",
        "chapterId": 4,
        "chapterTitle": "Chương 4: Định thời CPU",
        "chapterDesc": "Lập lịch CPU là nền tảng cho các hệ điều hành đa chương. Tìm hiểu các tiêu chuẩn và giải thuật định thời CPU (FCFS, SJF, Priority, Round Robin, Multilevel Queue).",
        "channel": "Trường Đại học Công nghệ Thông tin - UIT",
        "channelUrl": "https://www.youtube.com/@UITTV"
      },
      {
        "id": "iMFXiqbR_os",
        "duration": 580,
        "title": "Video 4.3: Các tiêu chuẩn định thời",
        "chapterId": 4,
        "chapterTitle": "Chương 4: Định thời CPU",
        "chapterDesc": "Lập lịch CPU là nền tảng cho các hệ điều hành đa chương. Tìm hiểu các tiêu chuẩn và giải thuật định thời CPU (FCFS, SJF, Priority, Round Robin, Multilevel Queue).",
        "channel": "Trường Đại học Công nghệ Thông tin - UIT",
        "channelUrl": "https://www.youtube.com/@UITTV"
      },
      {
        "id": "_eLkh8WHSYE",
        "duration": 390,
        "title": "Video 4.4.1: Các thành phần trong giải thuật định thời CPU",
        "chapterId": 4,
        "chapterTitle": "Chương 4: Định thời CPU",
        "chapterDesc": "Lập lịch CPU là nền tảng cho các hệ điều hành đa chương. Tìm hiểu các tiêu chuẩn và giải thuật định thời CPU (FCFS, SJF, Priority, Round Robin, Multilevel Queue).",
        "channel": "Trường Đại học Công nghệ Thông tin - UIT",
        "channelUrl": "https://www.youtube.com/@UITTV"
      },
      {
        "id": "1gSJMTW3fTI",
        "duration": 828,
        "title": "Video 4.4.2: Giải thuật First-Comes-First-Served (Phần 1)",
        "chapterId": 4,
        "chapterTitle": "Chương 4: Định thời CPU",
        "chapterDesc": "Lập lịch CPU là nền tảng cho các hệ điều hành đa chương. Tìm hiểu các tiêu chuẩn và giải thuật định thời CPU (FCFS, SJF, Priority, Round Robin, Multilevel Queue).",
        "channel": "Trường Đại học Công nghệ Thông tin - UIT",
        "channelUrl": "https://www.youtube.com/@UITTV"
      },
      {
        "id": "3frOFyea00Q",
        "duration": 602,
        "title": "Video 4.4.2: Giải thuật First-Comes-First-Served (Phần 2)",
        "chapterId": 4,
        "chapterTitle": "Chương 4: Định thời CPU",
        "chapterDesc": "Lập lịch CPU là nền tảng cho các hệ điều hành đa chương. Tìm hiểu các tiêu chuẩn và giải thuật định thời CPU (FCFS, SJF, Priority, Round Robin, Multilevel Queue).",
        "channel": "Trường Đại học Công nghệ Thông tin - UIT",
        "channelUrl": "https://www.youtube.com/@UITTV"
      },
      {
        "id": "KX-AQzpsB0o",
        "duration": 726,
        "title": "Video 4.4.3: Giải thuật Shortest-Job-First (Phần 1)",
        "chapterId": 4,
        "chapterTitle": "Chương 4: Định thời CPU",
        "chapterDesc": "Lập lịch CPU là nền tảng cho các hệ điều hành đa chương. Tìm hiểu các tiêu chuẩn và giải thuật định thời CPU (FCFS, SJF, Priority, Round Robin, Multilevel Queue).",
        "channel": "Trường Đại học Công nghệ Thông tin - UIT",
        "channelUrl": "https://www.youtube.com/@UITTV"
      },
      {
        "id": "ErueoAmt4VE",
        "duration": 573,
        "title": "Video 4.4.3: Giải thuật Shortest-Job-First (Phần 2)",
        "chapterId": 4,
        "chapterTitle": "Chương 4: Định thời CPU",
        "chapterDesc": "Lập lịch CPU là nền tảng cho các hệ điều hành đa chương. Tìm hiểu các tiêu chuẩn và giải thuật định thời CPU (FCFS, SJF, Priority, Round Robin, Multilevel Queue).",
        "channel": "Trường Đại học Công nghệ Thông tin - UIT",
        "channelUrl": "https://www.youtube.com/@UITTV"
      },
      {
        "id": "GPDW1lWdMT8",
        "duration": 426,
        "title": "Video 4.4.3: Giải thuật Shortest-Job-First (Phần 3)",
        "chapterId": 4,
        "chapterTitle": "Chương 4: Định thời CPU",
        "chapterDesc": "Lập lịch CPU là nền tảng cho các hệ điều hành đa chương. Tìm hiểu các tiêu chuẩn và giải thuật định thời CPU (FCFS, SJF, Priority, Round Robin, Multilevel Queue).",
        "channel": "Trường Đại học Công nghệ Thông tin - UIT",
        "channelUrl": "https://www.youtube.com/@UITTV"
      },
      {
        "id": "Og_EnJXBgoc",
        "duration": 544,
        "title": "Video 4.4.4: Giải thuật Priority Scheduling",
        "chapterId": 4,
        "chapterTitle": "Chương 4: Định thời CPU",
        "chapterDesc": "Lập lịch CPU là nền tảng cho các hệ điều hành đa chương. Tìm hiểu các tiêu chuẩn và giải thuật định thời CPU (FCFS, SJF, Priority, Round Robin, Multilevel Queue).",
        "channel": "Trường Đại học Công nghệ Thông tin - UIT",
        "channelUrl": "https://www.youtube.com/@UITTV"
      },
      {
        "id": "b9sI2aNUczs",
        "duration": 791,
        "title": "Video 4.4.5: Giải thuật Round Robin (Phần 1)",
        "chapterId": 4,
        "chapterTitle": "Chương 4: Định thời CPU",
        "chapterDesc": "Lập lịch CPU là nền tảng cho các hệ điều hành đa chương. Tìm hiểu các tiêu chuẩn và giải thuật định thời CPU (FCFS, SJF, Priority, Round Robin, Multilevel Queue).",
        "channel": "Trường Đại học Công nghệ Thông tin - UIT",
        "channelUrl": "https://www.youtube.com/@UITTV"
      },
      {
        "id": "hJTHaQ_IZ0I",
        "duration": 466,
        "title": "Video 4.4.5: Giải thuật Round Robin (Phần 2)",
        "chapterId": 4,
        "chapterTitle": "Chương 4: Định thời CPU",
        "chapterDesc": "Lập lịch CPU là nền tảng cho các hệ điều hành đa chương. Tìm hiểu các tiêu chuẩn và giải thuật định thời CPU (FCFS, SJF, Priority, Round Robin, Multilevel Queue).",
        "channel": "Trường Đại học Công nghệ Thông tin - UIT",
        "channelUrl": "https://www.youtube.com/@UITTV"
      },
      {
        "id": "JvxIpoG9Oto",
        "duration": 235,
        "title": "Video 4.4.6: Giải thuật Highest-Response-Ratio-Next",
        "chapterId": 4,
        "chapterTitle": "Chương 4: Định thời CPU",
        "chapterDesc": "Lập lịch CPU là nền tảng cho các hệ điều hành đa chương. Tìm hiểu các tiêu chuẩn và giải thuật định thời CPU (FCFS, SJF, Priority, Round Robin, Multilevel Queue).",
        "channel": "Trường Đại học Công nghệ Thông tin - UIT",
        "channelUrl": "https://www.youtube.com/@UITTV"
      },
      {
        "id": "08Eq8IYklDg",
        "duration": 331,
        "title": "Video 4.4.7 - 4.4.8: Giải thuật Multilevel (Feedback) Queue (Phần 1)",
        "chapterId": 4,
        "chapterTitle": "Chương 4: Định thời CPU",
        "chapterDesc": "Lập lịch CPU là nền tảng cho các hệ điều hành đa chương. Tìm hiểu các tiêu chuẩn và giải thuật định thời CPU (FCFS, SJF, Priority, Round Robin, Multilevel Queue).",
        "channel": "Trường Đại học Công nghệ Thông tin - UIT",
        "channelUrl": "https://www.youtube.com/@UITTV"
      },
      {
        "id": "CfUxBmdzgaY",
        "duration": 206,
        "title": "Video 4.4.7 - 4.4.8: Giải thuật Multilevel (Feedback) Queue (Phần 2)",
        "chapterId": 4,
        "chapterTitle": "Chương 4: Định thời CPU",
        "chapterDesc": "Lập lịch CPU là nền tảng cho các hệ điều hành đa chương. Tìm hiểu các tiêu chuẩn và giải thuật định thời CPU (FCFS, SJF, Priority, Round Robin, Multilevel Queue).",
        "channel": "Trường Đại học Công nghệ Thông tin - UIT",
        "channelUrl": "https://www.youtube.com/@UITTV"
      },
      {
        "id": "da9155FcuuU",
        "duration": 176,
        "title": "Video 4.4.9: So sánh các giải thuật",
        "chapterId": 4,
        "chapterTitle": "Chương 4: Định thời CPU",
        "chapterDesc": "Lập lịch CPU là nền tảng cho các hệ điều hành đa chương. Tìm hiểu các tiêu chuẩn và giải thuật định thời CPU (FCFS, SJF, Priority, Round Robin, Multilevel Queue).",
        "channel": "Trường Đại học Công nghệ Thông tin - UIT",
        "channelUrl": "https://www.youtube.com/@UITTV"
      }
    ]
  },
  {
    "id": 5,
    "title": "Chương 5: Đồng bộ tiến trình",
    "desc": "Đồng bộ hóa tiến trình kiểm soát việc truy cập đến dữ liệu chia sẻ để tránh race condition: vùng tranh chấp, Mutex, Semaphores, Monitors và các bài toán kinh điển.",
    "videos": [
      {
        "id": "dur3ZmCwtYc",
        "duration": 340,
        "title": "Video 5.1: Race Condition (Phần 1)",
        "chapterId": 5,
        "chapterTitle": "Chương 5: Đồng bộ tiến trình",
        "chapterDesc": "Đồng bộ hóa tiến trình kiểm soát việc truy cập đến dữ liệu chia sẻ để tránh race condition: vùng tranh chấp, Mutex, Semaphores, Monitors và các bài toán kinh điển.",
        "channel": "Trường Đại học Công nghệ Thông tin - UIT",
        "channelUrl": "https://www.youtube.com/@UITTV"
      },
      {
        "id": "2QHiU6PZ1YQ",
        "duration": 561,
        "title": "Video 5.1: Race Condition (Phần 2)",
        "chapterId": 5,
        "chapterTitle": "Chương 5: Đồng bộ tiến trình",
        "chapterDesc": "Đồng bộ hóa tiến trình kiểm soát việc truy cập đến dữ liệu chia sẻ để tránh race condition: vùng tranh chấp, Mutex, Semaphores, Monitors và các bài toán kinh điển.",
        "channel": "Trường Đại học Công nghệ Thông tin - UIT",
        "channelUrl": "https://www.youtube.com/@UITTV"
      },
      {
        "id": "1E0AW7TR9C4",
        "duration": 377,
        "title": "Video 5.1: Race Condition (Phần 3)",
        "chapterId": 5,
        "chapterTitle": "Chương 5: Đồng bộ tiến trình",
        "chapterDesc": "Đồng bộ hóa tiến trình kiểm soát việc truy cập đến dữ liệu chia sẻ để tránh race condition: vùng tranh chấp, Mutex, Semaphores, Monitors và các bài toán kinh điển.",
        "channel": "Trường Đại học Công nghệ Thông tin - UIT",
        "channelUrl": "https://www.youtube.com/@UITTV"
      },
      {
        "id": "B8ryLLEJ6ec",
        "duration": 343,
        "title": "Video 5.1: Race Condition (Phần 4)",
        "chapterId": 5,
        "chapterTitle": "Chương 5: Đồng bộ tiến trình",
        "chapterDesc": "Đồng bộ hóa tiến trình kiểm soát việc truy cập đến dữ liệu chia sẻ để tránh race condition: vùng tranh chấp, Mutex, Semaphores, Monitors và các bài toán kinh điển.",
        "channel": "Trường Đại học Công nghệ Thông tin - UIT",
        "channelUrl": "https://www.youtube.com/@UITTV"
      },
      {
        "id": "aQehm8bz_b4",
        "duration": 538,
        "title": "Video 5.2 - 5.3: Vấn đề vùng tranh chấp",
        "chapterId": 5,
        "chapterTitle": "Chương 5: Đồng bộ tiến trình",
        "chapterDesc": "Đồng bộ hóa tiến trình kiểm soát việc truy cập đến dữ liệu chia sẻ để tránh race condition: vùng tranh chấp, Mutex, Semaphores, Monitors và các bài toán kinh điển.",
        "channel": "Trường Đại học Công nghệ Thông tin - UIT",
        "channelUrl": "https://www.youtube.com/@UITTV"
      },
      {
        "id": "YoPmWjz-3pI",
        "duration": 612,
        "title": "Video 5.4: Các giải pháp dựa trên ngắt (giải pháp phần mềm) (Phần 1)",
        "chapterId": 5,
        "chapterTitle": "Chương 5: Đồng bộ tiến trình",
        "chapterDesc": "Đồng bộ hóa tiến trình kiểm soát việc truy cập đến dữ liệu chia sẻ để tránh race condition: vùng tranh chấp, Mutex, Semaphores, Monitors và các bài toán kinh điển.",
        "channel": "Trường Đại học Công nghệ Thông tin - UIT",
        "channelUrl": "https://www.youtube.com/@UITTV"
      },
      {
        "id": "QuboMWOPCBU",
        "duration": 466,
        "title": "Video 5.4: Các giải pháp dựa trên ngắt (giải pháp phần mềm) (Phần 2)",
        "chapterId": 5,
        "chapterTitle": "Chương 5: Đồng bộ tiến trình",
        "chapterDesc": "Đồng bộ hóa tiến trình kiểm soát việc truy cập đến dữ liệu chia sẻ để tránh race condition: vùng tranh chấp, Mutex, Semaphores, Monitors và các bài toán kinh điển.",
        "channel": "Trường Đại học Công nghệ Thông tin - UIT",
        "channelUrl": "https://www.youtube.com/@UITTV"
      },
      {
        "id": "PpL-bv0nUUU",
        "duration": 481,
        "title": "Video 5.4: Các giải pháp dựa trên ngắt (giải pháp phần mềm) (Phần 3)",
        "chapterId": 5,
        "chapterTitle": "Chương 5: Đồng bộ tiến trình",
        "chapterDesc": "Đồng bộ hóa tiến trình kiểm soát việc truy cập đến dữ liệu chia sẻ để tránh race condition: vùng tranh chấp, Mutex, Semaphores, Monitors và các bài toán kinh điển.",
        "channel": "Trường Đại học Công nghệ Thông tin - UIT",
        "channelUrl": "https://www.youtube.com/@UITTV"
      },
      {
        "id": "7JVztV5kJbs",
        "duration": 302,
        "title": "Video 5.5: Các giải pháp phần cứng",
        "chapterId": 5,
        "chapterTitle": "Chương 5: Đồng bộ tiến trình",
        "chapterDesc": "Đồng bộ hóa tiến trình kiểm soát việc truy cập đến dữ liệu chia sẻ để tránh race condition: vùng tranh chấp, Mutex, Semaphores, Monitors và các bài toán kinh điển.",
        "channel": "Trường Đại học Công nghệ Thông tin - UIT",
        "channelUrl": "https://www.youtube.com/@UITTV"
      },
      {
        "id": "6U5dfwuqK7A",
        "duration": 316,
        "title": "Video 5.6: Mutex Locks (Phần 1)",
        "chapterId": 5,
        "chapterTitle": "Chương 5: Đồng bộ tiến trình",
        "chapterDesc": "Đồng bộ hóa tiến trình kiểm soát việc truy cập đến dữ liệu chia sẻ để tránh race condition: vùng tranh chấp, Mutex, Semaphores, Monitors và các bài toán kinh điển.",
        "channel": "Trường Đại học Công nghệ Thông tin - UIT",
        "channelUrl": "https://www.youtube.com/@UITTV"
      },
      {
        "id": "sFDyTL_Umh0",
        "duration": 592,
        "title": "Video 5.6: Mutex Locks (Phần 2)",
        "chapterId": 5,
        "chapterTitle": "Chương 5: Đồng bộ tiến trình",
        "chapterDesc": "Đồng bộ hóa tiến trình kiểm soát việc truy cập đến dữ liệu chia sẻ để tránh race condition: vùng tranh chấp, Mutex, Semaphores, Monitors và các bài toán kinh điển.",
        "channel": "Trường Đại học Công nghệ Thông tin - UIT",
        "channelUrl": "https://www.youtube.com/@UITTV"
      },
      {
        "id": "N5QMXmCTvNA",
        "duration": 480,
        "title": "Video 5.7.1 - 5.7.2: Semaphores (Phần 1)",
        "chapterId": 5,
        "chapterTitle": "Chương 5: Đồng bộ tiến trình",
        "chapterDesc": "Đồng bộ hóa tiến trình kiểm soát việc truy cập đến dữ liệu chia sẻ để tránh race condition: vùng tranh chấp, Mutex, Semaphores, Monitors và các bài toán kinh điển.",
        "channel": "Trường Đại học Công nghệ Thông tin - UIT",
        "channelUrl": "https://www.youtube.com/@UITTV"
      },
      {
        "id": "nI8BIikbCNE",
        "duration": 640,
        "title": "Video 5.7.1 - 5.7.2: Semaphores (Phần 2)",
        "chapterId": 5,
        "chapterTitle": "Chương 5: Đồng bộ tiến trình",
        "chapterDesc": "Đồng bộ hóa tiến trình kiểm soát việc truy cập đến dữ liệu chia sẻ để tránh race condition: vùng tranh chấp, Mutex, Semaphores, Monitors và các bài toán kinh điển.",
        "channel": "Trường Đại học Công nghệ Thông tin - UIT",
        "channelUrl": "https://www.youtube.com/@UITTV"
      },
      {
        "id": "wg9zBo8jiik",
        "duration": 771,
        "title": "Video 5.7.3 - 5.7.4: Ứng dụng của semaphores (Phần 1)",
        "chapterId": 5,
        "chapterTitle": "Chương 5: Đồng bộ tiến trình",
        "chapterDesc": "Đồng bộ hóa tiến trình kiểm soát việc truy cập đến dữ liệu chia sẻ để tránh race condition: vùng tranh chấp, Mutex, Semaphores, Monitors và các bài toán kinh điển.",
        "channel": "Trường Đại học Công nghệ Thông tin - UIT",
        "channelUrl": "https://www.youtube.com/@UITTV"
      },
      {
        "id": "F2p4lnG5EeM",
        "duration": 504,
        "title": "Video 5.7.3 - 5.7.4: Ứng dụng của semaphores (Phần 2)",
        "chapterId": 5,
        "chapterTitle": "Chương 5: Đồng bộ tiến trình",
        "chapterDesc": "Đồng bộ hóa tiến trình kiểm soát việc truy cập đến dữ liệu chia sẻ để tránh race condition: vùng tranh chấp, Mutex, Semaphores, Monitors và các bài toán kinh điển.",
        "channel": "Trường Đại học Công nghệ Thông tin - UIT",
        "channelUrl": "https://www.youtube.com/@UITTV"
      },
      {
        "id": "h4i9_TjJyYI",
        "duration": 497,
        "title": "Video 5.8: Monitors",
        "chapterId": 5,
        "chapterTitle": "Chương 5: Đồng bộ tiến trình",
        "chapterDesc": "Đồng bộ hóa tiến trình kiểm soát việc truy cập đến dữ liệu chia sẻ để tránh race condition: vùng tranh chấp, Mutex, Semaphores, Monitors và các bài toán kinh điển.",
        "channel": "Trường Đại học Công nghệ Thông tin - UIT",
        "channelUrl": "https://www.youtube.com/@UITTV"
      },
      {
        "id": "fb1x4Xh8uPQ",
        "duration": 309,
        "title": "Video 5.A: Liveness",
        "chapterId": 5,
        "chapterTitle": "Chương 5: Đồng bộ tiến trình",
        "chapterDesc": "Đồng bộ hóa tiến trình kiểm soát việc truy cập đến dữ liệu chia sẻ để tránh race condition: vùng tranh chấp, Mutex, Semaphores, Monitors và các bài toán kinh điển.",
        "channel": "Trường Đại học Công nghệ Thông tin - UIT",
        "channelUrl": "https://www.youtube.com/@UITTV"
      },
      {
        "id": "MtgJyNmgycI",
        "duration": 205,
        "title": "Video 5.9: Bài toán Bounded Buffer (Phần 1)",
        "chapterId": 5,
        "chapterTitle": "Chương 5: Đồng bộ tiến trình",
        "chapterDesc": "Đồng bộ hóa tiến trình kiểm soát việc truy cập đến dữ liệu chia sẻ để tránh race condition: vùng tranh chấp, Mutex, Semaphores, Monitors và các bài toán kinh điển.",
        "channel": "Trường Đại học Công nghệ Thông tin - UIT",
        "channelUrl": "https://www.youtube.com/@UITTV"
      },
      {
        "id": "Yz4m4E2a5YU",
        "duration": 716,
        "title": "Video 5.9: Bài toán Bounded Buffer (Phần 2)",
        "chapterId": 5,
        "chapterTitle": "Chương 5: Đồng bộ tiến trình",
        "chapterDesc": "Đồng bộ hóa tiến trình kiểm soát việc truy cập đến dữ liệu chia sẻ để tránh race condition: vùng tranh chấp, Mutex, Semaphores, Monitors và các bài toán kinh điển.",
        "channel": "Trường Đại học Công nghệ Thông tin - UIT",
        "channelUrl": "https://www.youtube.com/@UITTV"
      },
      {
        "id": "QZCLorO5HAQ",
        "duration": 450,
        "title": "Video 5.9: Bài toán Bounded Buffer (Phần 3)",
        "chapterId": 5,
        "chapterTitle": "Chương 5: Đồng bộ tiến trình",
        "chapterDesc": "Đồng bộ hóa tiến trình kiểm soát việc truy cập đến dữ liệu chia sẻ để tránh race condition: vùng tranh chấp, Mutex, Semaphores, Monitors và các bài toán kinh điển.",
        "channel": "Trường Đại học Công nghệ Thông tin - UIT",
        "channelUrl": "https://www.youtube.com/@UITTV"
      },
      {
        "id": "EbH7F0RpMK8",
        "duration": 561,
        "title": "Video 5.10: Bài toán Readers - Writers (Phần 1)",
        "chapterId": 5,
        "chapterTitle": "Chương 5: Đồng bộ tiến trình",
        "chapterDesc": "Đồng bộ hóa tiến trình kiểm soát việc truy cập đến dữ liệu chia sẻ để tránh race condition: vùng tranh chấp, Mutex, Semaphores, Monitors và các bài toán kinh điển.",
        "channel": "Trường Đại học Công nghệ Thông tin - UIT",
        "channelUrl": "https://www.youtube.com/@UITTV"
      },
      {
        "id": "5kk_pA8esQA",
        "duration": 622,
        "title": "Video 5.10: Bài toán Readers - Writers (Phần 2)",
        "chapterId": 5,
        "chapterTitle": "Chương 5: Đồng bộ tiến trình",
        "chapterDesc": "Đồng bộ hóa tiến trình kiểm soát việc truy cập đến dữ liệu chia sẻ để tránh race condition: vùng tranh chấp, Mutex, Semaphores, Monitors và các bài toán kinh điển.",
        "channel": "Trường Đại học Công nghệ Thông tin - UIT",
        "channelUrl": "https://www.youtube.com/@UITTV"
      },
      {
        "id": "dS8xwmgW4z0",
        "duration": 670,
        "title": "Video 5.11: Bài toán Dining Philosophers (Phần 1)",
        "chapterId": 5,
        "chapterTitle": "Chương 5: Đồng bộ tiến trình",
        "chapterDesc": "Đồng bộ hóa tiến trình kiểm soát việc truy cập đến dữ liệu chia sẻ để tránh race condition: vùng tranh chấp, Mutex, Semaphores, Monitors và các bài toán kinh điển.",
        "channel": "Trường Đại học Công nghệ Thông tin - UIT",
        "channelUrl": "https://www.youtube.com/@UITTV"
      },
      {
        "id": "dJmjQUmBBSg",
        "duration": 83,
        "title": "Video 5.11: Bài toán Dining Philosophers (Phần 2)",
        "chapterId": 5,
        "chapterTitle": "Chương 5: Đồng bộ tiến trình",
        "chapterDesc": "Đồng bộ hóa tiến trình kiểm soát việc truy cập đến dữ liệu chia sẻ để tránh race condition: vùng tranh chấp, Mutex, Semaphores, Monitors và các bài toán kinh điển.",
        "channel": "Trường Đại học Công nghệ Thông tin - UIT",
        "channelUrl": "https://www.youtube.com/@UITTV"
      }
    ]
  },
  {
    "id": 6,
    "title": "Chương 6: Deadlock",
    "desc": "Mô hình hóa hệ thống, các điều kiện xảy ra deadlock, các phương pháp ngăn chặn, tránh deadlock (Banker), phát hiện và phục hồi deadlock.",
    "videos": [
      {
        "id": "w0sGve9dvB0",
        "duration": 705,
        "title": "Video 6.1: Vấn đề deadlock",
        "chapterId": 6,
        "chapterTitle": "Chương 6: Deadlock",
        "chapterDesc": "Mô hình hóa hệ thống, các điều kiện xảy ra deadlock, các phương pháp ngăn chặn, tránh deadlock (Banker), phát hiện và phục hồi deadlock.",
        "channel": "Duy Phan CE-UIT",
        "channelUrl": "https://www.youtube.com/@DuyPhanCE-UIT"
      },
      {
        "id": "Q58abzVx6Ow",
        "duration": 825,
        "title": "Video 6.2: Mô hình hóa hệ thống",
        "chapterId": 6,
        "chapterTitle": "Chương 6: Deadlock",
        "chapterDesc": "Mô hình hóa hệ thống, các điều kiện xảy ra deadlock, các phương pháp ngăn chặn, tránh deadlock (Banker), phát hiện và phục hồi deadlock.",
        "channel": "Duy Phan CE-UIT",
        "channelUrl": "https://www.youtube.com/@DuyPhanCE-UIT"
      },
      {
        "id": "Jw35RP_dibE",
        "duration": 504,
        "title": "Video 6.3: Ngăn deadlock",
        "chapterId": 6,
        "chapterTitle": "Chương 6: Deadlock",
        "chapterDesc": "Mô hình hóa hệ thống, các điều kiện xảy ra deadlock, các phương pháp ngăn chặn, tránh deadlock (Banker), phát hiện và phục hồi deadlock.",
        "channel": "Duy Phan CE-UIT",
        "channelUrl": "https://www.youtube.com/@DuyPhanCE-UIT"
      },
      {
        "id": "5V8pBxnYs6U",
        "duration": 598,
        "title": "Video 6.4: Tránh deadlock",
        "chapterId": 6,
        "chapterTitle": "Chương 6: Deadlock",
        "chapterDesc": "Mô hình hóa hệ thống, các điều kiện xảy ra deadlock, các phương pháp ngăn chặn, tránh deadlock (Banker), phát hiện và phục hồi deadlock.",
        "channel": "Duy Phan CE-UIT",
        "channelUrl": "https://www.youtube.com/@DuyPhanCE-UIT"
      },
      {
        "id": "NZI1rUhQqJ0",
        "duration": 750,
        "title": "Video 6.5: Tránh deadlock - Giải thuật Banker",
        "chapterId": 6,
        "chapterTitle": "Chương 6: Deadlock",
        "chapterDesc": "Mô hình hóa hệ thống, các điều kiện xảy ra deadlock, các phương pháp ngăn chặn, tránh deadlock (Banker), phát hiện và phục hồi deadlock.",
        "channel": "Duy Phan CE-UIT",
        "channelUrl": "https://www.youtube.com/@DuyPhanCE-UIT"
      },
      {
        "id": "aOgMrJjm03o",
        "duration": 470,
        "title": "Video 6.6: Tránh deadlock - Giải thuật yêu cầu tài nguyên",
        "chapterId": 6,
        "chapterTitle": "Chương 6: Deadlock",
        "chapterDesc": "Mô hình hóa hệ thống, các điều kiện xảy ra deadlock, các phương pháp ngăn chặn, tránh deadlock (Banker), phát hiện và phục hồi deadlock.",
        "channel": "Duy Phan CE-UIT",
        "channelUrl": "https://www.youtube.com/@DuyPhanCE-UIT"
      },
      {
        "id": "x8hd-VVFjoY",
        "duration": 879,
        "title": "Video 6.7: Phát hiện deadlock",
        "chapterId": 6,
        "chapterTitle": "Chương 6: Deadlock",
        "chapterDesc": "Mô hình hóa hệ thống, các điều kiện xảy ra deadlock, các phương pháp ngăn chặn, tránh deadlock (Banker), phát hiện và phục hồi deadlock.",
        "channel": "Duy Phan CE-UIT",
        "channelUrl": "https://www.youtube.com/@DuyPhanCE-UIT"
      },
      {
        "id": "9c8O8qbxMEo",
        "duration": 391,
        "title": "Video 6.8: Phục hồi deadlock",
        "chapterId": 6,
        "chapterTitle": "Chương 6: Deadlock",
        "chapterDesc": "Mô hình hóa hệ thống, các điều kiện xảy ra deadlock, các phương pháp ngăn chặn, tránh deadlock (Banker), phát hiện và phục hồi deadlock.",
        "channel": "Duy Phan CE-UIT",
        "channelUrl": "https://www.youtube.com/@DuyPhanCE-UIT"
      }
    ]
  },
  {
    "id": 7,
    "title": "Chương 7: Quản lý bộ nhớ",
    "desc": "Các cách thức quản lý bộ nhớ: các kiểu địa chỉ nhớ, chuyển đổi địa chỉ, mô hình quản lý bộ nhớ, cơ chế phân trang và cơ chế hoán vị (swapping).",
    "videos": [
      {
        "id": "mgDi_fJmn_M",
        "duration": 835,
        "title": "Video 7.1: Khái niệm cơ sở về bộ nhớ",
        "chapterId": 7,
        "chapterTitle": "Chương 7: Quản lý bộ nhớ",
        "chapterDesc": "Các cách thức quản lý bộ nhớ: các kiểu địa chỉ nhớ, chuyển đổi địa chỉ, mô hình quản lý bộ nhớ, cơ chế phân trang và cơ chế hoán vị (swapping).",
        "channel": "Duy Phan CE-UIT",
        "channelUrl": "https://www.youtube.com/@DuyPhanCE-UIT"
      },
      {
        "id": "HmfI1wZALF4",
        "duration": 843,
        "title": "Video 7.2: Các kiểu địa chỉ nhớ",
        "chapterId": 7,
        "chapterTitle": "Chương 7: Quản lý bộ nhớ",
        "chapterDesc": "Các cách thức quản lý bộ nhớ: các kiểu địa chỉ nhớ, chuyển đổi địa chỉ, mô hình quản lý bộ nhớ, cơ chế phân trang và cơ chế hoán vị (swapping).",
        "channel": "Duy Phan CE-UIT",
        "channelUrl": "https://www.youtube.com/@DuyPhanCE-UIT"
      },
      {
        "id": "ULu_d8bZ9Qg",
        "duration": 698,
        "title": "Video 7.3: Chuyển đổi địa chỉ nhớ",
        "chapterId": 7,
        "chapterTitle": "Chương 7: Quản lý bộ nhớ",
        "chapterDesc": "Các cách thức quản lý bộ nhớ: các kiểu địa chỉ nhớ, chuyển đổi địa chỉ, mô hình quản lý bộ nhớ, cơ chế phân trang và cơ chế hoán vị (swapping).",
        "channel": "Duy Phan CE-UIT",
        "channelUrl": "https://www.youtube.com/@DuyPhanCE-UIT"
      },
      {
        "id": "LbqaI6frsSU",
        "duration": 803,
        "title": "Video 7.4: Mô hình quản lý bộ nhớ",
        "chapterId": 7,
        "chapterTitle": "Chương 7: Quản lý bộ nhớ",
        "chapterDesc": "Các cách thức quản lý bộ nhớ: các kiểu địa chỉ nhớ, chuyển đổi địa chỉ, mô hình quản lý bộ nhớ, cơ chế phân trang và cơ chế hoán vị (swapping).",
        "channel": "Duy Phan CE-UIT",
        "channelUrl": "https://www.youtube.com/@DuyPhanCE-UIT"
      },
      {
        "id": "yBKhWnxVDys",
        "duration": 654,
        "title": "Video 7.5.1: Cơ chế phân trang phần 1",
        "chapterId": 7,
        "chapterTitle": "Chương 7: Quản lý bộ nhớ",
        "chapterDesc": "Các cách thức quản lý bộ nhớ: các kiểu địa chỉ nhớ, chuyển đổi địa chỉ, mô hình quản lý bộ nhớ, cơ chế phân trang và cơ chế hoán vị (swapping).",
        "channel": "Duy Phan CE-UIT",
        "channelUrl": "https://www.youtube.com/@DuyPhanCE-UIT"
      },
      {
        "id": "G4-mIRqHx6I",
        "duration": 899,
        "title": "Video 7.5.2: Cơ chế phân trang phần 2",
        "chapterId": 7,
        "chapterTitle": "Chương 7: Quản lý bộ nhớ",
        "chapterDesc": "Các cách thức quản lý bộ nhớ: các kiểu địa chỉ nhớ, chuyển đổi địa chỉ, mô hình quản lý bộ nhớ, cơ chế phân trang và cơ chế hoán vị (swapping).",
        "channel": "Duy Phan CE-UIT",
        "channelUrl": "https://www.youtube.com/@DuyPhanCE-UIT"
      },
      {
        "id": "HQJ01hxF8TM",
        "duration": 187,
        "title": "Video 7.6: Cơ chế hoán vị (swapping)",
        "chapterId": 7,
        "chapterTitle": "Chương 7: Quản lý bộ nhớ",
        "chapterDesc": "Các cách thức quản lý bộ nhớ: các kiểu địa chỉ nhớ, chuyển đổi địa chỉ, mô hình quản lý bộ nhớ, cơ chế phân trang và cơ chế hoán vị (swapping).",
        "channel": "Duy Phan CE-UIT",
        "channelUrl": "https://www.youtube.com/@DuyPhanCE-UIT"
      }
    ]
  },
  {
    "id": 8,
    "title": "Chương 8: Bộ nhớ ảo",
    "desc": "Kỹ thuật bộ nhớ ảo cho phép thực thi chương trình vượt dung lượng bộ nhớ vật lý: Demand Paging, giải thuật thay trang, cấp phát Frames và Thrashing.",
    "videos": [
      {
        "id": "HJYFjHkt98M",
        "duration": 741,
        "title": "Video 8.1: Tổng quan về bộ nhớ ảo",
        "chapterId": 8,
        "chapterTitle": "Chương 8: Bộ nhớ ảo",
        "chapterDesc": "Kỹ thuật bộ nhớ ảo cho phép thực thi chương trình vượt dung lượng bộ nhớ vật lý: Demand Paging, giải thuật thay trang, cấp phát Frames và Thrashing.",
        "channel": "Duy Phan CE-UIT",
        "channelUrl": "https://www.youtube.com/@DuyPhanCE-UIT"
      },
      {
        "id": "eZIPJ16_jds",
        "duration": 823,
        "title": "Video 8.2: Cài đặt bộ nhớ ảo - Demand Paging",
        "chapterId": 8,
        "chapterTitle": "Chương 8: Bộ nhớ ảo",
        "chapterDesc": "Kỹ thuật bộ nhớ ảo cho phép thực thi chương trình vượt dung lượng bộ nhớ vật lý: Demand Paging, giải thuật thay trang, cấp phát Frames và Thrashing.",
        "channel": "Duy Phan CE-UIT",
        "channelUrl": "https://www.youtube.com/@DuyPhanCE-UIT"
      },
      {
        "id": "uuaGjgH3Wxo",
        "duration": 899,
        "title": "Video 8.3: Các giải thuật thay trang",
        "chapterId": 8,
        "chapterTitle": "Chương 8: Bộ nhớ ảo",
        "chapterDesc": "Kỹ thuật bộ nhớ ảo cho phép thực thi chương trình vượt dung lượng bộ nhớ vật lý: Demand Paging, giải thuật thay trang, cấp phát Frames và Thrashing.",
        "channel": "Duy Phan CE-UIT",
        "channelUrl": "https://www.youtube.com/@DuyPhanCE-UIT"
      },
      {
        "id": "g7t-JNov5iI",
        "duration": 387,
        "title": "Video 8.4: Vấn đề cấp phát Frames",
        "chapterId": 8,
        "chapterTitle": "Chương 8: Bộ nhớ ảo",
        "chapterDesc": "Kỹ thuật bộ nhớ ảo cho phép thực thi chương trình vượt dung lượng bộ nhớ vật lý: Demand Paging, giải thuật thay trang, cấp phát Frames và Thrashing.",
        "channel": "Duy Phan CE-UIT",
        "channelUrl": "https://www.youtube.com/@DuyPhanCE-UIT"
      },
      {
        "id": "p5QrtdW4gOA",
        "duration": 580,
        "title": "Video 8.5: Vấn đề Thrashing",
        "chapterId": 8,
        "chapterTitle": "Chương 8: Bộ nhớ ảo",
        "chapterDesc": "Kỹ thuật bộ nhớ ảo cho phép thực thi chương trình vượt dung lượng bộ nhớ vật lý: Demand Paging, giải thuật thay trang, cấp phát Frames và Thrashing.",
        "channel": "Duy Phan CE-UIT",
        "channelUrl": "https://www.youtube.com/@DuyPhanCE-UIT"
      }
    ]
  },
  {
    "id": 9,
    "title": "Chương 9: Các hệ điều hành hiện đại",
    "desc": "Khảo sát 02 hệ điều hành hiện đại và phổ biến nhất gồm Linux và Windows: kiến trúc, quản lý tiến trình, bộ nhớ và các thành phần cốt lõi.",
    "videos": [
      {
        "id": "zwsbvlqR5WE",
        "duration": 300,
        "title": "Video 9.1: Giới thiệu Chương 9",
        "chapterId": 9,
        "chapterTitle": "Chương 9: Các hệ điều hành hiện đại",
        "chapterDesc": "Khảo sát 02 hệ điều hành hiện đại và phổ biến nhất gồm Linux và Windows: kiến trúc, quản lý tiến trình, bộ nhớ và các thành phần cốt lõi.",
        "channel": "Duy Phan CE-UIT",
        "channelUrl": "https://www.youtube.com/@DuyPhanCE-UIT"
      },
      {
        "id": "Tu1k8K1THnE",
        "duration": 630,
        "title": "Video 9.2: Tổng quan về Hệ điều hành Linux",
        "chapterId": 9,
        "chapterTitle": "Chương 9: Các hệ điều hành hiện đại",
        "chapterDesc": "Khảo sát 02 hệ điều hành hiện đại và phổ biến nhất gồm Linux và Windows: kiến trúc, quản lý tiến trình, bộ nhớ và các thành phần cốt lõi.",
        "channel": "Duy Phan CE-UIT",
        "channelUrl": "https://www.youtube.com/@DuyPhanCE-UIT"
      },
      {
        "id": "ixO5EZy69Y0",
        "duration": 430,
        "title": "Video 9.3: Các thành phần của Hệ điều hành Linux",
        "chapterId": 9,
        "chapterTitle": "Chương 9: Các hệ điều hành hiện đại",
        "chapterDesc": "Khảo sát 02 hệ điều hành hiện đại và phổ biến nhất gồm Linux và Windows: kiến trúc, quản lý tiến trình, bộ nhớ và các thành phần cốt lõi.",
        "channel": "Duy Phan CE-UIT",
        "channelUrl": "https://www.youtube.com/@DuyPhanCE-UIT"
      },
      {
        "id": "4cpSKayyVQs",
        "duration": 502,
        "title": "Video 9.4: Quản lý tiến trình và Bộ nhớ trong Hệ điều hành Linux",
        "chapterId": 9,
        "chapterTitle": "Chương 9: Các hệ điều hành hiện đại",
        "chapterDesc": "Khảo sát 02 hệ điều hành hiện đại và phổ biến nhất gồm Linux và Windows: kiến trúc, quản lý tiến trình, bộ nhớ và các thành phần cốt lõi.",
        "channel": "Duy Phan CE-UIT",
        "channelUrl": "https://www.youtube.com/@DuyPhanCE-UIT"
      },
      {
        "id": "fTvUxy0mYfY",
        "duration": 351,
        "title": "Video 9.5: Tổng quan về Hệ điều hành Windows",
        "chapterId": 9,
        "chapterTitle": "Chương 9: Các hệ điều hành hiện đại",
        "chapterDesc": "Khảo sát 02 hệ điều hành hiện đại và phổ biến nhất gồm Linux và Windows: kiến trúc, quản lý tiến trình, bộ nhớ và các thành phần cốt lõi.",
        "channel": "Duy Phan CE-UIT",
        "channelUrl": "https://www.youtube.com/@DuyPhanCE-UIT"
      },
      {
        "id": "Ikc_w6qJ1s4",
        "duration": 687,
        "title": "Video 9.6: Các thành phần của Hệ điều hành Windows",
        "chapterId": 9,
        "chapterTitle": "Chương 9: Các hệ điều hành hiện đại",
        "chapterDesc": "Khảo sát 02 hệ điều hành hiện đại và phổ biến nhất gồm Linux và Windows: kiến trúc, quản lý tiến trình, bộ nhớ và các thành phần cốt lõi.",
        "channel": "Duy Phan CE-UIT",
        "channelUrl": "https://www.youtube.com/@DuyPhanCE-UIT"
      }
    ]
  }
];

const FLAT_VIDEOS = [];
CHAPTERS_DATA.forEach(ch => {
  ch.videos.forEach(v => {
    FLAT_VIDEOS.push({
      ...v,
      chapterId: ch.id,
      chapterTitle: ch.title,
      chapterDesc: ch.desc
    });
  });
});

// Initialize State from LocalStorage
const savedExpanded = JSON.parse(localStorage.getItem('it007_expanded_chapters') || 'null');
const STATE = {
  activeVideoId: localStorage.getItem('it007_active_id') || (FLAT_VIDEOS[0] ? FLAT_VIDEOS[0].id : null),
  watchedIds: new Set(JSON.parse(localStorage.getItem('it007_watched_ids') || '[]')),
  autoNext: localStorage.getItem('it007_auto_next') !== 'false',
  filterMode: 'all', // 'all' | 'unwatched' | 'watched'
  searchQuery: '',
  expandedChapters: new Set(savedExpanded || [1]),
  ytPlayer: null,
  isApiReady: false,
  isPlaying: false,
  lastKnownTime: 0
};

// DOM Elements
const elVideoTitle = document.getElementById('current-video-title');
const elChapterBadge = document.getElementById('player-chapter-badge');
const elVideoCounter = document.getElementById('player-counter');
const elChapterDesc = document.getElementById('current-chapter-desc');
const elYtPlayer = document.getElementById('yt-player');
const elBtnPrev = document.getElementById('btn-prev');
const elBtnNext = document.getElementById('btn-next');
const elBtnToggleWatched = document.getElementById('btn-toggle-watched');
const elTextWatchedStatus = document.getElementById('text-watched-status');
const elIconWatchedCheck = document.getElementById('icon-watched-check');
const elBtnOpenYt = document.getElementById('btn-open-yt');
const elBtnCopyLink = document.getElementById('btn-copy-link');
const elChkAutoNext = document.getElementById('chk-auto-next');
const elProgressText = document.getElementById('progress-text');
const elProgressBarFill = document.getElementById('progress-bar-fill');
const elBtnResetProgress = document.getElementById('btn-reset-progress');
const elSearchInput = document.getElementById('syllabus-search');
const elBtnClearSearch = document.getElementById('btn-clear-search');
const elChaptersAccordion = document.getElementById('chapters-accordion');
const elSyllabusCountBadge = document.getElementById('syllabus-count-badge');
const elBtnExpandAll = document.getElementById('btn-expand-all');
const elBtnCollapseAll = document.getElementById('btn-collapse-all');
const elTabUnwatched = document.getElementById('tab-unwatched');
const elTabWatched = document.getElementById('tab-watched');
const elToast = document.getElementById('toast');

/**
 * Show a toast notification (no emoji)
 */
let toastTimeout = null;
function showToast(message) {
  if (!elToast) return;
  elToast.textContent = message;
  elToast.classList.add('show');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    elToast.classList.remove('show');
  }, 2200);
}

/**
 * Save the list of expanded chapters to LocalStorage
 */
function saveExpandedChapters() {
  localStorage.setItem('it007_expanded_chapters', JSON.stringify(Array.from(STATE.expandedChapters)));
}

/**
 * Update the overall progress bar and filter tabs
 */
function updateOverallProgress() {
  const total = FLAT_VIDEOS.length;
  const watchedCount = FLAT_VIDEOS.filter(v => STATE.watchedIds.has(v.id)).length;
  const unwatchedCount = total - watchedCount;
  const percentage = total > 0 ? Math.round((watchedCount / total) * 100) : 0;

  if (elProgressText) {
    elProgressText.textContent = `${watchedCount} / ${total} videos (${percentage}%)`;
  }
  if (elProgressBarFill) {
    elProgressBarFill.style.width = `${percentage}%`;
  }

  if (elTabUnwatched) {
    elTabUnwatched.textContent = `Unwatched (${unwatchedCount})`;
  }
  if (elTabWatched) {
    elTabWatched.textContent = `Watched (${watchedCount})`;
  }

  CHAPTERS_DATA.forEach(ch => {
    const chWatched = ch.videos.filter(v => STATE.watchedIds.has(v.id)).length;
    const chTotal = ch.videos.length;
    const chPercent = chTotal > 0 ? Math.round((chWatched / chTotal) * 100) : 0;

    const countBadge = document.getElementById(`ch-badge-${ch.id}`);
    if (countBadge) {
      countBadge.textContent = `${chWatched}/${chTotal}`;
    }

    const miniBar = document.getElementById(`ch-bar-${ch.id}`);
    if (miniBar) {
      miniBar.style.width = `${chPercent}%`;
    }
  });
}

/**
 * Find a video by ID
 */
function findVideoById(id) {
  return FLAT_VIDEOS.find(v => v.id === id) || null;
}

/**
 * Get the global index of a video (0 to 95)
 */
function getVideoGlobalIndex(id) {
  return FLAT_VIDEOS.findIndex(v => v.id === id);
}

/**
 * Format seconds as a video duration (M:SS or H:MM:SS)
 */
function formatDuration(totalSeconds) {
  const s = Math.max(0, Math.floor(totalSeconds || 0));
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  if (h > 0) {
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
  }
  return `${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
}

/**
 * Format seconds as a chapter total duration (e.g. "3h 24m")
 */
function formatChapterDuration(totalSeconds) {
  const totalMinutes = Math.round((totalSeconds || 0) / 60);
  const h = Math.floor(totalMinutes / 60);
  const m = totalMinutes % 60;
  return h > 0 ? `${h}h ${m}m` : `${m}m`;
}

/**
 * Save the current playback time to LocalStorage
 */
function saveCurrentPlaybackTime() {
  if (STATE.ytPlayer && typeof STATE.ytPlayer.getCurrentTime === 'function' && STATE.activeVideoId) {
    try {
      // Don't save an ended video's position as a resume point
      if (typeof STATE.ytPlayer.getPlayerState === 'function' && STATE.ytPlayer.getPlayerState() === 0) {
        return;
      }
      const time = Math.floor(STATE.ytPlayer.getCurrentTime());
      if (time > 2) {
        localStorage.setItem(`it007_time_${STATE.activeVideoId}`, time.toString());
      }
    } catch (e) {
      // Ignore
    }
  }
}

/**
 * Select a video to play
 */
function selectVideo(videoId, userTriggered = false) {
  const video = findVideoById(videoId);
  if (!video) return;

  saveCurrentPlaybackTime();

  STATE.activeVideoId = video.id;
  localStorage.setItem('it007_active_id', video.id);

  STATE.expandedChapters.add(video.chapterId);
  saveExpandedChapters();

  updatePlayerUI(video);

  // Watched lectures always restart from 0, ignoring any old saved position
  const savedTime = STATE.watchedIds.has(video.id)
    ? 0
    : parseInt(localStorage.getItem(`it007_time_${video.id}`) || '0', 10);
  loadVideoIntoPlayer(video.id, savedTime);

  updateActiveRowInDOM(video.id, video.chapterId);

  if (userTriggered) {
    setTimeout(() => {
      const activeRow = document.querySelector(`.video-row[data-video-id="${video.id}"]`);
      if (activeRow) {
        activeRow.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }, 120);
  }
}

/**
 * Load a video into the YouTube Player
 */
function loadVideoIntoPlayer(videoId, startSeconds = 0) {
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&enablejsapi=1&rel=0&modestbranding=1&fs=1${startSeconds > 0 ? `&start=${startSeconds}` : ''}`;
  
  if (STATE.ytPlayer && typeof STATE.ytPlayer.loadVideoById === 'function') {
    try {
      STATE.ytPlayer.loadVideoById({
        videoId: videoId,
        startSeconds: startSeconds
      });
      return;
    } catch (err) {
      // Fallback
    }
  }

  if (elYtPlayer) {
    elYtPlayer.src = embedUrl;
  }
}

/**
 * Update the info shown on the player controls bar
 */
function updatePlayerUI(video) {
  const globalIdx = getVideoGlobalIndex(video.id);
  const total = FLAT_VIDEOS.length;

  if (elVideoTitle) elVideoTitle.textContent = video.title;
  if (elChapterBadge) elChapterBadge.textContent = `Chapter ${video.chapterId}`;
  if (elVideoCounter) elVideoCounter.textContent = `Lecture ${globalIdx + 1} / ${total}`;
  if (elChapterDesc) elChapterDesc.textContent = `${video.chapterTitle} - ${video.chapterDesc}`;

  if (elBtnPrev) elBtnPrev.disabled = (globalIdx <= 0);
  if (elBtnNext) elBtnNext.disabled = (globalIdx >= total - 1);

  const ytWatchUrl = `https://www.youtube.com/watch?v=${video.id}`;
  if (elBtnOpenYt) elBtnOpenYt.href = ytWatchUrl;

  const isWatched = STATE.watchedIds.has(video.id);
  updateWatchedButtonState(isWatched);
}

/**
 * Update the Watched / Not Watched button's visual state
 */
function updateWatchedButtonState(isWatched) {
  if (!elBtnToggleWatched || !elTextWatchedStatus) return;

  if (isWatched) {
    elBtnToggleWatched.classList.add('btn-watched-active');
    elTextWatchedStatus.textContent = 'Watched';
    if (elIconWatchedCheck) {
      elIconWatchedCheck.innerHTML = `
        <polyline points="20 6 9 17 4 12"></polyline>
      `;
    }
  } else {
    elBtnToggleWatched.classList.remove('btn-watched-active');
    elTextWatchedStatus.textContent = 'Mark as watched';
    if (elIconWatchedCheck) {
      elIconWatchedCheck.innerHTML = `
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      `;
    }
  }
}

/**
 * Toggle watched state for the current video
 */
function toggleCurrentWatched() {
  if (!STATE.activeVideoId) return;
  toggleVideoWatched(STATE.activeVideoId);
}

/**
 * Toggle watched state for any given video
 */
function toggleVideoWatched(id) {
  const isCurrentlyWatched = STATE.watchedIds.has(id);

  if (isCurrentlyWatched) {
    STATE.watchedIds.delete(id);
    showToast('Marked as unwatched');
  } else {
    STATE.watchedIds.add(id);
    showToast('Marked as watched');
  }

  localStorage.setItem('it007_watched_ids', JSON.stringify(Array.from(STATE.watchedIds)));
  
  if (id === STATE.activeVideoId) {
    updateWatchedButtonState(!isCurrentlyWatched);
  }

  const rowEl = document.querySelector(`.video-row[data-video-id="${id}"]`);
  if (rowEl) {
    rowEl.classList.toggle('is-watched', !isCurrentlyWatched);
    const checkBtn = rowEl.querySelector('.check-watched-btn');
    if (checkBtn) {
      checkBtn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          ${!isCurrentlyWatched 
            ? '<circle cx="12" cy="12" r="10" fill="rgba(16,185,129,0.15)"></circle><polyline points="16 9 10 15 7 12"></polyline>' 
            : '<circle cx="12" cy="12" r="10"></circle>'
          }
        </svg>
      `;
    }
  }

  updateOverallProgress();

  if (STATE.filterMode !== 'all') {
    renderSyllabus();
  }
}

/**
 * Update the "now playing" row without a full re-render
 */
function updateActiveRowInDOM(activeId, chapterId) {
  document.querySelectorAll('.video-row.current-playing').forEach(el => {
    el.classList.remove('current-playing');
    const badge = el.querySelector('.playing-badge');
    if (badge) badge.remove();
  });

  document.querySelectorAll('.chapter-item.active-chapter').forEach(el => {
    el.classList.remove('active-chapter');
  });

  const activeChapterEl = document.querySelector(`.chapter-item[data-chapter-id="${chapterId}"]`);
  if (activeChapterEl) {
    activeChapterEl.classList.add('active-chapter');
    activeChapterEl.classList.add('expanded');
  }

  const currentRowEl = document.querySelector(`.video-row[data-video-id="${activeId}"]`);
  if (currentRowEl) {
    currentRowEl.classList.add('current-playing');
    const metaExtra = currentRowEl.querySelector('.video-meta-extra');
    if (metaExtra && !metaExtra.querySelector('.playing-badge')) {
      const badge = document.createElement('span');
      badge.className = 'playing-badge';
      badge.textContent = 'Playing';
      metaExtra.appendChild(badge);
    }
  }
}

/**
 * Switch to the previous lecture
 */
function playPrevVideo() {
  const currentIdx = getVideoGlobalIndex(STATE.activeVideoId);
  if (currentIdx > 0) {
    selectVideo(FLAT_VIDEOS[currentIdx - 1].id, true);
  }
}

/**
 * Switch to the next lecture
 */
function playNextVideo() {
  const currentIdx = getVideoGlobalIndex(STATE.activeVideoId);
  if (currentIdx < FLAT_VIDEOS.length - 1) {
    selectVideo(FLAT_VIDEOS[currentIdx + 1].id, true);
  } else {
    showToast("You've reached the last lecture of the course");
  }
}

/**
 * Render the full syllabus list (9 chapters, YouTube-style accordion)
 */
function renderSyllabus() {
  if (!elChaptersAccordion) return;

  const query = STATE.searchQuery.trim().toLowerCase();
  elChaptersAccordion.innerHTML = '';

  let totalVisibleVideos = 0;

  CHAPTERS_DATA.forEach(chapter => {
    const filteredVideos = chapter.videos.filter(v => {
      const matchesSearch = query === '' ||
        v.title.toLowerCase().includes(query) ||
        v.id.toLowerCase().includes(query) ||
        (v.chapterTitle || '').toLowerCase().includes(query) ||
        (v.chapterDesc || '').toLowerCase().includes(query);
      
      const isWatched = STATE.watchedIds.has(v.id);
      let matchesFilter = true;
      if (STATE.filterMode === 'unwatched') matchesFilter = !isWatched;
      if (STATE.filterMode === 'watched') matchesFilter = isWatched;

      return matchesSearch && matchesFilter;
    });

    if (query !== '' && filteredVideos.length === 0) {
      return;
    }

    totalVisibleVideos += filteredVideos.length;

    const chWatched = chapter.videos.filter(v => STATE.watchedIds.has(v.id)).length;
    const chTotal = chapter.videos.length;
    const chPercent = chTotal > 0 ? Math.round((chWatched / chTotal) * 100) : 0;
    const chDuration = chapter.videos.reduce((sum, v) => sum + (v.duration || 0), 0);
    const isExpanded = query !== '' || STATE.expandedChapters.has(chapter.id);
    const hasActiveVideo = chapter.videos.some(v => v.id === STATE.activeVideoId);

    const chapterEl = document.createElement('div');
    chapterEl.className = `chapter-item ${isExpanded ? 'expanded' : ''} ${hasActiveVideo ? 'active-chapter' : ''}`;
    chapterEl.setAttribute('data-chapter-id', chapter.id);

    chapterEl.innerHTML = `
      <div class="chapter-header" data-action="toggle-chapter" data-chapter-id="${chapter.id}">
        <div class="chapter-header-left">
          <span class="chapter-title-text">${chapter.title}</span>
          <div class="chapter-progress-row">
            <div class="chapter-mini-bar">
              <div id="ch-bar-${chapter.id}" class="chapter-mini-bar-fill" style="width: ${chPercent}%;"></div>
            </div>
            <span class="chapter-desc-text">${chWatched}/${chTotal} completed &bull; ${formatChapterDuration(chDuration)}</span>
          </div>
        </div>
        <div class="chapter-header-right">
          <span id="ch-badge-${chapter.id}" class="chapter-badge-count">${chWatched}/${chTotal}</span>
          <div class="chapter-chevron">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </div>
      </div>
      <div class="video-list">
        ${
          filteredVideos.length === 0 
            ? '<div class="empty-search-state">No matching lectures</div>'
            : filteredVideos.map((v) => {
                const isCurrent = v.id === STATE.activeVideoId;
                const isWatched = STATE.watchedIds.has(v.id);
                return `
                  <div class="video-row ${isCurrent ? 'current-playing' : ''} ${isWatched ? 'is-watched' : ''}" data-video-id="${v.id}">
                    <button class="check-watched-btn" data-action="toggle-watched-btn" data-video-id="${v.id}" title="${isWatched ? 'Watched (click to change)' : 'Not watched (click to mark as watched)'}">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        ${isWatched 
                          ? '<circle cx="12" cy="12" r="10" fill="rgba(16,185,129,0.15)"></circle><polyline points="16 9 10 15 7 12"></polyline>' 
                          : '<circle cx="12" cy="12" r="10"></circle>'
                        }
                      </svg>
                    </button>
                    <div class="video-thumb-container" style="background-image: url('https://img.youtube.com/vi/${v.id}/mqdefault.jpg');">
                      <span class="video-time-badge">${formatDuration(v.duration)}</span>
                    </div>
                    <div class="video-meta-col">
                      <span class="video-meta-title" title="${v.title}">${v.title}</span>
                      <span class="video-meta-channel">${v.channel || 'YouTube'}</span>
                      <div class="video-meta-extra">
                        <span>Chapter ${v.chapterId}</span>
                        ${isCurrent ? '<span class="playing-badge">Playing</span>' : ''}
                      </div>
                    </div>
                  </div>
                `;
              }).join('')
        }
      </div>
    `;

    const headerEl = chapterEl.querySelector('.chapter-header');
    headerEl.addEventListener('click', (e) => {
      const isNowExpanded = chapterEl.classList.toggle('expanded');
      if (isNowExpanded) {
        STATE.expandedChapters.add(chapter.id);
      } else {
        STATE.expandedChapters.delete(chapter.id);
      }
      saveExpandedChapters();
    });

    const rowEls = chapterEl.querySelectorAll('.video-row');
    rowEls.forEach(row => {
      row.addEventListener('click', (e) => {
        if (e.target.closest('[data-action="toggle-watched-btn"]')) {
          e.stopPropagation();
          const targetId = row.getAttribute('data-video-id');
          toggleVideoWatched(targetId);
          return;
        }

        const vid = row.getAttribute('data-video-id');
        selectVideo(vid, true);
      });
    });

    elChaptersAccordion.appendChild(chapterEl);
  });

  if (totalVisibleVideos === 0) {
    elChaptersAccordion.innerHTML = `
      <div class="empty-search-state">
        <p>No lectures found matching <b>"${query}"</b></p>
      </div>
    `;
  }

  if (elSyllabusCountBadge) {
    elSyllabusCountBadge.textContent = `${totalVisibleVideos} / ${FLAT_VIDEOS.length} videos`;
  }
}

/**
 * Set up all interaction event listeners
 */
function setupEventListeners() {
  if (elBtnPrev) elBtnPrev.addEventListener('click', playPrevVideo);
  if (elBtnNext) elBtnNext.addEventListener('click', playNextVideo);
  if (elBtnToggleWatched) elBtnToggleWatched.addEventListener('click', toggleCurrentWatched);

  if (elChkAutoNext) {
    elChkAutoNext.checked = STATE.autoNext;
    elChkAutoNext.addEventListener('change', (e) => {
      STATE.autoNext = e.target.checked;
      localStorage.setItem('it007_auto_next', STATE.autoNext ? 'true' : 'false');
      showToast(STATE.autoNext ? 'Đã bật tự động chuyển bài' : 'Đã tắt tự động chuyển bài');
    });
  }

  if (elBtnCopyLink) {
    elBtnCopyLink.addEventListener('click', () => {
      const video = findVideoById(STATE.activeVideoId);
      if (!video) return;

      // Include current playback position (?t=) if available
      let startAt = 0;
      if (STATE.ytPlayer && typeof STATE.ytPlayer.getCurrentTime === 'function') {
        try {
          startAt = Math.floor(STATE.ytPlayer.getCurrentTime() || 0);
        } catch (err) {
          startAt = 0;
        }
      }
      if (!startAt) {
        startAt = parseInt(localStorage.getItem(`it007_time_${video.id}`) || '0', 10) || 0;
      }

      const url = startAt > 0
        ? `https://www.youtube.com/watch?v=${video.id}&t=${startAt}s`
        : `https://www.youtube.com/watch?v=${video.id}`;
      navigator.clipboard.writeText(url).then(() => {
        showToast('Đã sao chép liên kết video vào bộ nhớ tạm');
      }).catch(() => {
        showToast('Không thể sao chép liên kết');
      });
    });
  }

  if (elBtnResetProgress) {
    elBtnResetProgress.addEventListener('click', () => {
      if (confirm('Bạn có chắc chắn muốn đặt lại toàn bộ tiến độ học tập (xóa tất cả đánh dấu đã hoàn thành)?')) {
        STATE.watchedIds.clear();
        localStorage.removeItem('it007_watched_ids');
        FLAT_VIDEOS.forEach(v => localStorage.removeItem(`it007_time_${v.id}`));
        updateOverallProgress();
        updateWatchedButtonState(false);
        renderSyllabus();
        showToast('Đã đặt lại tiến độ học tập');
      }
    });
  }

  if (elSearchInput) {
    elSearchInput.addEventListener('input', (e) => {
      STATE.searchQuery = e.target.value;
      if (elBtnClearSearch) {
        elBtnClearSearch.classList.toggle('hidden', STATE.searchQuery.length === 0);
      }
      renderSyllabus();
    });
  }

  if (elBtnClearSearch) {
    elBtnClearSearch.addEventListener('click', () => {
      if (elSearchInput) elSearchInput.value = '';
      STATE.searchQuery = '';
      elBtnClearSearch.classList.add('hidden');
      renderSyllabus();
      if (elSearchInput) elSearchInput.focus();
    });
  }

  const filterChips = document.querySelectorAll('.yt-chip');
  filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      filterChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      STATE.filterMode = chip.getAttribute('data-filter');
      renderSyllabus();
    });
  });

  if (elBtnExpandAll) {
    elBtnExpandAll.addEventListener('click', () => {
      CHAPTERS_DATA.forEach(ch => STATE.expandedChapters.add(ch.id));
      saveExpandedChapters();
      document.querySelectorAll('.chapter-item').forEach(el => el.classList.add('expanded'));
    });
  }

  if (elBtnCollapseAll) {
    elBtnCollapseAll.addEventListener('click', () => {
      STATE.expandedChapters.clear();
      saveExpandedChapters();
      document.querySelectorAll('.chapter-item').forEach(el => el.classList.remove('expanded'));
    });
  }

  setInterval(saveCurrentPlaybackTime, 2000);
  window.addEventListener('beforeunload', saveCurrentPlaybackTime);

  // Return focus to window when the mouse leaves the video frame
  const playerWrapper = document.querySelector('.yt-player-wrapper');
  if (playerWrapper) {
    playerWrapper.addEventListener('mouseleave', () => {
      if (document.activeElement && document.activeElement.tagName === 'IFRAME') {
        document.activeElement.blur();
        window.focus();
      }
    });
  }

  document.addEventListener('pointerdown', (e) => {
    if (e.target && e.target.tagName !== 'IFRAME') {
      window.focus();
    }
  });

  // Handle all keyboard shortcuts (Space, N, P, Left/Right arrows, F)
  window.addEventListener('keydown', (e) => {
    // Don't trigger shortcuts while typing in the search input
    if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.isContentEditable)) {
      return;
    }

    if (e.code === 'Space' || e.key === ' ') {
      e.preventDefault();
      togglePlayPause();
    } else if (e.key === 'ArrowLeft' || e.code === 'ArrowLeft') {
      e.preventDefault();
      seekRelative(-5);
    } else if (e.key === 'ArrowRight' || e.code === 'ArrowRight') {
      e.preventDefault();
      seekRelative(5);
    } else if (e.key === 'n' || e.key === 'N') {
      e.preventDefault();
      playNextVideo();
    } else if (e.key === 'p' || e.key === 'P') {
      e.preventDefault();
      playPrevVideo();
    } else if (e.key === 'f' || e.key === 'F') {
      e.preventDefault();
      toggleFullScreen();
    }
  });
}

/**
 * Send a postMessage command directly to the YouTube iframe
 */
function postMessageToPlayer(func, args = []) {
  const iframe = document.getElementById('yt-player');
  if (iframe && iframe.contentWindow) {
    iframe.contentWindow.postMessage(JSON.stringify({
      event: 'command',
      func: func,
      args: args
    }), '*');
  }
}

/**
 * Play / Pause video (Space key)
 */
function togglePlayPause() {
  if (STATE.ytPlayer && typeof STATE.ytPlayer.getPlayerState === 'function') {
    try {
      const state = STATE.ytPlayer.getPlayerState();
      if (state === 1) { // 1 = PLAYING
        STATE.ytPlayer.pauseVideo();
        STATE.isPlaying = false;
        showToast('Tạm dừng');
        return;
      } else {
        STATE.ytPlayer.playVideo();
        STATE.isPlaying = true;
        showToast('Phát tiếp');
        return;
      }
    } catch (err) {
      console.warn('ytPlayer API call failed:', err);
    }
  }

  // Fallback via postMessage
  if (STATE.isPlaying) {
    postMessageToPlayer('pauseVideo');
    STATE.isPlaying = false;
    showToast('Tạm dừng');
  } else {
    postMessageToPlayer('playVideo');
    STATE.isPlaying = true;
    showToast('Phát tiếp');
  }
}

/**
 * Seek by N seconds (Left arrow -5s, Right arrow +5s)
 */
function seekRelative(seconds) {
  if (STATE.ytPlayer && typeof STATE.ytPlayer.getCurrentTime === 'function') {
    try {
      const currentTime = STATE.ytPlayer.getCurrentTime() || 0;
      const targetTime = Math.max(0, currentTime + seconds);
      STATE.ytPlayer.seekTo(targetTime, true);
      STATE.lastKnownTime = targetTime;
      showToast(seconds > 0 ? `Tua tới +${seconds}s` : `Tua lùi ${seconds}s`);
      return;
    } catch (err) {
      console.warn('ytPlayer seek failed:', err);
    }
  }

  // Fallback with an estimated time
  const targetTime = Math.max(0, (STATE.lastKnownTime || 0) + seconds);
  STATE.lastKnownTime = targetTime;
  postMessageToPlayer('seekTo', [targetTime, true]);
  showToast(seconds > 0 ? `Tua tới +${seconds}s` : `Tua lùi ${seconds}s`);
}

/**
 * Toggle fullscreen mode (F key)
 */
function toggleFullScreen() {
  const iframe = document.getElementById('yt-player');
  if (!iframe) return;
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else if (iframe.requestFullscreen) {
    iframe.requestFullscreen();
  } else if (iframe.webkitRequestFullscreen) {
    iframe.webkitRequestFullscreen();
  }
}

/**
 * Load the YouTube IFrame Player API
 */
function initYouTubeApi() {
  const tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  const firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  window.onYouTubeIframeAPIReady = function() {
    STATE.isApiReady = true;
    STATE.ytPlayer = new YT.Player('yt-player', {
      events: {
        'onStateChange': onPlayerStateChange
      }
    });
  };
}

/**
 * Handle player state changes
 */
function onPlayerStateChange(event) {
  if (event.data === 1) {
    // Playing
    STATE.isPlaying = true;
  } else if (event.data === 2) {
    // Paused
    STATE.isPlaying = false;
  } else if (event.data === 0) {
    // Ended
    STATE.isPlaying = false;
    if (STATE.activeVideoId) {
      // Clear the resume point now that the video has ended
      localStorage.removeItem(`it007_time_${STATE.activeVideoId}`);

      if (!STATE.watchedIds.has(STATE.activeVideoId)) {
        STATE.watchedIds.add(STATE.activeVideoId);
        localStorage.setItem('it007_watched_ids', JSON.stringify(Array.from(STATE.watchedIds)));
        updateOverallProgress();
        updateWatchedButtonState(true);
        const rowEl = document.querySelector(`.video-row[data-video-id="${STATE.activeVideoId}"]`);
        if (rowEl) rowEl.classList.add('is-watched');
      }
    }

    if (STATE.autoNext) {
      setTimeout(() => {
        playNextVideo();
      }, 900);
    }
  }
}

/**
 * Boot the app once the page has loaded
 */
function init() {
  initYouTubeApi();
  setupEventListeners();
  renderSyllabus();
  updateOverallProgress();

  const initialId = STATE.activeVideoId || FLAT_VIDEOS[0].id;
  const initialVideo = findVideoById(initialId) || FLAT_VIDEOS[0];
  
  if (initialVideo) {
    selectVideo(initialVideo.id, false);
  }
}

document.addEventListener('DOMContentLoaded', init);
