const memories = [
    {
        message: 'สวัสดีคุณแฟนนี่เราก็คบกันมา 1 ปี 2 เดือนแล้วนะ Happy Aniversary ♡ ',
        image: 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExOW05eDUwMjhmZGxjZ3Z3ZXdnNDV5ZGg3anQzdTFsNnhiMTZmcWE2byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/h0ZXYo3ZKIvrwjRT9p/giphy.webp',
    },
    {
        message: 'ขอบคุณที่อยู่ด้วยกันมา 1 ปี 2 เดือน คุณแฟนที่น่ารัก',
        image: 'https://media.giphy.com/media/vX1C2TejT6OCOz2kLd/giphy.gif?cid=790b7611yq4b6pq33tan22pco2todvqdheq6kqbba7yg6uj7&ep=v1_gifs_search&rid=giphy.gif&ct=g',
    },
    {
        message: 'หลังจากนี้ก็อยู่ด้วยกันไปนานๆเลยนะ MEEN Love SOMJEED ♡ ',
        image: 'https://media.giphy.com/media/FETNK5hOJaanJsg0Sh/giphy.gif?cid=ecf05e47i9cf7g8ulv4r656fr6nextc2w4ux8neln2pozkv5&ep=v1_gifs_related&rid=giphy.gif&ct=g',
    },
    {
        message: 'I’m the luckiest person because I have you <3',
        image: 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWNjMmdyeTBzcGllcDMwenUweGFtZHAxZ2dycXp2a2R3aGd2MXJ4dCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/j3r0Ef8wM7Qb8PoLM7/giphy.webp'}
];

const imageEl = document.getElementById('image');
const messageEl = document.getElementById('message');
const nextEl = document.getElementById('next');
const prevEl = document.getElementById('prev');

let index = 0;

const render = () => {
    const { image, message } = memories[index];

    // แสดงภาพและข้อความ
    imageEl.style['background-image'] = `url(${image})`;
    messageEl.textContent = message;

    // การแสดงผลของปุ่ม
    if (index === 0) {
        prevEl.style.display = 'none';  // ซ่อนปุ่มย้อนกลับเมื่ออยู่ที่ข้อความแรก
    } else {
        prevEl.style.display = 'block';  // แสดงปุ่มย้อนกลับเมื่อไม่อยู่ที่ข้อความแรก
    }

    if (index === memories.length - 1) {
        nextEl.style.display = 'none';  // ซ่อนปุ่ม "อ่านต่อ" เมื่อถึงข้อความสุดท้าย
    } else {
        nextEl.style.display = 'block';  // แสดงปุ่ม "อ่านต่อ" เมื่อไม่ถึงข้อความสุดท้าย
    }
};

// คลิกปุ่ม "อ่านต่อดูสิ"
nextEl.addEventListener('click', () => {
    if (index < memories.length - 1) {
        index += 1;
        render();
    }
});

// คลิกปุ่ม "ย้อนกลับ"
prevEl.addEventListener('click', () => {
    if (index > 0) {
        index -= 1;
        render();
    }
});

// โหลดครั้งแรกเมื่อหน้าเว็บโหลดเสร็จ
window.onload = render;
