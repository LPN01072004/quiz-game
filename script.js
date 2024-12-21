const questions = [
    {
        question: "Cách biểu diễn số âm trong máy tính là gì?",
        answers: [
            { text: "Sử dụng mã bù 10", correct: false },
            { text: "Đảo bit tất cả các giá trị nhị phân dương tương ứng", correct: false },
            { text: "Thêm dấu trừ vào trước giá trị nhị phân dương tương ứng", correct: false },
            { text: "Sử dụng mã bù 2", correct: true },
        ]
    },
    {
        question: "Trong chuẩn IEEE 754/85 thuật ngữ độ chính xác kép đề cập tới?",
        answers: [
            { text: "Số lượng bit dùng để biểu diễn số thực độ chính xác nhiều gấp 2 lần số lượng bit dùng để biểu diễn số thực độ chính xác đơn", correct: true },
            { text: "Dải biểu diễn số thực độ chính xác kép lớn gấp 2 lần dải biểu diễn số thực độ chính xác đơn", correct: false },
            { text: "Số lượng các bit sau dấu phẩy trong biểu diễn số thực độ chính xác kép nhiều gấp hai lần so với khi biểu diễn ở dạng số thực chính xác đơn", correct: false },
            { text: "Số thực độ chính xác kép biểu diễn số thực có dấu, trong khi số thực độ chính xác đơn biểu diễn số thực không dấu", correct: false },
        ]
    },
    {
        question: "Trong Microsoft PowerPoint, để thay đổi bố cục của slide hiện tại ta làm như sau:",
        answers: [
            { text: "vào thẻ Home, trong phần Slides, chọn Layout", correct: true },
            { text: "vào thẻ Home, chọn Section", correct: false },
            { text: "vào thẻ Design, chọn Layout", correct: false },
            { text: "vào thẻ Design, chọn Section", correct: false },
        ]
    },
    {
        question: "Phát biểu nào sau đây là SAI về CPU?",
        answers: [
            { text: "Các thành phần chính của CPU bao gồm CU, ALU, và tập các thanh ghi", correct: false },
            { text: "CPU hoạt động theo chương trình nằm trong bộ nhớ chính", correct: false, explanation: "CPU thực hiện lệnh dựa trên các chương trình lưu trong bộ nhớ chính (RAM). Bộ nhớ chính chứa các lệnh và dữ liệu cần thiết để CPU xử lý. CPU đọc các lệnh này từ RAM qua quá trình gọi là 'fetch-decode-execute' (lấy, giải mã, thực thi)." },
            { text: "Tốc độ của CPU phụ thuộc vào tần só xung nhịp của đồng hồ", correct: false, explanation: "Tần số xung nhịp (clock speed) là một trong những yếu tố quan trọng quyết định tốc độ của CPU. Nó đo tốc độ mà CPU có thể thực hiện các chu kỳ lệnh trong một giây, thường được tính bằng GHz (gigahertz)" },
            { text: "CPU đảm nhận tất cả các chức năng của hệ thống máy tính.", correct: true, explanation: "CPU chỉ đảm nhận các chức năng xử lý trung tâm, bao gồm tính toán và điều khiển." }
        ]
    },
    {
        question: "Trong MS Word, muốn tạo các đường, các hình vẽ trong văn bản ta thực hiện các bước nào?",
        answers: [
            { text: "Home - chọn Shapes trong nhóm Illustrations", correct: false },
            { text: "Insert - chọn Shapes trong nhóm Illustrations", correct: true },
            { text: "Insert - chọn Shapes trong nhóm Text", correct: false },
            { text: "View - chọn Shapes trong nhóm Illustrations", correct: false },
        ]
    },
    {
        question: "Trong MS Word, tổ hợp phím nào cho phép đưa con trỏ về đầu văn bản?",
        answers: [
            { text: "CLTR + ALT + HOME", correct: false },
            { text: "ALT + HOME", correct: false },
            { text: "CLTR + HOME", correct: true },
            { text: "SHIFT + HOME", correct: false },
        ]
    },
    {
        question: "Hệ đếm cơ số r (r >= 2 và nguyên dương) sử dụng bao nhiêu chữ số?",
        answers: [
            { text: "Có r-1 chữ số", correct: false },
            { text: "Có 10 chữ số", correct: false },
            { text: "Có 2 chữ số là 0 và r - 1", correct: false },
            { text: "Có r chữ số", correct: true },
        ]
    },
    {
        question: "Trong MS Excel, để chọn các dòng kế nhau thì trong số các cách dưới đây đâu là cách làm SAI?",
        answers: [
            { text: "Nhấn giữ phím CLTR và nhấn chuột trái vào chỉ số các dòng muốn chọn", correct: false },
            { text: "Nhấn giữ chuột trái và kéo di chuột từ chỉ số đầu tiên đến dòng cuối cùng muốn chọn", correct: false },
            { text: "Nhấn giữ chuột trái và kéo di chuột từ chỉ số dòng cuối cùng đến chỉ số dòng đầu tiên muốn chọn", correct: false },
            { text: "Nhấn giữ phím SHIFT và nhấn chuột phải vào chỉ số các dòng muốn chọn", correct: true },
        ]
    },
    {
        question: "Trong MS Excel, vùng Formula Bar có tác dụng gì?",
        answers: [
            { text: "Hiển thị công thức và nội dung của ô", correct: true },
            { text: "Hiển thị địa chỉ (các) ô hiện hành và tên của vùng đang chọn.", correct: false },
            { text: "Các lề dữ liệu của ô", correct: false },
            { text: "Hiển thị danh sách các công thức có thể sử dụng", correct: false },
        ]
    },
    {
        question: "Trong MS Word, muốn đặt văn bản theo chiều giấy ngang ta chọn chức năng nào?",
        answers: [
            { text: "Landscape", correct: true },
            { text: "Right", correct: false },
            { text: "Portrait", correct: false },
            { text: "Left", correct: false },
        ]
    },
    {
        question: "Thao tác nào dưới đây được dùng để chọn nhiều đối tượng không liên tiếp nhau trong hệ điều hành Windows?",
        answers: [
            { text: "Nhấn CTRL và nháy chuột vào từng đối tượng", correct: true},
            { text: "Nhấn chuột vào từng đối tượng", correct: false},
            { text: "Nhấn phải chuột lại từng đối tượng", correct: false},
            { text: "Nhấn giữ SHIFT và nháy chuột từng đối tượng", correct: false},
        ]
    },
    {
        question: "Chức năng nào sau đây không phải chức năng của hệ điều hành?",
        answers: [
            { text: "Quản lí các luồng thông tin vào ra", correct: false},
            { text: "Dịch và thực hiện các chương trình nguồn", correct: true},
            { text: " Bảo mật", correct: false},
            { text: " Quản lí các tệp tin", correct: false},
        ]
    },
    {
        question: "Số nhị phân 11001.01001 có biểu diễn trong hệ đếm cơ số 8 là:",
        answers: [
            { text: "61.21", correct: false},
            { text: "31.22", correct: true},
            { text: "61.22", correct: false},
            { text: " 31.21", correct: false},
        ]
    },
    {
        question: "Trong MS Excel, kết quả trả lại của công thức = IF(20>3, 130, \"Hello\") là gì?",
        answers: [
            { text: "130", correct: true},
            { text: "#VALUE!", correct: false},
            { text: "Hello", correct: false},
            { text: "#N/A", correct: false},
        ] 
    },
    {
        question: "Trong quá trình thiết kế bản trình chiếu tạo một slide dưới dạng so sánh ta thực hiện các thao tác nào?",
        answers: [
            { text: "Vào thẻ Home, chọn Section Header trong New Slide", correct: false},
            { text: "Vào thẻ Home, chọn Comparison trong New Slide", correct: true},
            { text: "Vào thẻ Design, chọn Slide Orientation", correct: false},
            { text: "Vào thẻ Insert, chọn Comparison", correct: false},
        ]
    },
    {
        question: "Đâu không phải thành phần của cửa sổ Windows?",
        answers: [
            { text: "Thanh cuốn(scroll bar)", correct: false},
            { text: "Thanh công cụ (Tool bar)", correct: false},
            { text: "Thanh tiêu đề (Title bar)", correct: false},
            { text: "Thanh thước kẻ (Ruler)", correct: true},
        ]
    },
    {
        question: "CPU lưu mã lệnh đang thực hiện ở đâu?",
        answers: [
            { text: "ALU", correct: false},
            { text: "CU", correct: false},
            { text: "Bus bên trong", correct: false},
            { text: "Thanh ghi", correct: true}
        ]
    },
    
    {
        question: "Trong MS Word, muốn thay đổi chiều cao của hàng trong bảng, trong thẻ Layout của nhóm thẻ Table Tools ta chọn chức năng nào?",
        answers: [
            { text: "Height", correct: true},
            { text: "Width", correct: false},
            { text: "Rows", correct: false},
            { text: "Columns", corrects: false},
        ]
    },
    {
        question: "Cho khai báo kt = 'A', biến kt chiếm bao nhiêu byte?",
        answers: [
            { text: "1", correct: true},
            { text: "2", correct: false},
            { text: "3", correct: false},
            { text: "4", correct: false},
        ]
    },
    {
        question: "1 byte bằng bao nhiêu bit?",
        answers: [
            { text: "8", correct: true},
            { text: "16", correct: false},
            { text: "18", correct: false}, 
            { text: "24", correct: false},
        ]
    },
    {
        question: "Trong MS PowerPoint, để tạo 1 Slide giống hệt trang slide hiện tại ta kích chuột phải tại Slide đó và chọn?",
        answers: [
            { text: "New Slide", correct: false},
            { text: "Duplicate", correct: false},
            { text: "Duplicate Slide", correct: true},
            { text: "New", correct: false},
        ]
    },
    {
        question: "Trong MS Excel, vùng Name Box có tác dụng gì?",
        answers: [
            { text: "Hiển thị dữ liệu căn ô", correct: false},
            { text: " Hiển thị công thức của ô", correct: false},
            { text: "Canh lề dữ liệu cho ô", correct: false},
            { text: "Hiển thị các địa chỉ ô hiện hành và tên vùng ô", correct: true},
        ]
    },
    {
        question: "Độ ưu tiên của toán tử logic là?",
        answer: [
            { text:"NOT, OR, AND", correct: false},
            { text: "NOT AND OR", correct: true},
            { text: "OR, NOT, AND",correct: false},
            { text: "AND, NOT, OR", correct: false},
        ]
    },
    {
        question: "Trong MS Word, Header và Footer không cho phép đối tượng nào?",
        answers: [
            { text: "Chuỗi kí tự ", correct: false},
            { text: "Số", correct: false},
            { text: "Drop Cap", correct: true},
            { text: "Hình ảnh", correct: false},
        ]
    },
    {
        question: "số nhị phân 101.11 có giá trị bằng bao nhiêu trong hệ thập phân?",
        answers: [
            { text: "7.5", correct: false},
            { text: "5.525", correct: false},
            { text: "5.75", correct: true},
            { text: "7.75", correct: false},
        ]
    },
    {
        question: "Trong MS Excel, để đếm số ô chứa giá trị lớn hơn 100 trong vùng từ E4 tới E9, ta sử dụng công thức nào?",
        answers: [
            { text: "COUNTIF(E4..E9,&gt;100", correct: false},
            { text: "COUNTIF(E4:E9,\"&gt;100\")", correct: true},
            { text: "COUNTIF(E4:E9,  \"&gt;100\")", correct: false},
            { text: "COUNTIF(E4..E9,\"&gt;100\")", correct: false},

        ]
    },
    {
        question: "Muốn vẽ biểu đồ thể hiện tỷ lệ giữa các thành phần so với toàn thể, ta chọn loại biểu đồ nào?",
        answers : [
            { text: "Pie", correct: true},
            { text: "Line", correct: false},
            { text: "Column", correct: false},
            { text: "Bar", correct: false},
        ]
    },
    {
        question: "Đâu không phải là một hệ điều hành?",
        answers: [
            { text: "UNIX", correct: false},
            { text: "Google Chrome", correct: true},
            { text: "Linux", correct: false},
            { text: "Microsoft Window", correct: true},
        ]
    },
    {
        question: "Tập hợp các trang tính trong một file Excel được gọi là gì?",
        answers: [
            { text: "Document", correct: false},
            { text: "Sheet", correct: false},
            { text: "Book", correct: true},
            { text: "Presenation", correct: false},
        ]
    },
    {
        question: "Trong MS Word, để tạo chữ nghệ thuật, ta chọn chức năng nào?",
        answers: [
            { text: "Insert-Quick Parts", correct: false},
            { text: "Insert-Text Box", correct: false},
            { text: "Insert-SmartArt", correct: false},
            { text: "Insert-WordArt", correct: true},
        ]
    },
    {
        question: "Trong Microsoft PowerPoint, Transition là gì?",
        answers: [
            { text: "là hiệu ứng chuyển trang slide", correct: true},
            { text: "Là hiệu ứng động cho các đối tượng trong slide", correct: false},
            { text: "Là hiệu ứng chỉ tác động với các đối tượng đồ họa", correct: false},
            { text: "Là hiệu ứng chỉ tác động với các bảng", correct: false},
        ] 
    },
    {
        question: "Các thành phần của CPU bảo gồm:",
        answers: [
            { text: "Input-Output System, Bus, Bộ nhớ chính", correct: false},
            { text: "Control Unit, Bộ nhớ trong, Registers", correct: false},
            { text: "Control Unit, Bộ nhớ ngoài, Registers", correct: true},
            { text: "Control Unit, ALU, Registers", correct: false},
        ] 
    },
    {
        question: "Trong Microsoft Excel (2013, 2016, 2019), một trang tính có tổng số bao nhiêu dòng và được đánh số như thế nào?",
        answers: [
          { text: "1048576 dòng, được đánh số 1,2,3.... 1048576", correct: true },
          { text: "1048576 dòng, được đánh số A, B,C,...Z,....XFD", correct: false },
          { text: "65536 dòng, được đánh số A,B,C,...Z,....IV", correct: false },
          { text: "65536 dòng, được đánh số 1,2,3.... 65536", correct: false }
        ]
      },
      {
        question: "Cho các số nguyên không dấu: X=6A (hệ 16), Y= 153 (hệ 8), Z=105 (hệ 10). Thứ tự sắp xếp giảm dần là",
        answers: [
          { text: "X, Y, Z", correct: false },
          { text: "Y, X, Z", correct: true },
          { text: "Y, Z, X", correct: false },
          { text: "Z, X, Y", correct: false }
        ]
      },
      {
        question: "Câu nào sau đây đúng?",
        answers: [
            { text: "Ur doing so good little princess, ur gonna get max score in the final exam for this IT course princess", correct: true},
            { text: "Ur the best of the best princess, Im so proud of u and you may get max score for the final IT's exam", correct: true},
            { text: "Fighting fighting little princess, u can get it, you will get an A in this class little princess", correct: true},
            { text: "When you reach this question, I know you put a lot of effort in this course. So i wish little princess will have a very very high score in this exam", correct: true },
        ]
      }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const imageElement = document.getElementById("question-image");
let currentQuestionsIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionsIndex = 0;
    score = 0;
    nextButton.innerHTML = 'Next';
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionsIndex];
    let questionNo = currentQuestionsIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    if (currentQuestion.image) {
        imageElement.src = currentQuestion.image;
        imageElement.style.display = "block";
        
        // Fix the pixel size of the image
        imageElement.style.width = "300px"; // Set width to 300px (adjust as needed)
        imageElement.style.height = "auto"; // Keep the aspect ratio (adjust height automatically)
    } else {
        imageElement.style.display = "none";
    }

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.dataset.explanation = answer.explanation || ""; // Ensuring there's an explanation
        button.addEventListener("click", selectAnswer);
    });
}


function resetState() {
    nextButton.style.display = 'none';
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
    imageElement.style.display = "none";
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    const explanation = selectedBtn.dataset.explanation;

    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    const explanationElement = document.createElement("p");
    explanationElement.innerHTML = explanation;
    explanationElement.classList.add("explanation");
    answerButton.appendChild(explanationElement);

    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = 'Play Again';
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionsIndex++;
    if (currentQuestionsIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionsIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();
