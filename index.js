const giftBox = document.getElementById('giftBox');
const message = document.getElementById('message');
const birthdayText = document.getElementById("birthdayText");
const birthdayMusic = document.getElementById("birthdayMusic");

const texts = [
  "Chúc em tháng 10 tuổi mới full niềm vui vẻ , chúc mọi nỗi buồn đều tan biến 🥳🔥",
  "Chúc cho mong ước của em đều thành thực chúc cho những chuyện trong tương lai đều thành công rực rỡ😎✨",
  "Chúc em tuổi mới thật bình an, đủ mạnh mẽ giữ lấy điều xứng đáng, đủ dịu dàng để lấy yêu thương chình mình,em xứng đáng được yêu thương một cách đủ đầy và an yên🎁🎉",
  "Dù cho bao nhiêu ngày tháng trôi qua, dù em im lặng hay chọn hướng đi khác trong lòng anh vẫn chỉ có em, Anh vẫn còn yêu em nhiều hơn cả những gì anh có thể diễn bằng lời Anh Yêu Emm🎁🎉 ",
  "Cảm ơn em đã cho anh được trong cuộc sống của em , Wishing you a day that is as special you are✨🎁",
  
];

giftBox.addEventListener('click', () => {
    giftBox.style.display = 'none';
    setTimeout(() => {
        message.style.display = 'block';
    
        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
            confetti.style.animationDelay = `${Math.random() * 5}s`;
            document.body.appendChild(confetti);
        }
    }, 1000);
    birthdayMusic.play();
});

function typeWriter(texts, element, textIndex = 0, i = 0) {
    if (textIndex < texts.length) {
        const text = texts[textIndex];
        if (i < text.length) {
        element.innerHTML += text.charAt(i);
        setTimeout(() => typeWriter(texts, element, textIndex, i + 1), 40); // Tốc độ gõ
        } else {
        setTimeout(() => {
            element.innerHTML += '<br>'; // Xóa nội dung cũ
            typeWriter(texts, element, textIndex + 1); // Chuyển sang đoạn văn tiếp theo
        }, 2000); // Đợi 2 giây rồi chuyển quan đoạn khác
        }
    } else {
        // Thêm gif
        setTimeout(() => {
        const imgGift = document.createElement('div');
        imgGift.classList.add('img-gift');
        message.appendChild(imgGift);
        }, 1500);
    }
}

giftBox.addEventListener("click", () => {
  message.classList.remove("hidden");
  message.classList.add("show");

  setTimeout(() => {
    typeWriter(texts, birthdayText);
  }, 3500);
});